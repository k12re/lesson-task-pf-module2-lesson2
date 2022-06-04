//Question 1
var winningNumber = [1, 76, 2, 78, 16, 7];

var selectedNumber = winningNumber[2];
console.log(selectedNumber);

//or// console.log(winningNumber[2]);

//Question 2

var vegetables = ["rice", "potatoes", "porridge", "cake", "spinach"];

vegetables.push("cabbage");
//console.log(vegetables);

var itemCount = vegetables.length;
console.log(itemCount);

//Question 3

var randomThings = ["pumpkin", false, 23, true, "tomato"];

for (var i = 0; i < randomThings.length; i++) {
  //var things = randomThings[i];
  console.log(randomThings[i]);
}

//or

var itemCounter = randomThings.length;

for (var i = 0; i < itemCounter; i++) {
  var item = randomThings[i];
  console.log(item);
}

//Question 4

var moreThings = [14, "cat", true, 29, "fox", true, 34, 19];

for (var i = 0; i < moreThings.length; i++) {
  var thing = typeof moreThings[i];
  if (thing === "number") {
    console.log(moreThings[i]);
  }
}

//Question 5

var ingredients = ["water", "flour", "toothpaste", "fish lips"];
var sortedIngredients = ingredients.sort();

for (var i = 0; i < sortedIngredients.length; i++) {
  console.log(sortedIngredients[i]);
}

//Question 6

var characters = ["Gob", "Michael", "George Michael", "Lindsay", "Buster", "Maeby", "Tobias", "Lucille"];

for (var i = 0; i < characters.length; i++) {
  if (i % 2 === 1) {
    console.log(characters[i]);
  }
}

// use the % operator to get the remainder of i divided by 2
// because we start at 0, every second number will have a remainder of 1
