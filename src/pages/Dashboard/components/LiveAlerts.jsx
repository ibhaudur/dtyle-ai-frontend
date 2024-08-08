import React from "react";
import Alert from "../../../../public/image/dashboard/live-alert/alert.svg";
import Accordion from "../../../component/Accordion/Accordion";
import { AlertList } from "../utils";
import CustomInput from "../../../component/Forms/CustomInput";
const LiveAlerts = () => {
  return (
    <section className="custom-cards alerts p-3">
      <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex gap-3">
          <img src={Alert} alt="i" />
          <div>
            <p className="fw-700 Helvetica Neue mb-0">Live Alerts</p>
            <p className="f-13 mb-0 c-lightGrey">All alerts are listed here </p>
          </div>
        </div>
        <div>
          <CustomInput
            type="select"
            options={[
              { id: "option1", label: "Option 1" },
              { id: "option2", label: "Option 2" },
            ]}
            defaultlabel="Select Camera"
            valKey="id"
            labelKey="label"
          />
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
