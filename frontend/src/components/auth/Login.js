import React, {useState, useContext} from 'react';
import { useHistory } from "react-router-dom";
import usercontext from "../../context/userContext";
import axios from "axios";
import ErrNotice from ".././msg/ErrNotice.js"


export default function Login() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState();

    const { setUserData } = useContext(usercontext)
    const history = useHistory();

    const submit = async (e) => {
      e.preventDefault();
      try{
      const loginUser = {email, password};
       const loginRes = await axios.post('http://localhost:1300/api/user/login', loginUser);
      setUserData({
        token: loginRes.data.token,
        user: loginRes.data.user,
      });
      localStorage.setItem("auth-token", loginRes.data.token);
      history.push("/") //Q
    }catch(err){
        err.response.data.msg && setError(err.response.data.msg);
        console.log(err.response.data.msg)
    }
    };
    

    return (
        <div className="page">
           <h2>Login</h2> 
           {error && <ErrNotice message={error} clearError={()=> setError(undefined)} />}
           <form onSubmit={submit}>
           
               <label htmlFor="login-email">Email</label>
               <input id="login-email" type="email" placeholder="Email"
                 onChange={ e => setEmail(e.target.value)} />
​
               <label htmlFor="login-password">Password</label>
               <input id="login-password" type="password" placeholder= "Password"
                 onChange={ e => setPassword(e.target.value)} 
               />
               
​
               <input type="submit" value="Login"/>
           </form>
        </div>
    )
}