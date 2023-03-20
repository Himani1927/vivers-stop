import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

import { useNavigate } from "react-router-dom";
// UI maker pr designer
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
  MDBCardOverlay,
} from "mdb-react-ui-kit";

import LoginNav from "../../Navigation/LoginNav";

function UserLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [backData, SetBacKData] = useState([]);

  function change() {
    navigate("/userregistration");
  }

  const setYourEmail = (e) => {
    setEmail(e.target.value);
  };

  const setYourPassword = (e) => {
    setPassword(e.target.value);
  };

  const check = (e) => {
    e.preventDefault();

    backData.map((ele) => {
      if (ele.email == email && ele.password == password) {
        let session = sessionStorage.getItem("data");
        if (session === null) {
          sessionStorage.setItem("data", ele.mobileNo);
        } else {
          sessionStorage.removeItem("data");
          sessionStorage.setItem("data", ele.mobileNo);
        }
        navigate("/productpage");
      }
    });
  };

  useEffect(() => {
    axios
      .get("http://localhost:8088/user/all")
      .then((response) => SetBacKData(response.data));
  }, []);

  return (
    <>
    <div className="bg-success p-2 text-dark bg-opacity-75">
      <LoginNav/>
      <MDBContainer className="my-5 " >
        <MDBCard background='dark' className='text-white'>
          <MDBCardImage overlay src="https://aishwaryacaterers.in/assets/images/25192f4eda302e18aece7516878ae9e5%20(1).webp" alt='...' />
          <MDBCardOverlay>
          <MDBRow className="justify-content-center align-items-center m-5">
            {/* <MDBCol md="6">
              <MDBCardImage
                src="https://static.vecteezy.com/system/resources/previews/001/830/690/non_2x/online-market-woman-with-shopping-cart-supermarket-food-delivery-in-grocery-store-free-vector.jpg"
                alt="login form"
                className="rounded-start w-100"
              />
            </MDBCol> */}

            <MDBCol md="6">
              <MDBCardBody className="d-flex flex-column" style={{marginTop: "110px"}}>
                {/* <div className="d-flex flex-row mt-2">
                  <MDBIcon
                    fas
                    icon="cubes fa-3x me-3"
                    style={{ color: "#ff6219" }}
                  />
                  <span className="h4 fw-bold mb-0">ViversStop</span>
                </div> */}

                <h2
                  className="fw-bold my-4 pb-3"
                  style={{ letterSpacing: "1px" }}
                >
                  {" "}
                  User Login
                </h2>

                <MDBInput
                  wrapperClass="mb-4"
                  id="formControlLg1"
                  type="email"
                  placeholder=" Your Email"
                  size="lg"
                  onChange={(e) => setYourEmail(e)}
                />
                <MDBInput
                  wrapperClass="mb-4"
                  id="formControlLg"
                  type="password"
                  placeholder=" Your Password"
                  size="lg"
                  onChange={(e) => setYourPassword(e)}
                />

                <MDBBtn
                  className="mb-4 px-5"
                  color="success"
                  size="lg"
                  onClick={check}
                >
                  Login
                </MDBBtn>
                <p className="mb-5 pb-lg-2" style={{ color: "#80CBC4" }}>
                  Do not have an account!{" "}
                  <a onClick={change} style={{ color: "#80CBC4" }}>
                    SignUp
                  </a>
                </p>
              </MDBCardBody>
            </MDBCol>
          </MDBRow>
          </MDBCardOverlay>
        </MDBCard>
      </MDBContainer>
      </div>
    </>
  );
}

export default UserLogin;