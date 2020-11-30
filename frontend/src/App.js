import React, { useState, useEffect } from 'react';
import Home from "./components/pages/Home";
import { BrowserRouter , Switch, Route } from  "react-router-dom";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Header from "./components/layout/Header";
import UserContext from "./context/userContext"; // we can store datat in this cotext why do we need it in first place ? it aloow all component in this component to share valuse without using props or statre ? what valuse do we need to share here ? token or the user for auth so we can abdate them easily . 
 
import "./style.css";

function App() {
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  });
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
