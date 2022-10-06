// getting-started.js
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/personApp');
}

const personSchema = new mongoose.Schema( {
    first : String,
    last : String
});

personSchema.virtual('fullname').get(function(){
    return `${this.first} ${this.last}`;
});

personSchema.pre('save', async function() {
    this.first = "Ram";
    this.last = "Nath";
    console.log("ABOUT TO SAVE!!!");
});

personSchema.post('save', async function() {
    console.log("JUST SAVED");
});
const Person = mongoose.model('Person', personSchema);
