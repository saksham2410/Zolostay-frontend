const mongoose = require('mongoose')

const hotelsSchema = mongoose.Schema({
    address:{
        type:String
    },
    categories:{
        type:String
    },
    city:{
        type:String
    },
    country:{
        type:String
    },
    latitude:{
        type:String
    },
    longitude:{
        type:String
    },
    name:{
        type:String
    },
    postalCode:{
        type:String
    },
    province:{
        type:String
    },
    reviews:[{
        rating:{
            type: Number
        },
        text:{
            type:String
        },
        title:{
            type:String
        },
        username:{
            type:String
        }
    }]
})


const Hotel = mongoose.model('Hotel',hotelsSchema)

module.exports = {
    Hotel
}