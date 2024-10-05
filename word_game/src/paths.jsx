import  {createBrowserRouter}  from "react-router-dom"
import LogIn from "./pages/login"
import SignUp from "./pages/signup"
import NavBar from "./components/navBar"
import Lobby from "./pages/lobby"

const routes = createBrowserRouter
(
        [
            {path:"/",element:<NavBar />,children:[
                 {index:true , element:<Lobby />},
                 {path:"login",element:<LogIn />},
                 {path:"signup",element:<SignUp />}
            ]},
           
        ]
)

export default routes