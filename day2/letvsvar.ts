// let does not work outside function block
// funcion scope
/*function test() {
    let name: string;   // declare outside
    var age: number;    // declare outside

    if (true) {
        var age: number = 25;
        let name: string = "Rakhi";
    }
    console.log(age);   // ✅ Works
    console.log(name);  // ❌ Error
}
test();*/

// let only work inside function block not outside
/*function test() {
    let name: string;   // declare outside
    var age: number;    // declare outside

    if (true) {
        var age: number = 25;
        let name: string = "Rakhi";
        console.log(name);
    }
    console.log(age);   // ✅ Works
    }
test();*/


// var works both inside and outside function block

/*function test() {
    var name: string;   // declare outside
    var age: number;    // declare outside

    if (true) {
        var age: number = 25;
        
    }
    var name: string = "Rakhi";
    console.log(age);   // ✅ Works
    console.log(name);  // ✅ Works
}
test();*/


