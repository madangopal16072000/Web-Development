const express = require("express");
const app = express();
const path = require('path');
const {v4 : uuid} = require('uuid');
const methodOverride = require('method-override');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(methodOverride('_method'));
let  comments = [
    {
        id : uuid(),
        "username" : "Todd",
        "comment" : "lol that is so funny"
    },
    {
        id : uuid(),
        "username" : "Skyler",
        "comment" : "I like to go birdwatching with my dog"
    },
    {
        id : uuid(),
        "username" : "SkBerBoi",
        "comment" : "Plz delete your account, Todd"
    },
    {
        id : uuid(),
        "username" : "onlysaywoof",
        "comment" : "woof woof woof"
    }
];
app.use(express.urlencoded({ extended : true }));

app.get('/comments', (req, res) => {
    res.render('comments/index.ejs', {comments});
})

app.get('/comments/new', (req, res) => {
    res.render('comments/new.ejs');
})

app.post('/comments', (req, res) => {
    const {username, comment} = req.body;
    comments.push({id : uuid(), username, comment});
    res.redirect('/comments');
})

app.get('/comments/:id', (req, res) => {
    const {id} = req.params;
    const comment = comments.find( (element) => {
        return element.id === id;
    })
    res.render('comments/show.ejs', {comment});
})
// in form 
app.patch('/comments/:id', (req, res) =>{
    const { id } = req.params;
    const newComment = req.body.comment;
    const foundComment = comments.find(elements => elements.id === id);
    foundComment.comment = newComment;
    res.redirect('/comments');
})
// for updation in browser 
app.get('/comments/:id/edit', (req, res) => {
    const {id} = req.params;
    const comment = comments.find(elements => {
        return elements.id === id;
    })
    res.render('comments/edit.ejs', {comment});

})

// for deletion
app.delete('/comments/:id', (req, res) => {
    const {id} = req.params;
    comments = comments.filter(element => {
        return element.id !== id;
    });
    res.redirect('/comments');
})
app.get("/tacos", (req, res) => {
    res.send("GET /tacos RESPONSE");
})

app.post("/tacos", (req, res) => {
    const {meat, qty} = req.body;
    res.send(
        `Name : ${meat} Quatity : ${qty}`
    );
    console.log(req.body);
})
app.listen(3000, () => {
    console.log("LISTENING ON PORT 3000");
})