const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/relationshipDemo');
  console.log("Database Connected");
}

const userSchema = new mongoose.Schema({
    username : String,
    age : Number
});

const User = mongoose.model('User', userSchema);
const tweetSchema = new mongoose.Schema({
    text : String,
    likes : Number,
    user : {type : mongoose.Schema.Types.ObjectId, ref : 'User'}
})

const Tweet = mongoose.model('Tweet', tweetSchema);

// const makeTweets = async() => {
//     const user = await User.findOne({username : "chickenfan99"});
//     const tweet2 = new Tweet({text : "bock bock bock, my chicken make noises!!", likes : 1});
//     tweet2.user = user;
//     await tweet2.save();
//     console.log(user);
//     console.log(tweet2);

// }

// makeTweets();

const findTweets = async () => {
    const t = await Tweet.find({}).populate('user');
    console.log(t);
}
findTweets()