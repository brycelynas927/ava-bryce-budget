/* Source-backed recipes 21–40. Original directions paraphrased; ingredient quantities follow cited publisher recipes. 
   Photos remain owned by their publishers. If images cannot be embedded, the app links to the original recipe. */
(function(){
 const M=(name,q,u,section="Pantry",prep="")=>({name,q,u,section,prep,seasoning:false});
 const S=(name,q,u)=>({name,q,u,section:"Pantry",seasoning:true});
 const B="https://www.budgetbytes.com/";
 const R=(name,url,photo,servings,time,items,steps,source="Budget Bytes",note="")=>({name,url,photo,servings,time,items,steps,source,note});
 Object.assign(window.publishedRecipes,{
21:R("One Pot Beef Stroganoff",B+"beef-stroganoff/","https://www.budgetbytes.com/wp-content/uploads/2014/02/One-Pot-Beef-and-Mushroom-Stroganoff-done-500x500.jpg",4,30,[
 M("Ground beef",0.5,"lb","Meat"),M("Garlic",2,"cloves","Produce","minced"),M("Mushrooms",8,"oz","Produce","sliced"),
 M("Beef broth",2,"cups"),M("Wide egg noodles, dry",8,"oz"),M("Sour cream",0.333,"cup","Dairy"),
 M("Fresh parsley (optional)",1,"tbsp","Produce","chopped"),M("Yellow onion (optional)",0.5,"whole","Produce","finely diced"),
 S("Butter",2,"tbsp"),S("Black pepper",0.125,"tsp"),S("Worcestershire sauce",1,"tbsp"),S("Dijon mustard",0.5,"tsp")],[
 "In a wide, deep skillet, melt butter over medium heat and cook the minced garlic about one minute. If using the optional onion, soften it in the butter first for 3–4 minutes.",
 "Add ground beef, break it into crumbles, and cook through. Drain excess grease if needed. Slice mushrooms while beef browns.",
 "Stir mushrooms and black pepper into the beef. Sauté roughly 5 minutes until the mushrooms soften.",
 "Pour in beef broth, Worcestershire and Dijon, then add the dry egg noodles. The broth will not completely submerge the noodles.",
 "Bring to a boil, cover, turn heat low and gently simmer 7–10 minutes, stirring every few minutes with the lid replaced each time. If dry before noodles are done, add a splash of broth.",
 "When noodles are tender and broth is mostly absorbed, turn heat off and fold in sour cream. Serve with parsley if using; don't boil the finished sour-cream sauce."
 ]),
22:R("Easy Ground Beef Tacos","https://www.spendwithpennies.com/easy-ground-beef-tacos/","https://www.spendwithpennies.com/wp-content/uploads/2019/05/Ground-Beef-Tacos-SWP-3-500x500.jpg",4,30,[
 M("Lean ground beef",1,"lb","Meat"),M("Tomato paste",2,"tbsp"),M("Water",0.667,"cup"),M("Taco shells or 6-inch tortillas",8,"shells","Bakery"),
 M("Optional taco toppings",1,"selection","Produce","shredded lettuce, diced tomatoes and/or cheese as preferred"),
 S("Chili powder",1,"tbsp"),S("Ground cumin",0.5,"tbsp"),S("Onion powder",0.5,"tsp"),S("Garlic powder",0.25,"tsp"),
 S("Crushed red pepper flakes",0.25,"tsp"),S("Dried oregano",0.5,"tsp"),S("Salt",0.5,"tsp"),S("Black pepper",1,"tsp")],[
 "Mix the chili powder, cumin, onion powder, garlic powder, pepper flakes, oregano, salt and black pepper in a little bowl.",
 "Cook the ground beef in a skillet over medium-high heat, breaking it into small pieces. When fully browned, drain excess fat.",
 "Stir the spice mixture, tomato paste and ⅔ cup water into the cooked meat. Bring to a simmer and cook about 5 minutes, stirring until the liquid reduces to a sauce.",
 "Heat oven to 350°F / 175°C if using crunchy shells. Warm them on a tray for about 5 minutes. Soft tortillas can be warmed in a skillet.",
 "Divide seasoned beef between the shells and add lettuce, tomatoes, grated cheese or other toppings you choose. Optional toppings are not fixed amounts in the publisher's original."
 ],"Spend With Pennies","Original topping choices are flexible; the photo shows tacos topped with lettuce, cheese and tomatoes."),
23:R("Cheeseburger Rice","https://www.kraftheinz.com/heinz/recipes/502013-cheeseburger-rice","https://res.cloudinary.com/kraft-heinz-whats-cooking-ca/image/upload/f_auto/q_auto/c_limit%2Cw_3840/v1/dxp-images/brands/Recipes/all-recipe-assets/cheeseburger-rice/a9e2cd86c59d43c583d4830ba71f4df6_ebsvvp",4,20,[
 M("Lean ground beef",1,"lb","Meat"),M("Water",1.75,"cups"),M("Instant white rice, uncooked",2,"cups"),M("Shredded cheddar cheese",1,"cup","Dairy"),
 S("Tomato ketchup",0.667,"cup"),S("Yellow mustard",1,"tbsp")],[
 "Place lean ground beef in a large skillet over medium-high heat. Break up the meat and cook until completely browned; drain any grease.",
 "Stir the water, ketchup and yellow mustard through the cooked beef, scraping the bottom of the skillet.",
 "Bring the beef mixture to a boil, then add INSTANT white rice (regular dry rice requires different water and cooking times).",
 "Sprinkle the grated cheddar evenly over the rice and beef, cover, and reduce heat to medium-low.",
 "Cook about 5 minutes, remove from heat and let stand still covered another 5 minutes. Stir to combine and serve hot."
 ],"Kraft Heinz","This is the published Kraft Heinz recipe, not regular-rice cheeseburger skillet. The original publisher page is the photo reference."),
24:R("Garlic Noodles with Beef and Broccoli",B+"garlic-noodles-with-beef-and-broccoli/","https://www.budgetbytes.com/wp-content/uploads/2019/11/Garlic-Noodles-with-Beef-and-Broccoli-close-fork-twirl-500x500.jpg",4,25,[
 M("Ground beef",0.5,"lb","Meat"),M("Garlic",4,"cloves","Produce","minced"),M("Frozen broccoli florets",0.5,"lb","Frozen"),
 M("Spaghetti, dry",8,"oz"),M("Green onions",4,"stalks","Produce","sliced"),
 S("Oyster sauce",4,"tbsp"),S("Butter",3,"tbsp"),S("Soy sauce",1,"tbsp"),S("Brown sugar",3,"tbsp"),
 S("Toasted sesame oil",1,"tbsp"),S("Crushed red pepper",2,"pinches")],[
 "Melt two tablespoons of butter and stir together with the oyster sauce, soy sauce, brown sugar and toasted sesame oil. Set the sauce aside.",
 "Boil spaghetti until tender according to the package directions, then drain thoroughly.",
 "Melt the remaining tablespoon of butter in a large skillet and cook the ground beef, breaking it apart until browned.",
 "Add minced garlic and cook another 1–2 minutes, then stir in frozen broccoli. Continue cooking until the broccoli thaws.",
 "Add drained spaghetti and the prepared oyster-soy sauce mixture to the skillet. Toss over medium heat until the broccoli and pasta are fully hot and glossy.",
 "Finish with sliced green onions and crushed red pepper as desired."
 ],"Budget Bytes","The published dish is beef and broccoli with spaghetti noodles, NOT rice, so the card name has been corrected."),
25:R("Homemade Sloppy Joes",B+"sloppy-joes/","https://www.budgetbytes.com/wp-content/uploads/2022/07/Classic-Sloppy-Joes-plate-500x500.jpg",5,30,[
 M("Yellow onion",1,"whole","Produce","finely diced"),M("Green bell pepper",1,"whole","Produce","finely diced"),
 M("Garlic",2,"cloves","Produce","minced"),M("Ground beef",1,"lb","Meat"),
 M("Canned tomato sauce",15,"oz"),M("Hamburger buns",5,"buns","Bakery"),
 S("Olive oil",1,"tbsp"),S("Tomato paste",3,"tbsp"),S("Apple cider vinegar",2,"tbsp"),
 S("Brown sugar",2,"tbsp"),S("Dijon mustard",1,"tsp"),S("Chili powder",1,"tsp"),
 S("Worcestershire sauce",1,"tsp"),S("Salt",0.75,"tsp")],[
 "Finely chop onion and pepper, and mince both garlic cloves.",
 "Heat the olive oil in a skillet over medium heat. Cook ground beef in small crumbles until no pink remains; pour off excess grease.",
 "Stir in onion, bell pepper and garlic, then keep cooking until the vegetables soften.",
 "Add tomato sauce, tomato paste, cider vinegar, brown sugar, Dijon mustard, chili powder, Worcestershire and salt. Mix thoroughly.",
 "Simmer uncovered over medium-low heat for about 5–10 minutes until thick enough to pile into buns.",
 "Lightly toast the hamburger buns and spoon the hot sloppy-joe beef filling onto them. The sandwich should be saucy ground beef, not a steak."
 ]),
26:R("Mexican Beef and Rice Skillet","https://www.evolvingtable.com/mexican-beef-rice/","https://www.evolvingtable.com/wp-content/uploads/2024/03/Taco-Rice-6-600x800.jpg",6,45,[
 M("Ground beef, 85/15",1,"lb","Meat"),M("Sweet onion",1,"medium","Produce","diced"),
 M("Bell pepper",1,"medium","Produce","diced"),M("Garlic",3,"cloves","Produce","minced"),
 M("Basmati rice, uncooked",1.25,"cups","Pantry","rinse and drain"),M("Chicken broth",2,"cups"),
 M("Salsa",16,"oz","Pantry"),M("Canned corn",15.25,"oz","Pantry","drained"),
 M("Canned black beans",15.5,"oz","Pantry","drained and rinsed"),M("Fresh cilantro",1,"small bunch","Produce","chopped"),
 M("Lime juice",2,"tbsp","Produce"),S("Taco seasoning",3,"tbsp"),S("Salt",0.5,"tsp")],[
 "Brown ground beef in a Dutch oven over medium heat, breaking apart, about 7–8 minutes. Transfer browned meat to a plate.",
 "Sauté chopped onion and bell pepper in the beef drippings for 2–3 minutes; stir in garlic for another 30 seconds.",
 "Rinse the raw basmati rice until water runs mostly clear, then drain it.",
 "Add broth, dry rice, salsa, corn, rinsed black beans, cooked beef, taco seasoning and salt to the pot. Mix well.",
 "Bring to a boil, cover tightly, reduce heat to low and gently simmer 25–30 minutes until rice is tender. Avoid opening the lid repeatedly; if rice is still firm add a little more hot broth and continue cooking.",
 "Fluff and mix in cilantro and fresh lime juice. Serve with optional toppings if desired."
 ],"Evolving Table","The original author serves this in bowls with optional toppings; the ingredient list is the published one-pot skillet."),
27:R("Beef and Cabbage Stir Fry",B+"beef-cabbage-stir-fry/","https://www.budgetbytes.com/wp-content/uploads/2016/08/Beef-and-Cabbage-Stir-Fry-eat-2-500x500.jpg",4,30,[
 M("Green cabbage",0.5,"head","Produce","very thinly shredded"),M("Carrots",2,"whole","Produce","grated"),
 M("Green onions",3,"stalks","Produce","sliced"),M("Lean ground beef",0.5,"lb","Meat"),
 M("Garlic",2,"cloves","Produce","minced"),M("Fresh ginger",1,"tbsp","Produce","grated"),
 S("Soy sauce",2,"tbsp"),S("Toasted sesame oil",1,"tbsp"),S("Sriracha",1,"tbsp"),
 S("Brown sugar",0.5,"tbsp"),S("Cooking oil",0.5,"tbsp"),
 S("Salt",0.25,"tsp"),S("Black pepper",0.25,"tsp"),S("Sesame seeds (optional)",1,"tbsp")],[
 "Whisk soy sauce, toasted sesame oil, sriracha and brown sugar together to make a quick stir-fry sauce.",
 "Remove the hard cabbage core and slice about half a head into fine shreds. Grate the carrots, slice the green onions, mince garlic and grate ginger.",
 "Heat cooking oil in a wide skillet. Add ground beef, garlic, ginger, salt and pepper; cook, breaking apart the meat until browned.",
 "Add cabbage and carrots. Keep stir-frying just until the vegetables wilt and soften slightly but retain texture.",
 "Pour in the prepared sauce, toss well and allow it to heat through.",
 "Sprinkle with sliced green onions and sesame seeds, if using. The published dish is a cabbage stir fry, not a tomato-based beef skillet."
 ]),
28:R("Slow Cooker Meatball Subs",B+"slow-cooker-meatball-subs/","https://www.budgetbytes.com/wp-content/uploads/2022/08/Slow-Cooker-Meatball-Subs-plate-380x380.jpg",8,200,[
 M("Breadcrumbs",0.5,"cup"),M("Grated Parmesan",0.5,"cup","Dairy"),
 M("Eggs",2,"large","Dairy"),M("Milk",0.25,"cup","Dairy"),
 M("Ground Italian sausage",1,"lb","Meat"),M("Lean ground beef",1,"lb","Meat"),
 M("Yellow onion",1,"small","Produce","diced"),M("Garlic",2,"cloves","Produce","minced"),
 M("Crushed tomatoes",28,"oz"),M("Sub or hoagie rolls",8,"rolls","Bakery"),M("Shredded mozzarella",0.5,"cup","Dairy"),
 S("Garlic powder",0.5,"tsp"),S("Onion powder",0.5,"tsp"),S("Italian seasoning",0.5,"tsp"),
 S("Salt for meatballs",0.25,"tsp"),S("Black pepper",0.25,"tsp"),S("Olive oil",2,"tbsp"),
 S("Tomato paste",2,"tbsp"),S("Dried basil",0.5,"tsp"),S("Dried oregano",0.5,"tsp"),
 S("Brown sugar (optional)",1,"tsp"),S("Salt for sauce",1,"tsp")],[
 "Whisk the eggs. In a separate bowl combine breadcrumbs, Parmesan, garlic powder, onion powder, Italian seasoning, salt and pepper.",
 "Mix sausage, ground beef, egg, milk and seasoned crumbs without overworking the meat. Divide into 24 balls of similar size.",
 "To make marinara, sauté diced onion and minced garlic in olive oil for about five minutes. Stir in tomato paste 3–5 minutes, then crushed tomatoes, basil, oregano, optional brown sugar and salt.",
 "Simmer the sauce for roughly 30 minutes to deepen flavor. Adjust salt to taste.",
 "Place half the raw meatballs in a slow cooker; spoon over half the sauce. Layer the rest of the meatballs and sauce. Cook HIGH about 3 hours or LOW about 6, until meatballs reach 74°C / 165°F.",
 "Heat oven to 350°F / 175°C. Load each roll with about three cooked meatballs and sauce, sprinkle with mozzarella, and bake 5 minutes until the cheese melts and the bun edges toast."
 ]),
29:R("Beef and Pineapple Enchiladas",B+"beef-enchiladas/","https://www.budgetbytes.com/wp-content/uploads/2014/04/Beef-and-Pineapple-Enchiladas-Overhead-in-Pan-500x500.jpg",6,60,[
 M("Jalapeño",1,"whole","Produce","deseeded, diced"),M("Garlic",2,"cloves","Produce","minced"),
 M("Lean ground beef",0.5,"lb","Meat"),M("Black beans",15,"oz","Pantry","drained and rinsed"),
 M("Pineapple chunks",7.5,"oz","Pantry","drained, chopped"),M("Green onions",2,"stalks","Produce","sliced"),
 M("Cilantro",0.25,"bunch","Produce","chopped"),M("6-inch corn tortillas",12,"tortillas","Bakery"),
 M("Water for sauce",2,"cups"),S("Cooking oil for filling",1,"tbsp"),S("Chili powder in filling",0.5,"tbsp"),
 S("Salt for filling",0.25,"tsp"),S("Vegetable oil for sauce",2,"tbsp"),S("All-purpose flour",2,"tbsp"),
 S("Chili powder for sauce",2,"tbsp"),S("Tomato paste",3,"oz"),S("Ground cumin",0.5,"tsp"),
 S("Garlic powder",0.5,"tsp"),S("Cayenne pepper",0.125,"tsp"),S("Unsweetened cocoa powder (optional)",2,"tsp"),
 S("Salt for sauce",1,"tsp")],[
 "Heat oven to 375°F / 190°C. Deseed and dice jalapeño; mince garlic. Sauté both in one tablespoon cooking oil for 1–2 minutes.",
 "Brown the ground beef in that skillet. Rinse the black beans and stir them through with the filling chili powder and salt.",
 "Drain and finely chop pineapple. Turn off heat, add pineapple, green onions and cilantro to the beef filling.",
 "For the sauce, heat vegetable oil with flour and sauce chili powder in a small saucepan, whisking one minute after it starts to bubble.",
 "Slowly whisk in the water, tomato paste, cumin, garlic powder, cayenne, optional cocoa and sauce salt. Simmer until slightly thickened.",
 "Warm corn tortillas to keep them pliable. Put roughly three tablespoons filling in each, roll up and place seam-side down in a 9x13 baking dish with a little sauce on the bottom.",
 "Pour remaining sauce over rolled enchiladas and bake about 30 minutes until sauce bubbles and tortilla edges are lightly crisp."
 ],"Budget Bytes","These published enchiladas contain pineapple and black beans and have a homemade chili-red sauce; not a generic skillet."),
30:R("Spaghetti with Weeknight Meat Sauce","https://www.budgetbytes.com/wp-content/uploads/2020/03/Budget-Bytes-Pantry-Meal-Plan.pdf","",4,40,[
 M("Ground beef",0.5,"lb","Meat"),M("Yellow onion",1,"whole","Produce","finely diced"),
 M("Crushed tomatoes",28,"oz"),M("Spaghetti, dry",1,"lb"),
 S("Olive oil",1,"tbsp"),S("Butter",2,"tbsp"),S("Italian seasoning",0.5,"tsp"),
 S("Black pepper",0.25,"tsp"),S("Salt",0.5,"tsp")],[
 "Add ground beef and olive oil to a pot. Brown the beef over medium heat, breaking it up, about 5 minutes. Drain excess fat if needed.",
 "Dice onion finely. Add diced onion and butter to the browned beef and sauté until onion becomes soft, approximately 5 minutes.",
 "Stir in crushed tomatoes, Italian seasoning and freshly ground pepper.",
 "Bring sauce to a gentle simmer, cover and cook on low for roughly 30 minutes, stirring occasionally. Season with salt near the end and taste.",
 "Meanwhile boil spaghetti in salted water according to packet directions. Drain the pasta.",
 "Serve the hot meat sauce over the cooked spaghetti. The source is Budget Bytes' published Pantry Meal Plan recipe, which specifically includes spaghetti."
 ],"Budget Bytes","From Budget Bytes' published 14-Day Pantry Meal Plan PDF; accompanying Budget Bytes sauce page has serving photos."),
31:R("Korean Ground Beef Bowls","https://damndelicious.net/2013/07/07/korean-beef-bowl/","https://damndelicious.net/wp-content/uploads/2013/07/Korean-Beef-Bowl_111-760x1140.jpg",4,15,[
 M("Ground beef",1,"lb","Meat"),M("Garlic",3,"cloves","Produce","minced"),
 M("Green onions",2,"stalks","Produce","thinly sliced"),M("Cooked white rice for serving",4,"cups","Pantry","prepared separately; serving suggestion"),
 S("Packed brown sugar",0.25,"cup"),S("Reduced sodium soy sauce",0.25,"cup"),
 S("Sesame oil",2,"tsp"),S("Red pepper flakes",0.5,"tsp"),S("Ground ginger",0.25,"tsp"),
 S("Vegetable oil",1,"tbsp"),S("Sesame seeds",0.25,"tsp")],[
 "Prepare hot rice separately according to its package; rice is a suggested base for the published beef topping.",
 "Whisk brown sugar, soy sauce, sesame oil, pepper flakes and ground ginger together in a bowl.",
 "Warm vegetable oil in a large skillet over medium-high. Add minced garlic, cooking briefly until fragrant.",
 "Add ground beef and crumble with a spoon until fully browned, about 4–6 minutes. Drain excess grease.",
 "Stir the sweet-salty sauce into cooked beef. Continue cooking a couple of minutes until coated and hot.",
 "Divide rice into bowls, spoon the beef on top and add sliced green onions and sesame seeds."
 ],"Damn Delicious","The publisher's beef mixture is shown served on rice; rice is a serving side added explicitly to the grocery list."),
32:R("Classic Homemade Beef Chili",B+"basic-chili/","https://www.budgetbytes.com/wp-content/uploads/2025/03/3-Classic-Homemade-Chili-Front-Macro-500x500.jpg",6,50,[
 M("Yellow onion",1,"large","Produce","diced"),M("Garlic",2,"cloves","Produce","minced"),
 M("Ground beef",1,"lb","Meat"),M("Kidney beans",15.5,"oz","Pantry","drained, rinsed"),
 M("Black beans",15.25,"oz","Pantry","drained, rinsed"),M("Diced tomatoes",14.5,"oz"),
 M("Tomato paste",6,"oz"),M("Water",1,"cup"),
 S("Olive oil",2,"tbsp"),S("Chili powder",1,"tbsp"),S("Ground cumin",1,"tsp"),
 S("Cayenne pepper",0.25,"tsp"),S("Garlic powder",0.25,"tsp"),S("Onion powder",0.5,"tsp"),
 S("Brown sugar",0.5,"tbsp"),S("Salt",1,"tsp"),S("Black pepper",0.5,"tsp")],[
 "Finely dice onion and mince garlic. Cook both in olive oil in a soup pot over medium until softened.",
 "Add ground beef and break into crumbles. Brown completely, draining a little excess grease if desired.",
 "Rinse the kidney and black beans and add them along with canned tomatoes and juices, tomato paste and water.",
 "Add chili powder, cumin, cayenne, garlic and onion powders, brown sugar, salt and black pepper. Stir thoroughly.",
 "Cover and gently simmer about 30 minutes, stirring now and then, until the chili is thick and flavors are blended.",
 "Taste and adjust seasoning before serving. Optional toppings such as cheese or sour cream aren't included in the original measured ingredients."
 ]),
33:R("Ground Beef Potato Hash","https://sophiascooks.com/en/dinner/ground-beef-potato-hash","",4,30,[
 M("Ground beef",1,"lb","Meat"),M("Potatoes",1,"lb","Produce","peeled and diced small"),
 M("Onion",1,"medium","Produce","chopped"),M("Red bell pepper",1,"whole","Produce","diced"),
 M("Garlic",2,"cloves","Produce","minced"),M("Eggs (optional)",4,"whole","Dairy"),
 M("Fresh parsley",2,"tbsp","Produce","chopped"),
 S("Olive oil",2,"tbsp"),S("Butter",1,"tbsp"),S("Paprika",1,"tsp"),S("Salt",1,"tsp"),S("Black pepper",0.5,"tsp")],[
 "Peel potatoes if preferred and dice them into small, even pieces so they cook quickly.",
 "Heat olive oil and butter in a broad skillet over medium heat. Fry potatoes 10–12 minutes, turning occasionally until golden and tender.",
 "Push potatoes aside. Cook the onion and diced red pepper in the skillet until softened, then stir in garlic for 30 seconds.",
 "Add ground beef, breaking it into small crumbles. Continue cooking until the beef is fully browned and safe to eat.",
 "Season with paprika, salt and black pepper. Toss the potato and beef mixture together.",
 "If using eggs, make four small wells in the hash and cook the cracked eggs until they reach your preferred doneness. Top with parsley and serve."
 ],"Sophia's Cooks","Use original recipe page to view its photo while publisher image embedding is being checked."),
34:R("Easy Hamburger Soup","https://www.spendwithpennies.com/hamburger-soup/","https://www.spendwithpennies.com/wp-content/uploads/2017/04/Hamburger-Soup-21-300x300.jpg",8,35,[
 M("Lean ground beef",1,"lb","Meat"),M("Yellow onion",1,"whole","Produce","diced"),
 M("Garlic",2,"cloves","Produce","minced"),M("Potatoes",2,"medium","Produce","peeled and diced"),
 M("Beef broth",3.5,"cups"),M("Diced tomatoes with juices",28,"oz"),
 M("Condensed tomato soup",10.75,"oz"),M("Frozen mixed vegetables",3,"cups","Frozen"),
 S("Worcestershire sauce",2,"tsp"),S("Italian seasoning",1,"tsp"),S("Bay leaf",1,"leaf"),
 S("Salt (to taste)",0.25,"tsp"),S("Black pepper (to taste)",0.25,"tsp")],[
 "Cook ground beef with the diced onion and minced garlic in a soup pot over medium-high heat. Break up the beef and drain excess fat after browning.",
 "Add diced potatoes, beef broth, canned tomatoes with all juices, condensed tomato soup and Worcestershire sauce.",
 "Stir in Italian seasoning, the bay leaf, salt and black pepper. Cover and gently simmer about 10 minutes.",
 "Mix in frozen mixed vegetables. Keep simmering another 15–20 minutes until the potatoes are very tender.",
 "Remove bay leaf, taste the tomato-beef broth for seasoning and serve hot."
 ],"Spend With Pennies"),
35:R("One Pot Cheeseburger Pasta",B+"skillet-cheeseburger-pasta/","https://www.budgetbytes.com/wp-content/uploads/2016/04/Cheeseburger-Pasta-close-500x500.jpg",4,30,[
 M("Yellow onion",1,"whole","Produce","finely diced"),M("Ground beef",0.5,"lb","Meat"),
 M("Canned tomato sauce",8,"oz"),M("Beef broth",2,"cups"),
 M("Small shell pasta, uncooked",0.5,"lb"),M("Shredded cheddar",4,"oz","Dairy"),
 M("Green onions (optional)",2,"stalks","Produce","sliced"),
 S("Olive oil",1,"tbsp"),S("All-purpose flour",2,"tbsp"),S("Hot dog relish",2,"tbsp")],[
 "Finely dice the yellow onion. Sauté onion, ground beef and olive oil in a deep skillet until beef is cooked and onion tender.",
 "Sprinkle in the flour and cook one minute while stirring to coat the beef. Do not let the flour scorch.",
 "Pour in canned tomato sauce and beef broth. Stir up any flour stuck on the skillet.",
 "Add dry small pasta shells. Cover and bring to a boil, then turn heat low; simmer around 10 minutes, stirring regularly and replacing the lid each time.",
 "When pasta is tender and sauce has thickened, remove from heat and stir in grated cheddar until melted.",
 "Mix in hot dog relish for a tangy cheeseburger taste. Sprinkle with green onions if desired. This is a PASTA dish, not a cheeseburger on rice."
 ]),
36:R("Creamy Tomato and Spinach Pasta",B+"creamy-tomato-spinach-pasta/","https://www.budgetbytes.com/wp-content/uploads/2020/05/CreamyTomatoSpinachPasta_OverheadPlated-500x500.jpg",4,25,[
 M("Penne pasta",230,"g"),M("Yellow onion",1,"whole","Produce","finely diced"),
 M("Garlic",2,"cloves","Produce","minced"),M("Canned diced tomatoes",14.5,"oz"),
 M("Water",0.5,"cup"),M("Cream cheese",2,"oz","Dairy"),
 M("Grated Parmesan",0.25,"cup","Dairy"),M("Fresh spinach",4,"oz","Produce"),
 S("Olive oil",1,"tbsp"),S("Dried oregano",0.5,"tsp"),S("Dried basil",0.5,"tsp"),
 S("Red pepper flakes",0.125,"tsp"),S("Salt",0.5,"tsp"),S("Black pepper",0.5,"tsp"),
 S("Tomato paste",2,"tbsp")],[
 "Bring a pot of salted water to a boil. Cook the penne according to package timing and drain.",
 "While pasta cooks, sauté finely diced onion and minced garlic in olive oil 3–5 minutes until the onion is tender.",
 "Add canned diced tomatoes with their juices, oregano, basil, red pepper flakes, salt and black pepper.",
 "Stir in tomato paste and half a cup of water. Simmer briefly until evenly mixed.",
 "Lower the heat, add cubed cream cheese and stir until fully melted. Stir in the Parmesan.",
 "Add spinach a handful at a time until wilted, about 2 minutes. Toss in drained penne, coat with sauce and taste before serving."
 ]),
37:R("Classic Baked Ziti",B+"classic-baked-ziti/","https://www.budgetbytes.com/wp-content/uploads/2019/10/Baked-Ziti-mixed-scoop-1200-500x500.jpg",8,65,[
 M("Ground Italian sausage",1,"lb","Meat"),M("Yellow onion",1,"whole","Produce","diced"),
 M("Tomato paste",3,"oz"),M("Crushed tomatoes",28,"oz"),M("Water",0.5,"cup"),
 M("Ziti pasta, dry",1,"lb"),M("Ricotta cheese",15,"oz","Dairy"),
 M("Italian cheese blend",1,"cup","Dairy"),M("Mozzarella, shredded",2,"cups","Dairy"),
 M("Fresh parsley (optional)",1,"handful","Produce","chopped"),
 S("Italian seasoning",1,"tbsp"),S("Salt for pasta water",0.5,"tbsp"),S("Black pepper",0.25,"tsp")],[
 "Brown the Italian sausage in a large skillet until cooked and lightly crispy. Add diced onion and sauté until tender.",
 "Stir in tomato paste, crushed tomatoes, Italian seasoning and half a cup of water. Cover and simmer gently while you make pasta.",
 "Boil ziti in salted water until just tender, then drain thoroughly.",
 "Mix ricotta with the Italian shredded-cheese blend and black pepper. Heat oven to 350°F / 175°C.",
 "Toss cooked pasta with about one cup of red meat sauce. In a 9x13 baking dish layer half the pasta, half the ricotta mixture and half the remaining sauce; repeat layers.",
 "Top with all the shredded mozzarella. Cover loosely with foil and bake around 20 minutes.",
 "Remove foil and broil briefly, roughly 3–5 minutes, until top is golden. Watch closely to prevent burning; garnish with parsley if you like."
 ]),
38:R("One Pot Beef Taco Pasta",B+"beef-taco-pasta/","https://www.budgetbytes.com/wp-content/uploads/2022/02/One-Pot-Taco-Pasta-close-500x500.jpg",6,30,[
 M("Yellow onion",1,"whole","Produce","diced"),M("Garlic",2,"cloves","Produce","minced"),
 M("Ground beef",0.5,"lb","Meat"),M("Diced tomatoes with juices",15,"oz"),
 M("Diced green chiles with juices",4,"oz"),M("Dry small pasta shells",0.5,"lb"),
 M("Beef broth",2,"cups"),M("Cheddar cheese",1,"cup","Dairy","shredded"),
 M("Green onions",2,"stalks","Produce","sliced"),S("Olive oil",1,"tbsp"),
 S("Taco seasoning",1,"packet")],[
 "Sauté diced onion and minced garlic in olive oil in a wide, deep pot over medium heat until tender.",
 "Stir in the ground beef and taco seasoning. Crumble the meat and cook until browned.",
 "Add canned diced tomatoes and green chiles along with their juices.",
 "Add dry pasta shells and beef broth, stir, and bring to a boil. Reduce heat, cover, simmer until pasta is tender, stirring occasionally so it doesn't stick.",
 "When the pasta is tender, turn off heat. Fold in shredded cheddar until the sauce becomes creamy and coats the pasta.",
 "Top with sliced green onions. The published dish contains ground beef; the earlier meatless taco-pasta card was not the same recipe."
 ]),
39:R("One Pot Garlic Parmesan Pasta","https://damndelicious.net/2014/10/11/one-pot-garlic-parmesan-pasta/","https://damndelicious.net/wp-content/uploads/2014/10/IMG_0649edit.jpg",4,30,[
 M("Garlic",4,"cloves","Produce","minced"),M("Chicken broth",2,"cups"),
 M("Milk",1,"cup","Dairy"),M("Uncooked fettuccine",8,"oz"),
 M("Freshly grated Parmesan",0.25,"cup","Dairy"),M("Fresh parsley",2,"tbsp","Produce","chopped"),
 S("Unsalted butter",2,"tbsp"),S("Salt to taste",0.25,"tsp"),S("Black pepper to taste",0.25,"tsp")],[
 "Melt butter in a deep skillet over medium-high and cook minced garlic 1–2 minutes, stirring so it does not brown too much.",
 "Pour in chicken broth and milk and add the uncooked fettuccine.",
 "Bring the liquid to a boil, season with salt and pepper, then turn down to a gentle simmer.",
 "Cook around 18–20 minutes, stirring regularly so the strands separate and don't stick to the bottom.",
 "Once pasta is tender and sauce lightly thickened, stir in grated Parmesan. If needed, add a little extra milk to loosen the sauce.",
 "Serve immediately with chopped parsley. The source recipe uses fettuccine, not another pasta shape."
 ],"Damn Delicious"),
40:R("Classic Tuna Pasta Salad",B+"tuna-pasta-salad-recipe/","https://www.budgetbytes.com/wp-content/uploads/2023/07/tuna-pasta-salad-side-shot1-500x500.jpg",6,20,[
 M("Red onion",0.5,"cup","Produce","finely diced"),M("Frozen peas",1,"cup","Frozen"),
 M("Mini shell pasta",12,"oz"),M("Chunk light tuna",2,"5-oz cans","Pantry","drained"),
 S("Mayonnaise",0.75,"cup"),S("Lemon juice",2,"tbsp"),S("Dried dill",0.25,"tsp"),
 S("Salt",0.75,"tsp"),S("Black pepper",0.25,"tsp")],[
 "Whisk mayonnaise, lemon juice, dried dill, salt and black pepper together to make the dressing.",
 "Finely chop red onion, then set out the frozen peas.",
 "Bring salted water to a boil. Cook shell pasta until almost done, then add peas for the final minute or two.",
 "Drain pasta and peas thoroughly and allow to cool until no longer steaming so hot noodles won't thin the mayonnaise dressing.",
 "Mix the cooled pasta and peas with drained tuna and diced red onion. Gently fold in the prepared dressing.",
 "Chill before serving or enjoy immediately; keep leftovers refrigerated."
 ])
});
})();