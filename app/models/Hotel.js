const mongoose = require('mongoose')

const hotelsSchema = mongoose.Schema({
    address: {
        type: String
    },
    city: {
        type: String
    },
    state: {
        type: String
    },
    name: {
        type: String
    }
})


const Hotel = mongoose.model('Hotel', hotelsSchema)

module.exports = {
    Hotel
}