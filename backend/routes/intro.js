const router = require('express').Router()
const {protect} = require('../middlewares/auth')

const {
    intro_create,
    intro_read,
    intro_update,
    intro_delete,
    intro_get_all,
} = require('../controllers/introController')

// CREATE
router.post('/create',protect, intro_create)

// READ
router.get('/get/:id',protect, intro_read)

// UPDATE
router.put('/edit/:id',protect, intro_update)

// DELETE
router.delete('/delete/:id',protect, intro_delete)

// get all intros
router.get('/get', intro_get_all)

module.exports = router
