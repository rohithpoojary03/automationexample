// let and const does not work outside function block
// block scope
/*function blockscope() {
    var age: number;    // declare outside
    if (true) {
        var age: number = 25;
        const name: string = "Rakhi"; //const must be initialized immediately not outside
        
    }
    console.log(age);   // ✅ Works
    console.log(name); // ❌ Error
}
blockscope();*/

// let and const work inside function block
// block scope
/*function blockscope() {
    var age: number;    // declare outside
    if (true) {
        var age: number = 25;
        const name: string = "Rakhi";  //const must be initialized immediately not outside
        console.log(name); 
    }
    console.log(age);   // ✅ Works
}
blockscope();*/