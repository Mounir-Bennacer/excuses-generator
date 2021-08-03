const router = require('express').Router()
const Delay = require('../models/Delay')

router.post('/delay/create', async (req, res) => {
  try {
    const newDelay = new Delay(req.body)
    const savedDelay = await newDelay.save()
    res.status(200).json(savedDelay)
  } catch (error) {
    res.status(500).json(error)
  }
})

router.get('/delay/get', async (req, res) => {
  try {
    const delays = await Delay.find()
    res.status(200).json(delays)
  } catch (error) {
    res.status(500).json(error)
  }
})

module.exports = router
