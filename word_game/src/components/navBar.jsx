import { Toolbar } from 'primereact/toolbar';
import { Avatar } from 'primereact/avatar';
import { useSelector } from 'react-redux';
import {Outlet,Link, useNavigate} from "react-router-dom"
import { Button } from 'primereact/button';


export default function NavBar() {
    const userData = useSelector(state => state.user)
    const navigate = useNavigate()

    const centerContent = (
       !userData.token ? 
         <div className='flex gap-2'>
                <Button label='Log In' text outlined onClick={() => {
                         navigate("/login")
                }} />
                <Button label='Sign Up' text outlined onClick={() => {
                         navigate("/signup")
                }} />
         </div>
                : 
                <>
                
                </>
    );

    let endContent = (
       userData.token ? 
        <>
            <div className="flex align-items-center gap-2">
                <Avatar image="/images/user.jpg" shape="circle" />
                <span className="font-bold text-bluegray-50">{userData.name}</span>
            </div>
        </>
               : 
         <>
         
         </>      
    );

    return (
         <>
          <div className="card" style={{height : "7%"}}>
            <Toolbar  center={centerContent} end={endContent} className="bg-purple-100 shadow-2 h-full p-2"/>
          </div>
            <div style={{height : "93%"}}>
                <Outlet/>
            </div> 
         </>
    );
}