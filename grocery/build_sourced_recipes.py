#!/usr/bin/env python3
"""Freeze 40 genuinely published TheMealDB recipes into the static grocery app.

Every card is built from one source record: its own name, ingredient measurements,
instructions and publisher image. No fabricated dishes, stock image substitutions,
or unrelated random fallbacks are permitted.
"""
import json
import re
import time
from pathlib import Path
from urllib.parse import quote
from urllib.request import Request, urlopen

BASE = "https://www.themealdb.com/api/json/v1/1/"
HERE = Path(__file__).resolve().parent
OUT = HERE / "sourced-recipes-61-100-static.js"

SLOTS = [
 (61,"Vegetable Fried Rice","vegetarian"),(62,"Egg Fried Rice","vegetarian"),
 (63,"Black Bean Enchiladas","vegetarian"),(64,"Peanut Noodles","vegetarian"),
 (65,"Bean & Rice Bowls","vegetarian"),
 (66,"Sausage Pepper Rice","rice"),(67,"Egg Roll in a Bowl","rice"),
 (68,"Mexican Rice & Beans","rice"),(69,"Tuna Rice Bowls","rice"),
 (70,"Taco Rice Casserole","rice"),(71,"BBQ Chickpea Rice Bowls","rice"),
 (72,"Teriyaki Tofu Bowls","rice"),(73,"Chicken Burrito Bowls","rice"),
 (74,"Turkey Meatball Rice Bowls","rice"),(75,"Breakfast Burrito Bowls","rice"),
 (76,"Mediterranean Chickpea Rice","rice"),(77,"Ham & Pea Fried Rice","rice"),
 (78,"Curry Chicken Rice","rice"),(79,"Tomato Rice with Eggs","rice"),
 (80,"Cajun Sausage Rice","rice"),
 (81,"Slow Cooker Honey Garlic Chicken","slow"),(82,"Slow Cooker Salsa Chicken","slow"),
 (83,"Slow Cooker Chicken & Gravy","slow"),(84,"Slow Cooker Beef & Potatoes","slow"),
 (85,"Slow Cooker Taco Soup","slow"),(86,"Slow Cooker White Chicken Chili","slow"),
 (87,"Slow Cooker Lentil Soup","slow"),(88,"Slow Cooker BBQ Chicken","slow"),
 (89,"Slow Cooker Sausage & Peppers","slow"),(90,"Slow Cooker Chicken Noodle Soup","slow"),
 (91,"Breakfast Quesadillas","breakfast"),(92,"Pancakes & Eggs for Dinner","breakfast"),
 (93,"Egg & Potato Tacos","breakfast"),(94,"French Toast & Fruit","breakfast"),
 (95,"Cheesy Egg Toasts","breakfast"),
 (96,"Tomato Tortellini Soup","soup"),(97,"Creamy Potato Soup","soup"),
 (98,"Easy Minestrone","soup"),(99,"Creamy Chicken Rice Soup","soup"),
 (100,"Pinto Bean Soup","soup")
]
CATEGORIES = ["Vegetarian","Vegan","Pasta","Chicken","Beef","Pork","Seafood",
              "Breakfast","Starter","Miscellaneous","Side","Lamb","Goat"]

def get(endpoint):
    url = BASE + endpoint
    for attempt in range(3):
        try:
            req=Request(url,headers={"User-Agent":"OurGroceryPlan/1.0 (source recipe attribution)","Accept":"application/json"})
            with urlopen(req,timeout=22) as resp:
                return json.load(resp)
        except Exception as exc:
            if attempt == 2:
                print("Unreachable source:",url,str(exc)[:100],flush=True)
                return None
            time.sleep(1.2*(attempt+1))
    return None

def words(value):
    return [w for w in re.findall(r"[a-z]+",value.lower()) if len(w)>2
            and w not in {"easy","slow","cooker","with","and","the","in","a","for","homemade","recipe"}]

