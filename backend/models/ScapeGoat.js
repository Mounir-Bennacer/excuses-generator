const mongoose = require('mongoose');

const ScapeGoatSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
    min: 10,
    max: 50,
    // unique: true,
  }
}, { timestamps: true }
)

module.exports = mongoose.model('scape-goat', ScapeGoatSchema)
