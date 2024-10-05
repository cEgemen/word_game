import { useSelector } from "react-redux"
import LobbySelectForm from "../components/forms/lobbySelectForm"
import { getToken } from "../utils/token"


export default function LobbySelect() {
         const userData = useSelector(state => state.userData)     
         const onSubmit = (formData) => {
                    const {nick ,lobby} = formData
                    console.log("nick : ",nick," , lobby : ",lobby)
                    const queryGraph = {
                            query : 
                                    `     
                                        mutation {
                                                    updateLobby(lobbyData : {nick : "${nick}",lobby:${+lobby}}) 
                                                 } 

                                    `
                    }     
                          fetch("http://localhost:3000/api",{
                                 method:"POST",
                                 headers:
                                 {
                                     "Authorization" : "Bearer "+getToken(),
                                     "Content-Type" : "application/json"
                                 },
                                 body:JSON.stringify(queryGraph)
                          })   
                          .then(jsonRes => {
                                   return jsonRes.json()
                          })  
                          .then(res => {
                                    console.log("res : ",res)
                          })
                          .catch(err => {
                                  console.log("err => ",err)
                          })
         }
         return <div className="flex flex-column justify-content-center h-full p-0 md:p-5">
                      <div className="p-0 md:p-5">
                            <LobbySelectForm headTitle="Lobby Settings" formButtonText="Save" onSubmit={onSubmit} lobbyData={[3,4,5,6]}/>
                      </div> 
               </div>
}