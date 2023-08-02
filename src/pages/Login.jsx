import { Container, Row, Form, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Container>
      <Row>
        <Col md={6} className="login__form--container">
          <Form style={{ width: "100%" }}>
            <h1>Login to your account</h1>
            <Form.Group>
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                value=""
                required
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter your password"
                value=""
                required
              />
            </Form.Group>

            <Form.Group>
              <Button type="submit">Login</Button>
            </Form.Group>
            <p>
              Don't have an account? <Link to="/signup">Create an account</Link>{" "}
            </p>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;