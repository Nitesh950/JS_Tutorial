let arr = [23, 34, 45];
console.log(arr);

arr.push(50, 51);
console.log(arr);

arr[4]=64;
console.log(arr);

arr[5]=72;
console.log(arr); //not an error

arr[7] = 100;
console.log(arr); //index 6 is considered emtpy

for(let i=0; i<arr.length; i++){
    console.log(arr[i] + 5); //all indices work fine, except for the empty index, where we get NaN
}

arr[6] = 74;
arr.unshift(13); //changes are done in the original array
console.log(arr);

arr.shift();
console.log(arr);

let arr2 = arr.slice(0, 4);
console.log(arr); //the original array did not change
console.log(arr2);

let arr3 = arr.concat(arr2);
console.log(arr3);

const arr4 = [1,2];
arr4[0] = 5;
console.log(arr4); //even though the array is const, you can change the values inside it. Object-like behaviour.


//adding an item to the array4 using splice
arr4.splice(1, 0, 10);
console.log(arr4); // adds 10 at index 1

//deleting an item to the array4 using splice
arr4.splice(1, 1);
console.log(arr4); // deletes 10 at index 1


//replacing an item to the array4 using splice
arr4.splice(0, 1, 10);
console.log(arr4); // replaces 5 with at 10 at index 0



