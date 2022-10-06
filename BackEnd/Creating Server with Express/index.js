const express = require("express");

const app = express();

// app.use( (req, res) => {
//     console.log("we can got a new request");
//     // res.send("<h1>This is my webpage</h1>")
// })
app.get('/', (req, res) => {
    res.send("Welcome to the Home Page of Madan Gopal Website");
})

app.get('/r/:subreddit/:postID', (req, res) => {
    const {subreddit, postID} = req.params;
    res.send(`<h1>Viewing the ${postID} on the Browsing the ${subreddit}</h1>`)
})
app.post('/cats', (req, res) => {
    res.send("This is differnet form get request");
})
app.get('/cats', (req, res) => {
    res.send("MEOW!!");
})
app.get('/dogs', (req, res) => {
    res.send("WOOF!!!");
})
app.get('/search', (req, res) => {
    const {q} = req.query;
    console.log(req.query);
    res.send(`Search result for ${q}`);
})
app.get( '*', (req, res) => {
    res.send(`I don't know that path`);
})

app.listen(3000, () => {
    console.log("LISTENING ON PORT 3000");
})