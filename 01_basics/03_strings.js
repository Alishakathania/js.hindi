const name = "Alisha"
const age = 19

// console.log(name + age + "values"); //not in use because it is too old method to use.


console.log(`Hello my name is ${name} and my age is ${age}`); //this is new method and also correct way..

const myName = new String('Alisha');

//methods of strings....mentioned below

console.log(myName[0]);
console.log(myName.__proto__); //object {}
console.log(myName.length); //returns the lenth of character.
console.log(myName.toUpperCase()); //convert into uppercase.
console.log(myName.charAt(2)); //tell about the charcter that which character is in 2nd position.
console.log(myName.indexOf('i')); // tells about the number postion of charcter.


const newString = myName.substring(0,4); //we can use this either the downone directly..
console.log(newString);
// also this in short way...
console.log(myName.substring(1,5)); //we cannot give the negative values in substring..

const anotherString = myName.slice(2,6)
console.log(anotherString);//we can include the negative values as well as positive values..like(-8,3)


const stringOne = "     Hello    "
console.log(stringOne);
console.log(stringOne.trim()) //also we use this like below

const stringOne2 = "    alisha    "
const newStringOne2 = stringOne2.trimStart().trimEnd();
console.log(newStringOne2); //done

const url = "https://alisha.com%20kathania" //used for repalce anything 
console.log(url.replace('%20','~'));

console.log(url.includes("alisha")); // we can also ask questions that which word is present or not in url.

const Name = "ali-sha-kath-ania";  //it will convert our string into array..
console.log(Name.split('-'));

//also we can do like this...
let str = "Hello,World,JavaScript";
let delimiter = ",";
// Using split method
let resultArray = str.split(delimiter);
console.log(resultArray);
// Output: ["Hello", "World", "JavaScript"]




