import { useNavigate } from 'react-router-dom';
import Form from '../components/form';

export default function SingUp () {
    const navigate = useNavigate()
    const signUpSubmit = (event) => {
                event.preventDefault()
                const formData = new FormData(event.target)
                const data = Object.fromEntries( formData.entries())
                console.log("data : ",data)
                const graphQuery = {
                    query:
                            `
                    mutation {
                           signUp(userData : {name: "${data.name}" , email : "${data.email}", password : "${data.password}"}){
                                        _id
                               }
                             }
                           `
                                 }
                fetch("http://localhost:3000/api",{
                     method:"POST",
                     headers : {
                        "Content-Type" : "application/json"
                     },
                     body:JSON.stringify(graphQuery)
                })
                .then(res => {
                       return res.json()
                })
                .then(resultData => {
                     navigate("/")
                })
                .catch(err => {
                    console.log("err : ",err)
                })
    }

    return <div className="h-full grid m-0">
                    <div className="col-12  md:col-6">
                            <Form formButtonText="Sign Up" headTitle="SIGN UP" onSubmit={signUpSubmit} />
                    </div>
                    <div className="col-0 md:col-6 ">
                                 
                    </div> 
          </div>


}