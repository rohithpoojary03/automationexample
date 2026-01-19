//typescript is type safety language
/*let result1='50'+3;
console.log(result1); //503  */

/*let r='50';
let p=3;
let result5=r+p;
console.log(result5); //503 */


/*let r='50';
let p=3;
let result2=Number(r)+p;
console.log(result2); //53*/

/*let r:number='50';  //compilation error
let p:number=3;
let result5=r+p;
console.log(result5); //503  */

/*let r:string="50";  
let p:number=3;
let result5=r+p;
console.log(result5); //503  */

let r:string="50";  
let p:number=3;
let result5=Number(r)+p;
console.log(result5); //53