//function overloading in typescript
//function overloading allows to define multipple versions of a function with different parameter types with same name.
// It allows a function to behave differently based on the types and number of arguments passed to it.
// syntax
/*function functionName(param1: type1): returnType;
function functionName(param1: type1, param2: type2): returnType;
function functionName(param1: type1, param2?: type2): returnType {
    // function body
}*/

//step 1: write a signature of the function
//step 2: implement the function
//step 3: call the function

// function overload signatures
/*function combine(a: number, b: number): number;
function combine(a: string, b: string): string;*/


/*function combine(a: number | string, b: number | string): number | string {
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    if (typeof a === "string" && typeof b === "string") {
        return a + b;
    }
    throw new Error("Arguments must both be numbers or both be strings");
}
console.log("Combine numbers: " + combine(5, 10)); // Calling the function with number arguments
console.log("Combine strings: " + combine("Hello, ", "World!")); // Calling the function with string arguments
//console.log(combine(5, "Hello"));*/ // This will throw an error due to incompatible types


//different number of parameters
/*function add(a:number, b:number): number;
function add(a:number, b:number, c:number): number;
function add(a:number, b:number, c?:number): number {
    if (c !== undefined) {
        return a + b + c;
    }
    return a + b;
}
console.log("Add two numbers: " + add(5, 10,)); // Calling the function with two arguments
console.log("Add three numbers: " + add(5, 10, 15));*/ // Calling the function with three arguments   


//differen return types
/*function processinput(str:string): string;
function processinput(num:number): number;
function processinput(input: string | number): string | number {
    if (typeof input === "string") {
        return input.toUpperCase();
    }       
    if (typeof input === "number") {
        return input * input;
    }
    throw new Error("Invalid input type");
}
console.log("Process string: " + processinput("hello")); // Calling the function with string argument
console.log("Process number: " + processinput(7));*/ // Calling the function with number argument 

//different parameter types
function greet(name: string): string;
function greet(age: number): string;
function greet(IsMarried: boolean): string;
function greet(value: string | number | boolean): string {
    if (typeof value === "string") {
        return `Hello, ${value}!`;
    }
    if (typeof value === "number") {
        return `You are ${value} years old.`;
    }
    if (typeof value === "boolean") {
        return value ? "You are married." : "You are not married.";
    }   
    throw new Error("Invalid input type");
}
console.log(greet("Alice")); // Calling the function with string argument
console.log(greet(30)); // Calling the function with number argument
console.log(greet(false)); // Calling the function with boolean argument