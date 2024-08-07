import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./login.css";
import Logo from "../../../../public/image/dtile.svg";
import CustomInput from "../../../component/Forms/CustomInput";
import CheckBox from "../../../component/Forms/CheckBox";
import CustomButton from "../../../component/Button/CustomButton";
import useResponsive from "../../../hooks/useResponsive";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const { isMobile } = useResponsive();
  const navigate = useNavigate();
  return (
    <Container fluid className="login">
      <Row className="justify-content-center">
        {!isMobile && (
          <Col md={6} lg={6} className="px-0">
            <div className=" bg-img w-100">
              <div className="c-white mb-5">
                <h3 className="f-32 text-center mb-4">
                  Enhancing Security & Safety <br></br> to the Next Level
                </h3>
                <p className="text-center">
                  The Future of AI-Powered Surveillance Cameras
                </p>
              </div>
            </div>
          </Col>
        )}
        <Col sm={8} md={6} lg={6}>
          <section className="p-5">
            <div className="d-flex justify-content-center">
              <img src={Logo} alt="logo" />
            </div>
            <div className="form-box">
              <h3 className="f-20 fw-700 text-center mt-4">
                Sign in to your account
              </h3>
              <p className="f-14 fw-500 text-center mt-4">
                Don’t have an account?{" "}
                <span className="c-blue cursor-pointer">Register Now</span>
              </p>
              <div className="d-flex align-items-center justify-content-between">
                <hr className="flex-grow-1" />
                <span className="mx-2 c-grey">or sign in with email</span>
                <hr className="flex-grow-1" />
              </div>
              <CustomInput
                label="Email or User name"
                type="email"
                placeholer="Enter Email or User name"
                specialClass="h-50px"
              />
              <CustomInput
                label="Password"
                type="password"
                placeholer="Enter Password"
                specialClass="h-50px"
              />
              <p className="f-14 fw-500 d-flex justify-content-between align-items-center">
                <CheckBox label="Remember" />
                <p className="c-blue mb-0 cursor-pointer">Forgot password?</p>
              </p>
              <CustomButton
                btnName="Sign in"
                additionalStyle="w-100 radius-39"
                handleClick={() => navigate("/dashboard")}
              />
            </div>
          </section>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
