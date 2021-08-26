const ScapeGoat = require('../models/ScapeGoat')

module.exports.scape_goat_get_all = async (req, res) => {
  try {
    const scapeGoats = await ScapeGoat.find()
    res.status(200).json(scapeGoats)
  } catch (error) {
    res.status(500).json(error)
  }
}

module.exports.scape_goat_create = async (req, res) => {
  const newScapeGoat = new ScapeGoat(req.body)
  try {
    const savedScapeGoat = await newScapeGoat.save()
    res.status(200).json(savedScapeGoat)
  } catch (error) {
    res.status(500).json(error)
  }
}

module.exports.scape_goat_read = async (req, res) => {
  try {
    ScapeGoat.findById({_id: req.params.id}, async (err, scapeGoat) => {
      await res.status(200).json(scapeGoat)
    })
  } catch (error) {
    res.status(500).json(error)
  }
}

module.exports.scape_goat_update = async (req, res) => {
  try {
    title = req.body.title ? req.body.title : ''
    ScapeGoat.updateOne({_id: req.params.id}, req.body).then( () => {
      res.status(200).json(req.body)
    })
  } catch (error) {
    res.status(500).json(error)
  }
}

module.exports.scape_goat_delete = async (req, res) => {
  try {
  ScapeGoat.deleteOne({_id: req.params.id}).then(() => {
    res.status(200).json('ScapeGoat deleted successfully.')
  })
  } catch (error) {
    res.status(500).json(error)
  }
}
