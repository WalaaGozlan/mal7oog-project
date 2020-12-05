import React, { useState, useContext } from 'react';
import { useHistory } from "react-router-dom";
import usercontext from "../../context/userContext";
import axios from "axios";
import ErrNotice from ".././msg/ErrNotice.js"
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';
// import 'bootstrap/dist/css/bootstrap.min.css'
// import '@fortawesome/fontawesome-free/css/all.min.css';
// import 'bootstrap-css-only/css/bootstrap.min.css';
// import 'mdbreact/dist/css/mdb.css';


export default function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();

  const { setUserData } = useContext(usercontext)
  const history = useHistory();

  const submit = async (e) => {
    e.preventDefault();
    try {
      const loginUser = { email, password };
      const loginRes = await axios.post('http://localhost:1300/api/user/login', loginUser);
      setUserData({
        token: loginRes.data.token,
        user: loginRes.data.user,
      });
      localStorage.setItem("auth-token", loginRes.data.token);
      history.push("/add") //Q // create
    } catch (err) {
      err.response.data.msg && setError(err.response.data.msg);
      console.log(err.response.data.msg)
    }
  };


  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="6">
          <form  onSubmit={submit}>
            <p className="h5 text-center mb-4">LOG-IN</p>
            {error && <ErrNotice message={error} clearError={()=> setError(undefined)} />}
            <div className="grey-text">
              <MDBInput label="Type your email" icon="envelope" group type="email" validate error="wrong"
                success="right" onChange={ e => setEmail(e.target.value)} />
              <MDBInput label="Type your password" icon="lock" group type="password" validate onChange={ e => setPassword(e.target.value)} />
            </div>
            <div className="text-center">
              <MDBBtn type="submit" value="Login" >Login</MDBBtn>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    );
    };
    