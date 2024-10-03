const {buildSchema} = require("graphql")

module.exports = buildSchema(
     `     
           type User {
                                   _id  : String!
                                   name : String!
                                   email : String!
                                   password : String! 
                     } 
      
           input UserDataInput {
                                   name : String!
                                   email : String!
                                   password : String!
                               } 
           type RootQuery {
                              getUsers : [User]!
                          }

           type RootMutation{
                               signUp(userData : UserDataInput!):User!
                            }
       
           schema 
           {
               query : RootQuery
               mutation : RootMutation
           }
     `
)