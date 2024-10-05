import { Button } from "primereact/button"
import { RadioButton } from 'primereact/radiobutton';
import { InputText } from "primereact/inputtext"
import { useState } from "react";
import useFormHook from "../../../hooks/form";

export default function LobbySelectForm({headTitle,formButtonText,onSubmit,lobbyData = []}){
      const [formState , setFormState ] = useFormHook({nick : "" , lobby : lobbyData[0]})
      const formSubmit = (event) => {
        event.preventDefault()  
        const formData = new FormData(event.target)
              formData.set("lobby",""+formState.lobby)
        const data = Object.fromEntries(formData.entries())
         onSubmit(data)
      }
      return <>
                  <form onSubmit={(event) =>  formSubmit(event)} className="h-full flex flex-column justify-content-center align-items-center p-2 md:p-5 gap-2">
                              <h1 className="mb-2">{headTitle}</h1>
                              <div className="flex flex-column w-12 md:w-6 my-2 gap-2">
                                        <label htmlFor="nick">Nick</label>
                                        <InputText type="text" className='border-round-xl pl-1 py-1' id="nick" name="nick" value={formState.nick} onChange={(event) => {
                                                 setFormState(event)
                                        }} />
                              </div>
                              <div className="flex flex-column w-12 md:w-6 my-2 gap-2">
                                       <label>Lobby Text</label>
                                       <div className="flex justify-content-center gap-2">
                                         {lobbyData.map((lobbyData,index) => {
                                                 return  <div key={index}>
                                                              <RadioButton id={`lobby_${lobbyData}`} name="lobby" checked={formState.lobby === lobbyData} value={lobbyData} onChange={(event) => {
                                                                     setFormState(event)                      
                                                              }}/>
                                                              <label htmlFor={`lobby_${lobbyData}`}> Lobby : {lobbyData}</label>      
                                                         </div>
                                       })}
                                       </div>
                              </div>
                              <Button size='large' label={formButtonText} className='w-4 md:w-2 text-center border-round-xl py-1 mt-4' type='submit'/>
                  </form>  
            </>
}