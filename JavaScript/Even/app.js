const button = document.getElementById('v2');

button.onclick = function() {
    console.log("You Clicked me you Moron");
}

function scream() {
    console.log("AHHHHHHHHHHHHHH!");
    console.log("Stop touching me");
}

button.onmouseenter = scream;

const btn3 = document.getElementById('v3');
btn3.addEventListener('mouseup', () => {
    console.log("shut up you moron");
})