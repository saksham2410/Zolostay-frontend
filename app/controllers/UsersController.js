const express = require('express')
const _ = require('lodash')
const router = express.Router()
const {User} = require('../models/User')
const { authenticateUser } = require('../middlewares/authentication')
// const { authorizeUser } = require('../middlewares/authorization')


router.post('/register',function(req,res){
    const body = _.pick(req.body,['username','email','password'])
    const user = new User(body)
    user.save()
        .then(function(user){
             res.send(user)
        })
        .catch(function(err){
             res.send(err)
        })
      
})

router.post('/login', function (req, res) {
    const body = req.body
    User.findByCredentials(body.usernameOrEmail, body.password)
        .then(function (user) {
            return user.generateToken()
        })
        .then(function (token) {
            res.send(token)
        })
        .catch(function (err) {
            res.send(err)
        })

})

router.delete('/logout', authenticateUser, function (req, res) {
    const { user, token } = req
    User.findByIdAndUpdate(user._id, { $pull: { tokens: { token: token } } })
        .then(function () {
            res.send({ notice: 'successfully logged out' })
        })
        .catch(function (err) {
            res.send(err)
        })
})
module.exports = {
    usersRouter : router
}