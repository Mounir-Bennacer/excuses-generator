const router = require('express').Router()
const scapeGoatController = require('../controllers/scapeGoatController')

// CREATE
router.post('/create', scapeGoatController.scape_goat_create)

// READ
router.get('/get/:id', scapeGoatController.scape_goat_read)

// UPDATE
router.put('/edit/:id', scapeGoatController.scape_goat_update)

// DELETE
router.delete('/delete/:id', scapeGoatController.scape_goat_delete)

// get all ScapeGoats
router.get('/get', scapeGoatController.scape_goat_get_all)

module.exports = router
