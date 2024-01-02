//loops

let num = 10;
for(let i=0; i<num; i++){
    if(i%2 == 0){
        console.log(i, "is an even number");
    }else{
        console.log(i, "is an odd number");
    }
}
let i=0;
while(i<num){
   if(i%3 == 0){
    console.log(i, "is a multiple of 3");
   }else{
    console.log(i,"is not a multiple of 3");
   }
   i++;
}



//string and its methods

let str = "   Nitesh Mishra   ";
let name = str.trim();
let literal = `Hello Mr. ${name}`;
console.log("Length:",str.length);
console.log(literal);

console.log(name.toUpperCase());
console.log(name.toLowerCase());
console.log(name.slice(0, 6));
console.log(name.replace("esh", "in"));
console.log(name.charAt(0));


//practice
//ask the user to input their full name. generate a user name that starts with @ followed by their full name and 
//the length of their name

let fullName = prompt("Please enter your name: ");
let userName = "@".concat(fullName.replace(" ", ".").toLowerCase()).concat(fullName.length);

console.log(`Hello ${fullName} your user name is ${userName}.`)

