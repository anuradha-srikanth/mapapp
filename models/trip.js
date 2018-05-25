
var Trip = function(start, end){
    this.start_date = start;
    this.end_date = end;
}



var mongoose = require('mongoose');

var Schema = mongoose.Schema,
ObjectId = Schema.ObjectId;

// var Ticket = require('../models/tickets');

// var passportLocalMongoose = require('passport-local-mongoose');

var Trip = new Schema({
  trip_id : ObjectId,
  state : {
    type: String,
    enum: ['No Seat', 'Empty', 'Occupied', 'Reserved']
  },
  start_date : ,
  end_date : ,
  // ticket : { type: Schema.Types.ObjectId, ref: 'Ticket'}
});

// User.methods.validPassword = function( pwd ) {
//     // EXAMPLE CODE!
//     return ( this.password === pwd );
// };

// User.plugin(passportLocalMongoose);
module.exports = mongoose.model('Seat', Seat);

