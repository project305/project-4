import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Login from "@/components/auth/login";
import SignUp from "@/components/auth/sign-up";
import ForgotPassword from "@/components/auth/forgot-password";

const AuthPage = ({ pageName }) => {
  return (
    <>
      {pageName === "login" && <Login />}
      {pageName === "sign-up" && <SignUp />}
      {pageName === "forgot-password" && <ForgotPassword />}
    </>
  );
};

export default AuthPage;

export async function getServerSideProps({ query }) {
  let pageName = query.authPage;
  let isAuthPage =
    pageName === "login" ||
    pageName === "sign-up" ||
    pageName === "forgot-password";
  console.log("hiii========>", pageName, isAuthPage);
  if (!isAuthPage) {
    return {
      notFound: true,
    };
  }
  let data = { a: "hi" };

  return {
    props: { pageName: pageName }, // will be passed to the page component as props
  };
}
