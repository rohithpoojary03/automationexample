//array methods
// Array methods are built-in functions that allow you to manipulate and interact with arrays in TypeScript.
// Some common array methods include push, pop, shift, unshift, splice, slice, indexOf, and forEach.

let fruits: string[] = ["Apple", "Banana", "Cherry"];

// push method - adds one or more elements to the end of an array
fruits.push("Date");
console.log("After push: " + fruits);


// pop method - removes the last element from an array
let lastFruit = fruits.pop();
console.log("After pop: " + fruits + ", Removed: " + lastFruit);


// shift method - removes the first element from an array
let firstFruit = fruits.shift();
console.log("After shift: " + fruits + ", Removed: " + firstFruit);


// unshift method - adds one or more elements to the beginning of an array
fruits.unshift("Elderberry");
console.log("After unshift: " + fruits);    


// splice method - adds or removes elements from an array
fruits.splice(1, 1, "Fig", "Grape");    
console.log("After splice: " + fruits);


// slice method - returns a shallow copy of a portion of an array
let citrusFruits = fruits.slice(1, 3);
console.log("Sliced fruits: " + citrusFruits);

// indexOf method - returns the first index at which a given element can be found in the array
let index = fruits.indexOf("Fig");
console.log("Index of Fig: " + index);

// forEach method - executes a provided function once for each array element
console.log("Fruits list:");
fruits.forEach((fruit) => {
    console.log(fruit);
});

// map method - creates a new array populated with the results of calling a provided function on every element in the calling array
let upperCaseFruits = fruits.map(fruit => fruit.toUpperCase());
console.log("Uppercase Fruits: " + upperCaseFruits);


// filter method - creates a new array with all elements that pass the test implemented by the provided function
let longNamedFruits = fruits.filter(fruit => fruit.length > 4);
console.log("Fruits with names longer than 4 characters: " + longNamedFruits);

// reduce method - executes a reducer function on each element of the array, resulting in a single output value
let totalLength = fruits.reduce((accumulator, fruit) => accumulator + fruit.length, 0);
console.log("Total length of all fruit names: " + totalLength); 

// find method - returns the value of the first element in the array that satisfies the provided testing function
let foundFruit = fruits.find(fruit => fruit.startsWith("G"));
console.log("First fruit that starts with G: " + foundFruit);

// some method - tests whether at least one element in the array passes the test implemented by the provided function
let hasShortNamedFruit = fruits.some(fruit => fruit.length < 4);
console.log("Is there any fruit with name shorter than 4 characters? " + hasShortNamedFruit);   


// every method - tests whether all elements in the array pass the test implemented by the provided function
let allLongNamedFruits = fruits.every(fruit => fruit.length > 3);
console.log("Do all fruits have names longer than 3 characters? " + allLongNamedFruits);

// sort method - sorts the elements of an array in place and returns the sorted array
fruits.sort();
console.log("Sorted fruits: " + fruits);

// reverse method - reverses the order of the elements in an array in place
fruits.reverse();
console.log("Reversed fruits: " + fruits); 

// concat method - merges two or more arrays and returns a new array
let tropicalFruits: string[] = ["Mango", "Pineapple"];
let allFruits = fruits.concat(tropicalFruits);
console.log("All fruits: " + allFruits);

// join method - joins all elements of an array into a string
let fruitString = allFruits.join(", ");
console.log("Fruits as a string: " + fruitString); 


// length property - returns the number of elements in an array
console.log("Number of fruits: " + allFruits.length);   

// includes method - determines whether an array includes a certain element
let hasBanana = allFruits.includes("Banana");
console.log("Does the fruit list include Banana? " + hasBanana);

// flat method - creates a new array with all sub-array elements concatenated into it recursively up to the specified depth
let nestedFruits: (string | string[])[] = ["Apple", ["Banana", "Cherry"], "Date"];
let flatFruits = nestedFruits.flat();
console.log("Flattened fruits: " + flatFruits);

