// foreach method example
// forEach method - executes a provided function once for each array element
//syntax: 
// array.forEach(callback(currentValue, index, array), thisArg)

let colors: string[] = ["Red", "Green", "Blue"];
console.log("Colors list:");
colors.forEach((color) => {
    console.log(color);
}); 


console.log("Colors list:");
colors.forEach((color, index) => {
    console.log(`${index}: ${color}`);
}); 

colors.forEach((color) => {
    console.log(color.toUpperCase());
});


//map
// map method - creates a new array populated with the results of calling a provided function on every element in the calling array
//syntax: 
// array.map(callback(currentValue, index, array), thisArg)

let lowerCaseColors = colors.map(color => color.toLowerCase());
console.log("Lowercase Colors: " + lowerCaseColors);
let colorLengths = colors.map(color => color.length);
console.log("Lengths of color names: " + colorLengths);
let colorDescriptions = colors.map((color, index) => `Color ${index + 1}: ${color}`);
console.log("Color Descriptions: " + colorDescriptions);


//filter
// filter method - creates a new array with all elements that pass the test implemented by the provided function
//syntax: 
// array.filter(callback(element, index, array), thisArg)   
let shortNamedColors = colors.filter(color => color.length <= 4);
console.log("Colors with names 4 or fewer characters: " + shortNamedColors);
let colorsWithE = colors.filter(color => color.includes("e"));
console.log("Colors containing the letter 'e': " + colorsWithE);
let colorsAtEvenIndices = colors.filter((color, index) => index % 2 === 0);
console.log("Colors at even indices: " + colorsAtEvenIndices);

//reduce
// reduce method - executes a reducer function on each element of the array, resulting in a single output value
//syntax: 
// array.reduce(callback(accumulator, currentValue, index, array), initialValue)    
let totalColorNameLength = colors.reduce((accumulator, color) => accumulator + color.length, 0);
console.log("Total length of all color names: " + totalColorNameLength);    
let concatenatedColors = colors.reduce((accumulator, color) => accumulator + ", " + color);
console.log("Concatenated color names: " + concatenatedColors);    
let longestColorName = colors.reduce((longest, color) => color.length > longest.length ? color : longest, "");
console.log("Longest color name: " + longestColorName);

//find
// find method - returns the value of the first element in the array that satisfies the provided testing function
//syntax:
// array.find(callback(element, index, array), thisArg)
let foundColor = colors.find(color => color.startsWith("G"));
console.log("First color that starts with G: " + foundColor);
let foundShortColor = colors.find(color => color.length <= 3);
console.log("First color with name 3 or fewer characters: " + foundShortColor);
let foundColorAtIndex1 = colors.find((color, index) => index === 1);
console.log("Color at index 1: " + foundColorAtIndex1);


//some
// some method - tests whether at least one element in the array passes the test implemented by the provided function
//syntax:   
// array.some(callback(element, index, array), thisArg)
let hasLongNamedColor = colors.some(color => color.length > 5);
console.log("Is there any color with name longer than 5 characters? " + hasLongNamedColor);
let hasColorWithB = colors.some(color => color.includes("B"));
console.log("Is there any color containing the letter 'B'? " + hasColorWithB);
let hasColorAtIndex2 = colors.some((color, index) => index === 2);
console.log("Is there a color at index 2? " + hasColorAtIndex2);


//every
// every method - tests whether all elements in the array pass the test implemented by the provided function
//syntax:   
// array.every(callback(element, index, array), thisArg)
let allShortNamedColors = colors.every(color => color.length <= 5);
console.log("Do all colors have names 5 or fewer characters? " + allShortNamedColors);  
let allColorsContainE = colors.every(color => color.includes("e"));
console.log("Do all colors contain the letter 'e'? " + allColorsContainE);  
let allColorsAtEvenIndices = colors.every((color, index) => index % 2 === 0);
console.log("Are all colors at even indices? " + allColorsAtEvenIndices);