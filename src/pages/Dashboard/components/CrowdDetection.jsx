import React from "react";
import crowd from "../../../../public/image/dashboard/crowd-detection/crowd.svg";
import { Col, Row } from "react-bootstrap";
import { CrowdBasedList } from "../utils";
import { BsFillSquareFill } from "react-icons/bs";
import MultiLineChart from "../../../component/chart/MultiLineChart";

const CrowdDetection = () => {
  return (
    <section className="custom-cards p-3 mb-3">
      <div className="d-flex align-items-center gap-3 mb-3">
        <img src={crowd} alt="i" />
        <div>
          <p className="fw-700 Helvetica Neue mb-0">Crowd Detection</p>
          <p className="f-13 mb-0 c-lightGrey">Section based crowd detection</p>
        </div>
      </div>
      <Row>
        {CrowdBasedList.map((item, index) => (
          <Col md={3} className="px-1">
            <div className="rounded-4 p-3" style={{ background: item.bgColor }}>
              <p className="fw-600 f-13 mb-2 bg-white p-2 rounded">
                {" "}
                <BsFillSquareFill
                  className="f-10 square-icon"
                  style={{ color: item.color }}
                />
                &nbsp; {item.label}
              </p>{" "}
              <h3 className="f-20 mb-0 Helvetica Neue fw-700">
                {item.percentage}
              </h3>
            </div>
          </Col>
        ))}
      </Row>
      <div className="mt-3">
        <div className="py-2 mb-2 d-flex justify-content-between">
          <p
            className="Helvetica Neue f-13 fw-700 mb-1 ps-2 border-with-curved-ends"
            //             style={{ borderLeft: "2px solid #5C4FC3" }}
          >
            Today Time line Graph analytics
          </p>
          <p className="Helvetica Neue f-13 fw-700 mb-1">Date</p>
          <p></p>
        </div>
        <MultiLineChart />
      </div>
    </section>
  );
};

export default CrowdDetection;
