import React, {useState} from 'react'

export default function Register() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [passwordCheck, setPasswordCheck] = useState();
    const [name, setName] = useState();

    return (
        <div>
           <h2>Register</h2> 
           <form>
               <label htmlFor="register-name">Name</label>
               <input id="register-name" type="text" placeholder="Name"/>  


               <label htmlFor="register-email">Email</label>
               <input id="register-email" type="email" placeholder="Email"/>

               <label htmlFor="register-password">Password</label>
               <input id="register-password" type="password" placeholder= "Password"/>
               <input type="password" placeholder="Verify password"/>

               <input type="submit" value="Register"/>
           </form>
        </div>
    )
}

