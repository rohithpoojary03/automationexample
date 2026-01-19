//1. number
/*Definition: Represents all numeric values including integers,
floating-point numbers, and special numeric values like Infinity and NaN. There's no separate integer or float type.*/
let integer: number = 42;
let float: number = 3.14;
let negative: number = -10;
let infinity: number = Infinity;
console.log("Number Examples:");
console.log("Integer:", integer);
console.log("Float:", float);
console.log("Negative:", negative);
console.log("Infinity:", infinity);


//2. string
/*Definition: Represents textual data - a sequence of characters enclosed in single quotes, double quotes, or backticks (for template literals).*/
let single: string = 'Hello';
let double: string = "World";
let template: string = `Rohith ${single}`;  //backtick for template literal
console.log("String Examples:");
console.log("Single Quote:", single);
console.log("Double Quote:", double);
console.log("Template Literal:", template);


//3. boolean
/*Definition: Represents a logical value that can only be either true or false. Used for conditional logic and binary states.*/
let isValid: boolean = true;
let isComplete: boolean = false;
console.log("Boolean Examples:");
console.log("isValid:", isValid);
console.log("isComplete:", isComplete); 
console.log("boolean logic is true:",isValid);


//4. null
/*Definition: Represents the intentional absence of any object value. It's an assignment value that indicates "no value" or "empty."*/
let emptyValue: null = null;
let user: string | null = null; // User not loaded yet
console.log(emptyValue);


//5. undefined
/*Definition: Represents a variable that has been declared but has not yet been assigned a value, or a function that doesn't return a value.*/
let notAssigned: undefined;
let value: string | undefined = undefined; // Value not set yet
console.log(notAssigned);

//6. any
// we can use any type to avoid type safety in TS
/*Definition: A special type that can hold any value, effectively opting out of type checking. It allows for dynamic typing but sacrifices type safety.*/
let dynamicValue: any = "rohith";
dynamicValue = "100";
dynamicValue = true;
console.log("Any Type Examples:");
console.log("Dynamic Value:", dynamicValue);

//7. union types
/*Definition: Allows a variable to hold values of multiple specified types. Defined using the pipe (|) symbol between types.*/
let unionValue: string | number;
unionValue = "Hello";
console.log("Union Type Examples:");
console.log("Union Value as String:", unionValue);
unionValue = 42;
console.log("Union Value as Number:", unionValue);

//8. void
/*Definition: Represents the absence of any type, commonly used as the return type for functions that do not return a value.*/
function logMessage(message: string): void {
    console.log(message);
}

function sayHello(): void {
    console.log("Hello!");
    // No return statement
}

function Message(message: string): void {
    console.log(message);
    // Returns undefined implicitly
}