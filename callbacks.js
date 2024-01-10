function greetEnglish(){
    console.log("Hello");
}

function greetSpanish(){
    console.log("Ola");
}

function homePage(callback){
    console.log("You're on the home page");
    callback();
}

homePage(greetEnglish);
homePage(greetSpanish); 



let arr = [1,0,-1];

function removeNegative(arr, callback){
    let anotherArray = [];
    for(let val of arr){
        if(callback(val) == true){
            anotherArray.push(val);
        } 
    }
    return anotherArray;
}

//calling removeNegative with an arrow-function as callback
let positiveArray = removeNegative(arr, (x) => x>=0);
console.log(positiveArray);

function checkPositive(x){
    return x>=0;
}

//calling removeNegative function with a basic callback function (checkPositive())
let anotherPositiveArray = removeNegative(arr, checkPositive);
console.log(anotherPositiveArray);


//the problem of nested callback

//let's see it in synchronous programming, though it is not very common
function stepOne(callback){
    console.log("Step One");
    callback();
}
function stepTwo(callback){
    console.log("Step Two");
    callback();
}
function stepThree(callback){
    console.log("Step Three");
    callback();
}

//this is the problem of callback hell in context of synchronous programming. 
//It becomes more prominent in asynchronous programming
stepOne( () => {
    stepTwo( () => {
        stepThree( () => {
            console.log("All functions have been executed");
        })
    })
});



