// authentication buttons Login & Logout 
// we can here use Link but insatde of that we are going with using a gunction in react dom "UseHistory"
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
