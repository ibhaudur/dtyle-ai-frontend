import React from "react";
import { Outlet } from "react-router-dom";
import Logo from "../../public/image/dtile.svg";
import profile from "../../public/image/profile.png";
import Notification from "../../public/image/Notification.svg";
import { Container } from "react-bootstrap";
import FloatingMenu from "./FloatingMenu";

const Header = () => {
  
  return (
    <React.Fragment>
      <header className="header d-flex justify-content-between align-items-center py-2 px-3 fixed-top">
        <div>
          <img src={Logo} width={100} alt="logo" />
        </div>
        <div className="d-flex gap-4">
          <img
            className="cursor-pointer position-relative mt-2"
            src={Notification}
            alt="logo"
          />
          <div className="rounded-18 cursor-pointer ms-2 mt-1 position-absolute d-flex justify-content-center align-items-center bg-red">
            <small className="c-white f-10 Helvetica Neue fw-700">3</small>
          </div>
          <div className="profile-img">
            <img src={profile} alt="logo" className="w-100" />
          </div>
        </div>
      </header>
      <Container fluid className="content-layout pt-4 pb-5 mt-5">
        <Outlet />
        <FloatingMenu />
      </Container>
    </React.Fragment>
  );
};

export default Header;
