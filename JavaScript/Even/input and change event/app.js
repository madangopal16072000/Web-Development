const input = document.querySelector('input');
const h2 = document.querySelector('h2');
// input.addEventListener('change', (e) => {
//     console.log("Madan Gopal");
// })

input.addEventListener('input', (e) => {
    h2.innerText = input.value;
})
