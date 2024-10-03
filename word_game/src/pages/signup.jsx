import { InputText } from 'primereact/inputtext';
import {Button} from "primereact/button"
import useFormHook from "../../hooks/form"

export default function SingUp () {


    const [formState , onChangeInput ] = useFormHook({name:"",email:"",password:""})
    const signUpSubmit = (event) => {
                event.preventDefault()
                const formData = new FormData(event.target)
                const data = Object.fromEntries( formData.entries())
                const graphQuery = {query: `
                        mutation signUp($name : String! , $email : String! , $password : String!) {
                                      signUp(userData : {$name,$password,$email})
                                 }
                ` , variables : {
                    name : data.name,
                    email : data.email,
                    password : data.password
              }}
                fetch("http://localhost:3000/api",{
                     method:"POST",
                     body:JSON.stringify(graphQuery)
                })
                .then(res => {
                       return res.json()
                })
                .then(resultData => {
                     console.log("resultData : ",resultData)
                })
                .catch(err => {
                    console.log("err : ",err)
                })
    }

    return <div className="h-full grid m-0">
                    <div className="col-12  md:col-6">
                             <form onSubmit={signUpSubmit} className='h-full flex flex-column justify-content-center gap-3'>
                                   <h1>Sign Up</h1>
                                   <InputText id='name' name='name' onChange={onChangeInput} value={formState.name} />
                                   <InputText id='email' name='email' onChange={onChangeInput} value={formState.email}/>
                                   <InputText id='password' name='password' onChange={onChangeInput} value={formState.password}/>
                                   <Button type='submit' >Sign Up </Button>
                             </form>
                    </div>
                    <div className="col-0 md:col-6 ">
                                 
                    </div> 
          </div>


}