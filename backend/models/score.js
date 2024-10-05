const {Schema,model,SchemaTypes} = require("mongoose")


const  ScoreSchema = new Schema({
       
    scores : [
              {
                userId : 
                {
                    type : SchemaTypes.ObjectId,
                    ref : "User"
                },
                score : 
                {
                    type : Number, 
                },
              }
             ]

})

module.exports = model("Scores",ScoreSchema)