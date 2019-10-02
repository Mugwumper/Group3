var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var eventSchema = new Schema({
  title:    { type: String, required: true, unique: true },
  link:     { type: String, required: true },
  summary:  { type: String },
  byLine:   { type: String },
  isSaved:  { type: Boolean, default: false },
  name:      { type: String },
  birthday:  { type: String },
});

var Events = mongoose.model("Events", eventSchema);

module.exports = Events; //export the Events model