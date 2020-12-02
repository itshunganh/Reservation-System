var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var SlotSchema = new Schema({
  fname: String,
  lname: String,
  phone: Number,
  date: String,
  time: String
});

var Slot = mongoose.model("Slot", SlotSchema);
module.exports = Slot;
