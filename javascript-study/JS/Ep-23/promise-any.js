//promise.any();
//it returns the result of the first settled(resolved) promise.
//if all promises are rejected, it will throw an AggregateError.

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("p1 success");
    }, 1000);
});

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("p2 success");
    }, 2000);
});

const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve("p3 success");
        reject("p3 failed");
    }, 3000);
});

Promise.any([p1, p2, p3]).then((result) => {
    console.log(result);
}).catch((error) => {
    console.error(error);
    console.log(error.errors);
})
