const router = require('express').Router()
const {scape_goat_create, scape_goat_read, scape_goat_update, scape_goat_delete, scape_goat_get_all} = require('../controllers/scapeGoatController')

// CREATE
router.post('/create', scape_goat_create)

// READ
router.get('/get/:id', scape_goat_read)

// UPDATE
router.put('/edit/:id', scape_goat_update)

// DELETE
router.delete('/delete/:id', scape_goat_delete)

// get all ScapeGoats
router.get('/get', scape_goat_get_all)

module.exports = router
