import React, { Component } from 'react';
// import logo from './logo.svg';
import { Link } from 'react-router-dom';
// import Authbuttons from "./Auth/Authbutton";
export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
          {/* <Authbuttons/> */}
        {/* <div><img src={logo} alt="hey" /></div> */}
        <Link to="/" className="navbar-brand">Home</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/add" className="nav-link">Create your task</Link> 
          {/* create */}
          </li>
          <li className="navbar-item">
           <Link to="/calender" className="nav-link">Calender</Link>
           <Link to="/login" className="nav-link">Log-in</Link>
           <Link to="/register" className="nav-link">Register</Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}





