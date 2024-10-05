import { InputText } from 'primereact/inputtext';
import {Button} from "primereact/button"
import useFormHook from '../../../hooks/form';
export default function RecordsForm ({headTitle,formButtonText,onSubmit}) {
    const [formState , onChangeInput ] = useFormHook({name:"",email:"",password:""})
    return <>
                  <form onSubmit={onSubmit} className='h-full flex flex-column justify-content-center align-items-center  p-5 gap-4'>
                                           <h1>{headTitle}</h1>
                                           <div className="flex flex-column w-12 md:w-8 gap-2 my-2">
                                               <label htmlFor="name">Username</label>
                                               <InputText className='border-round-xl pl-1 py-1' type='text' id="name" name='name' />
                                               <small>
                                                  Enter your username.
                                               </small>
                                            </div>
                                            <div className="flex flex-column w-12 md:w-8 gap-2 my-2">
                                               <label htmlFor="email">E-Mail</label>
                                               <InputText className='border-round-xl pl-1 py-1' type='email' id="email" name='email' />
                                               <small>
                                                  Enter your email.
                                               </small>
                                            </div>
                                            <div className="flex flex-column w-12 md:w-8 gap-2 my-2">
                                               <label htmlFor="password">Password</label>
                                               <InputText className='border-round-xl pl-1 py-1' type='password' id="password" name='password' />
                                               <small >
                                                  Enter your password.
                                               </small>
                                            </div>
                                            <Button size='large' label={formButtonText} className='w-4  text-center border-round-xl py-1' type='submit'/>
                                   </form>
           </>
}