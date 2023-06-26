import Router from "next/router";

const useRedirect = () => {
  const redirectTo = (pathName = "") => {
    Router.push(`/${pathName}`);
  };

  return { redirectTo };
};

export default useRedirect;
