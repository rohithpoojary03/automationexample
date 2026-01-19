//strings
//string is text value or sequence of characters enclosed in single or double quotes
//syntax: 
// let variableName: string = "string value" or 'string value'
/*let greeting: string = "Hello, World!";
console.log(greeting);


let num: number = 42;
console.log("The number is: " + num); //valid
console.log("The number is: " + String(num)); //valid
console.log(`The number is: ${num}`); //valid
console.log("The number is: ${num}"); //invalid, will print as is
console.log('The number is: ' + num); //valid
console.log('The number is: ${num}'); //invalid, will print as is
console.log("The number is: num");*/ //invalid, will print as is


// String methods
//length property - returns the length of the string
let sampleString: string = "TypeScript";
console.log("Length of sampleString: " + sampleString.length);

//toUpperCase method - converts the string to uppercase
let upperCaseString = sampleString.toUpperCase();
console.log("Uppercase: " + upperCaseString);

//toLowerCase method - converts the string to lowercase
let lowerCaseString = sampleString.toLowerCase();
console.log("Lowercase: " + lowerCaseString);

//charAt method - returns the character at the specified index
let charAtIndex3 = sampleString.charAt(3);
console.log("Character at index 3: " + charAtIndex3);

//indexOf method - returns the index of the first occurrence of a specified value
let indexOfS = sampleString.indexOf("S");
console.log("Index of 'S': " + indexOfS);

//substring method - returns a substring from the string
let substringFrom2To6 = sampleString.substring(2, 7);
console.log("Substring from index 2 to 7: " + substringFrom2To6);

//includes method - checks if the string contains a specified value
let includesScript = sampleString.includes("Script");
console.log("Does sampleString include 'Script'? " + includesScript);

//startsWith method - checks if the string starts with a specified value
let startsWithType = sampleString.startsWith("Type");   
console.log("Does sampleString start with 'Type'? " + startsWithType);


//endsWith method - checks if the string ends with a specified value
let endsWithScript = sampleString.endsWith("Script");   
console.log("Does sampleString end with 'Script'? " + endsWithScript);


//replace method - replaces a specified value with another value in the string
let replacedString = sampleString.replace("Type", "Java");
console.log("Replaced String: " + replacedString);

//split method - splits the string into an array of substrings
let csvString: string = "Apple,Banana,Cherry,Date"; 
let fruitArray: string[] = csvString.split(",");
console.log("Fruit Array: " + fruitArray);


//trim method - removes whitespace from both ends of the string
let stringWithWhitespace: string = "   Hello, TypeScript!   ";
let trimmedString = stringWithWhitespace.trim();
console.log("Trimmed String: '" + trimmedString + "'");

//trimStart method - removes whitespace from the start of the string
let trimmedStartString = stringWithWhitespace.trimStart();
console.log("Trimmed Start String: '" + trimmedStartString + "'");

//trimEnd method - removes whitespace from the end of the string    
let trimmedEndString = stringWithWhitespace.trimEnd();
console.log("Trimmed End String: '" + trimmedEndString + "'");

//concat method - concatenates two or more strings
let string1: string = "Hello, ";
let string2: string = "World!";
let concatenatedString = string1.concat(string2);
console.log("Concatenated String: " + concatenatedString);


//concept of immutable strings
let originalString: string = "Immutable";
let modifiedString: string = originalString.replace("Immutable", "Mutable");
console.log("Original String: " + originalString);