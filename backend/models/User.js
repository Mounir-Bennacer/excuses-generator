const mongoose = require('mongoose');
const { isEmail } = require('validator')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

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
    minlength: [6, 'Minimum password length is 6 characters'],
    select: false,
  },
  resetPasswordToken: String,
  resetpasswordExpire: Date,
}, { timestamps: true }
)

UserSchema.pre('save', async function(next){
  if(!this.isModified("password")){
    next()
  }
  const salt = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password, salt)
  next()
})

UserSchema.methods.matchPassword = async function(password) {
  return await bcrypt.compare(password, this.password)
}

UserSchema.methods.getSignedToken = function() {
  return jwt.sign({id: this._id}, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRE })
}

module.exports = mongoose.model('user', UserSchema)
