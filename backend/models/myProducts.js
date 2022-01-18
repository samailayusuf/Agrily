const mongoose = require('mongoose');
//const uniqueValidator = require('mongoose-unique-validator');

//defining user schema
const productSchema = mongoose.Schema({
  name: {type: String, required: true},
  quantity: {type: Number, required: true},
  ownerEmail: { type: String, required: true, unique: true },
  ownerName: { type: String, required: true },
  isSold: {type: Boolean, default: false},
  soldDate: {type: Date, required: true},
  
} );

//plugging unique validator to user schema
//userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('MyProducts', productSchema);