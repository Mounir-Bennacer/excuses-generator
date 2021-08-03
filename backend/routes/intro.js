const router = require('express').Router()
const Intro = require('../models/Intro')

// CREATE
router.post('/intro/create', async (req, res) => {
  try {
    const newIntro = new Intro(req.body)
    const savedIntro = await newIntro.save()
    res.status(200).json(savedIntro)
  } catch (error) {
    res.status(500).json(error)
  }
})

// READ
router.get('/intro/get/:id', async (req, res, next, id) => {
  try {
    const intros = await Intro.find(id, (req, res) => {
      try {
        res.status(200).json(intros)
      } catch (error) {
        res.status(500).json(error)
      }
    })
    res.status(200).json(intros)
  } catch (error) {
    res.status(500).json(error)
  }
})

// UPDATE

// DELETE
// get all intros
router.get('/intro/get', async (req, res) => {
  try {
    const intros = await Intro.find()
    res.status(200).json(intros)
  } catch (error) {
    res.status(500).json(error)
  }
})


module.exports = router
