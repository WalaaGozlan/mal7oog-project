
// authentication buttons Login & Logout 
// we can  use Link but insatde of that "UseHistory" function can do this work better
// what is useHistory ? The useHistory hook gives you access to the history instance that you may use to navigate.
import React, { useContext } from 'react'
import { useHistory } from "react-router-dom" ;
import userContext from "../../context/userContext"
export default function Authbuttons() {
    const  { userData, setUserData } =  useContext(userContext);
    // the history to chance the url 
    const history = useHistory();

    const register = () => history.push("/register");
    const login = () => history.push("/login");
    const logout = () => { // in log out we will set the token & user to undefined .
        setUserData({
            token: undefined,
            user: undefined
        });
        localStorage.setItem("auth-token", "");
    };
    
    return (
        <nav className="auth-buttons"> 
        
            {userData.user ? (
            <button onClick={logout}> Log out</button>
            ) :( 
             <>
            <button onClick={register}>Register</button>
            <button  onClick={login}>Log in</button>
            </>
            )}
        </nav>
    )
}
