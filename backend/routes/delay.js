const router = require('express').Router()
const {delay_create, delay_read, delay_update, delay_delete, delay_get_all} = require('../controllers/delayController')
const {protect} = require('../middlewares/auth')

// CREATE
router.post('/create',protect, delay_create)

// READ
router.get('/get/:id',protect, delay_read)

// UPDATE
router.put('/edit/:id',protect, delay_update)

// DELETE
router.delete('/delete/:id',protect, delay_delete)

// get all Delays
router.get('/get', delay_get_all)

module.exports = router
