const Intro = require('../models/Intro')

module.exports.intro_get_all = async (req, res) => {
  try {
    const intros = await Intro.find()
    res.status(200).json(intros)
  } catch (error) {
    res.status(500).json(error)
  }
}

module.exports.intro_create = async (req, res) => {
  const newIntro = new Intro(req.body)
  try {
    const savedIntro = await newIntro.save()
    res.status(200).json(savedIntro)
  } catch (error) {
    res.status(500).json(error)
  }
}

module.exports.intro_read = async (req, res) => {
  try {
    Intro.findById({_id: req.params.id}, async (err, intro) => {
    await res.status(200).json(intro)
      // res.send(intro)
    })
  } catch (error) {
    res.status(500).json(error)
  }
}

module.exports.intro_update = async (req, res) => {
  try {
    Intro.updateOne({_id: req.params.id}, req.body).then( () => {
      res.status(200).json(req.body)
    })
  } catch (error) {
    res.status(500).json(error)
  }
}

module.exports.intro_delete = async (req, res) => {
  try {
  Intro.deleteOne({_id: req.params.id}).then(() => {
    res.status(200).json('intro deleted successfully.')
  })
  } catch (error) {
    res.status(500).json(error)
  }
}
