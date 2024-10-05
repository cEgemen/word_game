import { useSelector } from "react-redux"
import LobbySelectForm from "../components/forms/lobbySelectForm"


export default function LobbySelect() {
         const userData = useSelector(state => state.userData)     
         const onSubmit = (formData) => {
                         console.log("formData : ",formData)
         }
         return <div className="flex flex-column justify-content-center h-full p-0 md:p-5">
                      <div className="p-0 md:p-5">
                            <LobbySelectForm headTitle="Lobby Settings" formButtonText="Save" onSubmit={onSubmit} lobbyData={[3,4,5,6]}/>
                      </div> 
               </div>
}