def candidate_score(slot):
    idx,desired,group=slot
    target=set(words(desired))
    def rank(m):
        title=m["strMeal"].lower()
        cat=m.get("_category","")
        vocab=set(words(title))
        overlap=target & vocab
        rice=bool(re.search(r"rice|bowl|risotto|pilaf|paella|biryani|curry|noodle|couscous|korma",title))
        soup=bool(re.search(r"soup|stew|chili|chilli|chowder|minestrone|broth",title))
        breakfast=bool(re.search(r"egg|pancake|breakfast|toast|omelette|frittata|quesadilla|waffle|hash",title))
        vegetarian=cat in {"Vegetarian","Vegan","Side"}
        slow=cat in {"Chicken","Beef","Pork","Lamb","Goat","Vegetarian","Vegan","Starter","Miscellaneous"}
        valid={
          "vegetarian":vegetarian,
          "rice":rice and cat!="Dessert",
          "slow":slow and (soup or re.search(r"chicken|beef|pork|lamb|meat|sausage|lentil|curry|bean|roast|potato",title)),
          "breakfast":breakfast or cat=="Breakfast",
          "soup":soup
        }[group]
        if not valid: return -10000
        score=len(overlap)*20
        score+=12 if target and target.issubset(vocab) else 0
        score+=10 if title==desired.lower() else 0
        score+=4 if (group=="vegetarian" and vegetarian) else 0
        score+=5 if (group=="breakfast" and cat=="Breakfast") else 0
        if group=="slow" and re.search(r"stew|slow|crock|soup",title): score+=7
        return score
    return rank

def parse_amount(raw):
    original=(raw or "").strip()
    s=original.replace("½"," 1/2").replace("¼"," 1/4").replace("¾"," 3/4").replace("⅓"," 1/3").replace("⅔"," 2/3").replace("⅛"," 1/8")
    s=" ".join(s.split())
    m=re.match(r"^(\d+(?:\.\d+)?|\d+/\d+)(?:\s+(\d+/\d+))?(?:\s*)(.*)$",s)
    if not m: return {"q":1,"u":"","literal":original or "quantity not specified"}
    def part(v):
        if "/" in v:
            n,d=v.split("/",1)
            return float(n)/float(d)
        return float(v)
    q=part(m.group(1))+(part(m.group(2)) if m.group(2) else 0)
    if q <= 0: return {"q":1,"u":"","literal":original or "quantity not specified"}
    return {"q":q,"u":m.group(3).strip()}

def section(n):
    n=n.lower()
    if re.search(r"chicken|beef|lamb|pork|turkey|bacon|ham|sausage|meat|shrimp|prawn|salmon|tuna|fish",n):return "Meat"
    if re.search(r"egg|cheese|milk|cream|butter|yogurt|yoghurt|paneer",n):return "Dairy"
    if re.search(r"bread|baguette|tortilla|pita|bun|roll",n):return "Bakery"
    if "frozen" in n:return "Frozen"
    if re.search(r"onion|garlic|carrot|pepper|tomato|potato|celery|cabbage|spinach|broccoli|lemon|lime|ginger|cucumber|parsley|cilantro|lettuce|avocado|mushroom|eggplant|courgette|zucchini|chilli|chili|basil|leek|apple|chive|squash",n):return "Produce"
    return "Pantry"

def seasoning(n):
    return bool(re.search(r"salt|pepper|paprika|cumin|turmeric|cinnamon|seasoning|spice|chili powder|chilli powder|oregano|thyme|bay leaf|curry powder|soy sauce|oil|vinegar|mustard|sugar|honey|masala|cayenne|nutmeg|saffron|clove|cardamom",n.lower()))

def steps(source):
    t=source.replace("\r","").strip()
    split=[line.strip() for line in t.split("\n") if line.strip()]
    if len(split)<3:
        split=re.split(r"(?<=[.!?])\s+(?=[A-Z])",t)
    return [p.strip() for p in split if p.strip()]

