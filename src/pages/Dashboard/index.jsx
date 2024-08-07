import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import DashboardHeader from "./components/DashboardHeader";
import CameraOverview from "./components/CameraOverview";
import "./Dashboard.css";
import Analytics from "./components/Analytics";
import LiveAlerts from "./components/LiveAlerts";
import Facerecognition from "./components/Facerecognition";
import PersonList from "./components/PersonList";
import HeatMap from "./components/HeatMap";
const Dashboard = () => {
  return (
    <Container fluid>
      <DashboardHeader />
      <Row>
        <Col md={5} lg={4} className="h-100 mb-3">
          <CameraOverview />
        </Col>
        <Col md={7} lg={8} className="h-100 mb-3">
          <Analytics />
        </Col>
        <Col md={12} lg={5} className="mb-3">
          <LiveAlerts />
        </Col>
        <Col md={6} lg={3}>
          <Facerecognition />
          <PersonList />
        </Col>
        <Col md={6} lg={4}>
          <HeatMap />
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
