var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var model_family_Schema = new Schema({
  name:     { type: String, required: true, unique: true },
  date:     { type: Date, required: true },
  // link to the Events collection
  events:     { type: [{ type: Schema.Types.ObjectId, ref: 'Events'}]}
});

var Family = mongoose.model("Family", model_family_Schema);

module.exports = Family; //export the Family model