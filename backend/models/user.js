const {Schema,model} = require("mongoose")


const UserSchema = new Schema({
       name : {
            type : String,
            require 
       },
       email : {
            type : String ,
            require
       },
       password : {
            type : String ,
            require 
       }
})

module.exports = model("User",UserSchema)