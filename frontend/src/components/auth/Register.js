import React, {useState} from 'react'
// import { useHistory } from "react-router-dom";
import Usercontext from "../../context/UserContext"
import axios from "axios";

export default function Register() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [passwordCheck, setPasswordCheck] = useState();
    const [name, setName] = useState();

    const { setUserData } = useContext(Usercontext)
    const history = useHistory();

    const submit = async (e) => {
      e.preventDefault();
      const newUser = {email, password ,passwordCheck, displayName};
       await axios.post('http://localhost:3000/users/register', newUser); 
       const loginRes = await axios.post('http://localhost:3000/users/register', {
        email,
        password,
      });
      setUserData({
        token: loginRes.data.token,
        user: loginRes.data.user,
      });
      localStorage.setItem("auth-token", loginRes.data.token);
    };
    

    return (
        <div>
           <h2>Register</h2> 
           <form onSubmit={submit}>
               <label htmlFor="register-name">Name</label>
               <input id="register-name" type="text" placeholder="Name"
                onChange={ e => setName(e.target.value)}
               />  


               <label htmlFor="register-email">Email</label>
               <input id="register-email" type="email" placeholder="Email"
                 onChange={ e => setEmail(e.target.value)} />

               <label htmlFor="register-password">Password</label>
               <input id="register-password" type="password" placeholder= "Password"
                 onChange={ e => setPassword(e.target.value)} 
               />
               <input type="password" placeholder="Verify password"
                 onChange={ e => setPasswordCheck(e.target.value)}
               />

               <input type="submit" value="Register"/>
           </form>
        </div>
    )
}

