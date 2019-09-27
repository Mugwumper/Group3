var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var family_Schema = new Schema({
  name:      { type: String, required: true, unique: true },
  birthday:  { type: Date,   required: true },
  // link to the Events collection
  //events:     { type: [{ type: Schema.Types.ObjectId, ref: 'Events'}]}
});

var Family = mongoose.model("Family", family_Schema);

module.exports = Family; //export the Family model