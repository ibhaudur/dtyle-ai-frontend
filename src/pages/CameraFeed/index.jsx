import React from "react";
import { Col, Row } from "react-bootstrap";
import RuleDetails from "./component/RuleDetails";
import "./Camerafeed.css";
import CustomAndAlert from "./component/CustomAndAlert";
import CameraMonitor from "./component/CameraMonitor";

const CameraFeed = () => {
  return (
    <React.Fragment>
      <Row className="mt-2 pb-5">
        <Col md={6}>
          <RuleDetails />
          <CustomAndAlert />
        </Col>
        <Col md={6}>
          <CameraMonitor />
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default CameraFeed;
