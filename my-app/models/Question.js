import mongoose from "mongoose";

const mongooseSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
});

const Product = mongoose.model("product", mongooseSchema);

module.exports = { Product };
