const mongoose = require('mongoose');
const { isEmail } = require('validator')

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    require: [true, 'Please provide a username'],
    minlength: [3, 'Minimun username length is 3 characters'],
    unique: [true, 'Sorry, this username already is taken'],
  },
  email: {
    type: String,
    require: [true, 'Please provide an email'],
    unique: [true, 'Sorry, this email already exists'],
    lowercase: true,
    validate: [ isEmail, 'Please enter a valid email' ]
  },
  password: {
    type: String,
    require: [true, 'Please provide a password'],
    minlength: [6, 'Minimum password length is 6 characters']
  }
}, { timestamps: true }
)

module.exports = mongoose.model('user', UserSchema)
