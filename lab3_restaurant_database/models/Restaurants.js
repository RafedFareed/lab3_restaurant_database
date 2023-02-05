const mongoose = require('mongoose');

const restaurantsSchema = new mongoose.Schema({
  id: {
    type: String
  },
  address: {
    building: {
      type: String
    },
    street: {
      type: String
    },
    zipcode: {
      type: String
    }
  },
  city: {
    type: String
  },
  cuisine: {
    type: String
  },
  name: {
    type: String
  },
  resturant_id: {
    type: String
  }
});

const Resturant = mongoose.model("Restaurants", restaurantsSchema);
module.exports = Resturant;