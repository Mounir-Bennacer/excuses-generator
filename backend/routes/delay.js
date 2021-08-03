const router = require('express').Router()
const Delay = require('../models/Delay')

// CREATE
router.post('/create', async (req, res) => {
  const newDelay = new Delay(req.body)
  try {
    const savedDelay = await newDelay.save()
    res.status(200).json(savedDelay)
  } catch (error) {
    res.status(500).json(error)
  }
})

// READ
router.get('/get/:id', async (req, res) => {
  try {
    Delay.findById({_id: req.params.id}, async (err, delay) => {
      await res.status(200).json(delay)
    })
  } catch (error) {
    res.status(500).json(error)
  }
})

// UPDATE
router.put('/edit/:id', async (req, res) => {
  try {
    Delay.updateOne({_id: req.params.id}, req.body).then( () => {
      res.status(200).json(req.body)
    })
  } catch (error) {
    res.status(500).json(error)
  }
})

// DELETE
router.delete('/delete/:id', async (req, res) => {
  try {
  Delay.deleteOne({_id: req.params.id}).then(() => {
    res.status(200).json('Delay deleted successfully.')
  })
  } catch (error) {
    res.status(500).json(error)
  }
})

// get all Delays
router.get('/get', async (req, res) => {
  try {
    const Delays = await Delay.find()
    res.status(200).json(Delays)
  } catch (error) {
    res.status(500).json(error)
  }
})

module.exports = router
