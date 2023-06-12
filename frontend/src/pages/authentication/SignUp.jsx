import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { SignUpForm } from "../../components/authentication/sign-up-form";
import { Link } from "react-router-dom";

import { connect } from "react-redux";

export function SignUp(props) {
  return (
    <div
      style={{
        minHeight: "100%",
        // eslint-disable-next-line
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container className="text-center">
        <Row className="justify-content-center">
          <Col xs={12} sm={8} lg={6}>
            <SignUpForm />
          </Col>
        </Row>
        <Row>
          <Col>
            <span>Already have an account? </span>
            <Link style={{ color: "#58B9FF" }} to="/login">
              Log In
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

function mapStateToProps(state) {
  const { message } = state.message;
  return {
    message,
  };
}

export default connect(mapStateToProps)(SignUp);