// flatMap method - first maps each element using a mapping function, then flattens the result into a new array
let flatMappedFruits = nestedFruits.flatMap(fruit => Array.isArray(fruit) ? fruit : [fruit]);
console.log("Flat mapped fruits: " + flatMappedFruits);

// fill method - fills all the elements of an array from a start index to an end index with a static value
let filledArray = new Array(5).fill("Kiwi");
console.log("Filled array: " + filledArray);    

// copyWithin method - copies a sequence of array elements within the array
let copyArray = ["A", "B", "C", "D", "E"];
copyArray.copyWithin(0, 3, 5);
console.log("After copyWithin: " + copyArray);

// toString method - returns a string representing the array and its elements
let arrayString = fruits.toString();
console.log("Array to string: " + arrayString);

// toLocaleString method - returns a localized string representing the array and its elements
let localeString = fruits.toLocaleString();
console.log("Array to locale string: " + localeString);

// findIndex method - returns the index of the first element in the array that satisfies the provided testing function
let findIndex = fruits.findIndex(fruit => fruit.startsWith("C"));
console.log("Index of first fruit that starts with C: " + findIndex);

// reverse method - reverses the order of the elements in an array in place
fruits.reverse();
console.log("Reversed fruits again: " + fruits);

// sort method with custom comparator - sorts the elements of an array using a custom comparison function
fruits.sort((a, b) => a.length - b.length);
console.log("Fruits sorted by length: " + fruits);

// iterator methods - entries, keys, and values
let fruitEntries = fruits.entries();
console.log("Fruit entries:");
for (let entry of fruitEntries) {
    console.log(entry);
}

let fruitKeys = fruits.keys();
console.log("Fruit keys:");
for (let key of fruitKeys) {
    console.log(key);
}
let fruitValues = fruits.values();
console.log("Fruit values:");
for (let value of fruitValues) {
    console.log(value);
}   

// Array.from method - creates a new array from an array-like or iterable object
let str = "Hello";
let charArray = Array.from(str);
console.log("Array from string: " + charArray);

// Array.isArray method - determines whether the passed value is an array
let isArray = Array.isArray(fruits);
console.log("Is fruits an array? " + isArray);  

// Array.of method - creates a new array instance from a variable number of arguments
let numberArray = Array.of(1, 2, 3, 4, 5);
console.log("Array of numbers: " + numberArray);    


// fill method with start and end parameters - fills elements from start index to end index with a static value
let fillArray = new Array(10).fill("Orange", 2, 5);
console.log("Filled array with start and end: " + fillArray);   

// reduceRight method - applies a function against an accumulator and each value of the array (from right-to-left) to reduce it to a single value
let rightReducedValue = numberArray.reduceRight((accumulator, currentValue) => accumulator - currentValue, 0);
console.log("Right reduced value: " + rightReducedValue);


// toReversed method - returns a new array with the elements in reverse order without modifying the original array  
let toReversedArray = fruits.toReversed();  
console.log("To reversed array: " + toReversedArray);
console.log("Original fruits array after toReversed: " + fruits);

// toSorted method - returns a new array with the elements sorted without modifying the original array
let toSortedArray = fruits.toSorted();
console.log("To sorted array: " + toSortedArray);
console.log("Original fruits array after toSorted: " + fruits);

// with method - returns a new array with a specific element replaced at the given index
let withArray = fruits.with(1, "Papaya");
console.log("With array (index 1 replaced with Papaya): " + withArray);
console.log("Original fruits array after with: " + fruits);


// at method - returns the element at the specified index, supporting negative indexing
let atIndex = fruits.at(-1);
console.log("Element at index -1: " + atIndex); 


// findLast method - returns the value of the last element in the array that satisfies the provided testing function
let foundLastFruit = fruits.findLast(fruit => fruit.startsWith("A"));
console.log("Last fruit that starts with A: " + foundLastFruit);

