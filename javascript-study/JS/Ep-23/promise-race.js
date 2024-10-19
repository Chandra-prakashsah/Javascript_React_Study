//promise.race();
//it returns the result of the first settled(resolved or rejected) promise.

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

Promise.race([p1, p2, p3]).then((result) => {
    console.log(result);
}).catch((error) => {
    console.error(error);
})