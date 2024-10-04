const User = require("../models/user")
const validator = require("validator")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")

const SECRET_KEY = "s*cr*t_s*cr*t"

module.exports = {
                   signUp : async ({userData}) => {
                                  const {name,email,password} = userData
                                  console.log("name : ",name , " || email : ",email , " || password : ",password)
                                  const validationMessages = []
                                  const existUser = await User.findOne({email : email})
                                         if(existUser)
                                         {
                                              const err = new Error("This email is being used.")
                                                    err.statusCode = 403
                                                    err.messages = []
                                                    throw err
                                         }
                                     if(!validator.isLength(name,{min : 5}))    
                                     {
                                              validationMessages.push({message : "Name is must be 5 length"})
                                     }
                                      if (!validator.isEmail(email))
                                     {
                                              validationMessages.push({message : "Emil is must match email format"})
                                     }
                                    if (!validator.isLength(password,{min:6}))
                                    { 
                                           validationMessages.push({message : "Password is must be 6 length"})
                                    }
                                     if(validationMessages.length > 0)
                                     {
                                        const err = new Error("Validation Faild")
                                        err.statusCode = 422
                                        err.messages = validationMessages
                                        throw err
                                     }
                                    try {
                                           const hashPassword = await bcrypt.hash(password,12)
                                                 const user = new User({name,password : hashPassword,email})
                                                            await user.save()
                                                            return {_id : user._id.toString(),name , password : hashPassword , email}
                                    }   
                                    catch(err)
                                    {
                                        err.statusCode = 500
                                        err.messages = []
                                        throw err
                                    }        

                                                  } ,

                    logIn : async ({userData}) => {
                                     const {name,email,password} = userData
                                     const validationMessages = []
                                     const existUser = await User.findOne({email : email})
                                            if(!existUser)
                                            {
                                                 const err = new Error("User is not found")
                                                       err.statusCode = 403
                                                       err.messages = []
                                                       throw err
                                            }
                                        if(!validator.isLength(name,{min : 5}))    
                                        {
                                                 validationMessages.push({message : "Name is must be 5 length"})
                                        }
                                         if (!validator.isEmail(email))
                                        {
                                                 validationMessages.push({message : "Emil is must match email format"})
                                        }
                                        if (!validator.isLength(password,{min:6}))
                                        { 
                                                 validationMessages.push({message : "Password is must be 6 length"})
                                        }
                                        if(validationMessages.length > 0)
                                        {
                                           const err = new Error("Validation Faild")
                                           err.statusCode = 422
                                           err.messages = validationMessages
                                           throw err
                                        }
                                        try {
                                               const isMatch = await bcrypt.compare(password,existUser.password)
                                               if(!isMatch)
                                               {
                                                   const err = new Error("Password is not match")
                                                         err.statusCode = 422
                                                         err.messages = []
                                                         throw err
                                               }
                                               const token = jwt.sign({_id : existUser._id,password,email},SECRET_KEY)
                                               return {token , userId : existUser._id.toString()}
                                               
                                        }
                                        catch(err)
                                        {
                                             
                                             err.statusCode = 500
                                             err.messages = []
                                             throw err
                                        }

                    },

                    getUser : (args) => {
                                   
                           return []

                                        }
                }