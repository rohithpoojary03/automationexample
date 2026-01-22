//inheritance
//inheritance is a mechanism where a new class is derived from an existing class.
//The new class is called the derived class or child class, and the existing class is called the base class or parent class.
//The derived class inherits properties and methods from the base class, allowing for code reuse and the creation of hierarchical relationships between classes.
//In TypeScript, inheritance is implemented using the "extends" keyword.
//syntax:
//class DerivedClass extends BaseClass {
//    // additional properties and methods
//}

/*class Animal33 {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    speak(): void {
        console.log(`${this.name} makes a sound.`);
    }
}
class Dog33 extends Animal33 {
    constructor(name: string) {
        super(name); // Call the constructor of the base class
    }
    speak(): void {
        console.log(`${this.name} barks.`);
    }
}

let animal33 = new Animal33("Generic Animal");
animal33.speak(); // Output: Generic Animal makes a sound.


let dog33 = new Dog33("Rex");
dog33.speak();*/ // Output: Rex barks.

//In this example, the Dog33 class extends the Animal33 class, inheriting its properties and methods.
//The Dog33 class also overrides the speak method to provide a specific implementation for dogs.
//This demonstrates the concept of inheritance in TypeScript.
//Note: TypeScript supports single inheritance, meaning a class can only extend one base class.
//However, a class can implement multiple interfaces.
//This allows for a form of multiple inheritance through interfaces.

//Another Example
/*class Vehicle {
    make: string;   
    constructor(make: string) {
        this.make = make;
    }
    start(): void {
        console.log(`The ${this.make} vehicle starts.`);
    }
}
class Car extends Vehicle {
    constructor(make: string) {
        super(make);
    }
    start(): void {
        console.log(`The ${this.make} car roars to life!`);
    }   
}

let vehicle = new Vehicle("Generic");
vehicle.start(); // Output: The Generic vehicle starts.
let car = new Car("Toyota");
car.start();*/ // Output: The Toyota car roars to life!


//child classes can access public and protected members of the parent class.
//However, they cannot access private members of the parent class.
//simple child call example
class Parent {
    public parentName: string;
    constructor(name: string) {
        this.parentName = name;
    }   
    public greet(): void {
        console.log(`Hello from ${this.parentName}`);
    }
}

class Child extends Parent {
    constructor(name: string) {
        super(name); // Call the constructor of the parent class
    }   
    public introduce(): void {
        console.log(`I am the child of ${this.parentName}`);
    }
}
let child = new Child("Alice");
child.greet();
child.introduce();


//super keyword
//The super keyword is used to call the constructor and methods of the parent class from within the child class.
//It is commonly used in the constructor of the child class to invoke the constructor of the parent class and initialize inherited properties.
class Parent2 {
    name: string;
    constructor(name: string) {
        this.name = name;
    }   
    greet(): void {
        console.log(`Hello from ${this.name}`);
    }
}
class Child2 extends Parent2 {
    constructor(name: string) {
        super(name); // Call the constructor of the parent class
    }
    greet(): void {
        super.greet();
        console.log(`Hello from the child class of ${this.name}`);
    }
}

let child2 = new Child2("Bob");
child2.greet(); 
// Output: 
// Hello from Bob
// Hello from the child class of Bob


//parent class reference
//A parent class reference can be used to refer to an object of a child class.
//This is useful when you want to treat objects of different child classes uniformly through their common parent class interface.
class Parent3 {
    name: string    
    constructor(name: string) {
        this.name = name;
    }
    greet(): void {
        console.log(`Hello from ${this.name}`);
    }   
}
class ChildA extends Parent3 {
    constructor(name: string) {
        super(name);
    }   
    greet(): void {
        console.log(`Hello from ChildA: ${this.name}`);
    }
}
class ChildB extends Parent3 {
    constructor(name: string) {
        super(name);
    }
    greet(): void {
        console.log(`Hello from ChildB: ${this.name}`);
    }
}
let children: Parent3[] = [
    new ChildA("Alice"),
    new ChildB("Bob")
];
for (let child of children) {
    child.greet();
}