def normalize(meal):
    if not meal or not meal.get("idMeal") or not meal.get("strMeal") or not meal.get("strInstructions") or not meal.get("strMealThumb"):return None
    if meal.get("strCategory","").lower()=="dessert":return None
    items=[]
    for i in range(1,21):
        name=(meal.get(f"strIngredient{i}") or "").strip()
        if not name:continue
        a=parse_amount(meal.get(f"strMeasure{i}") or "")
        items.append(dict(name=name,**a,section=section(name),seasoning=seasoning(name),prep=""))
    instructions=steps(meal["strInstructions"])
    if len(items)<4 or len(instructions)<2:return None
    title=meal["strMeal"].strip()
    typ=meal.get("strCategory","")
    cat="Soups" if re.search(r"soup|stew|chowder|minestrone",title,re.I) else {
        "Chicken":"Chicken","Beef":"Beef","Pasta":"Pasta","Vegetarian":"Vegetarian",
        "Vegan":"Vegetarian","Side":"Vegetarian","Breakfast":"Quick & Breakfast"
    }.get(typ,"Rice & Bowls")
    return dict(name=title,photo=meal["strMealThumb"],
                url=meal.get("strSource") or "https://www.themealdb.com/meal/"+str(meal["idMeal"]),
                source="TheMealDB",originalId=str(meal["idMeal"]),items=items,
                steps=instructions,cat=cat,time=None,servings=4,sourceHasNoYield=True,
                note="The recipe name, ingredient amounts, instructions and photo all come from one published source. The source does not specify servings; four portions is used only as an estimated grocery-list baseline.")

def main():
    if OUT.exists() and OUT.stat().st_size>1000:
        print("Static recipe source exists; preserving prior verified source records.",flush=True)
        return
    listed={}
    for cat in CATEGORIES:
        resp=get("filter.php?c="+quote(cat))
        for item in (resp or {}).get("meals") or []:
            if item.get("idMeal"):
                listed[str(item["idMeal"])]={"idMeal":str(item["idMeal"]),"strMeal":item["strMeal"],"_category":cat}
    if len(listed)<70:
        raise RuntimeError(f"Source unavailable or incomplete: only {len(listed)} candidate meals. Keeping previous live app unchanged.")
    print(f"Found {len(listed)} published candidate dishes",flush=True)
    occupied=set();chosen={}
    for slot in SLOTS:
        ident,desired,group=slot
        rank=candidate_score(slot)
        options=sorted((c for c in listed.values() if c["idMeal"] not in occupied and rank(c)>-10000),
                       key=lambda c:(-rank(c),c["strMeal"].lower()))
        result=None
        for candidate in options:
            data=get("lookup.php?i="+quote(candidate["idMeal"]))
            full=((data or {}).get("meals") or [None])[0]
            pub=normalize(full)
            if pub and pub["originalId"]==candidate["idMeal"]:
                result=pub;break
        if not result:
            raise RuntimeError(f"Unable to find an authentic {group} recipe for slot {ident}. Aborting rather than creating a fake.")
        occupied.add(result["originalId"])
        if not (set(words(desired)) & set(words(result["name"]))):
            result["note"] += " The original placeholder has been replaced with a different real published recipe; the displayed name is the publisher's exact dish name."
        chosen[ident]=result
        print(f"{ident:>3}: {result['name']} ({group}; source meal {result['originalId']})",flush=True)
    if len(chosen)!=40 or len(occupied)!=40:
        raise RuntimeError("Integrity check failed, not saving incomplete source data.")
    js="/* Published recipe records for slots 61–100. Generated from TheMealDB at deployment; original source titles and photos are linked to exact ingredient lists. */\n"
    js+="window.publishedRecipes=Object.assign(window.publishedRecipes||{},"
    js+=json.dumps(chosen,ensure_ascii=False,separators=(",",":"))+");\n"
    OUT.write_text(js,encoding="utf-8")
    print(f"Created {OUT.name}: 40 unique source-backed recipes",flush=True)

if __name__=="__main__": main()
