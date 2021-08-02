const router = require('express').Router()
const Excuse = require('../models/Excuse')

router.post('/create', async (req, res) => {
  try {
    const newExcuse = new Excuse(req.body)
    const savedExcuse = await newExcuse.save()
    res.status(200).json(savedExcuse)
  } catch (error) {
    res.status(500).json(error)
  }
})

router.get('/get', async (req, res) => {
  try {
    const excuses = await Excuse.find()
    res.status(200).json(excuses)
  } catch (error) {
    res.status(500).json(error)
  }
})

module.exports = router
