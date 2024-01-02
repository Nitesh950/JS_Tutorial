//operators

let a=26;
let b="26";

console.log('a+b= ', a+b);
console.log('a-b= ', a-b);
console.log('a*b= ', a*b);
console.log('a/b= ', a/b); //notice how both the operands are integers but the result is a decimal value

let c = 5.2;

console.log('a/c = ', a/c); //a number will be treated as a number regardless of its number-type. Unlike Java.


console.log(a==b); //false because values are different
console.log(a!=b); //true because values are different
console.log(a===b); //false because type and values are differet
console.log(a!==b); //true because type and/or values are differet



//conditional statements

if(a==b){
    console.log("Values are equal"); //this will run because we are only checking the value and not type
}else if(a===b){
    console.log("both values and types are equal");
}else if(a!=b){
    console.log("Values are not equal");
}else{
    console.log("Neither value nor type is equal");
}


//User Input

let number = prompt("Enter a number: ");

if(number%2 == 0){
    console.log("It is an even number");
}else{
    console.log("It is an odd number");
}

