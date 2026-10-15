/* Published recipes 1–20: source recipe quantities and original rewritten directions.
   Photos link to publisher-hosted images; ownership remains with publishers. */
(function(){
 const M=(name,q,u,section="Pantry",prep="")=>({name,q,u,section,prep,seasoning:false});
 const S=(name,q,u,section="Pantry")=>({name,q,u,section,seasoning:true});
 const B="https://www.budgetbytes.com/";
 const r=(name,url,photo,servings,time,items,steps,source="Budget Bytes",note="")=>({name,url,photo,servings,time,items,steps,source,note});
 window.publishedRecipes={
 1:r("Honey Garlic Chicken",B+"honey-garlic-chicken/","https://www.budgetbytes.com/wp-content/uploads/2024/08/Honey-Garlic-Chicken-Fork-500x500.jpg",4,28,[
 M("Boneless skinless chicken breasts",2,"breasts","Meat","cut into ½-inch cubes"),M("Green onions",2,"stalks","Produce","sliced"),M("Garlic",4,"cloves","Produce","minced"),
 S("Honey",0.333,"cup"),S("Soy sauce",2,"tbsp"),S("Rice vinegar",1,"tbsp"),S("Sriracha",1,"tsp"),S("Toasted sesame oil",2,"tsp"),S("Cornstarch",1,"tbsp"),S("Salt",1,"tsp"),S("Black pepper",0.5,"tsp"),S("Garlic powder",0.5,"tsp"),S("All-purpose flour",2,"tbsp"),S("Olive oil",3,"tbsp"),S("Butter",2,"tbsp")],[
 "Stir honey, soy sauce, rice vinegar, sriracha, sesame oil and cornstarch together in a bowl. Keep nearby; the sauce thickens quickly.",
 "Cut chicken into ½-inch pieces. Coat it with salt, pepper and garlic powder, then toss with flour.",
 "Heat two tablespoons of olive oil in a large skillet over medium-high heat. Brown half the chicken, then transfer it to a plate. Use the remaining oil to brown the rest; check for 74°C / 165°F.",
 "Turn heat to medium-low, melt butter and cook minced garlic for about one minute. Whisk the sauce again and pour it into the skillet. Simmer about two minutes until glossy.",
 "Return chicken to the sauce for another one to two minutes, coating every piece. Scatter sliced green onion on top. The publisher serves this with rice as an optional side."
 ],"Budget Bytes","Rice shown in the published serving photo is an optional side and is not included in ingredient quantities."),
 2:r("Chicken & Broccoli Pasta with Lemon Cream Sauce",B+"chicken-broccoli-pasta-lemon-cream-sauce/","https://www.budgetbytes.com/wp-content/uploads/2017/01/Chicken-and-Broccoli-Pasta-with-Lemon-Cream-Sauce-bowl-close-500x500.jpg",4,35,[
 M("Frozen broccoli florets",0.5,"lb","Frozen","thaw; chop into small florets"),M("Rotini pasta",0.5,"lb"),M("Boneless skinless chicken thighs",2,"thighs","Meat"),M("Garlic",2,"cloves","Produce","minced"),M("Lemon",1,"whole","Produce","zest and juice"),M("Chicken broth",0.5,"cup"),M("Heavy cream",1,"cup","Dairy"),S("Salt",0.25,"tsp"),S("Black pepper",0.25,"tsp"),S("Olive oil",1,"tbsp")],[
 "Thaw the broccoli so you can cut the florets smaller. Boil rotini in salted water until tender, then drain.",
 "Season both sides of the thighs with salt and pepper. Heat olive oil in a deep skillet over medium heat, brown chicken about five minutes per side, and check for 74°C / 165°F. Rest on a board, then slice.",
 "Lower heat and sauté the minced garlic for one to two minutes. Add chicken broth and scrape up the browned bits.",
 "Add cream, about one teaspoon of lemon zest and two tablespoons of lemon juice. Gently simmer until the sauce reduces a little; season to taste.",
 "Add the thawed broccoli and pasta, then fold in sliced chicken. Warm everything through and add a little water if the sauce becomes too thick."
 ]),
 3:r("Sheet Pan Chicken Fajitas",B+"oven-fajitas/","https://www.budgetbytes.com/wp-content/uploads/2022/03/Sheet-Pan-Chicken-Fajitas-done-500x500.jpg",4,55,[
 M("Boneless skinless chicken breast",1,"lb","Meat","cut into narrow strips"),M("Yellow onions",2,"small","Produce","sliced"),M("Bell peppers",3,"whole","Produce","sliced"),M("Lime",1,"whole","Produce","juiced"),M("Small tortillas",8,"tortillas","Bakery"),M("Sour cream (optional)",0.5,"cup","Dairy"),M("Cilantro (optional)",0.25,"bunch","Produce"),S("Chili powder",1,"tbsp"),S("Paprika",0.5,"tbsp"),S("Onion powder",0.5,"tsp"),S("Garlic powder",0.25,"tsp"),S("Ground cumin",0.25,"tsp"),S("Cayenne pepper",0.125,"tsp"),S("Sugar",1,"tsp"),S("Salt",0.5,"tsp"),S("Cooking oil",2,"tbsp")],[
 "Heat oven to 400°F / 205°C. Combine chili powder, paprika, onion powder, garlic powder, cumin, cayenne, sugar and salt for the fajita seasoning.",
 "Slice chicken, peppers and onions thinly. Spread them on a large sheet pan and toss with the oil and homemade spice mixture.",
 "Roast approximately 35–40 minutes, stirring partway through, until the vegetables have browned edges and the chicken is at least 74°C / 165°F.",
 "Squeeze fresh lime over the roasted filling. Warm tortillas just before serving.",
 "Divide the fajita filling among tortillas and serve with sour cream and cilantro if desired."
 ]),
 4:r("Easy BBQ Chicken Sandwiches",B+"easy-bbq-chicken-sandwiches/","https://www.budgetbytes.com/wp-content/uploads/2020/07/Easy-BBQ-Chicken-Sandwiches-front-500x500.jpg",4,25,[
 M("Boneless skinless chicken thighs",1,"lb","Meat","four sandwich-sized pieces"),M("Coleslaw mix",7,"oz","Produce"),M("Green onions",2,"stalks","Produce","sliced"),M("Ranch dressing",0.25,"cup"),M("Burger buns",4,"buns","Bakery"),
 S("Smoked paprika",1,"tsp"),S("Garlic powder",0.5,"tsp"),S("Salt",0.25,"tsp"),S("Black pepper",0.25,"tsp"),S("Cooking oil",1,"tbsp"),S("BBQ sauce",0.25,"cup")],[
 "Combine smoked paprika, garlic powder, salt and pepper; rub the mixture over both sides of four pieces of chicken thigh.",
 "Heat oil in a large frying pan over medium heat. Cook chicken about five to seven minutes per side, until browned and 74°C / 165°F.",
 "Remove chicken from the pan and brush both sides with BBQ sauce.",
 "Toss the bagged coleslaw with sliced green onions and ranch dressing to make the slaw.",
 "Place one whole piece of BBQ chicken on each bun and top generously with ranch slaw. These are not shredded-chicken sandwiches in the original recipe."
 ]),
 5:r("Chicken Fried Rice",B+"chicken-fried-rice/","https://www.budgetbytes.com/wp-content/uploads/2024/02/Chicken-Fried-Rice-Plated-500x500.jpg",4,35,[
 M("Boneless skinless chicken breast",1,"large breast","Meat","cut into ½-inch pieces"),M("Cooked cooled rice",3,"cups"),M("Eggs",2,"large","Dairy"),M("Garlic",2,"cloves","Produce","minced"),M("Fresh ginger",1,"tsp","Produce","grated"),M("Green onions",3,"stalks","Produce","sliced"),M("Carrot",1,"whole","Produce","finely diced"),M("Red bell pepper",1,"whole","Produce","diced"),M("Frozen peas",1,"cup","Frozen"),S("Cooking oil",3,"tbsp"),S("Toasted sesame oil",2,"tbsp"),S("Soy sauce",3,"tbsp")],[
 "Prepare garlic, ginger, green onions, carrot, pepper and peas. Use leftover cooked and chilled rice so the grains stay separate.",
 "Beat the eggs. Scramble them in a hot large skillet with part of the cooking oil, then remove to a plate.",
 "Cook the diced chicken in the same pan with more oil until browned and 74°C / 165°F. Transfer it out temporarily.",
 "Soften the diced vegetables in the pan; add rice and fry until it starts to toast. Return chicken and eggs.",
 "Pour in soy sauce and sesame oil. Toss everything thoroughly, then top with the green onion greens before serving."
 ]),
 6:r("Sheet Pan Honey Mustard Chicken & Veggies",B+"sheet-pan-honey-mustard-chicken-and-veggies/","https://www.budgetbytes.com/wp-content/uploads/2025/08/Honey-Mustard-Chicken-Pan-500x500.jpg",4,45,[
 M("Boneless skinless chicken thighs",1.5,"lb","Meat"),M("Red potatoes",3,"medium","Produce","chopped"),M("Red onion",1,"whole","Produce","large dice"),M("Green beans",8,"oz","Produce","trimmed"),M("Carrots",2,"whole","Produce","chopped"),
 S("Mayonnaise",0.5,"cup"),S("Dijon mustard",1,"tbsp"),S("Yellow mustard",1,"tbsp"),S("Honey",3,"tbsp"),S("Apple cider vinegar",1,"tsp"),S("Garlic powder",0.125,"tsp"),S("Paprika",0.125,"tsp"),S("Salt",0.5,"tsp"),S("Black pepper",0.5,"tsp"),S("Vegetable oil",2,"tbsp")],[
 "Preheat oven to 400°F / 205°C. Cut potatoes, onion, carrots and green beans into evenly sized pieces.",
 "Make the sauce by whisking mayonnaise, both mustards, honey, cider vinegar, garlic powder, paprika, half the salt and half the pepper.",
 "Coat chicken thighs with honey-mustard sauce. Spread vegetables over a baking sheet, toss with vegetable oil and the remaining salt and pepper.",
 "Set the chicken over the vegetables and pour the coating sauce on top.",
 "Roast around 25–30 minutes, checking that the chicken reaches at least 74°C / 165°F and potatoes are tender."
 ]),
 7:r("Crock Pot Salsa Chicken",B+"crock-pot-salsa-chicken/","https://www.budgetbytes.com/wp-content/uploads/2023/11/Slow-Cooker-Salsa-Chicken-above-close-500x500.jpg",6,160,[
 M("Boneless skinless chicken breasts",2,"lb","Meat","about three breasts"),M("Salsa",16,"oz"),S("Chili powder",2,"tsp"),S("Garlic powder",0.5,"tsp"),S("Onion powder",0.5,"tsp")],[
 "Place thawed chicken breasts in the bottom of the slow cooker; do not begin with frozen chicken.",
 "Sprinkle chili powder, garlic powder and onion powder over the chicken.",
 "Pour the entire jar of salsa evenly over the seasoned chicken and cover.",
 "Cook on HIGH for approximately 2½ hours or LOW for five hours, until the meat is fully cooked at 74°C / 165°F and easy to pull apart.",
 "Shred the chicken with two forks and stir the pieces back into the salsa. Use in tacos or rice bowls if you wish; tortillas are a separate serving option."
 ],"Budget Bytes","This is the published salsa chicken filling; optional taco shells and toppings are not part of the source recipe."),
 8:r("Chicken and Rice Casserole",B+"cheesy-chicken-vegetable-rice-casserole/","https://www.budgetbytes.com/wp-content/uploads/2017/02/Chicken-and-Rice-Casserole-Overhead-Spoon-500x500.jpg",6,70,[
 M("Long-grain white rice, uncooked",1.5,"cups"),M("Water",3,"cups"),M("Boneless chicken breast",0.667,"lb","Meat","cut into small cubes"),M("Yellow onion",1,"whole","Produce","diced"),M("Carrots",3,"whole","Produce","diced"),M("Broccoli florets, frozen",0.5,"lb","Frozen","thawed and chopped"),M("Chicken broth",1,"cup"),M("Whole milk",1,"cup","Dairy"),M("Shredded medium cheddar",8,"oz","Dairy"),
 S("Nonstick cooking spray",1,"spray"),S("Salt",1.5,"tsp"),S("Black pepper",1,"tsp"),S("Olive oil",1,"tbsp"),S("Butter",3,"tbsp"),S("All-purpose flour",3,"tbsp"),S("Smoked paprika",0.5,"tsp"),S("Garlic powder",0.5,"tsp"),S("Onion powder",0.5,"tsp")],[
 "Preheat the oven to 350°F / 175°C and coat a baking dish with nonstick spray. Cook rice with water until fluffy.",
 "Season cubed chicken with some of the salt and pepper. Quickly brown it in oil in a skillet and move to a bowl; it will finish cooking in the casserole.",
 "Cook diced onion and carrots in the same skillet until soft. Put these with the chicken.",
 "Make a sauce in the skillet: melt butter, whisk in flour for about a minute, then slowly add broth and milk. Stir in paprika, garlic powder, onion powder and the remaining salt and pepper until thick.",
 "Fold the cooked rice, chicken, onion, carrots, broccoli and most of the cheddar into the sauce. Spread in the baking dish, top with remaining cheddar.",
 "Bake about 35 minutes until bubbling and the chicken reaches 74°C / 165°F. Rest briefly before scooping."
 ]),
 9:r("One Pot Teriyaki Chicken and Rice",B+"one-pot-teriyaki-chicken-and-rice/","https://www.budgetbytes.com/wp-content/uploads/2019/05/One-Pot-Treiyaki-Chicken-and-Rice-close-500x500.jpg",4,35,[
 M("Boneless skinless chicken breast",0.667,"lb","Meat","small pieces"),M("Jasmine rice, uncooked",1.5,"cups"),M("Water",2.5,"cups"),M("Frozen stir-fry vegetable blend",12,"oz","Frozen"),M("Garlic",2,"cloves","Produce","minced"),M("Fresh ginger",1,"tsp","Produce","grated"),M("Green onions",2,"stalks","Produce","sliced"),
 S("Cooking oil",1,"tbsp"),S("Soy sauce",0.25,"cup"),S("Brown sugar",2,"tbsp"),S("Toasted sesame oil",1,"tsp")],[
 "Dice chicken into ½–¾-inch pieces. Sauté garlic and ginger in oil for about a minute, then add the chicken and lightly brown the outside.",
 "Stir dry rice through the skillet, then pour in the water and scrape the bottom so nothing sticks.",
 "Bring to a boil, cover, reduce heat to low and cook ten minutes.",
 "Mix soy sauce, brown sugar and sesame oil in a bowl. Sprinkle frozen stir-fry vegetables over the rice, replace lid and cook five more minutes. Remove from heat and let stand covered.",
 "Fluff rice and fold in the teriyaki mixture and cooked vegetables. Check the chicken has reached 74°C / 165°F and finish with green onions."
 ]),
 10:r("Mediterranean Baked Chicken Dinner","https://www.recipetineats.com/mediterranean-baked-chicken-dinner/","https://www.recipetineats.com/tachyon/2015/11/Lemon-Garlic-Chicken-Potato-Bake_0.jpg",4,65,[
 M("Bone-in skin-on chicken thighs and drumsticks",2,"lb","Meat"),M("Lemon juice",0.5,"cup","Produce"),M("Garlic",6,"cloves","Produce","minced"),M("Potatoes",5,"small","Produce","cut into wedges"),M("Red onions",2,"whole","Produce","wedged"),M("Cherry tomatoes",250,"g","Produce"),M("Chicken broth",1,"cup"),
 S("Dijon mustard (optional)",2,"tsp"),S("Honey",2,"tbsp"),S("Dried oregano",1,"tbsp"),S("Paprika",1.5,"tsp"),S("Olive oil",2,"tbsp"),S("Salt",1.5,"tsp"),S("Black pepper",0.5,"tsp")],[
 "Whisk lemon juice, garlic, mustard, honey, oregano, paprika, a tablespoon of olive oil, salt and pepper into a marinade.",
 "Toss the bone-in chicken in the marinade, covering skin and undersides. Refrigerate to marinate if time allows; it can also be cooked immediately.",
 "Preheat the oven to 350°F / 180°C. Scatter potato wedges and red onion in a baking dish, season with the remaining olive oil, salt and pepper, and add chicken with its sauce and the broth.",
 "Bake around 20 minutes, add the cherry tomatoes, and continue baking about 30–35 minutes, until the potatoes are tender and chicken is cooked thoroughly; use a thermometer appropriate for bone-in poultry.",
 "Serve the chicken, potatoes, roasted onion and burst tomatoes with a spoonful of lemony pan juices."
 ],"RecipeTin Eats"),
 11:r("Ultimate BBQ Chicken Quesadillas",B+"ultimate-bbq-chicken-quesadillas/","https://www.budgetbytes.com/wp-content/uploads/2017/04/Ultimate-BBQ-Chicken-Quesadillas-close-500x500.jpg",5,25,[
 M("Cooked chopped chicken",1.5,"cups","Meat"),M("Black beans",1,"15-oz can","Pantry","rinsed and drained"),M("Red onion",0.25,"whole","Produce","finely diced"),M("Jalapeño",1,"whole","Produce","seeded and diced"),M("Cilantro",0.5,"cup","Produce","chopped"),M("Shredded cheddar",2,"cups","Dairy"),M("Small flour tortillas",10,"tortillas","Bakery"),
 S("Chili powder",1,"tsp"),S("Smoked paprika",0.5,"tsp"),S("Salt",0.25,"tsp"),S("BBQ sauce",0.5,"cup")],[
 "Use cooked, cooled chopped chicken for the filling. Drain the black beans and finely chop red onion, jalapeño and cilantro.",
 "Mix chicken, beans, onion, jalapeño, cilantro, cheddar, chili powder, paprika, salt and BBQ sauce in a large bowl.",
 "Spoon about one-third cup filling onto one side of each tortilla and fold it in half.",
 "Warm a dry skillet over medium-low heat. Cook the filled tortillas until both sides are lightly browned and the cheese has melted; flip carefully.",
 "Cut in half and serve. If your cooked chicken was refrigerated, the filling must be hot through."
 ]),
 12:r("Chicken Parmesan",B+"chicken-parmesan/","https://www.budgetbytes.com/wp-content/uploads/2024/04/Chicken-Parmesan-Overhead-500x500.jpg",4,22,[
 M("Boneless skinless chicken breasts",1.5,"lb","Meat","two breasts split into four cutlets"),M("Plain breadcrumbs",1,"cup"),M("Grated Parmesan",0.333,"cup","Dairy"),M("Egg",1,"large","Dairy"),M("All-purpose flour",0.5,"cup"),M("Marinara sauce",0.5,"cup"),M("Shredded mozzarella",1,"cup","Dairy"),M("Parsley (optional)",1,"tbsp","Produce"),
 S("Garlic powder",1,"tsp"),S("Italian seasoning",1,"tsp"),S("Salt",1,"tsp"),S("Black pepper",0.25,"tsp"),S("Cooking oil",0.25,"cup")],[
 "Slice the two chicken breasts horizontally to form four thinner cutlets. Pat dry and season lightly.",
 "Prepare three dishes: one with flour; one with a beaten egg; and one with breadcrumbs mixed with Parmesan, garlic powder, Italian seasoning, salt and pepper.",
 "Dip cutlets into flour, then egg, then coat completely in seasoned breadcrumbs.",
 "Heat oil in a large skillet over medium heat. Cook each cutlet until crisp and golden on both sides and the chicken reaches 74°C / 165°F.",
 "Spoon marinara sauce over the cutlets, cover with mozzarella and let it melt over low heat. Sprinkle parsley before serving. Pasta is optional, not an ingredient in this published recipe."
 ]),
 13:r("Chicken Noodle Soup",B+"chicken-noodle-soup/","https://www.budgetbytes.com/wp-content/uploads/2017/02/Chicken-Noodle-Soup-Overhead-500x500.jpg",8,105,[
 M("Boneless chicken breasts",2,"breasts","Meat"),M("Chicken broth",8,"cups"),M("Egg noodles, uncooked",6,"oz"),M("Yellow onion",1,"medium","Produce","diced"),M("Garlic",3,"cloves","Produce","minced"),M("Carrots",4,"whole","Produce","sliced"),M("Celery",2,"ribs","Produce","diced"),M("Fresh parsley",1,"tbsp","Produce"),
 S("Olive oil",2,"tbsp"),S("Dried basil",1,"tsp"),S("Dried thyme",0.5,"tsp"),S("Bay leaf",1,"leaf"),S("Black pepper",0.25,"tsp"),S("Salt",1,"tsp")],[
 "Dice onion, carrots and celery; mince garlic and parsley. Hold parsley until serving.",
 "Soften onion, carrots and celery in olive oil in a soup pot for about six minutes. Add garlic, basil, thyme, bay leaf, pepper and salt; stir for several more minutes.",
 "Place raw chicken breasts into the pot and add the broth. Bring to a simmer, cover and cook gently about one hour.",
 "Remove chicken, shred it using two forks, and taste the broth to adjust the salt.",
 "Boil the egg noodles in the soup until tender, about seven minutes, then stir in the chicken and parsley. Remove the bay leaf and serve. Check chicken reaches 74°C / 165°F."
 ]),
 14:r("Buffalo Ranch Chicken Wraps","https://feelgoodfoodie.net/recipe/buffalo-chicken-wrap/","https://feelgoodfoodie.net/wp-content/uploads/2026/03/Buffalo-Chicken-Wrap-09-500x500.jpg",4,21,[
 M("Chicken tenders",1,"lb","Meat"),M("Large flour tortillas",4,"tortillas","Bakery"),M("Romaine lettuce",2,"cups","Produce","chopped"),M("Shredded mozzarella",1,"cup","Dairy"),M("Shredded carrots",0.5,"cup","Produce"),M("Ranch dressing (optional)",0.25,"cup"),
 S("Unsalted butter",4,"tbsp"),S("Hot sauce",0.333,"cup"),S("Paprika",0.5,"tsp"),S("Garlic powder",0.5,"tsp"),S("Salt",0.5,"tsp")],[
 "Melt butter and stir in hot sauce, paprika, garlic powder and salt to make the buffalo mixture.",
 "Cut chicken tenders as needed; coat them in part of the buffalo mixture.",
 "Cook chicken in a hot skillet, turning until golden and safely cooked to 74°C / 165°F. Toss through the remaining buffalo sauce.",
 "Warm tortillas briefly. Layer romaine, mozzarella, carrot and buffalo chicken onto the middle of each wrap.",
 "Add ranch dressing if using, fold the sides inward and roll tightly. Serve while warm."
 ],"Feel Good Foodie"),
 15:r("Greek Chicken Meal Prep Rice Bowls","https://www.skinnytaste.com/greek-chicken-meal-prep-rice-bowls/","https://www.skinnytaste.com/wp-content/uploads/2020/01/Greek-Chicken-Meal-Prep-4-260x260.jpg",4,60,[
 M("Boneless skinless chicken breasts",1.5,"lb","Meat"),M("Quick-cooking brown rice",1.25,"cups"),M("Chicken broth",2,"cups"),M("Cherry tomatoes",1,"pint","Produce"),M("Cucumber",1,"whole","Produce","diced"),M("Orange bell pepper",1,"whole","Produce","diced"),M("Kalamata olives",20,"olives"),M("Lemon",1,"whole","Produce"),M("Feta cheese",0.25,"cup","Dairy"),M("Garlic",3,"cloves","Produce","minced"),
 S("Lemon juice",2,"tbsp"),S("Red wine vinegar",2,"tbsp"),S("Olive oil",5,"tsp"),S("Dried oregano",2,"tsp")],[
 "Mix lemon juice, red wine vinegar, oregano, minced garlic and about one tablespoon of olive oil to marinate the chicken.",
 "Let chicken marinate in the refrigerator while you prepare rice and vegetables. Cook quick brown rice with chicken broth according to package directions.",
 "Cook chicken in a grill pan or skillet until browned and at least 74°C / 165°F; let it rest before slicing.",
 "Cut tomatoes, cucumber and orange pepper into bite-size pieces. Drain olives and crumble feta.",
 "Divide rice and sliced chicken between four containers. Pack the cold vegetables separately and add olives, feta, lemon wedges and the remaining olive oil when serving."
 ],"Skinnytaste"),
 16:r("Chicken Alfredo Bake",B+"chicken-alfredo-bake/","https://www.budgetbytes.com/wp-content/uploads/2023/02/ChickenAlfredoBakeflatlay-500x500.jpg",6,115,[
 M("Boneless skinless chicken breasts",1.333,"lb","Meat","about two breasts, cubed"),M("Rotini pasta, dry",8,"oz"),M("Frozen broccoli florets",10,"oz","Frozen"),M("Garlic",4,"cloves","Produce","minced"),M("Heavy cream",2,"cups","Dairy"),M("Italian shredded cheese blend",2,"cups","Dairy"),M("Grated Parmesan",1,"tbsp","Dairy"),M("Panko breadcrumbs",0.5,"cup"),
 S("Olive oil",2,"tbsp"),S("Butter",6,"tbsp"),S("Italian seasoning",1,"tsp"),S("Garlic powder",0.5,"tsp"),S("Red pepper flakes",1,"tsp"),S("Salt",1,"tsp"),S("Black pepper",1,"tsp")],[
 "Season cubed chicken with Parmesan, part of the Italian seasoning, garlic powder, red pepper flakes, salt, pepper and olive oil. Sear in a skillet until brown and fully cooked to 74°C / 165°F.",
 "In another small skillet, toast panko with two tablespoons of butter and a pinch of the seasonings until golden; set aside.",
 "Use the chicken skillet for Alfredo: melt the remaining butter, gently sauté garlic, whisk in heavy cream and seasoning, then lower heat and melt about 1½ cups of the shredded cheese into the sauce.",
 "Heat oven to 375°F / 190°C. Briefly boil the rotini until just under tender. Thaw and chop broccoli. Mix pasta, broccoli, cooked chicken and homemade Alfredo sauce in a casserole dish.",
 "Top with the last ½ cup of cheese and buttered panko. Bake 25–30 minutes until bubbling with golden topping. Let stand a few minutes before serving."
 ]),
 17:r("Chicken Taco Soup",B+"chicken-taco-soup/","https://www.budgetbytes.com/wp-content/uploads/2026/05/Taco-Soup-Overhead-in-Bowl-500x500.jpg",10,60,[
 M("Boneless skinless chicken breasts",2,"lb","Meat"),M("Yellow onion",1,"whole","Produce","diced"),M("Green bell pepper",1,"whole","Produce","diced"),M("Chicken broth",6,"cups"),M("Diced tomatoes with green chilies",28,"oz"),M("Pinto beans",1,"15.5-oz can","Pantry","rinsed and drained"),M("Black beans",1,"15-oz can","Pantry","rinsed and drained"),M("Canned corn",1,"15-oz can","Pantry","drained"),M("Cream cheese",4,"oz","Dairy"),M("Lime",1,"whole","Produce"),M("Fresh cilantro",1,"tbsp","Produce","chopped"),
 S("Taco seasoning",1,"1-oz packet"),S("Olive oil",1,"tbsp")],[
 "Dice the onion and pepper, mince the cilantro and halve the lime. Coat chicken breasts evenly with the taco seasoning.",
 "Soften the onion and green pepper in olive oil in a large soup pot for about five minutes.",
 "Make space in the pan and brown the seasoned chicken breasts for about five minutes per side. Add broth and all the diced tomatoes with their juices, scraping the pan.",
 "Simmer about 30 minutes. Add rinsed pinto beans, black beans and corn; cook until heated through.",
 "Remove chicken and shred, then return it to the soup. Stir cream cheese into the hot broth until smooth, add lime juice and cilantro, and check chicken has reached 74°C / 165°F."
 ]),
 18:r("Sweet Chili Chicken Stir Fry Bowls",B+"sweet-chili-chicken-stir-fry-bowls/","https://www.budgetbytes.com/wp-content/uploads/2018/10/Sweet-Chili-Chicken-Stir-Fry-plate-500x500.jpg",4,30,[
 M("Jasmine rice, uncooked",1.5,"cups"),M("Coconut milk",1,"13.5-oz can"),M("Water",1,"cup"),M("Garlic",1,"clove","Produce","minced"),M("Chicken breasts, boneless skinless",1.3,"lb","Meat"),M("Pineapple tidbits in juice",1,"8-oz can"),M("Broccoli",1,"lb","Produce","cut into florets"),
 S("Salt",0.75,"tsp"),S("Cooking oil",1,"tbsp"),S("Sweet chili sauce",1,"cup")],[
 "Combine jasmine rice, coconut milk, one cup of water, minced garlic and salt in a pot. Bring to a boil, cover, simmer on low for 15 minutes and rest, covered, another five.",
 "Cut broccoli into bite-size florets and steam until bright green and just tender.",
 "Dice chicken into small pieces. Brown in cooking oil in a hot skillet; cook until it reaches 74°C / 165°F.",
 "Stir drained pineapple tidbits and sweet chili sauce into the cooked chicken and warm until the sauce coats each piece.",
 "Fluff coconut rice and divide into four bowls. Spoon sweet chili chicken with pineapple alongside the steamed broccoli."
 ]),
 19:r("Chicken Caesar Wraps",B+"chicken-caesar-wrap/","https://www.budgetbytes.com/wp-content/uploads/2023/04/ChickenCaesarWrapsinglestack-500x500.jpg",4,25,[
 M("Boneless skinless chicken breast",0.667,"lb","Meat","½-inch cubes"),M("Grated Parmesan",0.5625,"cup","Dairy"),M("Panko breadcrumbs",0.25,"cup"),M("Romaine lettuce",2,"cups","Produce","chopped"),M("Grape tomatoes",0.5,"cup","Produce","halved"),M("Caesar dressing",0.333,"cup"),M("Large flour tortillas",4,"tortillas","Bakery"),
 S("Olive oil",2,"tbsp"),S("Butter",1,"tbsp"),S("Italian seasoning",0.5,"tsp"),S("Garlic powder",0.5,"tsp"),S("Salt",0.5,"tsp"),S("Black pepper",0.5,"tsp")],[
 "Coat cubed chicken with a tablespoon of olive oil, one tablespoon of Parmesan and half each of Italian seasoning, garlic powder, salt and pepper.",
 "Brown chicken in a skillet with the remaining olive oil until it reaches 74°C / 165°F. Let cool slightly.",
 "Melt butter in a separate skillet, add panko and remaining dry seasoning and toast for about three minutes until crisp.",
 "Toss chopped romaine, halved tomatoes, cooked chicken, toasted crumbs, remaining Parmesan and Caesar dressing together.",
 "Warm tortillas briefly, divide chicken Caesar salad among them, roll with sides tucked in, and slice before serving."
 ]),
 20:r("Crockpot Chicken and Gravy","https://www.spendwithpennies.com/crockpot-chicken-and-gravy/","",4,360,[
 M("Boneless skinless chicken breasts",1.5,"lb","Meat"),M("Evaporated milk",1.25,"cups","Dairy"),M("Chicken broth",0.75,"cup"),M("Chicken bouillon",1,"cube"),
 S("Poultry seasoning",0.75,"tsp"),S("Onion powder",0.5,"tsp"),S("Garlic powder",0.25,"tsp"),S("Black pepper",0.25,"tsp"),S("Cornstarch",2,"tbsp"),S("Butter",1,"tbsp")],[
 "In a bowl whisk evaporated milk, chicken broth, bouillon, poultry seasoning, onion powder, garlic powder and black pepper.",
 "Place chicken breasts in a 6-quart slow cooker and pour the seasoned mixture over them.",
 "Cover and cook on LOW for about five to six hours or HIGH for two to three hours, until chicken reaches 74°C / 165°F and shreds easily.",
 "Remove chicken. Mix cornstarch with two tablespoons of cold water, whisk into the cooker and let cook on HIGH another ten to fifteen minutes until the gravy thickens.",
 "Whisk in butter, taste the gravy, then shred or slice chicken and return it to the sauce. Serve with mashed potatoes or noodles if desired; sides are not included in this ingredient list."
 ],"Spend With Pennies","Publisher restricts photo reuse: use its original recipe link to view the finished dish.")
 };
})();