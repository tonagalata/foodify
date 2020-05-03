const Restaurants = require('../models/restaurant')

module.exports = {
  index,
  create,
  deleteOneReview
}

async function index(req, res) {
  try {
    const restaurant = await Restaurants.findById(req.params.id);
    const reviews = await restaurant.reviews
    reviews.splice(reviews, 1)
    // restaurant.save({})
    console.log(reviews)
    res.json(reviews);
  } catch (error) {
    res.status(400).json(error)
  }
}

async function create(req, res) {
  try {
    const restaurant = await Restaurants.findById(req.params.id);
    restaurant.reviews.push(req.body);
    restaurant.save({})
    res.json(restaurant);
  } catch (error) {
    res.status(400).json(error);
  }
}

async function deleteOneReview(req, res) {
  try {
    const restaurant = await Restaurants.findById(req.params.id);
    const reviews = await restaurant.reviews
    reviews.splice(reviews._id, 1)
    restaurant.save({})
    res.json(reviews);
  } catch (error) {
    console.log(error)
     res.status(400).json(error);
   }
}