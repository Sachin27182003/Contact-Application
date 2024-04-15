const express = require('express');
const mongoose = require('mongoose');
const Routes = require('./Routes/user_routes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}))

mongoose.connect('mongodb://localhost:27017',{
    useUnifiedTopology : true,
    useNewUrlParser : true
}).then(()=>{
    console.log("Connected to Mongo DB")
}).catch((err)=>{
    console.log("Unable to connect Mongo DB");
    console.log(err.message)
})

app.use('/contact_applications/api/v1', Routes)

app.listen('8000', ()=>{
    console.log('server running on port 8000');
})

