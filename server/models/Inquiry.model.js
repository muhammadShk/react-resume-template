const mongoose = require('mongoose');

const InquirySchema = new mongoose.Schema({
    contactName:{
        type: String,
        required: [
            true,
            "Please enter your name"
        ]
    },
    contactEmail:{
        type:String,
            required:[true, "Please enter a valid email address"],
            validate:[
                val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
                "Please enter a valid email"
            ]
    },
    contactSubject: {type: String},
    contactMessage: {
        type: String,
        required: [
            true,
            "Please enter a message"
        ]
    }

}, {timestamps:true})


module.exports.Inquiry = mongoose.model('Inquiry', InquirySchema);