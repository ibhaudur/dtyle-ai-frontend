import React, { useState } from "react";
import camera from "../../../../public/image/icons/camera.svg";
import { GrFormEdit } from "react-icons/gr";
import { LiaCodeBranchSolid, LiaHashtagSolid } from "react-icons/lia";
import { PiArrowUUpLeft, PiArrowUUpRight } from "react-icons/pi";
import { LuRotateCcw } from "react-icons/lu";
import CustomButton from "../../../component/Button/CustomButton";
import OutlineBtn from "../../../component/Button/OutlineBtn";
import { CameraFeedList } from "../utils";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const CameraMonitor = () => {
  const [currentCamIndex, setCurrentCamIndex] = useState(0);

  const nextCam = () => {
    setCurrentCamIndex((prevIndex) =>
      prevIndex === CameraFeedList.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevCam = () => {
    setCurrentCamIndex((prevIndex) =>
      prevIndex === 0 ? CameraFeedList.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="custom-cards monitor p-3">
      <div className="d-flex justify-content-between pagination">
        <p className="f-14 Helvetica Neue mb-0">
          <img src={camera} alt="i" /> {CameraFeedList[currentCamIndex].title}
        </p>
        <div className="d-flex gap-2">
          <IoIosArrowBack onClick={prevCam} className="icons" />
          <IoIosArrowForward onClick={nextCam} className="icons" />
        </div>
      </div>

      <div className="mt-3 d-flex">
        <div>
          <video alt="i" className="w-100" autoPlay muted key={currentCamIndex}>
            <source
              src={CameraFeedList[currentCamIndex].video}
              type="video/mp4"
            />
          </video>
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
            <LiaCodeBranchSolid className="icon mb-2" />
          </div>
          <div>
            <PiArrowUUpLeft className="icon mb-2" />
            <PiArrowUUpRight className="icon mb-2" />
            <LuRotateCcw className="icon" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CameraMonitor;
