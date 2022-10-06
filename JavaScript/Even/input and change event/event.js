const div = document.getElementById('container');

const button = document.querySelector('button');

div.addEventListener('click', () => {
    div.classList.toggle('hide');
})
button.addEventListener('click', (e) => {
    div.style.backgroundColor = makeRandColor();
    e.stopPropagation();
})

function makeRandColor() 
{
    const r = Math.floor(Math.random()*255);
    const g = Math.floor(Math.random()*255);
    const b = Math.floor(Math.random()*255);

    return `rgb(${r}, ${g}, ${b})`;
}
