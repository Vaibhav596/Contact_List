const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    contact:{
        type:String,
        required:true
    }
},{
    timestamps:true
})

const Contacts = mongoose.model('Contacts', contactSchema)

module.exports = Contacts