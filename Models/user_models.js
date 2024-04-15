const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    "Name": String,
    "Email": String,
    "Phone_no": Number,
    "Address": String,
    "Organisation": String,
    "Serial_no": Number
},{timestamps:true, versionKey:false})

const user_model = mongoose.model("Contacts", userSchema);

module.exports = user_model;