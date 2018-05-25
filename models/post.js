var mongoose = require('mongoose');

var Schema = mongoose.Schema,
ObjectId = Schema.ObjectId;

var Location = require('../models/location');

// var passportLocalMongoose = require('passport-local-mongoose');

var Post = new Schema({
  post_id : ObjectId,
  date : ,
  location : { type: Schema.Types.ObjectId, ref: 'Location'}
});

// User.methods.validPassword = function( pwd ) {
//     // EXAMPLE CODE!
//     return ( this.password === pwd );
// };

// User.plugin(passportLocalMongoose);
module.exports = mongoose.model('Post', Post);

