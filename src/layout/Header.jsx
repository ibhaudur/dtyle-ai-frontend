import React from "react";
import { Outlet } from "react-router-dom";
import Logo from "../../public/image/dtile.svg";
import profile from "../../public/image/profile.png";
import Notification from "../../public/image/Notification.svg";
import { Container } from "react-bootstrap";

const Header = () => {
  return (
    <React.Fragment>
      <header className="header d-flex justify-content-between align-items-center py-2 px-3 fixed-top">
        <div>
          <img src={Logo} width={100} alt="logo" />
        </div>
        <div className="d-flex gap-4">
          <img className="cursor-pointer" src={Notification} alt="logo" />
          <div className="profile-img">
            <img src={profile} alt="logo" className="w-100" />
          </div>
        </div>
      </header>
      <Container fluid className="content-layout pb-3 mt-5">
        <Outlet />
      </Container>
    </React.Fragment>
  );
};

export default Header;
