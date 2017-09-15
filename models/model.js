const mongoose = require('mongoose');

const VendorSchema = new mongoose.Schema({
  snack: String,
  quantity: Number,
  price: Number
})

const Vending = mongoose.model('VendorSchema', VendorSchema);

module.exports = Vending
