//class
//class is a blueprint for creating objects with predefined properties and methods.
//syntax:
// class ClassName {
//     property1: valueType1;
//     property2: valueType2;
//     method1(): returnType {
//         //method body
//     }
// }

//readonly modifier
//The readonly modifier is used to make properties of a class immutable after they have been initialized.
//syntax:
// class ClassName {
//     readonly propertyName: valueType;
//     constructor(propertyName: valueType) {
//         this.propertyName = propertyName; // can be assigned only in constructor
//     }
// }

class student {
    readonly id: number;
    name: string;
    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
    display(): void {
        console.log(`ID: ${this.id}, Name: ${this.name}`);
    }   
}
let stud1 = new student(2, "Alice");
stud1.display();


//constructor
//A constructor is a special method in a class that is called when an instance of the class is created. It is used to initialize the properties of the class.
//syntax:
// class ClassName {
//     property1: valueType1;
//     property2: valueType2;   
//     constructor(property1: valueType1, property2: valueType2) {
//         this.property1 = property1;
//         this.property2 = property2;
//     }
// }

class Employee12 {
    empId: number;
    empName: string;
    constructor(empId: number, empName: string) {
        this.empId = empId;
        this.empName = empName;
    }
    display(): void {
        console.log(`Employee ID: ${this.empId}, Employee Name: ${this.empName}`);
    }
}
let emp1 = new Employee12(101, "Bob");
emp1.display();

//methods
//Methods are functions defined inside a class that operate on the properties of the class.
//syntax:
// class ClassName {    
//     property1: valueType1;
//     property2: valueType2;   
//     methodName(): returnType {
//         //method body
//     }
// }
class Car2 {
    carName: string;
    carModel: string;
    constructor(carName: string, carModel: string) {
        this.carName = carName;
        this.carModel = carModel;
    }
    display(): void {
        console.log(`Car Name: ${this.carName}, Car Model: ${this.carModel}`);
    }
}
let car1 = new Car2("Toyota", "Camry");
car1.display(); 


