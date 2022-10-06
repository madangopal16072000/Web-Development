const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const AppError = require("./AppError");
// main().catch(err => console.log(err));

// async function main() {
//   await mongoose.connect('mongodb://localhost:27017/shopApp');
// }

const Product = require("./models/product");
mongoose
  .connect("mongodb://localhost:27017/farmStand2")
  .then(() => {
    console.log("MONGO CONNECTION OPEN!!!");
  })
  .catch((error) => {
    console.log("MONGO CONNECTION " + error);
  });

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/products", async (req, res) => {
  const { category } = req.query;
  if (category) {
    const products = await Product.find({ category });
    res.render("products/index.ejs", { products, category });
  } else {
    const products = await Product.find({});
    res.render("products/index.ejs", { products, category: "All" });
  }
});
// show all details
app.get("/products/allDetails", async (req, res) => {
  const products = await Product.find({});
  res.render("products/allDetails", { products });
});
const categories = ["fruit", "vegetable", "dairy"];
// form for inserting new products
app.get("/products/new", (req, res) => {
  res.render("products/new.ejs", { categories });
});
function wrapAsync(fn) {
  return function (req, res, next) {
    fn(req, res, next).catch(e => next(e));
  };
}
app.post(
  "/products",
  wrapAsync(async (req, res, next) => {
    const newProduct = await new Product(req.body);
    newProduct.save();
    res.redirect(`/products/${newProduct._id}`);
  })
);

app.get("/products/:id", wrapAsync(async (req, res, next) => {
  const { id } = req.params;
  const product = await Product.findById(id);
  if (!product) {
    throw new AppError("Product not found", 404);
  }
  res.render("products/show.ejs", { product });
}));
// form to edit the products
app.get("/products/:id/edit", async (req, res, next) => {
  const { id } = req.params;
  const product = await Product.findById(id);
  if (!product) {
    return next(new AppError("Product not found", 404));
  }
  res.render("products/edit", { product, categories });
});
// app put
app.put("/products/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body, {
      runValidators: true,
      new: true,
    });
    res.redirect(`/products/${product._id}`);
  } catch (error) {
    next(error);
  }
});

// app delete
app.delete("/products/:id", async (req, res) => {
  const { id } = req.params;
  const deletedProduct = await Product.findByIdAndDelete(id);
  res.redirect("/products");
});

app.use((err, req, res, next) => {
  console.log(err.name);
  next(err);
})
app.use((err, req, res, next) => {
  const { status = 500, message = "Something went wrong!!" } = err;
  res.status(status).send(message);
});
app.listen(3000, () => {
  console.log("APP IS LISTENING ON PORT 3000");
});
