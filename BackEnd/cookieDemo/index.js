const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();

app.use(cookieParser('thisismysecret'));
app.get('/greet', (req, res) => {
    const {name = "anonymous"} = req.cookies;

    res.send(`Hey there, ${name}`);
})
app.get('/setname', (req, res) => {
    res.cookie('name', 'madan gopal');
    res.send("OK SENT YOU A COOKIE");
})
app.get('/getsignedcookie', (req, res) => {
    res.cookie('fruit', 'grape', {signed : true});
    res.send("COOKIE SENT");
})
app.get('/verifyfruit', (req, res) => {
    console.log(req.signedCookies);
    res.send(req.signedCookies);
})
app.listen(3000, () => {
    console.log("Serving on localhost:3000");
})