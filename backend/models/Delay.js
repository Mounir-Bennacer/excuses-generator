const mongoose = require('mongoose');

const DelaySchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
    min: 5,
    max: 30,
    // unique: true,
  }
}, { timestamps: true }
)

module.exports = mongoose.model('delay', DelaySchema)
