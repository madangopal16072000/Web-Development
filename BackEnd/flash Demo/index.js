const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const session = require('express-session');
const flash = require('connect-flash');


const sessionOptions = { secret : "thisisnotgoodsecret", resave : flash, saveUnitilized : false};
app.use(session(sessionOptions));
app.use(flash());

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/farm');
  console.log("Database Connected");
}


app.listen(3000, () => {
    console.log("Serving on localhost:3000");
})