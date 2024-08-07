import React from "react";
import Heat from "../../../../public/image/dashboard/heat-map/heat.svg";
import { GoDotFill } from "react-icons/go";
import Zone1 from "../../../../public/image/dashboard/heat-map/zone1.png";
import Zone2 from "../../../../public/image/dashboard/heat-map/zone2.png";
const HeatMap = () => {
  return (
    <section className="custom-cards p-3 mb-3">
      <div className="d-flex align-items-center gap-3 mb-3">
        <img src={Heat} alt="i" />
        <div>
          <p className="fw-700 Helvetica Neue mb-0">Heat Map</p>
          <p className="f-13 mb-0 c-red">
            <GoDotFill /> Live
          </p>
        </div>
      </div>
      <div className="border-bottom py-3">
        <p className="mb-2 f-14">Zone 1</p>
        <img src={Zone1} className="w-100" alt="i" />
      </div>
      <div className="pt-3">
        <p className="mb-2 f-14">Zone 2</p>
        <img src={Zone2} className="w-100" alt="i" />
      </div>
    </section>
  );
};

export default HeatMap;
