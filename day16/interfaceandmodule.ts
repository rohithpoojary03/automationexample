//interface
//An interface in TypeScript is a way to define the structure of an object.
//It specifies the properties and methods that an object must have, without providing the implementation details.   
interface Person {
    name: string;
    age: number;
    greet(): void;
}   
class Student implements Person {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }   
    greet(): void {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }   
}
let student = new Student("John", 20);  
student.greet(); // Output: Hello, my name is John and I am 20 years old.

