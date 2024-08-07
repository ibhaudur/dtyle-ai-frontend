import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import DashboardHeader from "./components/DashboardHeader";
import CameraOverview from "./components/CameraOverview";
import "./Dashboard.css";
import Analytics from "./components/Analytics";
import LiveAlerts from "./components/LiveAlerts";
const Dashboard = () => {
  return (
    <Container fluid>
      <DashboardHeader />
      <Row>
        <Col md={5} className="h-100 mb-3">
          <CameraOverview />
        </Col>
        <Col md={7} className="h-100 mb-3">
          <Analytics />
        </Col>
        <Col md={6}>
          <LiveAlerts />
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
