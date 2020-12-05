import React, { Component } from 'react';



export default class Footer extends Component {  
    render(){
      return(
          

         <footer className="page-footer font-small teal pt-6">

  <div className="p-3 mb-2 bg-primary background-#6a1b9a purple darken-3">
    <div className="container">

      <div className="row py-3 d-flex align-items-center">
        <div className="col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0">
          <h6 className="mb-0 h5" style={{fontFamily:"Fantasy"}} >connecte with us on social networks!</h6>
        </div>

        <div className="col-md-6 col-lg-7 text-center text-md-right">

          {/* <a href className="fb-ic">
            <i className="fab fa-facebook-f white-text mr-4"> </i>
          </a>

          <a href className="tw-ic">
            <i className="fab fa-twitter white-text mr-4"> </i>
          </a>

          <a href className="gplus-ic">
            <i className="fab fa-google-plus-g white-text mr-4"> </i>
          </a>

          <a href className="li-ic">
            <i className="fab fa-linkedin-in white-text mr-4"> </i>
          </a>

          <a href className="ins-ic">
            <i className="fab fa-instagram white-text"> </i>
          </a> */}

        </div>

      </div>

    </div>
  </div>

  <div className="container text-center text-md-left mt-4">


    <div className="row mt-200">

      <div className="col-md-200 col-lg-4 col-xl-200 mx-100 mb-200">


        <h6 className="text-uppercase font-weight-bold h5" style={{fontFamily:"Fantasy"}}>Mal7OOg</h6>
        <hr className="purple accent-5 mb-8 mt-0 d-inline-block mx-auto" style={{width: "100px"}} ></hr>
        <p style={{fontFamily:"Monospace"}} className="h4">“Success is no accident. It is hard work, perseverance, learning, studying, sacrifice and most of all, love of what you are doing or learning to do.”</p>

      </div>


      <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

        <h6 className="text-uppercase font-weight-bold  h5 " style={{fontFamily:"Fantasy"}}>Contact</h6>
        <hr className="purple accent-5 mb-8 mt-0 d-inline-block mx-auto" style={{width: "100px"}} ></hr>
        <p>
          <i className="fas fa-home mr-3 "></i> Amman, Jordan</p>
        <p>
          <i className="fas fa-envelope mr-3"></i> mal7oog@gmail.com</p>
        <p>
          <i className="fas fa-phone mr-3"></i>07900008711</p>

      </div>

    </div>

  </div>

  <div className="footer-copyright text-center py-2">© 2020 Copyright:
    <a href="https://mdbootstrap.com/"> mal7oog.com</a>
  </div>
  <div/>
</footer>

      );
    }

}