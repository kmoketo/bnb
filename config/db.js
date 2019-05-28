var mongoose = require('mongoose');

var uri = "mongodb+srv://drey:lisbert12@airbnb-y75xm.mongodb.net/Airbnb?retryWrites=true"
mongoose.set('useCreateIndex', true)
mongoose.connect(uri, { useNewUrlParser: true }, (error) => {
  if(error){
    console.log(error)
  }
  
})
