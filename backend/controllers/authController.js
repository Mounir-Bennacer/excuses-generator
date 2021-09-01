const User = require('../models/User')

module.exports.register = async (req, res) => {
  try {
    const newUser = new User(req.body)
    const savedUser = await newUser.save()
    res.status(201).json(savedUser)
  } catch (error) {
    res.status(500).json(error)
  }
}

module.exports.login = async (req, res) => {
  try {
    res.send('login page')
   } catch (error) {
    res.status(500).json(error)
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
