/* Published source-backed recipes 41–60; cooking directions paraphrased from credited publishers.
   Image URLs, when available, are publisher-hosted. Do not mistake missing images for an alternative dish. */
(function(){
 const M=(name,q,u,section="Pantry",prep="")=>({name,q,u,section,prep,seasoning:false});
 const S=(name,q,u)=>({name,q,u,section:"Pantry",seasoning:true});
 const B="https://www.budgetbytes.com/";
 const R=(name,url,photo,servings,time,items,steps,source="Budget Bytes",note="")=>({name,url,photo,servings,time,items,steps,source,note});
 Object.assign(window.publishedRecipes,{
41:R("Pasta Primavera",B+"pasta-primavera/","https://www.budgetbytes.com/wp-content/uploads/2023/05/Pasta-Primavera-fork-500x500.jpg",4,30,[
 M("Dry penne pasta",8,"oz"),M("Zucchini",1,"whole","Produce","halved lengthwise and thinly sliced"),M("Yellow squash",1,"whole","Produce","cut into half-moons"),
 M("Carrot",1,"whole","Produce","thinly sliced"),M("Red onion",0.5,"whole","Produce","cut into thin strips"),
 M("Frozen peas",0.5,"cup","Frozen"),M("Grape tomatoes",1,"cup","Produce","halved"),M("Garlic",3,"cloves","Produce","minced"),
 M("Grated Parmesan",0.5,"cup","Dairy"),S("Olive oil",2,"tbsp"),S("Dried oregano",1,"tsp"),S("Salt",0.5,"tsp"),
 S("Black pepper",0.5,"tsp"),S("Lemon juice",2,"tbsp"),S("Butter",2,"tbsp")],[
 "Wash and cut the squash, zucchini, carrot, onion and grape tomatoes as indicated. Mince the garlic so it is ready for the pan.",
 "Boil the penne in salted water until al dente. Before draining, reserve ½ cup of pasta cooking water to help the sauce cling.",
 "Heat olive oil in a wide skillet over medium. Sauté onion and carrots about 2 minutes, then add zucchini and yellow squash for another 2 minutes.",
 "Add garlic, peas and tomatoes. Sprinkle with oregano, salt and pepper; stir 1–2 minutes, keeping the vegetables lightly crisp.",
 "Take the pan off the heat. Mix in butter and lemon juice, then add drained penne, Parmesan and ¼ cup of reserved pasta water.",
 "Toss until coated with the light lemon-butter sauce, adding more pasta water if dry. Serve warm."
 ]),
42:R("Creamy Tomato Pasta with Sausage",B+"creamy-tomato-pasta-with-sausage/","https://www.budgetbytes.com/wp-content/uploads/2021/01/Creamy-Tomato-Pasta-with-Sausage-front-500x500.jpg",4,35,[
 M("Italian sausage",0.5,"lb","Meat","hot, mild or sweet; remove casing if needed"),M("Garlic",2,"cloves","Produce","minced"),
 M("Crushed tomatoes",28,"oz"),M("Water",0.5,"cup"),M("Dry pasta",0.5,"lb"),M("Heavy cream",0.333,"cup","Dairy"),M("Fresh spinach",4,"oz","Produce"),
 S("Tomato paste",2,"tbsp"),S("Italian seasoning",1,"tsp")],[
 "Brown sausage in a deep skillet over medium heat, breaking it into small pieces. Stir in minced garlic for another minute.",
 "Add tomato paste, crushed tomatoes, Italian seasoning and water, scraping browned bits from the skillet. Stir until combined.",
 "Partly cover to prevent splatters and simmer sauce over medium-low while you prepare the pasta.",
 "Boil dry pasta in water until al dente, usually around 7–10 minutes depending on its shape; drain.",
 "Stir heavy cream into the simmered tomato sauce, then add fresh spinach and gently cook just until it wilts.",
 "Fold in the drained pasta until all the pieces are coated with creamy tomato-sausage sauce."
 ]),
43:R("One Pot Creamy Pesto Chicken Pasta",B+"one-pot-creamy-pesto-chicken-pasta/","https://www.budgetbytes.com/wp-content/uploads/2019/10/Creamy-Pesto-Chicken-Pasta-close-plate-500x500.jpg",4,25,[
 M("Boneless skinless chicken breast",1,"lb","Meat","cut into 1-inch cubes"),M("Garlic",2,"cloves","Produce","minced"),
 M("Dry penne pasta",0.5,"lb"),M("Chicken broth",1.5,"cups"),M("Milk",1,"cup","Dairy"),M("Cream cheese",3,"oz","Dairy","cubed"),
 M("Basil pesto",0.333,"cup"),M("Grated Parmesan",0.25,"cup","Dairy"),
 M("Fresh spinach (optional)",3,"cups","Produce"),M("Sun-dried tomatoes (optional)",0.25,"cup","Produce","sliced"),
 S("Butter",2,"tbsp"),S("Cracked black pepper",0.25,"tsp"),S("Crushed red pepper",1,"pinch")],[
 "Cut the chicken breast into even cubes. Melt butter in a covered skillet over medium heat; brown the chicken on the outside.",
 "Add minced garlic and sauté one minute. Pour in dry penne and chicken broth, scraping any browned bits from the pan.",
 "Cover and bring the broth to a boil, then lower to a gentle simmer for about 8 minutes, stirring every couple of minutes until penne is tender.",
 "Stir in the cubed cream cheese, pesto and milk over medium-low heat until the cheese dissolves and the sauce becomes smooth.",
 "Add Parmesan and stir. If using spinach and sun-dried tomatoes, fold them in and cook just until the spinach wilts.",
 "Finish with black pepper and a pinch of red pepper. Check the chicken reaches 74°C / 165°F before serving."
 ]),
44:R("One Pot Bacon Broccoli Mac and Cheese",B+"one-pot-bacon-broccoli-mac-cheese/","",4,45,[
 M("Frozen broccoli florets",0.5,"lb","Frozen","thawed and chopped small"),M("Bacon",4,"oz","Meat","cut into small pieces"),
 M("Medium cheddar",8,"oz","Dairy","shredded"),M("Dry short pasta",0.5,"lb"),M("Evaporated milk",1,"cup","Dairy"),
 S("Smoked paprika",0.5,"tsp"),S("Hot sauce",0.5,"tsp"),S("Dijon mustard",0.5,"tsp"),S("Salt",0.25,"tsp")],[
 "Thaw broccoli and chop it into small bites. Shred cheddar and cut bacon into small strips.",
 "Boil the pasta according to package instructions. Drain and keep nearby.",
 "Return the pot to the heat and cook bacon until browned and crisp, about five minutes. Scoop bacon out but keep rendered fat in the pot.",
 "Stir evaporated milk, paprika, hot sauce, Dijon mustard and salt into the pot; heat through, then turn burner to low.",
 "Add shredded cheddar a handful at a time, stirring until each addition has melted completely into a smooth sauce.",
 "Return broccoli, pasta and cooked bacon to the cheese sauce. Mix well and serve immediately."
 ]),
45:R("Lemon Ricotta Pasta with Peas",B+"lemon-ricotta-pasta/","",4,30,[
 M("Lemon",1,"whole","Produce","zest and juice"),M("Dry short pasta",8,"oz"),M("Frozen peas",1,"cup","Frozen"),
 M("Garlic",1,"clove","Produce","minced"),M("Whole milk ricotta",1,"cup","Dairy"),M("Grated Parmesan",0.25,"cup","Dairy"),
 S("Butter",1,"tbsp"),S("Salt",0.25,"tsp"),S("Black pepper",0.25,"tsp"),S("Crushed red pepper",1,"pinch")],[
 "Zest and juice the lemon, keeping about ½ teaspoon zest and one tablespoon juice.",
 "Cook pasta in boiling water until tender. Reserve a cup of the cooking water and place frozen peas in the colander.",
 "Drain hot pasta over the peas to thaw them without cooking them into mush.",
 "In a skillet, melt butter and cook minced garlic 1–2 minutes until fragrant. Add drained pasta and peas with about ½ cup of hot cooking water.",
 "Take the pan off the heat, then mix in ricotta, Parmesan, lemon zest and lemon juice. Toss to make a light creamy sauce.",
 "Add reserved water by spoonfuls if needed, then season with salt, black pepper and crushed red pepper."
 ]),
46:R("Skillet Pizza Casserole",B+"skillet-pizza-casserole/","",6,45,[
 M("Ground Italian sausage",1,"lb","Meat"),M("Yellow onion",1,"small","Produce","diced"),M("Green bell pepper",1,"whole","Produce","diced"),
 M("Mushrooms",8,"oz","Produce","sliced"),M("Garlic",3,"cloves","Produce","minced"),M("Dry rotini pasta",8,"oz"),
 M("Pasta sauce",24,"oz"),M("Water",1,"cup"),M("Shredded mozzarella",1.5,"cups","Dairy"),
 M("Pepperoni",25,"slices","Meat"),M("Black olives",0.25,"cup","Pantry","sliced"),
 S("Italian seasoning",1,"tsp"),S("Red pepper flakes (optional)",0.25,"tsp"),S("Salt",0.25,"tsp"),S("Black pepper",0.25,"tsp")],[
 "Preheat oven to 375°F / 190°C. Use a deep oven-safe skillet large enough to hold the pasta.",
 "Cook Italian sausage over medium heat for about 5–7 minutes, crumbling it as it browns.",
 "Add onion, bell pepper, mushrooms and minced garlic. Cook about five minutes until the vegetables soften.",
 "Stir in uncooked rotini, pasta sauce, water, Italian seasoning and both peppers. Push pasta under the sauce.",
 "Cover and simmer gently 10–12 minutes, stirring occasionally, until rotini is nearly tender.",
 "Scatter mozzarella, pepperoni and black olives over the top. Bake uncovered 10–15 minutes until cheese is melted and bubbling. Rest five minutes before serving."
 ]),
47:R("Cheesy Tomato Basil Baked Orzo","https://www.howsweeteats.com/2022/05/tomato-basil-baked-orzo/","",6,45,[
 M("Orzo pasta, dry",16,"oz"),M("Garlic",2,"cloves","Produce","minced"),M("Chicken or vegetable stock",2,"cups"),
 M("Marinara sauce",1,"cup"),M("Shredded mozzarella or Italian cheese blend",1.5,"cups","Dairy"),
 M("Fresh basil, for serving",0.25,"cup","Produce"),M("Parmesan for serving",0.25,"cup","Dairy"),
 S("Unsalted butter",3,"tbsp"),S("Dried basil",0.5,"tsp"),S("Salt",0.5,"tsp"),S("Black pepper",0.25,"tsp"),S("Crushed red pepper (optional)",0.25,"tsp")],[
 "Heat oven to 375°F / 190°C. Melt butter in a deep, ovenproof skillet.",
 "Add minced garlic, dry orzo, dried basil and the salt and pepper. Stir a couple minutes so the orzo lightly toasts.",
 "Pour in 1½ cups stock and the marinara, mix, then put the uncovered skillet in the oven for 12–15 minutes.",
 "Take the skillet out carefully. Stir in the last ½ cup stock and one cup of shredded cheese.",
 "Sprinkle remaining cheese over the orzo. Return to the oven and bake about 10 more minutes until cooked and melted.",
 "Garnish with fresh basil, Parmesan and crushed red pepper if desired. This dish is baked orzo, not tomato soup."
 ],"How Sweet Eats"),
48:R("Gnocchi with Sausage and Fall Vegetables",B+"gnocchi-with-sausage-and-fall-vegetables/","",4,50,[
 M("Shelf-stable potato gnocchi, uncooked",16,"oz"),M("Brussels sprouts",1,"lb","Produce","trimmed and halved"),
 M("Red onion",1,"medium","Produce","sliced thickly"),M("Carrots",3,"whole","Produce","chopped"),
 M("Fully cooked smoked sausage",14,"oz","Meat","cut into ½-inch rounds"),M("Parmesan",0.5,"cup","Dairy","grated"),
 S("Vegetable oil",2,"tbsp"),S("Salt",1,"tsp"),S("Black pepper",0.5,"tsp"),S("Garlic powder",1,"tsp"),
 S("Smoked paprika",1,"tsp"),S("Dried thyme",1,"tsp")],[
 "Heat oven to 450°F / 230°C and line a large sheet pan.",
 "Halve Brussels sprouts, cut red onion into thick slices, chop carrots and cut fully cooked sausage into rounds.",
 "In a large bowl mix raw shelf-stable gnocchi, vegetables, sausage, oil, salt, pepper, garlic powder, smoked paprika and thyme.",
 "Spread everything on the sheet pan in as close to one layer as possible. Do not pre-boil the gnocchi.",
 "Roast 30–35 minutes until carrots are tender and sausage and gnocchi have golden edges.",
 "Divide between bowls and scatter freshly grated Parmesan over the hot gnocchi."
 ]),
49:R("Easy Spaghetti Carbonara",B+"spaghetti-carbonara/","",6,25,[
 M("Bacon",3,"oz","Meat","chopped into small pieces"),M("Garlic",2,"cloves","Produce","minced"),M("Dry spaghetti",12,"oz"),
 M("Large eggs",3,"whole","Dairy"),M("Grated Parmesan",0.75,"cup","Dairy","divided"),
 M("Fresh parsley (optional)",0.25,"cup","Produce","chopped"),S("Black pepper",0.5,"tsp"),S("Salt",0.5,"tsp")],[
 "Bring lightly salted water to a boil for the spaghetti. Cook chopped bacon in a skillet over medium-low until crisp.",
 "Remove bacon, briefly soften the minced garlic in the skillet and switch off the heat.",
 "In a bowl whisk three eggs with ½ cup Parmesan and a generous pinch of pepper.",
 "Cook spaghetti until al dente. Reserve one cup pasta water before draining.",
 "Add ¼ cup warm pasta water to the garlic pan, scraping up browned bacon bits. Toss in the steaming pasta.",
 "Away from direct heat, quickly stir the egg-Parmesan mixture through the pasta until glossy and creamy (do not let eggs scramble). Add bacon, remaining Parmesan and more cooking water if needed.",
 "Season to taste and top with parsley if desired. No heavy cream is used in this source recipe."
 ]),
50:R("Creamy Cajun Sausage Pasta","https://cookingwithcasey.com/recipes/cajun-sausage-pasta","",4,25,[
 M("Dry pasta",300,"g"),M("Pork or beef sausage",450,"g","Meat","casings removed as needed"),
 M("Shallot",1,"large","Produce","finely diced"),M("Pointed red bell pepper",1,"whole","Produce","thinly sliced"),
 M("Garlic",2,"cloves","Produce","minced"),M("Reduced-fat cream cheese",100,"g","Dairy"),
 M("Grated Parmesan",30,"g","Dairy"),M("Fresh parsley",2,"tbsp","Produce","chopped"),
 S("Olive oil",1,"tbsp"),S("Dried oregano",0.5,"tbsp"),S("Cajun seasoning",3,"tbsp"),
 S("Tomato paste",2,"tbsp"),S("Salt",0.25,"tsp"),S("Black pepper",0.25,"tsp")],[
 "Boil the pasta in salted water according to its package. Reserve two cups of hot pasta water, then drain.",
 "Heat olive oil in a wide pan. Crumble in sausage and cook 4–5 minutes until browned and cooked through.",
 "Add finely chopped shallot and sliced red pepper; sauté until softened.",
 "Mix in minced garlic, oregano and Cajun seasoning. Cook for about one minute to release the spices.",
 "Add tomato paste and roughly one cup of pasta water; stir the browned bits into the sauce. Melt in the cream cheese.",
 "Toss the cooked pasta in the sauce, adding reserved cooking water as needed. Finish with Parmesan, parsley, salt and pepper."
 ],"Cooking with Casey"),
51:R("Hearty Black Bean Quesadillas",B+"hearty-black-bean-quesadillas/","",10,15,[
 M("Black beans",1,"15-oz can","Pantry","drained and rinsed"),M("Frozen corn",1,"cup","Frozen"),
 M("Red onion",0.5,"cup","Produce","finely diced"),M("Garlic",1,"clove","Produce","minced"),
 M("Fresh cilantro",0.5,"cup","Produce","chopped"),M("Shredded cheddar",2,"cups","Dairy"),
 M("Flour tortillas (7-inch)",10,"tortillas","Bakery"),
 S("Taco seasoning (one batch or packet)",1,"packet")],[
 "Drain and rinse the black beans. Add the beans and still-frozen corn to a large bowl.",
 "Chop red onion and cilantro and mince garlic. Mix all into the beans.",
 "Stir in cheddar and the packet of taco seasoning until the filling is distributed evenly.",
 "Put about ½ cup of the mixture on half of each tortilla and fold in two.",
 "Heat a dry skillet over medium. Toast each quesadilla until brown on one side, then flip to brown the other and completely melt the cheese.",
 "Cut into wedges and serve warm. For freezing, store the filled uncooked tortillas with parchment between layers."
 ]),
52:R("Coconut Curry Chickpeas",B+"coconut-curry-chickpeas/","",4,30,[
 M("Yellow onion",1,"whole","Produce","diced"),M("Garlic",2,"cloves","Produce","minced"),
 M("Fresh ginger",1,"tsp","Produce","grated"),M("Chickpeas",2,"15-oz cans","Pantry","drained"),
 M("Tomato sauce",8,"oz"),M("Full-fat coconut milk",13.5,"oz"),
 M("Kale",4,"oz","Produce","chopped"),S("Curry powder",1.5,"tbsp"),S("Ground cumin",1,"tsp"),
 S("Olive oil",2,"tbsp"),S("Salt to taste",0.5,"tsp")],[
 "Dice onion, mince garlic, grate ginger and chop kale before starting.",
 "In a large dry skillet over medium-low heat, gently toast curry powder and cumin for one minute.",
 "Add olive oil, onion, garlic and ginger and cook about five minutes, until the onion turns soft.",
 "Drain canned chickpeas and add to the pan along with tomato sauce and full-fat coconut milk.",
 "Bring to a gentle simmer and cook over medium-low for 15 minutes, stirring occasionally.",
 "Stir in chopped kale and simmer a few minutes more until wilted. Taste and salt as needed. Rice or naan is an optional side, not included in the listed ingredients."
 ]),
53:R("Lentil Tacos",B+"lentil-tacos/","",8,50,[
 M("Dry brown lentils",2,"cups"),M("Small yellow onion",1,"whole","Produce","diced"),
 M("Garlic",2,"cloves","Produce","minced"),M("Small corn tortillas",16,"tortillas","Bakery"),
 M("Pico de gallo",1,"batch","Produce","store-bought or homemade, for topping"),
 M("Sour cream",8,"oz","Dairy"),M("Small avocados",2,"whole","Produce","sliced"),
 S("Olive oil",2,"tbsp"),S("Taco seasoning with cornstarch",1,"packet"),S("Salt",1,"tsp")],[
 "Rinse brown lentils and bring three cups of water to a boil. Add lentils, cover, and simmer about 20 minutes until tender but not falling apart; drain.",
 "While lentils cook, prepare pico de gallo and sliced avocado, and set out sour cream.",
 "Toast the corn tortillas in a dry skillet over medium heat until lightly marked but still pliable.",
 "In a wide skillet, cook diced onion and minced garlic in olive oil until soft.",
 "Add drained lentils, taco seasoning and about ½ cup of water; stir over medium heat 3–5 minutes until mixture thickens. Add salt to taste.",
 "Fill tortillas with roughly ¼ cup seasoned lentils, then top with pico, sour cream and avocado. For authentic source results, use brown lentils rather than red."
 ],"Budget Bytes","The original uses a batch of homemade taco seasoning and pico de gallo. A packet of taco seasoning containing cornstarch and ready-made pico are convenient ingredient equivalents; follow source links for homemade versions."),
54:R("Bean and Cheese Burritos",B+"make-ahead-bean-and-cheese-burritos/","",8,50,[
 M("Garlic",1,"clove","Produce","minced"),M("Dry long-grain white rice",1,"cup"),M("Water",1.5,"cups"),
 M("Black beans",2,"15-oz cans","Pantry","rinsed and drained"),M("Shredded cheddar",2,"cups","Dairy"),
 M("Green onions",2,"stalks","Produce","sliced"),M("Taco sauce",0.5,"cup"),
 M("Large flour tortillas",8,"tortillas","Bakery"),
 S("Cooking oil",1,"tbsp"),S("Chili powder",1,"tsp"),S("Ground cumin",0.25,"tsp"),
 S("Dried oregano",0.25,"tsp"),S("Salt",0.5,"tsp")],[
 "In a covered saucepan, warm oil with minced garlic for one minute. Stir in chili powder, cumin, oregano and dry rice.",
 "Toast rice for roughly two minutes, stirring, then add water and salt. Bring to a boil, cover and cook on low 15 minutes; rest off heat for five minutes and fluff.",
 "While rice cooks, drain beans and slice green onions.",
 "Warm tortillas briefly so they bend without cracking.",
 "For each tortilla, spoon in about ⅓ cup seasoned rice, ⅓ cup black beans, 1 tablespoon taco sauce, ¼ cup cheddar and a few green onion slices.",
 "Fold both ends toward the filling and roll tightly into burritos. Brown in a skillet to melt the cheese, or wrap and chill/freeze for later. Reheat thoroughly."
 ]),
55:R("Sweet Potato Grain Bowls with Green Tahini Sauce",B+"sweet-potato-grain-bowls-green-tahini-sauce/","",4,50,[
 M("Uncooked bulgur wheat",1,"cup"),M("Water for bulgur",2,"cups"),M("Sweet potatoes",2,"lb","Produce","peeled and cubed"),
 M("Black beans",1,"15-oz can","Pantry","drained and rinsed"),M("Avocado",1,"whole","Produce","sliced"),
 M("Jalapeño",1,"whole","Produce","sliced"),M("Pepitas",0.25,"cup"),M("Fresh cilantro",1,"cup","Produce"),
 M("Fresh parsley",1,"cup","Produce"),M("Fresh lemon juice",0.25,"cup"),M("Garlic",1,"clove","Produce"),
 M("Water for tahini sauce",0.333,"cup"),S("Olive oil",2,"tbsp"),S("Salt and pepper for potatoes",1,"pinch"),
 S("Tahini",0.333,"cup"),S("Ground cumin",0.5,"tsp"),S("Cayenne pepper",0.25,"tsp"),S("Salt for tahini",0.5,"tsp")],[
 "Toast dry bulgur in a saucepan over medium for about 2 minutes; add two cups of water, bring to a boil and simmer covered about 12 minutes. Rest five minutes, fluff and allow to cool.",
 "Heat oven to 400°F / 205°C. Peel and dice sweet potatoes into ¾-inch cubes.",
 "Toss sweet potato in olive oil with a pinch of salt and pepper. Roast on a baking sheet 20 minutes, toss, then bake approximately 10 minutes more until tender.",
 "Blend tahini with ⅓ cup water, lemon juice, garlic, cumin, cayenne, salt, cilantro and parsley until smooth and light green.",
 "Slice avocado and jalapeño and drain black beans.",
 "Divide cooled bulgur into four bowls. Add roasted sweet potatoes, beans, avocado, jalapeño and pepitas. Drizzle generously with the green tahini sauce."
 ]),
56:R("Vegetarian Chili",B+"vegetarian-chili/","",6,40,[
 M("Yellow onion",1,"whole","Produce","diced"),M("Garlic",3,"cloves","Produce","minced"),
 M("Green bell pepper",1,"whole","Produce","diced"),M("Tomato paste",6,"oz"),M("Diced tomatoes",28,"oz"),
 M("Fire-roasted green chiles",4,"oz"),M("Molasses",2,"tbsp"),M("Water",1,"cup"),
 M("Kidney beans",1,"15-oz can","Pantry","rinsed"),M("Black beans",1,"15-oz can","Pantry","rinsed"),
 M("Pinto beans",1,"15-oz can","Pantry","rinsed"),M("Corn kernels",1,"15-oz can","Pantry","drained"),
 S("Olive oil",2,"tbsp"),S("Chili powder",1,"tbsp"),S("Ground cumin",2,"tsp"),S("Cayenne pepper",0.25,"tsp"),
 S("Garlic powder",0.25,"tsp"),S("Onion powder",0.5,"tsp"),S("Black pepper",0.5,"tsp"),S("Salt",1,"tsp")],[
 "Finely dice onion and bell pepper and mince garlic.",
 "Heat an empty soup pot over medium-low; toast chili powder, cumin, cayenne, garlic powder, onion powder and black pepper about 2 minutes.",
 "Add olive oil, onion, pepper, garlic and salt. Cook 4–6 minutes until vegetables begin to soften.",
 "Stir in tomato paste, diced tomatoes and their juices, green chiles, molasses and one cup of water. Simmer five minutes.",
 "Rinse all three types of beans and drain corn, then stir them into the pot.",
 "Cover and gently simmer 20–25 minutes until vegetables are tender and the chili becomes thick. Adjust salt to taste."
 ]),
57:R("Vegan Red Lentil Stew",B+"vegan-red-lentil-stew/","",6,50,[
 M("Yellow onion",1,"medium","Produce","diced"),M("Garlic",2,"cloves","Produce","minced"),
 M("Tomato paste",3,"oz"),M("Dry red lentils",1,"cup","Pantry","rinsed"),
 M("Carrots",0.5,"lb","Produce","diced"),M("Potato",1,"medium","Produce","diced"),
 M("Vegetable broth",6,"cups"),S("Olive oil",2,"tbsp"),S("Ground cumin",1,"tbsp"),
 S("Smoked paprika",1,"tsp"),S("Salt",0.75,"tsp"),S("Cayenne pepper",0.125,"tsp")],[
 "Chop the onion and mince garlic. Sauté both in olive oil over medium for about five minutes.",
 "Mix tomato paste into the aromatics and cook 3–4 minutes, stirring, so it darkens slightly.",
 "Peel and dice carrots and potato and rinse the dry red lentils in a fine sieve.",
 "Add lentils, carrots, potato, broth, cumin, smoked paprika and cayenne to the pot.",
 "Cover, bring to a boil and immediately reduce heat to low. Simmer around 30 minutes until lentils soften into the broth and vegetables are tender.",
 "Stir well, add salt and adjust to taste. Expect a thick hearty stew rather than a clear lentil soup."
 ]),
58:R("Tuscan White Bean Pasta",B+"tuscan-white-bean-pasta/","",4,30,[
 M("Dry linguine or fettuccine",8,"oz"),M("Garlic",3,"cloves","Produce","minced"),
 M("Grape tomatoes",1,"pint","Produce"),M("Cannellini beans",1,"15-oz can","Pantry","rinsed and drained"),
 M("Baby spinach",4,"oz","Produce"),M("Shredded Parmesan",3,"oz","Dairy"),
 S("Olive oil",1,"tbsp"),S("Butter",1,"tbsp"),S("Black pepper",0.25,"tsp"),
 S("Salt",0.5,"tsp"),S("Dried basil",0.5,"tsp")],[
 "Boil linguine or fettuccine according to package directions; drain.",
 "Mince garlic, then gently cook in olive oil and butter over medium-low for 1–2 minutes.",
 "Add whole grape tomatoes, salt, pepper and dried basil. Continue sautéing until tomato skins burst and their juice makes a loose sauce.",
 "Add spinach and cook until partly wilted, then mix in drained cannellini beans.",
 "Warm beans fully and taste the tomato base for seasoning; it should be flavorful enough to season the pasta.",
 "Fold in cooked noodles and top with shredded Parmesan. This is fresh tomato-white bean pasta, not a jarred red sauce."
 ]),
59:R("Sriracha Chickpea Salad Wraps",B+"sriracha-chickpea-salad-wraps/","",2,15,[
 M("Chickpeas",1,"15-oz can","Pantry","drained"),M("Mayonnaise",0.333,"cup"),M("Fresh cilantro",2,"tbsp","Produce","chopped"),
 M("Lemon juice",1,"tsp"),M("Large flour tortillas",2,"tortillas","Bakery"),
 M("Fresh spinach",2,"cups","Produce"),M("Carrot",1,"whole","Produce","shredded"),
 M("Bell pepper",0.5,"whole","Produce","sliced"),
 S("Sriracha",1.5,"tbsp"),S("Salt",0.125,"tsp")],[
 "Drain the chickpeas and place in a bowl. Mash them roughly with a fork.",
 "Stir in mayonnaise, sriracha, cilantro, lemon juice and salt. Taste and adjust sriracha gradually if you prefer less heat.",
 "Shred the carrot and cut bell pepper into thin strips.",
 "Lay out the tortillas and distribute one cup of spinach across each.",
 "Top with carrot, pepper and half the chickpea salad filling each.",
 "Fold sides inward and roll into wraps. Serve cold or keep chilled until ready to eat."
 ]),
60:R("Loaded Baked Potatoes","https://www.spendwithpennies.com/loaded-baked-potatoes/","",8,110,[
 M("Baking potatoes",4,"medium","Produce","scrubbed"),M("Sour cream",0.25,"cup","Dairy"),
 M("Shredded cheddar for filling",0.5,"cup","Dairy"),M("Parmesan",0.25,"cup","Dairy"),
 M("Green onions",2,"stalks","Produce","sliced"),M("Cooked bacon",4,"slices","Meat","crumbled"),
 M("Shredded cheddar for topping",0.5,"cup","Dairy"),
 S("Olive oil",1,"tsp"),S("Salt",0.5,"tsp"),S("Black pepper",0.5,"tsp"),
 S("Butter",2,"tbsp"),S("Garlic powder",0.5,"tsp")],[
 "Preheat oven to 375°F / 190°C. Scrub potatoes, prick the skins with a fork and rub in olive oil and a little salt.",
 "Bake potatoes directly on an oven rack for 50–60 minutes until tender when pierced; then let cool enough to handle, about 20 minutes.",
 "Cut lengthwise in half and scoop the soft insides into a bowl, leaving a thin layer in each potato skin.",
 "Mash the potato flesh with sour cream, melted butter, garlic powder, salt and black pepper.",
 "Mix cheddar, Parmesan, sliced green onions and crumbled cooked bacon into the mash.",
 "Fill each of the eight potato skins with the mixture, top with the remaining cheddar and bake another 15–20 minutes until heated through and melted."
 ],"Spend With Pennies")
});
const sourcePhotos={
 "44": "https://www.budgetbytes.com/wp-content/uploads/2017/05/One-Pot-Bacon-Broccoli-Mac-and-Cheese-above-500x500.jpg",
 "45": "https://www.budgetbytes.com/wp-content/uploads/2022/06/Lemon-Ricotta-Pasta-bowl-500x500.jpg",
 "46": "https://www.budgetbytes.com/wp-content/uploads/2026/07/Skillet-Pizza-Casserole-Overhead-Wide-500x500.jpg",
 "47": "https://www.howsweeteats.com/wp-content/uploads/2022/05/baked-tomato-basil-orzo-10.jpg",
 "48": "https://www.budgetbytes.com/wp-content/uploads/2026/09/Gnocchi-With-Sausage-and-Fall-Vegetables-Overhead-Wide-500x500.jpg",
 "49": "https://www.budgetbytes.com/wp-content/uploads/2016/05/Spaghetti-Carbonara-Plated-300x300.jpg",
 "50": "https://cookingwithcasey.com/assets/images/1737402697831-uwnayknz.webp",
 "51": "https://www.budgetbytes.com/wp-content/uploads/2012/02/Hearty-Black-Bean-Quesadillas-stack-500x500.jpg",
 "52": "https://www.budgetbytes.com/wp-content/uploads/2023/08/Coconut-Curry-Chickpeas-Overhead-Plated-500x500.jpg",
 "53": "https://www.budgetbytes.com/wp-content/uploads/2012/04/LentilTacosclose.jpg",
 "54": "https://www.budgetbytes.com/wp-content/uploads/2018/07/Make-Ahead-Bean-and-Cheese-Burritos-front-500x500.jpg",
 "55": "https://www.budgetbytes.com/wp-content/uploads/2017/05/Sweet-Potato-Grain-Bowls-with-Green-Tahini-Sauce-prep-500x500.jpg",
 "56": "https://www.budgetbytes.com/wp-content/uploads/2025/10/Overhead-in-Bowl-With-Spoon-Vegetarian-Chili-500x500.jpg",
 "57": "https://www.budgetbytes.com/wp-content/uploads/2012/11/RedLentilStewabove.jpg",
 "58": "https://www.budgetbytes.com/wp-content/uploads/2010/06/Tuscan-White-Bean-Pasta-bowl-500x500.jpg",
 "59": "https://www.budgetbytes.com/wp-content/uploads/2019/01/Open-Sriracha-Chickpea-Salad-Wrap-500x500.jpg",
 "60": "https://www.spendwithpennies.com/wp-content/uploads/2022/10/1200-Loaded-Baked-Potatoes-SpendWithPennies-500x500.jpg"
};
Object.entries(sourcePhotos).forEach(([id,url])=>{if(window.publishedRecipes[id])window.publishedRecipes[id].photo=url});

})();