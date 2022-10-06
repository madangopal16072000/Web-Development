// setTimeout(() => {
//     document.body.style.backgroundColor = "red";
//     setTimeout( () => {
//         document.body.style.backgroundColor = "orange"
//     }, 1000);
// }, 1000);

// setTimeout( () => {
//     document.body.style.backgroundColor = "orange"
// }, 2000);

// const changeBodyColor = (color, delay, next) => {
//     setTimeout( () => {
//         document.body.style.backgroundColor = color;
//         next();
//     }, delay);
// };

// changeBodyColor("green", 1000, () => {
//     changeBodyColor("red", 1000, () => {
//         changeBodyColor("blue", 1000, () => {

//         });
//     });
// });

function fakeRequest(url, success, failure) {
    const delay = Math.floor(Math.random()*4500) + 500;
    setTimeout( () => {
        if(delay > 4000)
        failure("Connection time out");
        else
        success("connection successful here is url :" + url);
    }, delay);
};

fakeRequest("books.com", (message) => {
    console.log(message);
}, (message) => {
    console.log(message);
});