const jwt = require("jsonwebtoken")
const SECRET_KEY = "s*cr*t_s*cr*t"


exports.authCheck = (req,res,next) => {
       const auth = req.get("Authorization")
       if(!auth)
       {
        req.isAuth = false
        req.userId = null
        next()
       }
       const token = auth.split(" ")[1]
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