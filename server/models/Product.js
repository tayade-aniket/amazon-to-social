const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  features: { type: [String], required: true },
  image: { type: String, required: false }, // URL or path to the image
});

module.exports = mongoose.model('Product', ProductSchema);
