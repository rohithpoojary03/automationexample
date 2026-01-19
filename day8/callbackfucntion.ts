// callback function
// A callback function is a function that is passed as an argument to another function and is executed after some operation has been completed.
// It allows for asynchronous programming and helps in handling events or operations that take time to complete, such as API calls or timers.
// syntax
/* function higherOrderFunction(callback: (parameters: dataType) => returnType): void {
      function body
    callback(arguments);
}*/

/*function calculate( a: number, b: number,
 operation: (x: number, y: number) => number
): number {
    return operation(a, b);
}

// callback functions
const add = (x: number, y: number): number => x + y;
const multiply = (x: number, y: number): number => x * y;

console.log(calculate(5, 3, add));       // 8
console.log(calculate(5, 3, multiply));*/  // 15


// callback function
// simple example
function greetUser(name: string, callback: (greetingMessage: string) => void): void {
    const message = `Hello, ${name}! Welcome to TypeScript.`;
    callback(message);
}
greetUser("John", (message) => {
    console.log(message);
});

//synchronous means the code is executed line by line in a sequential manner
//asynchronous means the code is executed out of order, allowing other operations to run while waiting for a task to complete

//async example
/*function fetchData(
    callback: (data: string) => void
): void {
    console.log("Fetching data...");

    setTimeout(() => {
        callback("Data received successfully");
    }, 2000);
}

// using the async callback
fetchData((result) => {
    console.log(result);
});*/