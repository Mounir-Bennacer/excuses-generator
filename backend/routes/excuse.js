const router = require('express').Router()
const Excuse = require('../models/Excuse')

// create an excuse

router.post('/', async (req, res) => {
  const newExcuse = new Excuse(req.body)
  try {
    const savedExcuse = await newExcuse.save()
    res.status(200).json(savedExcuse)
  } catch (error) {
    res.status(500).json(error)
  }
})

module.exports = router
