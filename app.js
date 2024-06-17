
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



const statusRef = document.querySelector('.status')
const videoRef = document.querySelector('.video')

function getSubscriptionStatus() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("VIP");
        }, 2000);
    });
}

function getVideo(getSubscriptionStatus) {
    return new Promise((resolve, reject) => {
        if (getSubscriptionStatus === "VIP") {
            resolve("show video") 
        }
        else if (getSubscriptionStatus === "FREE") {
            resolve("show trailer")
        }
        else {
            reject("no video")
        }
        })
    }

// getSubscriptionStatus().then(response => console.log(response))
async function main() {
    const status = await getSubscriptionStatus();
    statusRef.innerHTML = status;
    try {
        console.log(await getVideo(status))
    }
    catch (e) {
        console.log(e)
        videoRef.innerHTML = e;
    }
    console.log(await getVideo(status))
}

main();