const jokes = require("give-me-a-joke");
const color = require("colors");
const cowsay = require("cowsay");
console.log("cowsay Hello");
jokes.getRandomDadJoke(function(joke) {
    console.log(color.rainbow(joke));
})
cowsay Hello