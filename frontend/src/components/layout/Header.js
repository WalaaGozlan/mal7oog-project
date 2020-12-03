
import React from 'react'
import { Link } from "react-router-dom" ;
import Authbuttons from "../auth/Authbuttons.js"

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

