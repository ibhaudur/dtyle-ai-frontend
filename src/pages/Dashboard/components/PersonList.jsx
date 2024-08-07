import React from "react";
import Avatar from "../../../../public/image/dashboard/face-recognition/avatar.png";
import Pagination from "../../../component/Pagination/Pagination";

const PersonList = () => {
  return (
    <section className="custom-cards personalList p-3">
      <div className="d-flex align-items-center gap-3">
        <div>
          <p className="f-13 Helvetica Neue mb-0">24 Persons</p>
          <p className="f-11 mb-0 c-lightGrey">Today, 08:36 pm</p>
        </div>
      </div>
      <ul className="mb-0 p-0 mt-2">
        {Array.from({ length: 5 }).map((_, index) => (
          <li className="d-flex f-13 justify-content-between align-items-center p-2">
            <small className=" fw-700 Helvetica Neue">
              <img src={Avatar} className="radius-39" width={23} alt="i" />
              &nbsp; Roller ball
            </small>
            <samll className="c-lightGrey">09:47:25 AM</samll>
          </li>
        ))}
      </ul>
      <Pagination />
    </section>
  );
};

export default PersonList;
