import React from "react";
import styles from "../../styles/Login.module.css";
import { Button, Form } from "react-bootstrap";
import useRedirect from "@/custom-hooks/use-redirect";

const ForgotPassword = () => {
  const { redirectTo } = useRedirect();
  const redirection = (page) => {
    redirectTo(page);
  };
  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center">
        <h1 className={styles.title}>Forgot password</h1>
        <div className={styles.formSection}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <div className="d-flex flex-column justify-content-center align-items-center gap-3">
            <Button variant="primary" type="submit" className="mb-2">
              Forgot password
            </Button>
            <p className="m-0">
              Already have account?{" "}
              <span
                className="text-primary"
                onClick={() => redirection("/auth/login")}
              >
                Log in
              </span>
            </p>
            <p className="m-0">
              Don't have account?{" "}
              <span
                className="text-primary"
                onClick={() => redirection("/auth/sign-up")}
              >
                Sign up
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
