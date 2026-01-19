// arrow functions
// Arrow functions provide a concise syntax for writing functions in TypeScript.
// They are often used for short functions or as callbacks.
// called as anonymous functions because they do not have their own name.
// also lambda functions
// syntax
// let functionName = (parameters: dataType): returnType => {
//     // function body
//     return value;
// };

/*let greet = (name: string): void => {
    console.log("Hello, " + name + "!");
}
greet("Bob");*/ // Calling the arrow function

//implicit return
/*let add = (a: number, b: number): number => a + b;
let sum: number = add(7, 3); // Calling the arrow function and storing the return value
console.log("Sum is: " + sum);*/


// implicit return with single parameter
/*let square = (x: number): number => x * x;
let squaredValue: number = square(4); // Calling the arrow function and storing the return value
console.log("Squared value is: " + squaredValue);*/

// implicit return with no parameters
/*let getCurrentTime = (): string => new Date().toLocaleTimeString();
console.log("Current Time is: " + getCurrentTime());*/ // Calling the arrow function and printing the result


// implicit retuen qith multiple parameters
/*let multiply = (x: number, y: number): number => x * y;
let product: number = multiply(5, 4); // Calling the arrow function and storing the return value
console.log("Product is: " + product);*/

// default parameters
/*let increment = (num: number, value: number = 1): number => num + value;
console.log("Incremented value is: " + increment(5)); //default value 1 is used
console.log("Incremented value is: " + increment(5, 3));*/


// rest parameters
let sumAll = (...numbers: number[]): number => {
    let total: number = 0;
    for (let num of numbers) {
        total += num;
    }
    return total;
}
console.log("Sum of all numbers: " + sumAll(1, 2, 3, 4, 5)); // Calling the arrow function with multiple arguments
console.log("Sum of all numbers: " + sumAll(10, 20, 30)); // Calling the arrow function with multiple arguments