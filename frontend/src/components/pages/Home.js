import React from 'react'
import img from "../img1.jpg"
import { MDBMask, MDBView, MDBCol } from "mdbreact";


export default function Home() {
    
    return (
        <MDBCol sm="15" >
        <MDBView hover zoom>
          <img
            src={img}
            className="img-fluid"
            alt=""
          />
          <MDBMask className="flex-center">
            <p className="white-text">mal7oog</p>
          </MDBMask>
        </MDBView>
      </MDBCol>
    )
   
}
