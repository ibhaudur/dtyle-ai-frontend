import React from "react";
import Alert from "../../../../public/image/dashboard/live-alert/alert.svg";
import Accordion from "../../../component/Accordion/Accordion";
import { AlertList } from "../utils";
const LiveAlerts = () => {
  return (
    <section className="custom-cards alerts p-3">
      <div className="d-flex align-items-center gap-3">
        <img src={Alert} alt="i" />
        <div>
          <p className="fw-700 Helvetica Neue mb-0">Live Alerts</p>
          <p className="f-13 mb-0 c-lightGrey">All alerts are listed here </p>
        </div>
      </div>
      <div className="d-flex align-items-center justify-content-between mt-3">
        <hr className="flex-grow-1" />
        <span className="mx-2 f-24 fw-700 Helvetica Neue c-blue">1,532</span>
        <hr className="flex-grow-1" />
      </div>
      <p className="text-center c-lightGrey">
        Total events in <span className="fw-700 c-black">65</span> areas
      </p>
      <Accordion list={AlertList} />
    </section>
  );
};

export default LiveAlerts;
