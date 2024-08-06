import React from "react";
import { Col, Row } from "react-bootstrap";
import { AnalticsList } from "../utils";

const Analytics = () => {
  return (
    <section className="custom-cards p-3">
      <div>
        <p className="fw-700 Helvetica Neue">Analytics</p>
      </div>
      <Row className="px-2">
        {AnalticsList.map((item, index) => {
          return (
            <Col key={index} className="p-1" md={6} lg={6} xl={4}>
              <div className="grey-card p-2">
                <div className="d-flex align-items-center gap-3">
                  <img src={item.image} alt="i" />
                  <div>
                    <p className="f-14 mb-0">{item.title}</p>
                    <p className="f-18 fw-700 mb-0">{item.count}</p>
                  </div>
                </div>
                <small className="c-lightGrey f-12">{item.desc}</small>
              </div>
            </Col>
          );
        })}
      </Row>
    </section>
  );
};

export default Analytics;
