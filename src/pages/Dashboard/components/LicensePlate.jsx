import React from "react";
import { Col, Row } from "react-bootstrap";
import licence from "../../../../public/image/dashboard/licence/licence.svg";
import vehicle from "../../../../public/image/dashboard/licence/car.svg";
import CustomTable from "../../../component/Table/CustomTable";
import Pagination from "../../../component/Pagination/Pagination";
import { VehicleHead } from "../utils";

const LicensePlate = () => {
  return (
    <div className="custom-cards px-2">
      <Row className="camera-overview">
        <Col xs={12} md={5} className="p-3 box1">
          <div className="d-flex align-items-center gap-3 mb-3">
            <img src={licence} alt="i" />
            <div>
              <p className="fw-700 Helvetica Neue mb-0">
                License Plate Recognition
              </p>
              <p className="f-13 mb-0 c-lightGrey">Recognized vehicles</p>
            </div>
          </div>
          <p className="mb-0 f-12 fw-700 ms-2">Total Number of vehciles</p>
          <small className="f-12 c-lightGrey ms-2">
            Here you can see total count of vehicles
          </small>
          <div className="d-flex justify-content-center py-3 mt-3">
            <img src={vehicle} alt="vehicle" />
          </div>
          <p className="text-center f-14">Total vehicles</p>
          <h3 className="text-center fw-700 f-32 mb-0">460</h3>
        </Col>
        <Col xs={12} md={7}>
          <div className="py-3">
            <div>
              <p className="f-14 fw-600">450 vehicles listed</p>
            </div>
            <CustomTable header={VehicleHead} />
            <Pagination/>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default LicensePlate;
