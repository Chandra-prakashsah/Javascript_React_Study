//**************promise.all()*****************//
//The Promise.all() static method takes an iterable of promises as input and 
//returns a single Promise. This returned promise fulfills when all of the input's 
//promises fulfill (including when an empty iterable is passed), 
//with an array of the fulfillment values. 
//It rejects when any of the input's promises rejects, with this first rejection reason.


const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("p1 success");
    }, 1000);
});

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("p2 success");
    }, 2000);
});

const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve("p3 success");
        reject("p3 failed");
    }, 3000);
});

Promise.all([p1, p2, p3]).then((result) => {
    console.log(result);
}).catch((error) => {
    console.error(error);
})