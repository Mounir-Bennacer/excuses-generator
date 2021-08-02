const mongoose = require('mongoose');

const ExcuseSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
    min: 10,
    max: 50,
    unique: true,
  },
    slug: {
    type: String,
    require: true,
    max: 50,
    unique: true,
  },
}, { timestamps: true }
)

module.exports = mongoose.model('excuse', ExcuseSchema)
