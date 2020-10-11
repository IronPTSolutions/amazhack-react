import React from "react";
import { Redirect, Route } from "react-router-dom";

export default function AuthenticatorRouter(props) {    
    console.log('authent') 
    console.log(props) 
   const {user} = props
    if (!user) {
        console.log('if')
       
       return  <Redirect to="/login" />
       
    } else {

        return <Route {...props} />
    }


}
