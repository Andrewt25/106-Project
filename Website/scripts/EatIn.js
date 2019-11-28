// Line 26 - 33: https://stackoverflow.com/questions/28830982/how-do-i-append-a-button-to-a-li-javascript/28831176

var ingredients = new Set([]);

function verifyIngredients(fridgeItem) {
  if (ingredients.has(fridgeItem) == false) {
    ingredients.add(fridgeItem);
    console.log(ingredients);
    return true;
  }
  return false;
}

function getIngredient() {
  if (
    verifyIngredients(document.getElementById("fridgeInputField").value) == true
  ) {
    displayNewIngregient();
  } else {
    alert("Item already exists");
  }
  document.getElementById("fridgeInputField").value = "";
}

function set2string() {
  let ingredientsString = "";
  for (let ingredient of ingredients) {
    ingredientsString += ingredient + "%2C";
  }
  ingredientsString = ingredientsString.substring(
    0,
    ingredientsString.length - 3
  );
  console.log(ingredientsString);
  return ingredientsString;
}

// Event listener for when user presses listen
document
  .getElementById("fridgeInputField")
  .addEventListener("keypress", function onEvent(event) {
    if (event.key === "Enter") {
      getIngredient();
    }
  });

function displayNewIngregient() {
  var ul = document.getElementById("list");
  var li = document.createElement("li");
  var button = document.createElement("button");
  button.setAttribute("id", document.getElementById("fridgeInputField").value);
  button.setAttribute("onclick", "ingredientOptions(this.id);");
  button.innerHTML = document.getElementById("fridgeInputField").value;
  li.setAttribute("id", document.getElementById("fridgeInputField").value);
  li.appendChild(button);
  ul.appendChild(li);
}

// currently just deletes the ingredient
function ingredientOptions(oneIngredient) {
  //delete ingredient
  var deleteIngr = confirm("Would you like to delete the ingredient?");
  if (deleteIngr == true) {
    var li = document.getElementById(oneIngredient);
    li.parentNode.removeChild(li);
    ingredients.delete(oneIngredient);
    console.log(ingredients);
  }
}

