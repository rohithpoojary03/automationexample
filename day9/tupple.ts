//Tupple
// tupple is a special type of array that allows to store multiple values of different types in a single variable.
// TypeScript tuples are fixed in size and the types of elements are known.
//fixed length and known types
// syntax
// let tupleName: [dataType1, dataType2, ...] = [value1, value2, ...];  

/*let person: [string, number, boolean] = ["Alice", 30, true];
console.log("Name: " + person[0]);
console.log("Age: " + person[1]);
console.log("Is Married: " + person[2]);

//modifying tuple elements
person[1] = 31; // Updating age
console.log("Updated Age: " + person[1]);

//tuple with optional elements
let employee: [number, string, string?] = [101, "Bob"];
console.log("Employee ID: " + employee[0]);
console.log("Employee Name: " + employee[1]);
console.log("Employee Department: " + employee[2]); // undefined since it's 

//tuple with rest elements
let colors: [string, ...string[]] = ["Red", "Green", "Blue", "Yellow", "Purple"];
console.log("Colors: " + colors);*/

//tupple array
let address: [string, number][] = [
    ["Main St", 123],
    ["Second St", 456],
    ["Third St", 789]
];
for (let addr of address) {
    console.log("Street: " + addr[0] + ", House Number: " + addr[1]);
}

//pushing elements to tuple array
address.push(["Fourth St", 1010]);
console.log("After adding new address:");
for (let addr of address) {
    console.log("Street: " + addr[0] + ", House Number: " + addr[1]);
}