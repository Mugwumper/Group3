var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var eventSchema = new Schema({
  title:    { type: String, required: true },
  link:     { type: String, required: true },
  summary:  { type: String },
  isSaved:  { type: Boolean, default: false },
});

var Events = mongoose.model("Events", eventSchema);

module.exports = Events; //export the Events model