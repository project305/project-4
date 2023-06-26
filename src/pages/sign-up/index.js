import React from "react";
import { Col, Button, Row, Form, FloatingLabel } from "react-bootstrap";
import styles from "../../styles/login.module.css";
const SignUp = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <h1 className={styles.title}>Sign Up</h1>
      <div className={styles.formSection}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
        </Form.Group>

        <Form.Group className="mb-2" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <div className="d-flex flex-column justify-content-center align-items-center gap-3">
          <Button variant="primary" type="submit">
            Sign up
          </Button>
          <p>
            Already have account?{" "}
            <span className="text-primary">Log in</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
