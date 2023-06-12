import { React } from "react";
import { Link } from "react-router-dom";
import { LoginForm } from "../../components/authentication/login-form.jsx";
import { Container, Row, Col } from "react-bootstrap";

import { connect } from "react-redux";

export function Login(props) {
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
            <LoginForm></LoginForm>
          </Col>
        </Row>
        <Row>
          <Col>
            <span>Need an account? </span>
            <Link style={{ color: "#58B9ff" }} to="/sign-up">
              Create an account
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

export default connect(mapStateToProps)(Login);
