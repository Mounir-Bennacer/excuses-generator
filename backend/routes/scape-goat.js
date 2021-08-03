const router = require('express').Router()
const ScapeGoat = require('../models/ScapeGoat')

router.post('/create', async (req, res) => {
  try {
    const newScapeGoat = new ScapeGoat(req.body)
    const savedScapeGoat = await newScapeGoat.save()
    res.status(200).json(savedScapeGoat)
  } catch (error) {
    res.status(500).json(error)
  }
})

router.get('/get', async (req, res) => {
  try {
    const scapeGoats = await ScapeGoat.find()
    res.status(200).json(scapeGoats)
  } catch (error) {
    res.status(500).json(error)
  }
})

module.exports = router
