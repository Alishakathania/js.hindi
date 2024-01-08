let score = 33;

console.log(typeof score); //we can write this in different ways...
console.log(typeof (score));


let str = "33"
let valueInNumber = Number(str)
console.log(typeof valueInNumber) //it will return the type 

let str1 = "33abc"
let valueInNumber1 = Number(str1)
console.log(valueInNumber1); //but it will return the NaN because in this letters and numbers are mixed...

let score1 = "33";

console.log(typeof score1); //we can write this in different ways...
console.log(typeof (score1));


let score3 = null
let valueInNumber3 = Number(score3)
console.log(typeof valueInNumber3)
console.log(valueInNumber3)
//here it will return the object value if ask for the type of null.....
console.log(typeof score3); 
console.log(typeof (score3));
//if we take undefine then it will return the NaN...


//"33" => 33
//"33abc" => NaN
//true => 1 ,false => 0


//in case of boolean conversion...
let IsloggedIn = 1
let booleanIsLoggedIn = Boolean(IsloggedIn)
// console.log(booleanIsLoggedIn);// "1" is for true and "0" is for false...

let IsloggedIn1 = ""
let booleanIsLoggedIn1 = Boolean(IsloggedIn1)
// console.log(booleanIsLoggedIn1); //it will return false for empty string..

let IsloggedIn2 = "Alisha"
let booleanIsLoggedIn2 = Boolean(IsloggedIn2)
// console.log(booleanIsLoggedIn2);


let someNew = 33
let stringNumber = String(someNew)
console.log(typeof stringNumber);
console.log(stringNumber);