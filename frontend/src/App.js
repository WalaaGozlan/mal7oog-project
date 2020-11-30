import React from 'react';
import Home from "./components/pages/Home";
import { BrowserRouter , Switch, Route } from  "react-router-dom";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Header from "./components/layout/Header";
// react contact its a methould that allow us use token 
import "./style.css";

function App() {
  return (
      <>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
          </Switch>
        </BrowserRouter>
      </>
  );
}

export default App;
