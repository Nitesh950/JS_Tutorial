//we'll use this function or some version of it to understand callbacks, promises, and async-await
function getData1(id){
    console.log("Data for", id);
}

getData1(1);
getData1(2);

//The idea is to get data 2 only after data 1 is returned. Asynchronous programming. We'll use set-timout

function getData2(id){
    setTimeout( () => {
        console.log("Data for", id);
    }, 500);
}

getData2(3);
getData2(4);

//while the output may take 2 seconds for the above line of code. There is no 2-scond gap between getting data 3 and data4

//we'll use callback for this

function getData3(id, callback){
    setTimeout( () => {
        console.log("Data for", id);
        if(callback){
            callback(id);
        }
    }, 2000);
}

getData3(5, () => {
    getData3(6, () => {
        getData3(7, () => {
            console.log("All data is printed");
        })
    })
})

//above is the problem of callback hell

//Promises


function getData4(id){
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            console.log("Data for", id);
            resolve(200);
        }, 7000);
    }) 
}

getData4(8).then( (res) => {
    console.log("Status Code:",res);
})

//now let's say we want to get data 9, 10, and 11 in sequence. We use promise chaining

// let p1 = getData4(9);
// p1.then( () => {
//     let p2 = getData4(10);
//     p2.then( () => {
//         let p3 = getData4(11);
//     })
// })

//instead of defining p1, p2 etc, we can also write the same code as:

getData4(9).then( () => {
    getData4(10).then( () => {
        getData4(11).then( (res) => {
            console.log("Status Code", res)
        })
    })
})

//while promises are better than callback hells, they are still not very easy to understand
//async-await
//Just declare a function as async. An async function always returns a promise


function getData5(id){ 
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            console.log("Data for", id);
            resolve(200);
        }, 7000);
    }) 
}

// async function getAllData(){
//     await getData5(12);
//     await getData5(13);
//     await getData5(14);
// }

//notice how we have to call this getAllData() function?
//if you need this function to execute automatically without having to call it, use IIFE

//For IIFE, remove the name of the async function and wrap the function around paranthesis

(async function (){
    await getData5(12);
    await getData5(13);
    await getData5(14);
    await getData5(15);
})();



