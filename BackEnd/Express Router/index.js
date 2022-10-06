const express = require('express');
const app = express();
const shelterRoutes = require('./routes/shelters');
const adminRoutes = require('./routes/admin');

app.use((req, res, next) => {
    if(req.query.isAdmin){
        next();
    }
    res.send("SORRY NOT AN ADMIN");
})
app.use('/shelters', shelterRoutes);
app.use('/admin', adminRoutes);
app.listen(3000, () => {
    console.log("Serving on localhost:3000");
})