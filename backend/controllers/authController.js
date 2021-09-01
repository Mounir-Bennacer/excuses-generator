const User = require('../models/User')

module.exports.register = async (req, res, next) => {
  const {username, email, password} = req.body
  try {
    const newUser = await new User({
      username, email, password
    })
    const savedUser = await newUser.save()
    res.status(201).json({
      success: true,
      user: savedUser
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    })
  }
}

module.exports.login = async (req, res) => {
  const {email, password} = req.body

  if(!email || !password){
    res.status(400).json({
      success: false,
      error: 'Please provide an email and a password'
    })
  }

  try {
    const user = await User.findOne({email}).select('+password')
    if(!user){
    res.status(404).json({
      success: false,
      error: 'Invalid credentials'
    })
    }

    const isMatch = await user.matchPassword(password)
    if(!isMatch){
      res.status(403).json({
        success: false,
        error: 'Invalid credentials'
      })
    }

    res.status(200).json({
      success: true,
      token: '123123kderkjf'
    })
   } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    })
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
