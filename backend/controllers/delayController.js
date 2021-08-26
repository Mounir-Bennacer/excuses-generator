const Delay = require('../models/Delay')

module.exports.delay_get_all = async (req, res) => {
  try {
    const Delays = await Delay.find()
    res.status(200).json(Delays)
  } catch (error) {
    res.status(500).json(error)
  }
 }

module.exports.delay_create = async (req, res) => {
  const newDelay = new Delay(req.body)
  try {
    const savedDelay = await newDelay.save()
    res.status(200).json(savedDelay)
  } catch (error) {
    res.status(500).json(error)
  }
}

module.exports.delay_read = async (req, res) => {
  try {
    Delay.findById({_id: req.params.id}, async (err, delay) => {
      await res.status(200).json(delay)
    })
  } catch (error) {
    res.status(500).json(error)
  }
 }

module.exports.delay_update = async (req, res) => {
  try {
    Delay.updateOne({_id: req.params.id}, req.body).then( () => {
      res.status(200).json(req.body)
    })
  } catch (error) {
    res.status(500).json(error)
  }
}

module.exports.delay_delete = async (req, res) => {
  try {
  Delay.deleteOne({_id: req.params.id}).then(() => {
    res.status(200).json('Delay deleted successfully.')
  })
  } catch (error) {
    res.status(500).json(error)
  }
}
