const express = require('express')
const router = express.Router()
const {hotelsRouter} = require('../app/controllers/HotelsController')
const {usersRouter} = require('../app/controllers/UsersController')
const {bookingsRouter} = require('../app/controllers/BookingsController')

router.use('/hotels',hotelsRouter)
router.use('/bookings',bookingsRouter)
router.use('/users',usersRouter)

module.exports = {
    routes : router
}
