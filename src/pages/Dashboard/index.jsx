import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import DashboardHeader from "./components/DashboardHeader";
import CameraOverview from "./components/CameraOverview";
import "./Dashboard.css";
import Analytics from "./components/Analytics";
const Dashboard = () => {
  return (
    <Container fluid>
      <DashboardHeader />
      <Row>
        <Col md={5} className="h-100">
          <CameraOverview />
        </Col>
        <Col md={7} className="h-100">
          <Analytics />
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
