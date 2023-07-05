const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    Image : {
        type : String,
        default : "https://www.someimageurl.com/imageID"
    }, 
    Name : String, 
    Email : { 
        type: String,
        required: true,
        match: /.+\@.+\..+/,
        unique: true
      }, 
    Phone : String, 
    Dob : String, 
    Location : String , 
    Gender : {
        type : String, 
        enum : ['male', 'female', 'other'],
        required : true
    }, 
    Address : String
})

module.exports = userSchema;