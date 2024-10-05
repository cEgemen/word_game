const {Schema,SchemaTypes,model} = require("mongoose")


const LobbySchema = new Schema({
           users : [
            {
            userId : {
                         type : SchemaTypes.ObjectId,
                         ref : "User"
                     },
            lobby : {
                         type : SchemaTypes.Number
                    },         
            nick : {
                         type : String
                   },
            isActive : {
                        type : Boolean
                       },
            isGame : {
                       type : Boolean
                     }
           }
                   ] 
})

module.exports = model("Lobbys",LobbySchema) 