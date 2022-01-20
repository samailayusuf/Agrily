const mongoose = require('mongoose');


//defining user schema
const productSchema = mongoose.Schema({
  name: {type: String, required: true},
  quantity: {type: Number, required: true},
  ownerEmail: { type: String, required: true, unique: true }, //To grab from useUser during data submission
  ownerName: { type: String, required: true }, //To grab from useUser
  isSold: {type: Boolean, default: false}, //To assign when payment is made
  soldDate: {type: Date, required: true}, // To assign when payment is made
  soldTo:{type: String, required: true} //To assign when payment is made
  
} );

//plugging unique validator to user schema
//userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('MyProducts', productSchema);