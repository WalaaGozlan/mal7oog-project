
import React, {useState, useContext} from 'react';
import { useHistory } from "react-router-dom";
import usercontext from "../../context/userContext";
import axios from "axios";
import ErrNotice from ".././msg/ErrNotice.js"
export default function Register() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [passwordCheck, setPasswordCheck] = useState();
    const [name, setName] = useState();
    const [error, setError] = useState();

    const { setUserData } = useContext(usercontext)
    const history = useHistory();

    const submit = async (e) => {
      e.preventDefault();
      try{
      const newUser = {email, password ,passwordCheck, name};
       await axios.post('http://localhost:1300/api/user/register', newUser); 
       const loginRes = await axios.post('http://localhost:1300/api/user/login', {
        email,
        password,
      });
      setUserData({
        token: loginRes.data.token,
        user: loginRes.data.user,
      });
      localStorage.setItem("auth-token", loginRes.data.token);
      history.push("/");
    }
    catch(err){
        err.response.data.msg && setError(err.response.data.msg);
        console.log(err.response.data.msg)
    }
    };
    

    return (
        <div className="page">
           <h2>Register</h2> 
           {error && <ErrNotice message={error} clearError={()=> setError(undefined)} />}
           <form onSubmit={submit}>
           
               <label htmlFor="register-name">Name</label>
               <input id="register-name" type="text" placeholder="Name"
                onChange={ e => setName(e.target.value)}
               />  
​
​
               <label htmlFor="register-email">Email</label>
               <input id="register-email" type="email" placeholder="Email"
                 onChange={ e => setEmail(e.target.value)} />
​
               <label htmlFor="register-password">Password</label>
               <input id="register-password" type="password" placeholder= "Password"
                 onChange={ e => setPassword(e.target.value)} 
               />
               <input type="password" placeholder="confirm password"
                 onChange={ e => setPasswordCheck(e.target.value)}
               />
​
               <input type="submit" value="Register"/>
           </form>
        </div>
    )
}