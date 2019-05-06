const mongoose = require('mongoose')
mongoose.Promise = global.Promise

mongoose.connect('mongodb+srv://Saksham2410:Saksham*1@zolostay-eosny.mongodb.net/test?retryWrites=true',{useNewUrlParser :true,useCreateIndex:true})
.then(function(){
    console.log('connected')
})
.catch(function(){
    console.log('error')
})

module.exports = {
    mongoose
}