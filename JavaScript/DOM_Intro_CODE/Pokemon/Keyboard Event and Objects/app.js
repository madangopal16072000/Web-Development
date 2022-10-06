document.querySelector('button').addEventListener('click', function(evt) {
    console.log(evt);
})

const input = document.querySelector('input');

input.addEventListener('keydown', (e) => {
    console.log(e.key);
    console.log(e.code);
});

// input.addEventListener('keyup', () => {
//     console.log("KEYUUP");
// })


// for global event

window.addEventListener('keydown', (e) => {
    switch(e.code)
    {
        case "ArrowUp" :
            console.log("UP!");
            break;
        case "ArrowDown" :
            console.log("Down!");
            break;
        case "ArrowLeft" :
            console.log("Left");
            break;
        case "ArrowRight" :
            console.log("Right");
            break;
        default :
            console.log("Ignored");
            break;
    }
});