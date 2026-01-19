//if condition
   /*et age: number = 18;
    if(age >= 18){
        console.log("You are eligible to vote.");
    }   */

   /*t number: number = 7;
   if(number % 2 == 0){
        console.log(number, "is an even number.");
   }
    if(number % 2 != 0){
        console.log(number, "is an odd number.");
    }*/

    //if-else condition
    /*t age: number = 16;
    if(age >= 18){
        console.log("You are eligible to vote.");
    }   else{
        console.log("You are not eligible to vote.");
    }*/

    /* number: number = 20;
    if(number % 2 == 0){
        console.log(number, "is an even number.");
   }
    else{
        console.log(number, "is an odd number.");
}*/

//nested if-else
/*let marks: number = 101;
if(marks >100 || marks <0){ //if yout put this at last it will never execute
    console.log("Invalid marks");
}else if(marks >= 90){
    console.log("Grade A");
} else if(marks >= 80){
    console.log("Grade B");
} else if(marks >= 70){
    console.log("Grade C");
} else if(marks >= 60){
    console.log("Grade D");   
} else if(marks >100 || marks <0){
    console.log("Invalid marks");
}*/

/*let browser: string = "Chrome";
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
}  */

/*let browser: string = 10 > 11 ? "Chrome" : "Firefox";
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
}   */

    //switch case
/*let day: number = 3;
switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;      
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}*/

let x: number = 20, y: number = 5;
switch(x - y){
    case 0:
        console.log("result is zero");
        break;
    case 10:
        console.log("result is ten");
        break;  
    case 15:
        console.log("result is fifteen");
        break;  
    case 25:
        console.log("result is twenty five");
        break;  
    default:
        console.log("result is unknown");
}   
    