
import React, { useState, useContext } from 'react';
import { useHistory } from "react-router-dom";
import usercontext from "../../context/userContext";
import axios from "axios";
import ErrNotice from ".././msg/ErrNotice.js"
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';
export default function Register() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordCheck, setPasswordCheck] = useState();
  const [name, setName] = useState();
  const [error, setError] = useState();

  const { setUserData } = useContext(usercontext)
  const history = useHistory();

  const submit = async (e) => {
    e.preventDefault();
    try {
      const newUser = { email, password, passwordCheck, name };
      await axios.post('http://localhost:1300/api/user/register', newUser);
      const loginRes = await axios.post('http://localhost:1300/api/user/login', {
        email,
        password,
      });
      setUserData({
        token: loginRes.data.token,
        user: loginRes.data.user,
      });
      localStorage.setItem("auth-token", loginRes.data.token);
      history.push("/add");
    }
    catch (err) {
      err.response.data.msg && setError(err.response.data.msg);
      console.log(err.response.data.msg)
    }
  };


  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="6">
          <MDBCard>
            <MDBCardBody>
              <form onSubmit={submit}>
                <p className="h4 text-center py-4">REGISTER</p>
                {error && <ErrNotice message={error} clearError={() => setError(undefined)} />}
                <div className="grey-text">
                  <MDBInput
                    label="Your name"
                    icon="user"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                    onChange={e => setName(e.target.value)}
                  />
                  <MDBInput
                    label="Your email"
                    icon="envelope"
                    group
                    type="email"
                    validate
                    error="wrong"
                    success="right"
                    onChange={e => setEmail(e.target.value)}
                  />

                  <MDBInput
                    label="Your password"
                    icon="lock"
                    group
                    type="password"
                    validate
                    onChange={e => setPassword(e.target.value)}
                  />
                  <MDBInput
                    label="Confirm your Password"
                    icon="lock"
                    group
                    type="password"
                    validate
                    onChange={e => setPasswordCheck(e.target.value)}
                  />

                </div>
                <div className="text-center py-4 mt-3">
                  <MDBBtn color="cyan" type="submit">
                    Register
                  </MDBBtn>
                </div>
              </form>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};
