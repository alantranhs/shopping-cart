const mongoose = require('mongoose');

const thingSchema = mongoose.Schema({
  availableSizes: { type: Array, required: true},
  style: { type: String, required: true },
  sku: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  isFreeShipping: { type: Boolean, required: true},
  imageUrl: { type: String, required: true },
  id: { type: Number , required: true },
  price: { type: Number, required: true },
});

module.exports = mongoose.model('Thing', thingSchema);