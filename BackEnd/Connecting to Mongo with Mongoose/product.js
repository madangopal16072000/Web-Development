// getting-started.js
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/shopApp');
  console.log("CONNECTION OPEN!!!");
}

const productSchema = new mongoose.Schema(
    {
        name : {
            type : String,
            required : true
        },
        price : {
            type : Number,
            min : [0, 'Price Must Be Positive']
        },
        onSale : {
            type : Boolean,
            default : false
        },
        categories : {
            type : [String]
        },
        qty : {
            online : {
                type : Number,
                default : 0
            },
            isStore : {
                type : Number,
                default : 1000
            }
        }

    }
);

productSchema.methods.greet = function() {
    console.log("Hello, How you doing");
}
productSchema.methods.changeOnSale = function() {
    this.onSale = !this.onSale;
    return this.save();
}

productSchema.methods.addCategory = function(newCat) {
    this.categories.push(newCat);
    return this.save();
}

productSchema.statics.fireSale = function() {
    return this.updateMany({}, {onSale : true, price : 0});
}
const Product = mongoose.model('Product', productSchema);

// const bike = new Product({
//     name : 'Mountain Bike',
//     price : 599,
//     categories : ["Cycling", "Safety"]
// })

// bike.save()
// .then(data => {
//     console.log("IT WORKED");
//     console.log(data);
// })
// .catch(err => {
//     console.log("OH NO ERROR");
//     console.log(err);
// })

const findProduct = async () => {
    const foundProduct = await Product.findOne({name : 'Mountain Bike'});
    console.log(foundProduct);
    await foundProduct.changeOnSale();
    await foundProduct.addCategory('Outdoors');
    foundProduct.greet();
    console.log(foundProduct);
}
Product.fireSale().then(res => console.log(res));

