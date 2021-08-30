const jwt = require('jsonwebtoken')
const config = require('../config/jwtConfig')


module.exports.jwtAuthorization = async ( req, res, next ) => {
  console.log(req)
  next()
}

module.exports.generateToken = async (req, res, next) => {
  let user = 'this is your secret key'

  let token = jwt.sign(
    {key : user},
    config.secret,
    {
      expiresIn: 86400 // expire in 24 hours
    })

    return res.status(200).send({
      accessToken: token
    })
}

module.exports.verifyToken = async (req, res, next) => {
  let secret = 'Welcome to node express authentication'
  return res.status(200).send(secret)
}
