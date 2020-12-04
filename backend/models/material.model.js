const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const materialSchema = new Schema({
  material: { type: String, required: true , unique: true},
  description: { type: String, required: true },
  duration: { type: Number, required: true },
}, {
  timestamps: true,
});

const Material = mongoose.model('Material', materialSchema);

module.exports = Material;