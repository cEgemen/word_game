import Form from "../components/form"


export default function Login () {
          const loginSubmit = (event) => {
                      console.log("target : ",event.target)
                      event.preventDefault()  
                      const formData = new FormData(event.target)
                      const data = Object.fromEntries(formData.entries())
                                   const graphQuery = 
                                                   { query:  `  mutation {
                                                                      logIn(userData : {name : "${data.name}",email : "${data.email}",password : "${data.password}"})
                                                                      {
                                                                         token
                                                                         userId 
                                                                      }
                                                                  }
                                                      `}
                                   fetch("http://localhost:3000/api",{
                                               method:"POST",
                                               headers : {
                                                      "Content-Type" : "application/json"
                                               },
                                               body : JSON.stringify(graphQuery)
                                   })
                                   .then(jsonData => {
                                         return jsonData.json()
                                   })
                                   .then(result => {
                                         console.log("result : ",result)
                                   })
                                   .catch(err => {
                                        console.log(err)
                                   })    
          }
          console.log("login")
          return <div className="h-full grid m-0">
                          <div className="col-12  md:col-6">
                                   <Form formButtonText="Log In" headTitle= "LOG IN" onSubmit={loginSubmit} />
                          </div>
                          <div className="col-0 md:col-6 ">
                                       
                          </div> 
                </div>
} 