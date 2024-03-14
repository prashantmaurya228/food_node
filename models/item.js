const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  },
  taste: {
    type: String,
    enum: ["sweet", "saulty", "bitter"],
    require: true,
  },
  is_veg: {
    type: Boolean,
    default: false,
  },
  calories: {
    type: Number,
    require: true,
  },
});

const Item = mongoose.model("Item", ItemSchema);
module.exports = Item;
