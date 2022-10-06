const form = document.querySelector('form');
const un = document.querySelector('#userName');
const tweet = document.getElementById('tweet');
const list  = document.querySelector('ul');

list.addEventListener('click', (e) => {
    e.target.nodeName === "LI" && e.target.remove();
})
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const newLi = document.createElement('li');
    const newB = document.createElement('b');
    newB.innerText = un.value;
    newLi.append(newB);
    newLi.append(` : ${tweet.value}`);
    list.append(newLi);
    un.value = "";
    tweet.vaue = "";
})