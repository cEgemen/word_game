import { useState } from "react";

export default function useFormHook(initialState) {
      const [formState,setFormState] = useState(initialState)
      
      const onChangeInput = (event) => {
                event.preventDefault()
                setFormState(oldState => {
                      return {...oldState , [event.target.name] : event.target.value}
                })
      }
     return [formState ,onChangeInput]
}