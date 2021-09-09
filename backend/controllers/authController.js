const User = require('../models/User')
const ErrorResponse = require('../utils/ErrorResponse')

exports.register = async (req, res, next) => {
  const {username, email, password} = req.body;

  try {
    const user = await User.create({
      username,
      email,
      password
    });

    sendToken(user, 201, res)
  } catch (error) {
    next(new ErrorResponse(error.message, error.statusCode))
  }
}

exports.login = async (req, res, next) => {
  const {email, password} = req.body

  if(!email || !password){
    return next(new ErrorResponse('Please provide an email and a password', 400))
  }

  try {
    const user = await User.findOne({email}).select('+password')
    if(!user){
      return next(new ErrorResponse('Invalid credentials', 401))
    }

    const isMatch = await user.matchPassword(password)
    if(!isMatch){
      return next(new ErrorResponse('Invalid credentials', 401))
    }

    sendToken(user, 200, res)
   } catch (error) {
      return new ErrorResponse(error.message, 500)
  }
}

exports.forgotpassword = async (req, res) => {
  try {
    res.send('forgot password route')
   } catch (error) {
    res.status(500).json(error)
  }
}

module.exports.resetpassword = async (req, res) => {
  try {
    res.send('reset password route')
   } catch (error) {
    res.status(500).json(error)
  }
}

const sendToken = (user, statusCode, res) => {
  const token = user.getSignedToken()

  res.status(statusCode).json({
    success: true,
    token
  })
}
