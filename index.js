const express = require('express')
const { mongoose } = require('./config/database')
const { routes } = require('./config/routes')
const port = 3005
const app = express()

const cors = require('cors')
app.use(cors())

app.use(function(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS");
    next();
});

app.use(express.json())
app.use('/', routes)

// app.use(express.static('./public'))

app.listen(port, function() {
    console.log(`Listening to ${port}........`)
})