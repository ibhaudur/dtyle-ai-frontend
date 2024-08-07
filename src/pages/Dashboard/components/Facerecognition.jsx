import React from "react";
import Face from "../../../../public/image/dashboard/face-recognition/face.svg";

const Facerecognition = () => {
  return (
    <section className="custom-cards p-3 mb-3">
      <div className="d-flex align-items-center gap-3">
        <img src={Face} alt="i" />
        <div>
          <p className="fw-700 Helvetica Neue mb-0">Face Recognition</p>
          <p className="f-13 mb-0 c-lightGrey">
            Detected count and persons list
          </p>
        </div>
      </div>
    </section>
  );
};

export default Facerecognition;
