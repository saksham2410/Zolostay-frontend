const express = require('express')
const _ = require('lodash')
const router = express.Router()
const {Booking} = require ('../models/Booking')


router.post('/',(req,res) => {
    const body = _.pick(req.body,['hotelName','name','email','mobile','noOfGuests','checkInDate','checkOutDate'])
    const booking = new Booking(body)
    booking.save()
        .then((booking) => {
            res.send(booking)
        })
        .catch(err => res.send(err))
})


router.get('/:id',(req,res) => {
    Booking.findById(req.params.id)
        .then((booking) => {
            res.send(booking.hotelName)
        })
})

module.exports={
    bookingsRouter : router
}