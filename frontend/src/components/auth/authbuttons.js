// authentication buttons Login & Logout 
// we can here use Link but insatde of that "UseHistory" function can do this work better
// what is useHistory ? The useHistory hook gives you access to the history instance that you may use to navigate.
import React from 'react'
import { useHistory } from "react-router-dom" ;

export default function Authbuttons() {
    const history = useHistory();

    const register = () => history.push("/register");
    const login = () => history.push("/login");
    return (
        <nav className="auth-buttons"> 
            <button onClick={register}>Register</button>
            <button  onClick={login}>Log in</button>
        </nav>
    )
}
