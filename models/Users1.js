var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  email: {
        type: String,
        unique: true,
        required: true
    },
  password: {
        type: String,
        required: true
    },
  family:    { 
        type: [{ type: Schema.Types.ObjectId, ref: 'Family'}]}
 
});

module.exports = mongoose.model('Users1', UserSchema);