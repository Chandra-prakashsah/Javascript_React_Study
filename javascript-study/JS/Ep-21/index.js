const cart = [];

const promise = createOrder(cart);
console.log(promise);
promise.then((data) => {
  console.log(data);
  return data;
}).catch((err) => {
  console.log(err.message);
})

.then((orderId) => {
  return proceedToPayment(orderId);
}).then((paymentInfo) => {
  console.log(paymentInfo);
})
  .catch((err) => {
    console.log(err.message);

  }).then(()=>{
    console.log("No matter what I do, I will always be here");
  })

function createOrder(cart) {
  const pr = new Promise((resolve, reject) => {
    if (!validateCart(cart)) {
      const err = new Error("cart is not valid");
      reject(err);
    }
    const orderId = "1234";
    if (orderId) {
      setTimeout(() => {
        resolve(orderId);
      }, 5000)
    }
  })
  return pr;
}

function validateCart(cart) {
  return false;
}

function proceedToPayment(orderId) {
  return new Promise((resolve, reject) => {
    resolve("payment done");
  })
}