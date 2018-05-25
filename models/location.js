
var Location = function(latitude, longitude){
    this.latitude = latitude
    this.longitude = longitude
}


var mongoose = require('mongoose');
var Schema = mongoose.Schema,
ObjectId = Schema.ObjectId;

// var Ticket = require('../models/tickets');

// var passportLocalMongoose = require('passport-local-mongoose');

var Location = new Schema({
  loc_id : ObjectId,
  state : {
    type: String,
    enum: ['No Seat', 'Empty', 'Occupied', 'Reserved']
  },
  latitude : ,
  longitude : ,
});

// User.methods.validPassword = function( pwd ) {
//     // EXAMPLE CODE!
//     return ( this.password === pwd );
// };

// User.plugin(passportLocalMongoose);
module.exports = mongoose.model('Location', Seat);

