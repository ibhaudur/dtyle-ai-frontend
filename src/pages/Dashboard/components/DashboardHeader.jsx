import React from "react";
import FileIcon from "../../../component/Icon/FileIcon";
import DownloadIcon from "../../../component/Icon/DownloadIcon";
import ButtonWhite from "../../../component/Button/ButtonWhite";
import { Col, Row } from "react-bootstrap";

const DashboardHeader = () => {
  return (
    <Row className="py-3">
      <Col md={6}>
        <p className="f-24 mb-0">Good morning, Ali Hussain !</p>
        <small className="c-lightGrey">
          Here is the information of your dashboard
        </small>
      </Col>
      <Col md={6} className="d-flex justify-content-end gap-1">
        <div className="d-flex gap-1">
          <ButtonWhite>
            <FileIcon />
          </ButtonWhite>
          <ButtonWhite>
            <DownloadIcon /> &nbsp;Download Report
          </ButtonWhite>
        </div>
      </Col>
    </Row>
  );
};

export default DashboardHeader;
