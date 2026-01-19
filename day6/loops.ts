// while loop
// This loop will continue to execute as long as the condition is true
/*let count: number = 1;  
while(count <= 5){
    console.log("Count is: " + count);
    count++; // Increment the counter to avoid infinite loop
}*/


/*let even:number=2;
while(even<=10){
console.log("number is:" +even);
even=even+2;
}*/

/*let num:number=1;
while(num<=10){
    if(num%2!=0){
        console.log("odd number is:" +num);
    }   
    num++;
}*/

/*let num:number=10;
while(num>=1){
        console.log(num);  
    num--;
}*/

// do-while loop
// This loop will execute the block of code at least once before checking the condition
/*let count: number = 1;
do{
    console.log("Count is: " + count);
    count++;
}while(count <= 15);*/

//for loop
// This loop is used when the number of iterations is known
//for(initialization; condition; increment/decrement)
/*for(let i=1; i<=10; i++){
    console.log("Iteration number: " + i);
}*/


/*for(let i=2;i<=10;i+=2){
    console.log("even number is:" +i);
}*/


/*for(let i=1;i<=10;i++){
    if(i%2!=0){
    console.log("odd number is:" +i);
    }
}*/

 /*let i:number;
 for(i=1;i<=5;i++){
    console.log(i); // output: 1 2 3 4 5
    }
console.log(i);*/  // output: 6


//nested loops
//nested loops is a loop inside another loop
/*for(let i=1;i<=3;i++){ //outer loop
    console.log("Outer Loop iteration: " + i);
    for(let j=1;j<=2;j++){ //inner loop
        console.log("  Inner Loop iteration: " + j);
    }
}*/

//loop with conditionals
let browser: string = "Edge";
if(browser === "Chrome"){
    console.log("Google Chrome browser");
} else if(browser === "Firefox"){
    console.log("Mozilla Firefox browser");
} else if(browser === "Safari"){
    console.log("Apple Safari browser");
}   else if(browser === "Edge"){
    console.log("Microsoft Edge browser");
} else{
    console.log("Unknown browser");
}  