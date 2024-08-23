import React from "react";
import anpr from "../../../../public/image/dashboard/anpr/anpr.svg";
import Zone2 from "../../../../public/image/dashboard/heat-map/zone2.png";
import PieChart from "../../../component/chart/PieChart";
import { Col, Row } from "react-bootstrap";
import { StatebasedList, TalukbasedList } from "../utils";
const ANPR = () => {
  return (
    <section className="custom-cards p-3 mb-3">
      <div className="d-flex align-items-center gap-3 mb-3">
        <img src={anpr} alt="i" />
        <div>
          <p className="fw-700 Helvetica Neue mb-0">ANPR Classification</p>
          <p className="f-13 mb-0 c-lightGrey">State & RTO based counts </p>
        </div>
      </div>
      <div className="border-bottom py-3">
        <PieChart title="State based count" list={StatebasedList} />
      </div>
      <div className="py-3 mt-3">
        <PieChart title="RTO based count" list={TalukbasedList} />
      </div>
    </section>
  );
};

export default ANPR;
