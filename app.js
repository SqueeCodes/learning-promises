
const emailRef = document.querySelector(".email");
console.log(emailRef)

// 1. Then
// fetch("https://jsonplaceholder.typicode.com/users/1")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   });


//2. Async/Await
async function main() {
    console.log(1)
    const response = await fetch("https://jsonplaceholder.typicode.com/users/1")
    console.log(2)
    const data = await response.json()
    console.log(3)
    console.log(data)
    emailRef.innerHTML = data.email
}

main();