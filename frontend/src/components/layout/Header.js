// im not sure i we can use header and navbar 
// my header should contain two obuttons and a link to the home page 

import React from 'react'
import { Link } from "react-router-dom" ;
import Authbuttons from "../auth/authbuttons"

export default function Header() {
    return (
        <header id="header">
          <Link  to='/'>
              <h1 className="titel"> Mal7ooG </h1>
          </Link>
          <Authbuttons/>
        </header>
    );
}

