import React, { useState, useEffect } from 'react'; // useEffect its to handel all side effect 
import Home from "./components/pages/Home";
import { BrowserRouter , Switch, Route } from  "react-router-dom";
import axios from "axios"
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Header from "./components/layout/Header";
import UserContext from "./context/userContext"; // stores the token 
 
import "./style.css"; 

function App() {
  const [userData, setUserData] = useState({
    token: undefined,// becouse we need to know if there is token if there is not the token must be undefined
    user: undefined,
  });

  // CHECK IF THERE IS TOKEN IN LOCAL STOREGE OR NOT 
  useEffect(() => {
    const checkLoggedIn = async () => {
      let token = localStorage.getItem("auth-token");
      if(token === null){
        localStorage.setItem("auth-token", "");
        token = "";
      }
      const tokenRes = await axios.post(
        "http://localhost:3000/user/tokenIsValid", 
        null, 
        { headers: {"x-auth-token": token} }
      );
      // console.log(tokenRes.data)// true or false 
      // to get the user 
      if(tokenRes.data){
        const userRes = await axios.get("http://localhost:3000/users/",{ 
          headers: {"x-auth-token": token}, 
        });
        setUserData({
          token,
          user: userRes.data,
        })
      }
    };
    checkLoggedIn();

  }, []);

  return (
      <>
        <BrowserRouter>
         <UserContext.Provider value={{ userData, setUserData}}>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
          </Switch>
          </UserContext.Provider>
        </BrowserRouter>
      </>
  );
}

export default App;
