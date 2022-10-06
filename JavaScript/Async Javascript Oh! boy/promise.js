// const fakeRequestPromise = (url) => {
//     return new Promise( (resolve, reject) => {
//         const rand = Math.floor(Math.random()*10) + 1;
//         setTimeout( () => {
//             if(rand < 7)
//             resolve("Your Fake data here");
//             else
//             reject("connection time out");
//         }, 1000);
//     })
// }

// fakeRequestPromise('dog1')
// .then( (data) => {
//     console.log("Done!!!!!!");
//     console.log(data);
// }).catch( (err) => {
//     console.log("Oh! no it's an error ", err);
// })

const fakeRequestPromis = (color, delay) => {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay);
    });
};

fakeRequestPromis('violet', 1000)
.then( () => {
    return fakeRequestPromis('indigo', 1000);
})
.then( () => fakeRequestPromis('blue', 1000))
.then( () => fakeRequestPromis('green', 1000))
.then( () => fakeRequestPromis('yellow', 1000))
.then( () => fakeRequestPromis('orange', 1000))
.then( () => fakeRequestPromis('red', 1000));
