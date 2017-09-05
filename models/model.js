const mongoose = require('mongoose');

const vendorSchema = new mongoose.Schema({
  snack: String,
  quantity: Number,
  price: Number 
})

const VendorSchema = mongoose.model('VendorSchema', vendorSchema);

module.exports = VendorSchema
