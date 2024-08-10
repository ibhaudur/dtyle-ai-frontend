import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../auth.css";
import Logo from "../../../../public/image/dtile.svg";
import CustomInput from "../../../component/Forms/CustomInput";
import CheckBox from "../../../component/Forms/CheckBox";
import CustomButton from "../../../component/Button/CustomButton";
import useResponsive from "../../../hooks/useResponsive";
import { Link, useNavigate } from "react-router-dom";
import Banner from "../component/Banner";
const Login = () => {
  const { isMobile } = useResponsive();
  const navigate = useNavigate();
  return (
    <Container fluid className="login">
      <Row className="justify-content-center">
        {!isMobile && (
          <Col md={6} lg={6} className="px-0">
            <Banner />
          </Col>
        )}
        <Col
          sm={8}
          md={6}
          lg={6}
          className="d-flex flex-column justify-content-center"
        >
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
                <Link to="/register" className="c-blue cursor-pointer">
                  Register Now
                </Link>
              </p>
              <div className="d-flex align-items-center justify-content-between">
                <hr className="flex-grow-1" />
                <span className="mx-2 c-grey">or sign in with email</span>
                <hr className="flex-grow-1" />
              </div>
              <CustomInput
                label="Email or User name"
                type="email"
                placeholder="Enter Email or User name"
                specialClass="h-50px mb-1"
              />
              <CustomInput
                label="Password"
                type="password"
                placeholder="Enter Password"
                specialClass="h-50px mb-1"
              />
              <div className="f-14 fw-500 d-flex justify-content-between align-items-center">
                <CheckBox label="Remember" />
                <Link
                  to="/forget-password"
                  className="c-blue mb-0 cursor-pointer"
                >
                  Forgot password?
                </Link>
              </div>
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
