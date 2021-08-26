const router = require('express').Router()
const introController = require('../controllers/introController')

// CREATE
router.post('/create', introController.intro_create)

// READ
router.get('/get/:id', introController.intro_read)

// UPDATE
router.put('/edit/:id', introController.intro_update)

// DELETE
router.delete('/delete/:id', introController.intro_delete)

// get all intros
router.get('/get', introController.intro_get_all)

module.exports = router
