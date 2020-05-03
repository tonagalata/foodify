const Restaurant = require('../models/restaurant')


module.exports = {
  index,
  create
}

async function index(req, res) {
  const restaurant = await Restaurant.find({})
  .populate('addedBy')
  .sort({ title: 1 })
  .limit(req.query.limit || 10)
  res.json({restaurant});
  Restaurant.find({})
}

async function create(req, res){
  try{
  const restaurant = await Restaurant.create(req.body)
  res.json({ restaurant })
} catch (err) {
  console.log(err)
  res.status(401).json(err);
}
}