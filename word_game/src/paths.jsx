import  {createBrowserRouter}  from "react-router-dom"
import LogIn from "./pages/login"
import SignUp from "./pages/signup"

const routes = createBrowserRouter
(
        [
            {path:"/",element:<LogIn />},
            {path:"/signup",element:<SignUp />}
        ]
)

export default routes