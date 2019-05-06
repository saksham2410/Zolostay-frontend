const mongoose = require('mongoose')

const Schema = mongoose.Schema

const bookingSchema = new Schema({
    hotelName:{
        type: String
    },
    name:{
        type:String
    },
    email:{
        type:String
    },
    mobile:{
        type:String
    },
    noOfGuests:{
        type:Number
    },
    checkInDate:{
        type:Date
    },
    checkOutDate:{
        type: Date
    }
})



const Booking = mongoose.model('Booking',bookingSchema)

module.exports = {
    Booking
}