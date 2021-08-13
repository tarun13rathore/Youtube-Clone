import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CategariesBar from "../../components/categories/CategariesBar";
import Videos from "../../components/videos/Videos";

const HomeScreen = () => {
  return (
    <>
      <Container>
        <CategariesBar />
        <Row>
          {[...new Array(20)].map(() => (
            <Col lg={3} md={4}>
              <Videos />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default HomeScreen;
