// function 
// A function is a block of code designed to perform a particular task.
// It is executed when "called" or "invoked".

// named function
// named function is a function that has a specific name assigned to it.
// syntax
/*function functionName(parameters: dataType): returnType 
{
    // function body
    return value;
}*/   

/*function display(): void {
    console.log("This is a named function.");
}
display();*/ // Calling the named function

// function with parameters

/*function greet(name: string): void {
    console.log("Hello, " + name + "!");
}
greet("Alice");*/ // Calling the function with an argument

// function with return type

/*function add(a: number, b: number): number {
    return a + b;
}   
let sum: number = add(5, 10); // Calling the function and storing the return value
console.log("Sum is: " + sum);*/

// function with parameters and return type

/*function multiply(x: number, y: number): number {
    return x * y;
}
let product: number = multiply(4, 6); // Calling the function and storing the return value
console.log("Product is: " + product);*/


// function to check even or odd
/*function isEven(num: number): boolean {
    return num % 2 === 0;
}
console.log("Is 4 even? " + isEven(4)); // Calling the function and printing the result

// rest parameters
function sumAll(...numbers: number[]): number {
    let total: number = 0;  
    for (let num of numbers) {
        total += num;
    }   
    return total;
}
console.log("Sum of all numbers: " + sumAll(1,10, 2, 3, 4, 5));*/ // Calling the function with multiple arguments        


// optional parameters
/*function buildName(firstName: string, lastName? : string): string {
    if (lastName) {
        return firstName + " " + lastName;
    } else {
        return firstName;
    }   
}
console.log(buildName("John", "Doe")); // Calling with both parameters
console.log(buildName("Jane"));*/ // Calling with only the required parameter 

// default parameters
/*function calculateArea(width: number, height: number = 10): number {
    return width * height;
}
console.log("Area is: " + calculateArea(5, 20)); // Calling with both parameters
console.log("Area with default height is: " + calculateArea(5)); // Calling with default parameter
// function to demonstrate switch case
function switchExample(result: number): void {
    switch(result){
        case 5:
        console.log("result is five");
        break; 
    case 10:
        console.log("result is ten");       
        break;  
    case 15:
        console.log("result is fifteen");   
        break;  
    case 25:
        console.log("result is twenty five");
        break;
    default:
        console.log("result is unknown");   
}}*/

//annonymous function
// An anonymous function is a function that does not have a name.
/*let greet = function(name: string): void {
    console.log("Hello, " + name + "!");
};
greet("Bob"); // Calling the anonymous function*/