var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  email:  { type: String, unique: true, required: true },
  family: { type: [{ type: Schema.Types.ObjectId, ref: 'Family'}]}
 });

 var autoPopulateEvents = function(next) {
  this.populate('family');
  next();
};

UserSchema
  .pre('findOne', autoPopulateEvents)
  .pre('find',    autoPopulateEvents);

var Users = mongoose.model("Users", UserSchema);

module.exports = Users; //export the Family model

module.exports = mongoose.model('Users', UserSchema);