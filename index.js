const express = require('express')
const { mongoose } = require('./config/database')
const { routes } = require('./config/routes')
const port = 3005
const app = express()

const path = require('path')

const cors = require('cors')
app.use(cors())

app.use(function(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS");
    next();
});

//production mode
if(process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));
  //
  app.get('*', (req, res) => {
    res.sendfile(path.join(__dirname = 'client/build/index.html'));
  })
}
//build mode
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/public/index.html'));
})


app.use(express.json())
app.use('/', routes)

// app.use(express.static('./public'))

app.listen(port, function() {
    console.log(`Listening to ${port}........`)
})