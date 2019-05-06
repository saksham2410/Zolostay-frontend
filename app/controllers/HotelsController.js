const express = require('express')
const {Hotel} = require('../models/Hotel')

const router = express.Router()

router.get('/',(req,res) => {
    Hotel.find()
        .then((hotels) => {
            res.send(hotels.sort(function(a,b){
                return b.reviews.rating -  a.reviews.rating
               }))
        })
        .catch(err => res.send(err))
})

router.get('/:id',(req,res) => {
    Hotel.findOne({_id:req.params.id})
        .then((hotel) => {
            res.send(hotel)
        })
        .catch(err => res.send(err))
})

router.post('/add', (req, res) => {
    

})

module.exports = {
    hotelsRouter : router
}