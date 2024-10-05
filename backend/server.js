const express = require("express")
const Lobby = require("./models/lobby")
const bodyParser = require("body-parser")
const multer = require("multer")
const {authCheck} = require("./middleware/auth")
const {graphqlHTTP} = require("express-graphql")
const schemas = require("./graphql/schemas")
const resolvers = require("./graphql/resolvers")
const mongoose = require("mongoose")


const app = express()
const MONGO_URL = "YOUR_MONGODB_KEY"

app.use((req,res,next) => {
       res.setHeader("Access-Control-Allow-Methods","POST,GET,OPTIONS,DELETE,PUT")
       res.setHeader("Access-Control-Allow-Origin","*")
       res.setHeader("Access-Control-Allow-Headers","Content-Type,Authorization")
       if(req.method === "OPTIONS")
       {
          res.sendStatus(200)
          return
       }
       next()  
}) 

app.use(bodyParser.json())

app.use(authCheck)

app.use("/api",graphqlHTTP({
      schema : schemas,
      rootValue : resolvers,
      graphiql : true,
      customFormatErrorFn : (err) => {
          if(!err.originalError)
               {
                    return err
               }
                const statusCode = err.originalError.statusCode
                const  message  = err.originalError.message
                const  messages = err.originalError.messages
                return {statusCode, message , messages}
      }
}))

app.use((err , req , res , next ) => {
      
})

mongoose.connect(MONGO_URL)
        .then(result => {
            Lobby.find()
                 .then(lobbyArr => {
                      if(lobbyArr.length === 1)
                      {
                         app.listen(3000 , () => {
                console.log("server is running ...")
                                               }) 
                      }
                      else{
                           const newLobby = new Lobby({users : []})
                                 newLobby.save()
                                         .then(lobby => {
                                             app.listen(3000 , () => {
                                                  console.log("server is running ...")
                                                                                 }) 
                                         })
                                         .catch(err => {
                                              console.log("err : ",err)
                                         })
                      }
                 })
                 .catch(err => {
                    console.log("err => ",err)
                 })
             
        })
        .catch(err => {
             console.log("err : ",err)
        })

