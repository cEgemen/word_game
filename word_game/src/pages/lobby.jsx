import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { getToken } from "../utils/token"



export default function Lobby() {
     const navigate = useNavigate()
     useEffect(() => {
              const token = getToken()
              if(!token)
              {
                 navigate("/login")
              }
     },[])
     return <>
               <h1> LOBBY PAGE </h1>
           </>
}