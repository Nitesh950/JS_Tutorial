//basic console
console.log("Hello World");

//variables

age=24;
userName="Nitesh";
marks=74.6;

//trying to add integer and decimal number
console.log(age+marks);

//trying different concatenations
console.log(age + userName + marks);
console.log(age + " " + userName + " " + marks);
console.log(age + marks + userName) //age and marks were added as numbers, and the result got concatenated with userName
console.log(age + " " + marks +  " " + userName); //age and marks are treated as Strings
console.log(age + " " + marks + " " + (age + marks) + " " + userName); //use brackets if you want the values to be treated as numbers


//let and const

//var is also a keyword, but it is not encouraged to use since ES6. Use let instead. var has a global scope though.

let num1=24;
let string1="Nitesh";
const num2=91.3; //you can't change this later on

console.log(num1 + num2);
console.log(num1 + " " + num2); //declaring a variable as const does not affect the operations we apply on it


//even re-assigning a const variable with the same value will throw an error
// num2=91.3; 
// console.log(num2);


//datatypes
//7 primitive datatypes -> Number, String, Boolean, Undefined, Null, BigInt, Symbol
//BigInt and Symbol are not used frequently

// console.log(typeof(num1));

let type = typeof(num1);
console.log(type + " -> this is the datatype"); //the datatype of 'type' is printed


//non-primitive

const pen = {
    penName : "Parker",
    color :  "blue",
    rating: 5,
    price: 50,
};

console.log(pen);

console.log(pen.penName);
console.log(pen["penName"]);
console.log(pen.rating + pen.price); //all variables inside the object are treated like normal variables. The reuslt here is 55

