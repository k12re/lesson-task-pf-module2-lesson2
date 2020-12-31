// Question 1
var winningNumbers = [1, 76, 2, 78, 16, 7];

// the third item has an index of 2
var thirdItem = winningNumbers[2];
console.log(thirdItem);

// or
console.log(winningNumbers[2]);


// Question 2
var vegetables = ["rice", "potatoes", "porridge", "cake", "spinach"];

// add a new item
vegetables.push("ice cream");

// get the amount of items
var itemCount = vegetables.length;

console.log(itemCount);


// Question 3
var randomThings = ["pumpkin", false, 23, true, "tomato"];

for (var i = 0; i < randomThings.length; i++) {
    console.log(randomThings[i]);
}

// or
var itemCount = randomThings.length;

for (var i = 0; i < itemCount; i++) {
    var item = randomThings[i];
    console.log(item);
}


// Question 4
var moreThings = [14, "cat", true, 29, "fox", true, 34, 19];

for (var i = 0; i < moreThings.length; i++) {

    // use the typeof operator to determine the value type
    var typeOfItem = typeof moreThings[i];
    // or 
    // var typeOfItem = typeof(moreThings[i]);

    if (typeOfItem === "number") {
        console.log(moreThings[i]);
    }

}


// Question 5
var ingredients = ["water", "flour", "toothpaste", "fish lips"];

var sortedIngredients = ingredients.sort();

for (var i = 0; i < sortedIngredients.length; i++) {
    console.log(sortedIngredients[i]);
}


// Question 6
var characters = ["Gob", "Michael", "George Michael", "Lindsay", "Buster", "Maeby", "Tobias", "Lucille"];

for (var i = 0; i < characters.length; i++) {

    // use the % operator to get the remainder of i divided by 2
    // because we start at 0, every second number will have a remainder of 1

    if (i % 2 === 1) {
        console.log(characters[i]);
    }
}

