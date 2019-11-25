// Line 26 - 33: https://stackoverflow.com/questions/28830982/how-do-i-append-a-button-to-a-li-javascript/28831176

var data = null;

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    console.log(this.responseText);
  }
});

xhr.open("GET", "https://api.spoonacular.com/recipes/search?apiKey=2ef06504dd3a491c96311d329ac35877&number=1&query=pickle");


xhr.send(data);


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
