// async and await are used to handle promises.
// An async function always returns a promise.
// 'async' is a keyword used to define an asynchronous function.
// 'await' is a keyword used to wait for a promise to resolve inside an async function.
// 'await' can only be used inside an async function.


// const promise=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("hello world");
//     },5000)
// })


// const promise1=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("hello world1");
//     },10000)
// })
//////////////oldway before async and await

// async function getData(){
//     return promise;
// }

// const data=getData();
// data.then((data)=>console.log(data))


///////////////////using async and await
// async function getData(){
//     const res=await promise;
//     //Js Engine will wait until promise is resolved
//     console.log("hello javascript");
//     console.log(res);

//     const res1=await promise1;
//     //Js Engine will wait until promise is resolved
//     console.log("hello javascript1");
//     console.log(res1);
// }
// getData();


////////////////////real world example
async function getData() {

    //fetch=>Response.json()=>result

    try {
        const res = await fetch("https://jsonplaceholder.typicode.co/users");
        const data = await res.json();
        console.log("real world example");
        console.log(data);

    } catch (error) {
        console.log(error);
    }
}
getData();