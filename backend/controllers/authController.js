const User = require('../models/User')

module.exports.signup = async (req, res) => {
  try {
    // { username, email, password } = req.body
    const newUser = new User(req.body)

    const savedUser = await newUser.save()
    res.status(201).json(savedUser)
  } catch (error) {
    res.status(500).json(error)
  }
}

module.exports.signin = async (req, res) => {
  try {
    // { email, password } = req.body
    const savedUser = await newUser.save()
    res.status(200).json(savedUser)
   } catch (error) {
    res.status(500).json(error)
  }
}
