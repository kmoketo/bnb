var mongoose = require('mongoose');

var bookingSchema = mongoose.Schema({

  bookingDate: Date,
  confirmed: Boolean,
  rejected: Boolean,
  totalPrice: Number,
  listingName: String,
  requesterName: String,
  listingOwner: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'User'
  },
  listing: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Listing'
  },
  requester: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'User'
  }
});

var Booking = mongoose.model('Booking', bookingSchema);
 module.exports = Booking;

