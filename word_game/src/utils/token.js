
export function getToken() {
       return localStorage.getItem("_token_") 
}

export function storeToken(token){
       localStorage.setItem("_token_",token)
}

export function resetToken(){
       localStorage.setItem("_token_",null)
}

