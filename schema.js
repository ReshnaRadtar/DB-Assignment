const mongoose = require("mongoose");
const productCategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product_Category",
    required: true,
  },
});

const Product_Category = mongoose.model(
  "Product_Category",
  productCategorySchema
);
const Product = mongoose.model("Product", productSchema);
module.exports = { Product_Category, Product };
