const mongoose = require('mongoose');


//defining user schema
const productSchema = mongoose.Schema({
  id: {type:String , required:true}, 
  name: {type: String, required: true},
  quantity: {type: Number, required: true},
  imageURL:{type:String, required: true},
  ownerEmail: { type: String, required: true, unique: true }, //To grab from useUser during data submission
  ownerName: { type: String, required: true }, //To grab from useUser
  isSold: {type: Boolean, default: false}, //To assign when payment is made
  soldDate: {type: Date}, // To assign when payment is made
  soldTo:{type: String} //To assign when payment is made
  
} );

//plugging unique validator to user schema
//userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Product', productSchema);