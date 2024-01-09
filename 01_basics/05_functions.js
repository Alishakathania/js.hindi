function addNumbers(number1,number2){
       console.log(number1 + number2)
}
addNumbers(3,5) // we are passing numbers but what happen when we pass a number and a string in argument ..

function addNumbers(number1,number2){
    console.log(number1 + number2)
}
addNumbers(3,"5") //can we take two same functions?????
/*
yes you can define multiple functions with the same name,
but the most recent definition will overwrite the previous one. 
This behavior is known as "function overloading" in some programming languages,
but JavaScript itself doesn't natively support true 
function overloading like some other languages do.

but we can use conditional statements rather than overloading a function...
*/


function addNumbers(number1,number2){
    console.log(number1 + number2)
}
 const result = addNumbers(3,5)
 console.log(result) //here its output will be undefined because function not returning us any value we have to write this code in a right way ..

 function addNumbers(number1,number2){
    return number1+number2
}
 const result1 = addNumbers(3,5)
 console.log(result)
 //OR
 function addNumbers(number1,number2){
    let result2 = number1+number2
    return result2 
 }
 const result2 = addNumbers(3,5)
 console.log(result)