const mongoose = require('mongoose')

const Schema = mongoose.Schema;

reviewSchema = new Schema({
  rating: {
    type: Number
  },
  content: {
    type: String
  }
}, {
  timestamps: true
})

restaurantSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  cuisine: {
    type: String
  },
  addedBy: {
    type: Schema.Types.ObjectId, 
    ref: 'User'
  },
  reviews: [reviewSchema]
}, {
  timestamps: true
})

module.exports = mongoose.model('Restaurant', restaurantSchema)