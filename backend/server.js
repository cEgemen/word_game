const express = require("express")
const {graphqlHTTP} = require("express-graphql")
const schemas = require("./graphql/schemas")
const resolvers = require("./graphql/resolvers")
const mongoose = require("mongoose")


const app = express()
const MONGO_URL = "mongodb+srv://egemen:EkYaKj9ESRcGDSVs@cluster0.z9mcl.mongodb.net/game?retryWrites=true&w=majority&appName=Cluster0"

app.use((req,res,next) => {
       res.setHeader("Access-Control-Allow-Methods","POST,GET,OPTIONS,DELETE,PUT")
       res.setHeader("Access-Control-Allow-Origin","*")
       res.setHeader("Access-Control-Allow-Headers","Content-Type,Authorization")
       next()
})

app.use("/api",graphqlHTTP({
      schema : schemas,
      rootValue : resolvers,
      graphiql : true
}))

app.use((err , req , res , next ) => {
      
})

mongoose.connect(MONGO_URL)
        .then(result => {
            app.listen(3000 , () => {
                console.log("server is running ...")
             })  
        })
        .catch(err => {
             console.log("err : ",err)
        })

