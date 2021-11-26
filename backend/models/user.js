const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

//defining user schema
const userSchema = mongoose.Schema({
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  isVerified: {type: Boolean, default: false}
});

//plugging unique validator to user schema
userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);