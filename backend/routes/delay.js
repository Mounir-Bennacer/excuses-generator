const router = require('express').Router()
const delayController = require('../controllers/delayController')

// CREATE
router.post('/create', delayController.delay_create)

// READ
router.get('/get/:id', delayController.delay_read)

// UPDATE
router.put('/edit/:id', delayController.delay_update)

// DELETE
router.delete('/delete/:id', delayController.delay_delete)

// get all Delays
router.get('/get', delayController.delay_get_all)

module.exports = router
