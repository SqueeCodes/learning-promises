
// const emailRef = document.querySelector(".email");
// console.log(emailRef)

// 1. Then
// fetch("https://jsonplaceholder.typicode.com/users/1")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   });


//2. Async/Await
// async function main() {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users/1")
//     const data = await response.json()
//     emailRef.innerHTML = data.email
// }

// main();


function getSubscriptionStatus() {
    return new Promise((resolve, reject) => {
        resolve("VIP")
    })
}
getSubscriptionStatus().then(response => console.log(response))
async function main() {
    console.log(await getSubscriptionStatus())
}
console.log(getSubscriptionStatus())