import { useNavigate } from "react-router-dom"
import RecordsForm from "../components/forms/recordsForm"
import {userActions} from "../management/userSlice"
import { useDispatch } from "react-redux"
import {storeToken} from "../utils/token"
 
export default function Login () {
          const navigation = useNavigate()
          const dispatch = useDispatch()
          const loginSubmit = (event) => {
                      event.preventDefault()  
                      const formData = new FormData(event.target)
                      const data = Object.fromEntries(formData.entries())
                                   const graphQuery = 
                                                   { query:  `  mutation {
                                                                      logIn(userData : {name : "${data.name}" , email : "${data.email}" , password : "${data.password}"})
                                                                      {
                                                                         token
                                                                         userId 
                                                                         name
                                                                      }
                                                                  }
                                                             `
                                                   }
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
                                         const {token,userId,name} = result.data.logIn;
                                               dispatch(userActions.updateUserData({userId,name}))
                                               storeToken(token)
                                               navigation("/") 
                                   })
                                   .catch(err => {
                                        console.log(err)
                                   })    
          }
          return <div className="h-full grid m-0">
                          <div className="col-12  md:col-6 p-0">
                                   <RecordsForm formButtonText="Log In" headTitle= "LOG IN" onSubmit={loginSubmit} />
                          </div>
                          <div className="col-0 md:col-6 p-0">
                                       
                          </div> 
                </div>
} 