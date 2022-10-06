
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/relationshipDemo');
  console.log("Database Connected");
}

const userSchema = new mongoose.Schema({
    first : String,
    last : String,
    addresses : [
        {
            _id : {id : false},
            street : String,
            city : String,
            state : String,
            country : String
        }
    ]
})

const User = mongoose.model('User', userSchema);

const makeUser = async () => {
    const u = new User(
        {
            first : "Harry",
            last : "Potter"
        }
    );
    u.addresses.push({
        street : "123 Sesame St.",
        city : "New York",
        state : "NY",
        country : "USA"
    });

    const res = await u.save();
    console.log(res);
};

const addAddress = async (id) => {
    const user = await User.findById(id);

    user.addresses.push({
        street : "99 3rd St.",
        city : "New York",
        state : "NY",
        country : "USA"
    });

    const res = user.save();
    console.log(res);
}

addAddress("62bdea4d798120e5aeec0532");