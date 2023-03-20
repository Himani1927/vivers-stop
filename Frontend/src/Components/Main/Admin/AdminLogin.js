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
import AdminNavigate from "../../Navigation/AdminNavigation";

export default function AdminLogin() {

    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    
  const [backData, SetBacKData] = useState([]);

    const setYourEmail = (e) => {
        setEmail(e.target.value);
      };
    
      const setYourPassword = (e) => {
        setPassword(e.target.value);
      };

      function check(){
        backData.map((ele)=>{
            if(ele.email===email && ele.password===password || ele.mobileNo==email && ele.password===password){
                navigate("/adminHome")
            }
        })
      }

      useEffect(() => {
        axios
          .get("http://localhost:8088/admin/all")
          .then((response) => SetBacKData(response.data));
      }, []);

  return (
    <>
    <div className="bg-success p-2 text-dark bg-opacity-75">
        <AdminNavigate/>
        <MDBContainer className="my-5" >
        <MDBCard background='dark' className='text-white'>
        <MDBCardImage overlay src="https://assets-api.kathmandupost.com/thumb.php?src=https://assets-cdn.kathmandupost.com/uploads/source/news/2020/lifestyle/shutterstock261911216jpg-1592525866.jpeg&w=900&height=601" alt='...' />
          <MDBCardOverlay>
          <MDBRow className="justify-content-center align-items-center m-5">
            {/* <MDBCol md="6">
              <MDBCardImage
                src="https://img.freepik.com/free-vector/people-shopping-groceries-supermarket_23-2148519531.jpg"
                alt="login form"
                className="rounded-start w-100"
              />
            </MDBCol> */}

            <MDBCol md="6">
              <MDBCardBody className="d-flex flex-column" style={{marginTop: "170px"}}>
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
                  style={{ letterSpacing: "1px"}}
                >
                  {" "}
                  Admin Login
                </h2>

                <MDBInput
                  wrapperClass="mb-4"
                  id="formControlLg1"
                  type="email"
                  placeholder=" Your Email / MobileNo"
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
                  Do not have an account!{" "} Contact us at himani11@gmail.com
                </p>
              </MDBCardBody>
            </MDBCol>
          </MDBRow>
          </MDBCardOverlay>
        </MDBCard>
      </MDBContainer>
      </div>
    </>
  )
}
