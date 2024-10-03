import { InputText } from 'primereact/inputtext';
import {Button} from "primereact/button"
import useFormHook from '../../hooks/form';

export default function Login () {
          const [formState , onChangeInput ] = useFormHook({name:"",email:"",password:""})
          const loginSubmit = (event) => {
                      event.preventDefault()
                      
          }

          return <div className="h-full grid m-0">
                          <div className="col-12  md:col-6">
                                   <form className='h-full flex flex-column justify-content-center gap-3'>
                                         <h1>Log In</h1>
                                         <InputText id='name' name='name' onChange={onChangeInput} value={formState.name} />
                                         <InputText id='email' name='email' onChange={onChangeInput} value={formState.email}/>
                                         <InputText id='password' name='password' onChange={onChangeInput} value={formState.password}/>
                                         <Button type='submit' onClick={loginSubmit}>Log In </Button>
                                   </form>
                          </div>
                          <div className="col-0 md:col-6 ">
                                       
                          </div> 
                </div>
} 