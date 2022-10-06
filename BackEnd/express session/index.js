const express = require('express');
const app = express();
const session = require('express-session');

app.use(session({secret : "thisisnotagoodsecret", resave : false, saveUninitialized : false}));
app.get('/viewscount', (req, res) => {
    if(req.session.count)
    {
        req.session.count += 1;
    }
    else
    {
        req.session.count = 1;
    }
    res.send(`YOU HAVE VISITED THIS PAGE ${req.session.count} TIMES`);
})
app.get('/register', (req, res) => {
    const {username = "Anonymous"} = req.query;
    req.session.username = username;
    res.redirect('/greet');
})
app.get('/greet', (req, res) => {
    const {username} = req.session;
    res.send(`Welcome back, ${username}`);
})
app.listen(3000, () => {
    console.log("Serving on localhost:3000");
})