const router = require('express').Router()
const {register, login} = require('../controllers/authController')

router.post('/register', register)

router.post('/login', login)

// router.post('/forgotpassword', forgotpassword)

// router.post('/resetpassword/:resetToken', resetpassword)

module.exports = router
