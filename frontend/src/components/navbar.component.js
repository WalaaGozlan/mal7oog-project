import React, { Component } from 'react';
// import logo from './logo.svg';
import { Link } from 'react-router-dom';

// import Authbuttons from "./Auth/Authbutton";


export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-  bg-#e1bee7 purple lighten-4 text-#e0e0e0 grey lighten-2">
       <a className="navbar-brand" href="/#" style={{fontFamily:"Cursive"}} >Mal7OOG</a>
        <Link to="/" className="nav-link" style={{fontFamily:"Cursive"}}> Home <span className="sr-only"/></Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          </li>
          <Link to="/add" className="nav-link" style={{fontFamily:"Cursive"}}> Create your task</Link>
          <li className="navbar-item">
          <Link to="/calender" className="nav-link" style={{fontFamily:"Cursive"}}>Calender</Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}





