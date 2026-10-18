/* Batch 4 (61–100). Source-backed, never assigns a generic stock food image.
   Recipe name, photo, ingredient measures and method come from the SAME TheMealDB record.
   Offline cache saves the original record for subsequent visits. */
(function(){
"use strict";
const catalog=[{"slot":61,"seedId":53541,"desiredName":"Vegetable Fried Rice","group":"Vegetarian"},{"slot":62,"seedId":52871,"desiredName":"Egg Fried Rice","group":"Vegetarian"},{"slot":63,"seedId":52870,"desiredName":"Black Bean Enchiladas","group":"Vegetarian"},{"slot":64,"seedId":52771,"desiredName":"Peanut Noodles","group":"Vegetarian"},{"slot":65,"seedId":53506,"desiredName":"Bean & Rice Bowls","group":"Vegetarian"},{"slot":66,"seedId":53161,"desiredName":"Sausage Pepper Rice","group":"Rice"},{"slot":67,"seedId":53367,"desiredName":"Egg Roll in a Bowl","group":"Rice"},{"slot":68,"seedId":53352,"desiredName":"Mexican Rice & Beans","group":"Rice"},{"slot":69,"seedId":53027,"desiredName":"Tuna Rice Bowls","group":"Rice"},{"slot":70,"seedId":52765,"desiredName":"Taco Rice Casserole","group":"Rice"},{"slot":71,"seedId":53011,"desiredName":"BBQ Chickpea Rice Bowls","group":"Rice"},{"slot":72,"seedId":53369,"desiredName":"Teriyaki Tofu Bowls","group":"Rice"},{"slot":73,"seedId":53358,"desiredName":"Chicken Burrito Bowls","group":"Rice"},{"slot":74,"seedId":52772,"desiredName":"Turkey Meatball Rice Bowls","group":"Rice"},{"slot":75,"seedId":53025,"desiredName":"Breakfast Burrito Bowls","group":"Rice"},{"slot":76,"seedId":53357,"desiredName":"Mediterranean Chickpea Rice","group":"Rice"},{"slot":77,"seedId":52956,"desiredName":"Ham & Pea Fried Rice","group":"Rice"},{"slot":78,"seedId":52868,"desiredName":"Curry Chicken Rice","group":"Rice"},{"slot":79,"seedId":53067,"desiredName":"Tomato Rice with Eggs","group":"Rice"},{"slot":80,"seedId":52937,"desiredName":"Cajun Sausage Rice","group":"Rice"},{"slot":81,"seedId":52830,"desiredName":"Slow Cooker Honey Garlic Chicken","group":"Chicken"},{"slot":82,"seedId":52846,"desiredName":"Slow Cooker Salsa Chicken","group":"Chicken"},{"slot":83,"seedId":52940,"desiredName":"Slow Cooker Chicken & Gravy","group":"Chicken"},{"slot":84,"seedId":53162,"desiredName":"Slow Cooker Beef & Potatoes","group":"Chicken"},{"slot":85,"seedId":52920,"desiredName":"Slow Cooker Taco Soup","group":"Chicken"},{"slot":86,"seedId":53530,"desiredName":"Slow Cooker White Chicken Chili","group":"Chicken"},{"slot":87,"seedId":52795,"desiredName":"Slow Cooker Lentil Soup","group":"Chicken"},{"slot":88,"seedId":53181,"desiredName":"Slow Cooker BBQ Chicken","group":"Chicken"},{"slot":89,"seedId":52934,"desiredName":"Slow Cooker Sausage & Peppers","group":"Chicken"},{"slot":90,"seedId":52879,"desiredName":"Slow Cooker Chicken Noodle Soup","group":"Chicken"},{"slot":91,"seedId":52872,"desiredName":"Breakfast Quesadillas","group":"Breakfast"},{"slot":92,"seedId":53160,"desiredName":"Pancakes & Eggs for Dinner","group":"Breakfast"},{"slot":93,"seedId":52963,"desiredName":"Egg & Potato Tacos","group":"Breakfast"},{"slot":94,"seedId":53372,"desiredName":"French Toast & Fruit","group":"Breakfast"},{"slot":95,"seedId":53142,"desiredName":"Cheesy Egg Toasts","group":"Breakfast"},{"slot":96,"seedId":53078,"desiredName":"Tomato Tortellini Soup","group":"Soup"},{"slot":97,"seedId":53077,"desiredName":"Creamy Potato Soup","group":"Soup"},{"slot":98,"seedId":52811,"desiredName":"Easy Minestrone","group":"Soup"},{"slot":99,"seedId":53207,"desiredName":"Creamy Chicken Rice Soup","group":"Soup"},{"slot":100,"seedId":53486,"desiredName":"Pinto Bean Soup","group":"Soup"}];
const base="https://www.themealdb.com/api/json/v1/1/";
const cacheKey="ogp-real-meals-61-100-v2";
let cache={};
try { cache=JSON.parse(localStorage.getItem(cacheKey)||"{}")||{}; }catch(e){cache={};}
function save(){try{localStorage.setItem(cacheKey,JSON.stringify(cache));}catch(e){}}
async function api(url){
 const response=await fetch(base+url,{mode:"cors",cache:"default"});
 if(!response.ok)throw new Error("Recipe source responded "+response.status);
 return response.json();
}
function parseMeasure(measure){
 let raw=String(measure||"").trim(),s=raw.replace(/[½¼¾⅓⅔⅛]/g,x=>({"½":" 1/2","¼":" 1/4","¾":" 3/4","⅓":" 1/3","⅔":" 2/3","⅛":" 1/8"})[x]).replace(/\s+/g," ").trim();
 const match=s.match(/^(\d+(?:\.\d+)?|\d+\/\d+)(?:\s+(\d+\/\d+))?\s*(.*)$/);
 if(!match)return {q:1,u:raw||"quantity not listed",literal:raw||"quantity not listed"};
 const frac=x=>x.includes("/")?Number(x.split("/")[0])/Number(x.split("/")[1]):Number(x);
 const n=frac(match[1])+(match[2]?frac(match[2]):0);
 const unit=match[3].trim();
 if(!Number.isFinite(n)||n<=0||/^[-–]/.test(unit))return {q:1,u:raw,literal:raw};
 return {q:n,u:unit};
}
function foodSection(name){
 const n=name.toLowerCase();
 if(/chicken|beef|lamb|pork|turkey|bacon|ham|sausage|meat|shrimp|prawn|salmon|tuna|fish/.test(n))return "Meat";
 if(/egg|cheese|milk|cream|butter|yogurt|yoghurt|paneer/.test(n))return "Dairy";
 if(/bread|baguette|tortilla|pita|bun|roll/.test(n))return "Bakery";
 if(/frozen/.test(n))return "Frozen";
 if(/onion|garlic|carrot|pepper|tomato|potato|celery|cabbage|spinach|broccoli|lemon|lime|ginger|cucumber|parsley|cilantro|lettuce|avocado|mushroom|eggplant|aubergine|courgette|zucchini|chilli|spring onion|basil|leek|apple|chive|squash/.test(n))return "Produce";
 return "Pantry";
}
function isSeasoning(n){return /salt|pepper|paprika|cumin|turmeric|cinnamon|seasoning|spice|chili powder|chilli powder|oregano|thyme|bay leaf|curry powder|soy sauce|oil|vinegar|mustard|sugar|honey|garam masala|cayenne|nutmeg|saffron|clove|cardamom/.test(n.toLowerCase());}
function instructions(str){
 const raw=String(str||"").replace(/\r/g,"").trim();
 let lines=raw.split(/\n+/).map(x=>x.trim()).filter(Boolean);
 if(lines.length<3)lines=raw.split(/(?<=[.!?])\s+(?=[A-Z])/).filter(Boolean);
 const steps=[],max=240;
 for(const line of lines){if(!line.trim())continue;if(steps.length&&steps[steps.length-1].length<85&&steps[steps.length-1].length+line.length<max)steps[steps.length-1]+=" "+line;else steps.push(line);}
 return steps;
}
function category(raw,name){
 const x=String(raw||"").toLowerCase();
 if(/soup|stew|chowder/i.test(name))return "Soups";
 if(x==="chicken")return "Chicken";
 if(x==="beef"||x==="lamb"||x==="pork"||x==="goat")return "Beef";
 if(x==="pasta")return "Pasta";
 if(x==="vegetarian"||x==="vegan"||x==="side")return "Vegetarian";
 if(x==="breakfast")return "Quick & Breakfast";
 return "Rice & Bowls";
}
function normalize(meal){
 if(!meal?.idMeal||!meal.strMeal?.trim()||!meal.strMealThumb||!meal.strInstructions?.trim()||String(meal.strCategory||"").toLowerCase()==="dessert")return null;
 const items=[];
 for(let i=1;i<=20;i++){
   const name=String(meal["strIngredient"+i]||"").trim();
   if(!name)continue;
   const quantity=parseMeasure(meal["strMeasure"+i]);
   items.push({name,q:quantity.q,u:quantity.u,literal:quantity.literal||"",section:foodSection(name),seasoning:isSeasoning(name),prep:""});
 }
 if(!items.length)return null;
 const steps=instructions(meal.strInstructions);
 if(!steps.length)return null;
 return {name:meal.strMeal.trim(),photo:meal.strMealThumb,url:meal.strSource||"https://www.themealdb.com/meal/"+meal.idMeal,
  source:"TheMealDB",originalId:String(meal.idMeal),items,steps,cat:category(meal.strCategory,meal.strMeal),
  time:null,servings:4,sourceHasNoYield:true,
  note:"The recipe, photo and measured ingredient list come from the same published source. The source does not provide servings or preparation time. Four portions is used as an approximate grocery-list baseline."};
}
async function fetchId(id){
 const data=await api("lookup.php?i="+encodeURIComponent(id));
 if(String(data?.meals?.[0]?.idMeal)!==String(id))return null;
 return normalize(data.meals[0]);
}
function tokens(s){return String(s).toLowerCase().replace(/[^a-z ]/g," ").split(/\s+/).filter(x=>x.length>2&&!["with","and","easy","slow","cooker"].includes(x));}
function similarity(a,b){const t=tokens(a),s=tokens(b);return t.filter(x=>s.includes(x)).length;}
async function alternateCandidates(){
 const cats=["Vegetarian","Vegan","Pasta","Chicken","Beef","Breakfast","Starter","Miscellaneous","Side"];
 const batches=await Promise.all(cats.map(async category=>{
   try{const result=await api("filter.php?c="+encodeURIComponent(category));return (result.meals||[]).map(x=>({...x,sourceCategory:category}));}
   catch(e){return [];}
 }));
 const candidates=new Map();
 batches.flat().forEach(x=>{if(x.idMeal)candidates.set(String(x.idMeal),x);});
 return Array.from(candidates.values());
}
function groupFitness(entry,candidate){
 const c=candidate.sourceCategory,n=candidate.strMeal.toLowerCase(),g=entry.group;
 const relevant=g==="Vegetarian"?["Vegetarian","Vegan","Side"].includes(c):
  g==="Rice"?(/rice|bowl|risotto|curry|pilaf|paella|noodle|casserole/i.test(n)&&(!["Chicken","Beef"].includes(c)||/rice|bowl|risotto|pilaf|paella/i.test(n))):
  g==="Chicken"?["Chicken","Beef"].includes(c):
  g==="Breakfast"?c==="Breakfast":
  /soup|stew|chowder|broth/i.test(n);
 return (relevant?20:0)+3*similarity(entry.desiredName,candidate.strMeal);
}
window.fetchSourcedRecipes61to100=async function(onBatch){
 const occupied=new Set(),completed=new Set();
 function publish(slot,pub){
   if(!pub||occupied.has(pub.originalId)||completed.has(slot))return false;
   occupied.add(pub.originalId);completed.add(slot);cache[slot]=pub;
   onBatch([{slot,pub}]);return true;
 }
 // Previously fetched photos and original ingredient data are reusable offline.
 catalog.forEach(entry=>{
   const saved=cache[entry.slot];
   if(saved?.originalId&&saved?.photo&&saved?.steps?.length&&saved?.items?.length)publish(entry.slot,saved);
 });
 if(completed.size===catalog.length)return completed.size;
 const candidates=await alternateCandidates();
 // Choose an appropriate publisher-supplied dish for each open slot, with preference
 // for recipes similar to the old titles. No AI-made recipes or generic photos.
 for(const entry of catalog.filter(x=>!completed.has(x.slot))){
   const options=candidates.filter(c=>!occupied.has(String(c.idMeal)))
     .sort((a,b)=>groupFitness(entry,b)-groupFitness(entry,a)||a.strMeal.localeCompare(b.strMeal));
   let success=false;
   for(const candidate of options.slice(0,16)){
     if(groupFitness(entry,candidate)<20)break;
     try{if(publish(entry.slot,await fetchId(candidate.idMeal))){success=true;break;}}catch(e){}
   }
   // If the close category matches run out, try a preselected real recipe ID.
   // The app always displays the fetched name and its own photo, ingredients and steps.
   if(!success){try{success=publish(entry.slot,await fetchId(entry.seedId));}catch(e){}}
   // A source may withdraw a recipe. Prefer another published dish to a fake entry.
   if(!success){
     for(const alternate of candidates.filter(x=>!occupied.has(String(x.idMeal))).slice(0,15)){
       try{if(publish(entry.slot,await fetchId(alternate.idMeal))){success=true;break;}}catch(e){}
     }
   }
   save();
 }
 return completed.size;
};
})();
