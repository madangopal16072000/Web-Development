const express = require('express');
const app = express();
const morgan = require('morgan');
const AppError = require('./AppError');
app.use(morgan('tiny'));


const requestTime = (req, res, next) => {
    req.requestTime = Date.now();
    next();
}

app.use(requestTime);


const verifyPassword = (req, res, next) => {
    const {password} = req.query;
    if(password === 'madangopal')
    next();
    else
    throw new AppError("Password Required", 401);
};

app.get('/', (req, res) => {
    res.send(`Hello World!!!!</br><small>Requested at ${req.requestTime}</small>`);
})

app.get('/error', (req, res) => {
    chicken.fly();
})
app.get('/dogs', (req, res) => {
    res.send("WOOF WOOD");
})

app.get('/secret', verifyPassword, (req, res) => {
    res.send("Here is the Secret");
})

app.get('/admin', (req, res) => {
    throw new AppError("You are not the admin", 403);
})
app.use((req, res) => {
    res.status(404).send("NOT FOUND!!");
})
// app.use((err, req, res, next) => {
//     console.log("******************************************");
//     console.log("*****************ERROR********************");
//     console.log("******************************************");
//     // res.status(404).send("OH BOY!! WE GOT AN ERROR");
//     next(err);
// })

app.use((err, req, res, next) => {
    const {status = 500} = err;
    const {message = "Something went Wrong"} = err;
    res.status(status).send(message);
})

app.listen(3000, () => {
    console.log("LISTENING ON PORT 3000");
})