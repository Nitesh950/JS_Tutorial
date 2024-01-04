//basic function definition
function calculateSquare(value){
    console.log(value**2);
}

//arrow function. You can also return values inside arrow functions, just like normal functions
let calSquare = (val)=>{console.log(val**2)};

let arr = [1,2,3,4,5];

/*for-each method
    1. Does not return a value
    2. Does not create a new value. Does opeartions on the values of the same array
    3. Takes 3(optional) arguments: value, index, and the array itself
    4. is a higher order function. An HOF takes another function as its parameter
    5. Takes a callback function as it's parameter. A callback function is passed as a parameter to another function.
*/
arr.forEach((val, index, arr)=>{
    console.log(val**2, index, arr);
});



console.log("Method 2: Calling an arrow function");
arr.forEach(calSquare);

console.log("Method 3: Calling a normal function" );
arr.forEach(calculateSquare);

// let newArr = arr.forEach(calculateSquare);
// console.log("New Array for-each : ", newArr); this won't work because forEach does not return a new Array


//map, filter, and reduce methods
let mapArr = arr.map((val) => {
    return val*5;
});
console.log(mapArr);

console.log(
    arr.filter((val) => {
        return val>2;
    })); //you could either directly print the value or assign it to a new array, since filter creates a new array


let sumOfValues = arr.reduce((result, currVal) => {
    return result + currVal;
});
console.log(sumOfValues);