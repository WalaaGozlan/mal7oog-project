import React from 'react'
// import img from "./img1.jpg"
// import Image from 'react-bootstrap/Image'
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

function Imagee() {
    return (
        <MDBContainer className="mt-5">
          <MDBRow className="mb-4">
            <MDBCol md="4">
              <img src="https://mdbootstrap.com/img/Others/documentation/1.jpg" className="img-fluid" alt="" />
            </MDBCol>
          </MDBRow>
          <MDBRow className="mb-4">
            <MDBCol md="6">
              <img src="https://mdbootstrap.com/img/Others/documentation/1.jpg" className="img-fluid" alt="" />
            </MDBCol>
          </MDBRow>
          <MDBRow className="mb-4">
            <MDBCol md="8">
              <img src="https://mdbootstrap.com/img/Others/documentation/1.jpg" className="img-fluid" alt="" />
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      );
    }
  

export default Imagee
