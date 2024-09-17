import React from "react";
import { useState } from "react";

export const EditContext = React.createContext({})
export const EditProvider = (props) =>{
    const [event, setEvent] = useState({
        title: "",
        date: "",
        hours: "",
        ImageLink: "",
        description: "",
        locale: {
          rua: "",
          numero: "",
          bairro: "",
          cidade: "",
          referencia:""
        }
      })
    return (
        <EditContext.Provider value={{event, setEvent}}>
            {props.children}
        </EditContext.Provider>
    )
    
}