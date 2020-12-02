// BrowserRouter--> a component that just enabel routing , so anything inside this component has access to the browser
// Switch--> it will allow us look to the url and making a decisions based on that
// Route --> determain a single route 
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
      if(token === null){ // add it to the localS automaticlly
        localStorage.setItem("auth-token", "");
        token = "";
      }
      const tokenRes = await axios.post(
        "http://localhost:1300/api/user/tokenIsValid", 
        null, //the body is null, dont send anything to the body
        { headers: {"x-auth-token": token}}
      );
      console.log(tokenRes.data)// true or false 
      // to get the user 
      if(tokenRes.data){
        const userRes = await axios.get("http://localhost:1300/api/user/",{ 
          headers: {"x-auth-token": token}, 
        });
        setUserData({
          token,
          user: userRes.data,
        })
      }
    };
    checkLoggedIn();

  }, []); // the array is a dependensie list 

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
