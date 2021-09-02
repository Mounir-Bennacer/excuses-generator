const User = require('../models/User')
const ErrorResponse = require('../utils/ErrorResponse')

module.exports.register = async (req, res, next) => {
  const {username, email, password} = req.body
  try {
    const user = await User.create({ username, email, password })
    res.status(201).json({ success: true, user })
  } catch (error) {
    next(error)
  }
}

module.exports.login = async (req, res) => {
  const {email, password} = req.body

  if(!email || !password){
    return next(new ErrorResponse('Please provide an email and a password', 400))
  }

  try {
    const user = await User.findOne({email}).select('+password')
    if(!user){
      return next(new ErrorResponse('Invalide credentials', 404))
    }

    const isMatch = await user.matchPassword(password)
    if(!isMatch){
      return next(new ErrorResponse('Invalide credentials', 403))
    }

    res.status(200).json({
      success: true,
      token: '123123kderkjf'
    })
   } catch (error) {
      return new ErrorResponse(error.message, 500)
  }
}

module.exports.forgotpassword = async (req, res) => {
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
