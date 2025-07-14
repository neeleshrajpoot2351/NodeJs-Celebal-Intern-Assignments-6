const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: Number,
  quantity: Number,
});

module.exports = mongoose.model('Product', productSchema);
