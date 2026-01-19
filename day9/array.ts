//array
// array is a collection of items of the same type stored at contiguous memory locations.
// TypeScript allows us to define arrays with specific types to ensure type safety.
// syntax
// let arrayName: dataType[] = [element1, element2, ...];
// or
// let arrayName: Array<dataType> = [element1, element2, ...];

/*let numbers: number[] = [1, 2, 3, 4, 5];
console.log("Numbers array: " + numbers); // Output: Numbers array: 1,2,3,4,5
console.log("Numberis:",+numbers[2]); // Output: Numberis: 3

let fruits: Array<string> = ["Apple", "Banana", "Cherry"];
console.log("Fruits array: " + fruits); // Output: Fruits array: Apple,Banana,Cherry


let mixedArray: (number | string)[] = [1, "Two", 3, "Four"];
console.log("Mixed array: " + mixedArray); // Output: Mixed array: 1,Two,3,Four

//modifying array elements
numbers[0] = 10;
console.log("Modified numbers array: " + numbers); // Output: Modified numbers array: 10,2,3,4,5


for(let i=0; i<fruits.length; i++){
    console.log("Fruit at index " + i + ": " + fruits[i]);
    
}


//iterating using for...of loop
//of loop gives the value of the array elements
for(let fruit of fruits){
    console.log("Fruit: " + fruit);
}

//iterating using for...in loop
//in loop gives the index of the array elements
for(let index in numbers){
    console.log("Index: " + index + ", Value: " + numbers[index]);
}*/


//passing array to function
function printArray(arr: number[]): void {
    for (let element of arr) {
        console.log("Element: " + element);
    }   
}

let myArray: number[] = [10, 20, 30, 40, 50];
printArray(myArray); // Calling the function with an array argument

