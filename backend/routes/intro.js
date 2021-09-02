const router = require('express').Router()
const {intro_create, intro_read, intro_update, intro_delete,intro_get_all} = require('../controllers/introController')
const { protect } = require('../middlewares/auth')

// CREATE
router.post('/create', intro_create)

// READ
router.get('/get/:id', intro_read)

// UPDATE
router.put('/edit/:id', intro_update)

// DELETE
router.delete('/delete/:id', intro_delete)

// get all intros
router.get('/get', protect, intro_get_all)

module.exports = router
