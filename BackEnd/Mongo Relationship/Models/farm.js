const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/relationshipDemo');
  console.log("Database Connected");
}

const productSchema = new mongoose.Schema({
    name : String,
    price : Number,
    season : {
        type : String,
        enum : ["Spring", "Summer", "Fall", "Winter"]
    }
});

const Product = mongoose.model('Product', productSchema);

// Product.insertMany([
//     {name : "Goddess Melon", price : 4.99, season : "Summer"},
//     {name : "Sugar Baby Watermelon", price : 4.99, season : "Summer"},
//     {name : "Asparagus", price : 3.99, season : "Spring"}
// ]);

const farmSchema = new mongoose.Schema({
    name : String,
    city : String,
    products : [
        {type : mongoose.Schema.Types.ObjectId, ref : 'Product'}
    ]
})

const Farm = mongoose.model('Farm', farmSchema);

// const makeFarm = async () => {
//     const farm = new Farm({name : "Full Belly Farms", city : "Guinda, CA"});
//     const melon = await Product.findOne({name : "Goddess Melon"});
//     farm.products.push(melon);
//     await farm.save();
//     console.log(farm);
// }

// makeFarm();

const addProduct = async () => {
    const farm = await Farm.findOne({name : "Full Belly Farms"});
    const watermelon = await Product.findOne({name : "Sugar Baby Watermelon"});
    farm.products.push(watermelon);
    farm.save();
}

Farm.findOne({name : "Full Belly Farms"}).populate('products').then(farm => console.log(farm));