//test Json
var jsonObj = [
  {
    id: 73420,
    image: "https://spoonacular.com/recipeImages/73420-312x231.jpg",
    imageType: "jpg",
    likes: 0,
    missedIngredientCount: 3,
    missedIngredients: [
      {
        aisle: "Baking",
        amount: 1.0,
        id: 18371,
        image:
          "https://spoonacular.com/cdn/ingredients_100x100/white-powder.jpg",
        metaInformation: [],
        name: "baking powder",
        original: "1 tsp baking powder",
        originalName: "baking powder",
        originalString: "1 tsp baking powder",
        unit: "tsp",
        unitLong: "teaspoon",
        unitShort: "tsp"
      },
      {
        aisle: "Spices and Seasonings",
        amount: 1.0,
        id: 2010,
        image: "https://spoonacular.com/cdn/ingredients_100x100/cinnamon.jpg",
        metaInformation: [],
        name: "cinnamon",
        original: "1 tsp cinnamon",
        originalName: "cinnamon",
        originalString: "1 tsp cinnamon",
        unit: "tsp",
        unitLong: "teaspoon",
        unitShort: "tsp"
      },
      {
        aisle: "Milk, Eggs, Other Dairy",
        amount: 1.0,
        id: 1123,
        image: "https://spoonacular.com/cdn/ingredients_100x100/egg.png",
        metaInformation: [],
        name: "egg",
        original: "1 egg",
        originalName: "egg",
        originalString: "1 egg",
        unit: "",
        unitLong: "",
        unitShort: ""
      }
    ],
    title: "Apple Or Peach Strudel",
    unusedIngredients: [],
    usedIngredientCount: 1,
    usedIngredients: [
      {
        aisle: "Produce",
        amount: 6.0,
        id: 9003,
        image: "https://spoonacular.com/cdn/ingredients_100x100/apple.jpg",
        metaInformation: [],
        name: "apples",
        original: "6 large baking apples",
        originalName: "baking apples",
        originalString: "6 large baking apples",
        unit: "large",
        unitLong: "larges",
        unitShort: "large"
      }
    ]
  },
  {
    id: 632660,
    image: "https://spoonacular.com/recipeImages/632660-312x231.jpg",
    imageType: "jpg",
    likes: 3,
    missedIngredientCount: 4,
    missedIngredients: [
      {
        aisle: "Milk, Eggs, Other Dairy",
        amount: 1.5,
        extendedName: "unsalted butter",
        id: 1001,
        image:
          "https://spoonacular.com/cdn/ingredients_100x100/butter-sliced.jpg",
        metaInformation: ["unsalted", "cold"],
        name: "butter",
        original: "1 1/2 sticks cold unsalted butter cold unsalted butter<",
        originalName: "cold unsalted butter cold unsalted butter<",
        originalString:
          "1 1/2 sticks cold unsalted butter cold unsalted butter<",
        unit: "sticks",
        unitLong: "sticks",
        unitShort: "sticks"
      },
      {
        aisle: "Produce",
        amount: 4.0,
        id: 1079003,
        image:
          "https://spoonacular.com/cdn/ingredients_100x100/red-delicious-apples.png",
        metaInformation: [
          "red",
          " such as golden delicious, peeled, cored and cut into 1/4-inch-thick slices "
        ],
        name: "red apples",
        original:
          "4 larges red apples, such as Golden Delicious, peeled, cored and cut into 1/4-inch-thick slices",
        originalName:
          "s red apples, such as Golden Delicious, peeled, cored and cut into 1/4-inch-thick slices",
        originalString:
          "4 larges red apples, such as Golden Delicious, peeled, cored and cut into 1/4-inch-thick slices",
        unit: "large",
        unitLong: "larges",
        unitShort: "large"
      },
      {
        aisle: "Spices and Seasonings",
        amount: 2.0,
        id: 2010,
        image: "https://spoonacular.com/cdn/ingredients_100x100/cinnamon.jpg",
        metaInformation: [],
        name: "cinnamon",
        original: "2 teaspoons cinnamon",
        originalName: "cinnamon",
        originalString: "2 teaspoons cinnamon",
        unit: "teaspoons",
        unitLong: "teaspoons",
        unitShort: "tsp"
      },
      {
        aisle: "Nut butters, Jams, and Honey",
        amount: 2.0,
        id: 19719,
        image:
          "https://spoonacular.com/cdn/ingredients_100x100/apricot-jam.jpg",
        metaInformation: ["melted"],
        name: "apricot preserves",
        original: "2 tablespoons apricot preserves, melted and strained",
        originalName: "apricot preserves, melted and strained",
        originalString: "2 tablespoons apricot preserves, melted and strained",
        unit: "tablespoons",
        unitLong: "tablespoons",
        unitShort: "Tbsp"
      }
    ],
    title: "Apricot Glazed Apple Tart",
    unusedIngredients: [
      {
        aisle: "Produce",
        amount: 1.0,
        id: 9003,
        image: "https://spoonacular.com/cdn/ingredients_100x100/apple.jpg",
        metaInformation: [],
        name: "apples",
        original: "apples",
        originalName: "apples",
        originalString: "apples",
        unit: "serving",
        unitLong: "serving",
        unitShort: "serving"
      }
    ],
    usedIngredientCount: 0,
    usedIngredients: []
  }
];
let i = 0;
// display recipe
function displayRecipe(json) {
  for (let currentRecipe = 0; currentRecipe < 2; currentRecipe++) {
    var recipeDiv = document.createElement("div");

    //create recipe title
    var recipeTitle = document.createElement("h2");
    recipeTitle.innerHTML = json[currentRecipe].title;
    recipeDiv.appendChild(recipeTitle);

    //create img object add image to recipe header
    var recipeImg = document.createElement("img");
    recipeImg.setAttribute("src", json[currentRecipe].image);
    recipeImg.setAttribute("width", "30%");
    recipeDiv.appendChild(recipeImg);

    //create unusedIngredients title
    var unusedIngredientTitle = document.createElement("h3");
    unusedIngredientTitle.innerHTML = "Unused Ingredients:";
    recipeDiv.appendChild(unusedIngredientTitle);

    //display unusedIngredients
    var unusedIngredientsUl = document.createElement("ul");
    for (i = 0; i < json[currentRecipe].unusedIngredients.length; i++) {
      var li = document.createElement("li");
      li.innerHTML = json[currentRecipe].unusedIngredients[i].name;
      unusedIngredientsUl.appendChild(li);
    }
    recipeDiv.appendChild(unusedIngredientsUl);

    //create missedIngredients title
    var missedIngredientTitle = document.createElement("h3");
    missedIngredientTitle.innerHTML = "Missed Ingredients:";
    recipeDiv.appendChild(missedIngredientTitle);

    //display missedIngredients
    var missedIngredientsUl = document.createElement("ul");
    for (i = 0; i < json[currentRecipe].missedIngredients.length; i++) {
      var li = document.createElement("li");
      li.innerHTML = json[currentRecipe].missedIngredients[i].name;
      missedIngredientsUl.appendChild(li);
    }
    recipeDiv.appendChild(missedIngredientsUl);

    //create usedIngredients title
    var usedIngredientTitle = document.createElement("h3");
    usedIngredientTitle.innerHTML = "Used Ingredients:";
    recipeDiv.appendChild(usedIngredientTitle);

    //display usedIngredients
    var usedIngredientsUl = document.createElement("ul");
    for (i = 0; i < json[currentRecipe].usedIngredients.length; i++) {
      var li = document.createElement("li");
      li.innerHTML = json[currentRecipe].usedIngredients[i].name;
      usedIngredientsUl.appendChild(li);
    }

    recipeDiv.appendChild(usedIngredientsUl);
    document.getElementById("allrecipes").appendChild(recipeDiv);
  }
}

let buttonClick = false;
function onClickRecipe() {
  if (buttonClick === false) {
    displayRecipe(jsonObj);
    document.getElementById("displayRecipes").style.display = "block";
    buttonClick = true;
    console.log(set2string());
  }
}
