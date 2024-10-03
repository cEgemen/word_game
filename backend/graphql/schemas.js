const {buildSchema} = require("graphql")

module.exports = buildSchema(
     `     
           type User {
                                   _id  : String!
                                   name : String!
                                   email : String!
                                   password : String! 
                     } 
              
           type LoginData {
                                    token : String!
                                    userId : String!
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
                               logIn(userData : UserDataInput!) : LoginData!
                            }
       
           schema 
           {
               query : RootQuery
               mutation : RootMutation
           }
     `
)