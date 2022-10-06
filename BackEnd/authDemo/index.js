const express = require('express');
const app = express();
const User = require('./models/user');
const path = require('path');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const session = require('express-session');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/authDemo');
  console.log("Database Connected");
}


app.use(express.urlencoded({extended : true}))
app.set('view-engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(session({secret : "notagoodsecret", saveUninitialized : true, resave : false}));

app.get('/', (req, res) => {
    res.render('index.ejs');
})
app.get('/register', (req, res) => {
    res.render('register.ejs');
})
app.post('/register', async (req, res) => {
    const {username, password} = req.body;
    const user = new User({ username, password })
    await user.save();
    res.redirect('/');
})

app.get('/login', (req, res) => {
    res.render('login.ejs');
})
app.post('/login', async (req, res) => {
    const {username, password} = req.body;
    const login = await User.findAndValidate(username, password);
    if(login)
    {
        req.session.user_id = login._id;
        res.redirect('/secret');
    }
    else
    res.send("Invalid Username or Password");
})
const requireLogin = (req, res, next) => {
    if(!req.session.user_id)
    return res.redirect('/login');
    next();
}
app.get('/secret', requireLogin, (req, res) => {

    res.render('secret.ejs');
})
app.get('/topsecret', requireLogin, (req, res) => {
    res.send("TOP SECRET");
})
app.post('/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/login');
})
app.listen(3000, () => {
    console.log("Serving on localhost:3000");
})