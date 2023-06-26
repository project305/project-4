import React from "react";
import { Col, Button, Row, Form, FloatingLabel } from "react-bootstrap";
import login from "../../assets/images/login.png";
import Image from "next/image";
import styles from "../../styles/login.module.css";
const Login = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <h1 className={styles.title}>Login</h1>
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
        <p className="mb-3 text-right text-primary">forgot password?</p>
        <div className="d-flex flex-column justify-content-center align-items-center gap-3">
          <Button variant="primary" type="submit">
            Login
          </Button>
          <p>
            Don't have account?{" "}
            <span className="text-primary">create account</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
