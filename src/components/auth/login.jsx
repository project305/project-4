import React from "react";
import styles from "../../styles/Login.module.css";
import { Button, Form } from "react-bootstrap";
import useRedirect from "@/custom-hooks/use-redirect";
import { useSession, signIn, signOut } from "next-auth/react";

const Login = () => {
  const { data } = useSession();
  const { redirectTo } = useRedirect();
  const redirection = (page) => {
    redirectTo(page);
  };
  console.log(data);
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <h1 className={styles.title}>Login</h1>
      <div className={styles.formSection}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-2" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <p
          className="mb-3 text-right text-primary"
          onClick={() => redirection("/auth/forgot-password")}
        >
          forgot password?
        </p>
        <div className="d-flex flex-column justify-content-center align-items-center gap-3">
          <Button
            variant="primary"
            type="submit"
          >
            Login
          </Button>
          <p>
            Don't have account?{" "}
            <span
              className="text-primary"
              onClick={() => redirection("/auth/sign-up")}
            >
              create account
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
