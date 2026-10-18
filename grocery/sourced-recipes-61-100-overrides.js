/* Manually checked publisher matches for the final 40 recipes.
   Each food photo belongs to this exact source recipe, and every step is paraphrased. */
(function(){
 const M=(name,q,u,section="Pantry",prep="")=>({name,q,u,section,prep,seasoning:false});
 const S=(name,q,u)=>({name,q,u,section:"Pantry",seasoning:true});
 const R=(name,url,photo,servings,time,items,steps,cat,source="Budget Bytes")=>
  ({name,url,photo,servings,time,items,steps,cat,source,note:"Published recipe: photo, ingredient amounts and directions all refer to this exact dish."});
 const B="https://www.budgetbytes.com/";
 Object.assign(window.publishedRecipes,{
61:R("Vegetable Fried Rice",B+"vegetable-fried-rice/","https://www.budgetbytes.com/wp-content/uploads/2022/03/Vegetable-Fried-Rice-Overhead-in-Pan-With-Spoon-500x500.jpg",4,27,[
 M("Garlic",2,"cloves","Produce","minced"),M("Fresh ginger",1,"tsp","Produce","grated"),M("Carrot",1,"whole","Produce","diced"),M("Red bell pepper",1,"whole","Produce","diced"),M("Green onions",4,"stalks","Produce","sliced"),M("Eggs",2,"large","Dairy"),M("Frozen peas",1,"cup","Frozen"),M("Cooked cooled rice",3,"cups"),S("Cooking oil",3,"tbsp"),S("Soy sauce",3,"tbsp"),S("Toasted sesame oil",1,"tbsp")],[
 "Use cooked, completely cooled rice. Mince garlic, grate ginger and dice the carrot, pepper and green onions.",
 "Heat some cooking oil in a large wok over medium-high. Scramble the eggs, then transfer them to a plate.",
 "Stir-fry carrot, pepper, peas and white green-onion parts in a little more oil until just tender, then remove them.",
 "Add the remaining cooking oil and cold rice with the garlic and ginger. Fry until the rice is hot and grains separate.",
 "Stir in soy sauce and sesame oil, then fold the eggs and cooked vegetables back in.",
 "Finish with green onion tops and serve hot."],"Vegetarian"),
62:R("Egg Fried Rice","https://www.bbc.co.uk/food/recipes/eggfriedrice_89260","https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/eggfriedrice_89260_16x9.jpg",4,25,[
 M("Cooked chilled long grain rice",400,"g"),M("Eggs",3,"large","Dairy"),M("Broccoli",0.5,"small head","Produce","finely chopped"),M("Carrot",1,"whole","Produce","cut into matchsticks"),M("Tomatoes",3,"whole","Produce","sliced"),M("Spring onion",1,"whole","Produce","sliced"),S("Groundnut or vegetable oil",2,"tbsp"),S("Light soy sauce",3,"tbsp"),S("Sesame oil, optional",1,"dash"),S("Black pepper",1,"pinch")],[
 "Beat the eggs and chop the broccoli, carrot, tomatoes and spring onion before heating a wok.",
 "Heat half the oil over medium-high. Scramble eggs just until set, then move to a plate.",
 "With remaining oil, stir-fry broccoli and carrot until just tender.",
 "Add cold cooked rice, breaking apart clumps, and stir-fry for a few minutes with tomatoes.",
 "Return eggs to the wok and season with light soy, a dash of sesame oil if desired and black pepper.",
 "Scatter spring onion over the hot fried rice."],"Vegetarian","BBC Food"),
63:R("Black Bean and Avocado Enchiladas",B+"black-bean-avocado-enchiladas/","https://www.budgetbytes.com/wp-content/uploads/2013/04/Black-Bean-and-Avocado-Enchiladas-close-500x500.jpg",5,50,[
 M("Black beans",1,"15oz can","Pantry","drained, rinsed"),M("Avocado",1,"whole","Produce","diced"),M("Tomato",1,"whole","Produce","diced"),M("Green onions",2,"stalks","Produce","sliced"),M("Frozen corn",1,"cup","Frozen"),M("Fresh cilantro",1,"handful","Produce"),M("8-inch tortillas",10,"tortillas","Bakery"),
 S("Cooking oil",2,"tbsp"),S("All-purpose flour",2,"tbsp"),S("Chili powder",2,"tbsp"),S("Water",2,"cups"),S("Tomato paste",3,"oz"),S("Ground cumin",0.5,"tsp"),S("Garlic powder for sauce",0.5,"tsp"),S("Cayenne",0.25,"tsp"),S("Unsweetened cocoa",2,"tsp"),S("Salt for sauce",1,"tsp"),S("Garlic powder for filling",0.25,"tsp"),S("Salt for filling",0.5,"tsp")],[
 "Whisk cooking oil, flour and chili powder in a saucepan over medium heat; let bubble for one to two minutes.",
 "Slowly whisk in water, then add tomato paste, cumin, garlic powder, cayenne, cocoa and salt. Simmer until the red sauce thickens slightly.",
 "Preheat oven to 350°F (175°C). Mix drained black beans with diced avocado, tomato, green onions, corn and cilantro.",
 "Season the filling with its measured garlic powder and salt.",
 "Fill the tortillas with about ⅓ cup bean mixture each, roll tightly and lay seam-side down in a greased baking dish.",
 "Pour enchilada sauce evenly over all 10 rolls. Bake 25–30 minutes until bubbling and heated through."],"Vegetarian"),
64:R("Peanut Noodles with Chicken",B+"peanut-noodles-with-chicken/","https://www.budgetbytes.com/wp-content/uploads/2023/03/Peanut-Noodles-with-Chicken-close-500x500.jpg",4,25,[
 M("Boneless skinless chicken breast",0.667,"lb","Meat","cubed"),M("Noodles",8,"oz"),M("Garlic",1,"clove","Produce","minced"),M("Ginger",1,"tsp","Produce","grated"),M("Lime",1,"whole","Produce","juiced"),M("Coconut milk",1,"13.5oz can"),M("Chopped peanuts",0.25,"cup"),M("Chopped cilantro",0.25,"cup","Produce"),S("Peanut butter",0.333,"cup"),S("Sriracha",2,"tbsp"),S("Brown sugar",2,"tbsp"),S("Soy sauce",1,"tbsp"),S("Cooking oil",1,"tbsp")],[
 "Whisk peanut butter, sriracha, brown sugar, soy sauce, minced garlic, grated ginger and two tablespoons of lime juice.",
 "Whisk coconut milk into the sauce until smooth. Dice chicken into bite-sized cubes.",
 "Heat oil in a skillet and brown chicken on all sides.",
 "Add the peanut sauce to the skillet and gently simmer until chicken reaches 74°C (165°F).",
 "Cook noodles as directed, drain them and toss with the peanut sauce and chicken.",
 "Sprinkle chopped peanuts and fresh cilantro over the finished noodles."],"Rice & Bowls"),
81:R("Slow Cooker Honey Hoisin Garlic Chicken",B+"jessica-gavins-honey-hoisin-garlic-chicken/","https://www.budgetbytes.com/wp-content/uploads/2018/05/Honey-Hoisin-Garlic-Chicken-H-500x500.jpg",4,255,[
 M("Bone-in skin-on chicken thighs",2,"lb","Meat"),M("Garlic",4,"cloves","Produce","minced"),M("Ginger",1,"tsp","Produce","minced"),M("Hot water",2,"tbsp"),M("Fresh cilantro, optional",0.25,"cup","Produce"),S("Vegetable oil",2,"tbsp"),S("Hoisin sauce",0.333,"cup"),S("Soy sauce",0.333,"cup"),S("Honey",0.333,"cup"),S("Salt and pepper",1,"pinch"),S("Sesame seeds, optional",1,"tsp")],[
 "Season chicken thighs with salt and pepper. Heat oil in a skillet over medium-high.",
 "Sear thighs skin-side down about five to six minutes until golden, then sear the other side for two minutes.",
 "Place seared chicken in slow cooker. Whisk hoisin, soy sauce, honey, hot water, ginger and minced garlic.",
 "Pour the sauce over chicken and cover. Cook on HIGH 3–4 hours or LOW 5–6 hours, flipping midway, until chicken is tender and cooked through.",
 "Spoon the pan sauce onto the chicken and garnish with sesame seeds or cilantro if desired; rice is an optional serving side."],"Slow Cooker"),
84:R("Crockpot Beef Stew",B+"slow-cooker-beef-stew/","https://www.budgetbytes.com/wp-content/uploads/2023/02/Slow-Cooker-Beef-Stew-inbowl-500x500.jpeg",8,270,[
 M("Red potatoes",2,"lb","Produce","cubed"),M("Yellow onion",1,"whole","Produce","diced"),M("Carrots",3,"whole","Produce","sliced"),M("Celery",4,"ribs","Produce","sliced"),M("Garlic",4,"cloves","Produce","minced"),M("Beef stew meat",1.5,"lb","Meat","cubed"),M("Beef broth",2,"cups"),S("Flour",2,"tbsp"),S("Salt",0.25,"tsp"),S("Black pepper",0.25,"tsp"),S("Oil",2,"tbsp"),S("Dijon mustard",2,"tbsp"),S("Worcestershire sauce",1,"tbsp"),S("Soy sauce",1,"tbsp"),S("Brown sugar",1.5,"tsp"),S("Rosemary",1.5,"tsp"),S("Thyme",1.5,"tsp")],[
 "Cut potatoes, carrots, celery and onion into uniform pieces and place vegetables in a slow cooker.",
 "Toss stew beef in flour, salt and pepper until lightly coated.",
 "Heat oil in a skillet and brown beef in batches, then add the seared pieces to the slow cooker.",
 "Deglaze pan with beef broth, stir in mustard, Worcestershire, soy sauce, brown sugar, rosemary and thyme.",
 "Pour cooking liquid over the beef and vegetables. Cook covered on HIGH about four hours or LOW about eight hours.",
 "Stir when beef and potatoes are soft and taste to adjust seasoning."],"Slow Cooker"),
86:R("Crockpot White Chicken Chili",B+"slow-cooker-white-chicken-chili/","https://www.budgetbytes.com/wp-content/uploads/2020/02/white-chicken-chili-bowl-500x500.jpg",6,255,[
 M("Yellow onion",1,"whole","Produce","diced"),M("Garlic",2,"cloves","Produce","minced"),M("Jalapeño, optional",1,"whole","Produce","diced"),M("Chicken breast",0.75,"lb","Meat","boneless and skinless"),M("Cannellini beans",2,"15oz cans","Pantry","rinsed"),M("Pinto beans",1,"15oz can","Pantry","rinsed"),M("Salsa verde",1,"16oz jar"),M("Chicken broth",2,"cups"),S("Ground cumin",1,"tbsp"),S("Dried oregano",1,"tsp"),S("Cayenne",0.25,"tsp"),S("Black pepper",0.25,"tsp")],[
 "Place diced onion, minced garlic, optional jalapeño and thawed chicken breast in the slow cooker.",
 "Add drained cannellini and pinto beans, cumin, oregano, cayenne and black pepper.",
 "Pour salsa verde and chicken broth over the ingredients, stirring briefly.",
 "Cook covered on HIGH four hours or LOW eight hours, until the chicken is tender and cooked.",
 "Shred chicken with forks and mash some beans to naturally thicken the broth.",
 "Taste the finished chili and season as needed. Cheese and avocado toppings are optional."],"Slow Cooker"),
88:R("Slow Cooker BBQ Chicken",B+"slow-cooker-bbq-chicken/","https://www.budgetbytes.com/wp-content/uploads/2022/06/Slow-Cooker-BBQ-Chicken-side-500x500.jpg",4,160,[
 M("Boneless skinless chicken breasts",1.33,"lb","Meat"),M("BBQ sauce",18,"oz"),S("Smoked paprika",2,"tsp"),S("Garlic powder",1,"tsp"),S("Salt",0.5,"tsp"),S("Black pepper",0.5,"tsp")],[
 "Blend paprika, garlic powder, salt and pepper in a small bowl, then season both sides of the chicken breasts.",
 "Place chicken in the slow cooker and cover fully with BBQ sauce.",
 "Cover and cook on HIGH for about two and a half hours or LOW four to five hours, until chicken is safely cooked and tender.",
 "Pull the chicken apart with two forks and mix through the sauce.",
 "Serve the shredded BBQ chicken as a main or in buns bought separately; this recipe does not include buns."],"Slow Cooker"),
90:R("Slow Cooker Chicken Noodle Soup",B+"slow-cooker-chicken-noodle-soup/","https://www.budgetbytes.com/wp-content/uploads/2020/01/Slow-Cooker-Chicken-Noodle-Soup-ladle-close-500x500.jpg",8,270,[
 M("Yellow onion",1,"whole","Produce","diced"),M("Garlic",3,"cloves","Produce","minced"),M("Carrots",0.5,"lb","Produce","sliced"),M("Celery",4,"ribs","Produce","sliced"),M("Bone-in chicken breasts",2.25,"lb","Meat"),M("Water",8,"cups"),M("Egg noodles",6,"oz"),M("Parsley, optional",0.25,"cup","Produce"),S("Dried basil",1,"tsp"),S("Dried parsley",1,"tbsp"),S("Dried thyme",0.5,"tsp"),S("Bay leaf",1,"leaf"),S("Black pepper",0.25,"tsp"),S("Salt to taste",1,"tbsp")],[
 "Add diced onion, garlic, carrots and celery to a slow cooker.",
 "Arrange bone-in chicken breasts on top and add basil, dried parsley, thyme, bay leaf, black pepper and eight cups of water.",
 "Cover and cook HIGH about four hours or LOW about eight hours, until chicken pulls apart easily.",
 "Remove chicken, discard bones, shred meat, and return it to the broth. Remove bay leaf.",
 "Turn slow cooker to HIGH and stir in dry egg noodles; cook only until noodles are tender, about 8–15 minutes.",
 "Taste broth and add salt gradually. Top with fresh parsley if desired."],"Slow Cooker"),
94:R("French Toast",B+"french-toast/","https://www.budgetbytes.com/wp-content/uploads/2023/01/French-Toast-syrup-500x500.jpg",4,15,[
 M("Eggs",3,"large","Dairy"),M("Milk",1,"cup","Dairy"),M("Slightly stale bread",8,"slices","Bakery"),S("Vanilla extract",1,"tsp"),S("Cinnamon",0.5,"tsp"),S("Salt",1,"pinch"),S("Butter",5,"tbsp"),S("Oil",1,"tbsp"),S("Sugar",1,"tsp")],[
 "Whisk eggs, milk, vanilla, cinnamon and a pinch of salt in a shallow bowl.",
 "Heat a nonstick frying pan over medium-low and add some of the butter and oil.",
 "Dip bread in the egg mixture to moisten both sides without making thin bread soggy.",
 "Cook each slice until golden, sprinkle a tiny amount of sugar, flip and cook the second side.",
 "When the custard is cooked and the toast springs back slightly when pressed, remove from pan. Repeat with remaining slices.",
 "Serve warm; maple syrup and fresh fruit are optional toppings not included in the source ingredient amounts."],"Quick & Breakfast"),
99:R("Creamy Chicken and Rice Soup",B+"creamy-chicken-rice-soup/","https://www.budgetbytes.com/wp-content/uploads/2011/10/Creamy-chicken-rice-bowl-500x500.jpg",8,75,[
 M("Yellow onion",1,"medium","Produce","diced"),M("Garlic",2,"cloves","Produce","minced"),M("Carrots",0.5,"lb","Produce","sliced"),M("Celery",0.5,"bunch","Produce","sliced"),M("Boneless skinless chicken breast",1,"lb","Meat"),M("Dry wild rice blend",1,"cup"),M("Water",6,"cups"),M("Whole milk",2,"cups","Dairy"),M("Fresh parsley",0.333,"bunch","Produce","chopped"),S("Olive oil",1,"tbsp"),S("Bay leaf",1,"leaf"),S("Oregano",1,"tsp"),S("Thyme",1,"tsp"),S("Black pepper",0.5,"tsp"),S("Butter",2,"tbsp"),S("Flour",2,"tbsp"),S("Salt, to taste",1.5,"tsp")],[
 "Heat olive oil in a soup pot and sauté diced onion and minced garlic until tender, about five minutes.",
 "Add sliced carrots and celery and cook for another five minutes.",
 "Add whole chicken breast, bay leaf, oregano, thyme, pepper, uncooked wild rice and six cups water.",
 "Bring to a boil, reduce heat, cover and simmer approximately one hour until the chicken and rice are cooked.",
 "In a separate small saucepan, melt butter, whisk in flour and cook two minutes. Slowly stir in milk and bring to a simmer until slightly thickened.",
 "Shred the cooked chicken in the soup. Stir in the white sauce and fresh parsley, remove bay leaf and season with salt."],"Soups")
 });
 Object.assign(window.publishedRecipes,{
67:R("Egg Roll in a Bowl",B+"egg-roll-in-a-bowl/","https://www.budgetbytes.com/wp-content/uploads/2026/02/Egg-Roll-in-a-Bowl-Overhead-Macro-in-Pan-500x500.jpg",4,30,[
 M("Onion",1,"cup","Produce","diced"),M("Mushrooms",8,"oz","Produce","finely minced"),M("Garlic",2,"cloves","Produce","minced"),M("Water chestnuts",1,"5oz can","Pantry","drained and chopped"),M("Green onions",2,"stalks","Produce","sliced"),M("Fresh ginger",1,"tbsp","Produce","grated"),M("Ground turkey",1,"lb","Meat"),M("Bagged coleslaw mix",16,"oz","Produce"),S("Vegetable oil",2,"tbsp"),S("Soy sauce",0.25,"cup"),S("Rice vinegar",1,"tbsp"),S("Brown sugar",2,"tbsp"),S("Toasted sesame oil",1,"tsp"),S("Black pepper",0.5,"tsp"),S("Red pepper flakes",0.125,"tsp")],[
 "Dice onion, mince mushrooms, garlic and ginger, drain and chop water chestnuts, and slice the green onions.",
 "Heat cooking oil over medium-high in a large skillet. Brown ground turkey, breaking apart with a spoon.",
 "Add onion, garlic, ginger and mushrooms. Cook until the mushrooms are soft and most of their liquid has evaporated.",
 "Stir in coleslaw mix and cook for 6–8 minutes, until the cabbage becomes tender but still has crunch.",
 "Whisk soy sauce, rice vinegar, brown sugar, sesame oil, black pepper and red pepper flakes in a small bowl.",
 "Pour the sauce into the turkey and cabbage mixture with water chestnuts, then cook until everything is hot and coated. Finish with green onions."
 ],"Rice & Bowls"),
80:R("Cajun Sausage and Rice Skillet",B+"cajun-sausage-and-rice-skillet/","https://www.budgetbytes.com/wp-content/uploads/2020/09/Cajun-Sausage-and-Rice-Skillet-front-500x500.jpg",4,45,[
 M("Smoked Andouille sausage",14,"oz","Meat","sliced into rounds"),M("Bell pepper",1,"whole","Produce","diced"),M("Fire-roasted diced tomatoes",1,"15oz can"),M("Uncooked long-grain white rice",1,"cup"),M("Chicken broth",1.5,"cups"),M("Green onions",2,"stalks","Produce","sliced"),S("Cooking oil",1,"tbsp"),S("Smoked paprika",1,"tsp"),S("Dried oregano",0.5,"tsp"),S("Dried thyme",0.5,"tsp"),S("Garlic powder",0.25,"tsp"),S("Onion powder",0.25,"tsp"),S("Cayenne pepper",0.125,"tsp"),S("Black pepper",0.125,"tsp")],[
 "Cut smoked sausage into ¼–½-inch slices. Heat cooking oil over medium in a covered deep skillet and brown sausage on both sides.",
 "Dice bell pepper and add it to the skillet with the sausage. Sauté for one more minute.",
 "Add smoked paprika, oregano, thyme, garlic powder, onion powder, cayenne and black pepper. Cook one minute to toast the spices.",
 "Add the canned tomatoes and juices, raw white rice and chicken broth. Stir up browned bits from the bottom.",
 "Cover, bring to a boil, then reduce heat to low. Simmer gently around 20 minutes without uncovering or stirring.",
 "Remove the skillet from heat and leave it covered for five minutes. Fluff the rice, distribute the sausage and finish with chopped green onions."
 ],"Rice & Bowls")
 });

})();