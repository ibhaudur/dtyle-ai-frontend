import React from "react";
import camera from "../../../../public/image/icons/camera.svg";
import monitor from "../../../../public/image/monitor.png";
import { GrFormEdit } from "react-icons/gr";
import { LiaHashtagSolid } from "react-icons/lia";
import { FaRotateLeft } from "react-icons/fa6";
import {
  PiArrowUUpLeft,
  PiArrowUUpLeftBold,
  PiArrowUUpRight,
  PiArrowUUpRightBold,
} from "react-icons/pi";
import { LuRotateCcw } from "react-icons/lu";
import CustomButton from "../../../component/Button/CustomButton";
import OutlineBtn from "../../../component/Button/OutlineBtn";

const CameraMonitor = () => {
  return (
    <section className="custom-cards monitor p-3">
      <p className="f-14 Helvetica Neue mb-0">
        <img src={camera} alt="i" /> CAM 001 / Vehicle-Wrong-Way
      </p>
      <div className="mt-3 d-flex">
        <div>
          <img src={monitor} alt="i" className="w-100" />
          <div className="mt-3 d-flex gap-2">
            <OutlineBtn
              btnName="Add"
              additionalStyle="w-100 radius-39 flex-grow-1"
            />
            <CustomButton
              btnName="Save"
              additionalStyle="w-100 radius-39 flex-grow-1"
            />
          </div>
        </div>
        <div
          className="px-3 d-flex flex-column justify-content-between"
          style={{ paddingBottom: "60px" }}
        >
          <div>
            <GrFormEdit className="icon active mb-2" />
            <LiaHashtagSolid className="icon mb-2" />
            <LiaHashtagSolid className="icon" />
          </div>
          <div>
            <LuRotateCcw className="icon mb-2" />
            <PiArrowUUpLeft className="icon mb-2" />
            <PiArrowUUpRight className="icon" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CameraMonitor;
