var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
	username: {type:String,required:true},
	gender: {type:String,required:true},
	country: {type:String,required:true}
});
var userModel = mongoose.model('user',userSchema);
module.exports = userModel;