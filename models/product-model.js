const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const productSchema = new Schema(
  {
    // fields
    name: { type: String },
    price: { type: String },
    imageUrl: { type: String },
    description: { type: String}
  }
);

const ProductModel = mongoose.model('Product', productSchema);

module.exports = ProductModel;
