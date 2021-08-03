const router = require('express').Router()
const ScapeGoat = require('../models/ScapeGoat')

// CREATE
router.post('/create', async (req, res) => {
  const newScapeGoat = new ScapeGoat(req.body)
  try {
    const savedScapeGoat = await newScapeGoat.save()
    res.status(200).json(savedScapeGoat)
  } catch (error) {
    res.status(500).json(error)
  }
})

// READ
router.get('/get/:id', async (req, res) => {
  try {
    ScapeGoat.findById({_id: req.params.id}, async (err, scapeGoat) => {
      await res.status(200).json(scapeGoat)
    })
  } catch (error) {
    res.status(500).json(error)
  }
})

// UPDATE
router.put('/edit/:id', async (req, res) => {
  try {
    title = req.body.title ? req.body.title : ''
    ScapeGoat.updateOne({_id: req.params.id}, req.body).then( () => {
      res.status(200).json(req.body)
    })
  } catch (error) {
    res.status(500).json(error)
  }
})

// DELETE
router.delete('/delete/:id', async (req, res) => {
  try {
  ScapeGoat.deleteOne({_id: req.params.id}).then(() => {
    res.status(200).json('ScapeGoat deleted successfully.')
  })
  } catch (error) {
    res.status(500).json(error)
  }
})

// get all ScapeGoats
router.get('/get', async (req, res) => {
  try {
    const scapeGoats = await ScapeGoat.find()
    res.status(200).json(scapeGoats)
  } catch (error) {
    res.status(500).json(error)
  }
})

module.exports = router
