const router = require('express').Router()
const {delay_create, delay_read, delay_update, delay_delete, delay_get_all} = require('../controllers/delayController')

// CREATE
router.post('/create', delay_create)

// READ
router.get('/get/:id', delay_read)

// UPDATE
router.put('/edit/:id', delay_update)

// DELETE
router.delete('/delete/:id', delay_delete)

// get all Delays
router.get('/get', delay_get_all)

module.exports = router
