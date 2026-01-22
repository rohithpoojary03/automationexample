//access modifiers: public, private, protected
//public: accessible from anywhere
//private: accessible only within the class
//protected: accessible within the class and its subclasses

/*class Person11 {
    public name: string;
    private age: number;
    protected address: string;
    constructor(name: string, age: number, address: string) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    public display(): void {
        console.log(`Name: ${this.name}, Age: ${this.age}, Address: ${this.address}`);
    }
}
let person1 = new Person11("John", 30, "123 Main St");
person1.display(); // Accessible
console.log(person1.name); // Accessible
//private and protected exist only at compile time in TypeScript.
//At runtime, JavaScript does not enforce access modifiers.
console.log(person1.age); // Error: Property 'age' is private
console.log(person1.address); // Error: Property 'address' is protected
class Employee11 extends Person11 {
    constructor(name: string, age: number, address: string) {
        super(name, age, address);
    }
    public showAddress(): void {
        console.log(`Address: ${this.address}`); // Accessible
    }
}
let emp11 = new Employee11("Jane", 28, "456 Elm St");
emp11.showAddress();
console.log(emp11.address);*/ // Error: Property 'address' is protected