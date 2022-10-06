const form = document.querySelector('#shelterForm');
const input = document.querySelector('#catName');
const ul = document.getElementById('cats');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const cat = input.value;
    const newLi = document.createElement('li');
    newLi.innerText = cat;
    ul.appendChild(newLi);
    input.value = "";
})


