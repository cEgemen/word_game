const jwt = require("jsonwebtoken")
const SECRET_KEY = "s*cr*t_s*cr*t"


exports.authCheck = (req,res,next) => {
       const token = req.get("Authorization").split(" ")[0]
             if(!token)
             {
                 req.isAuth = false
                 req.userId = null
                 next()
             }

        let decode 
        try{
           decode  =  jwt.verify(token,SECRET_KEY)
            req.isAuth = true
            req.userId = decode._id
        }
        catch(err){
            req.isAuth = false
            req.userId = null
        }
        next()    
}