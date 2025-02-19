import { Outlet, Navigate } from "react-router-dom";

const AuthLayout = () => {
  let isAuthenticated = false;

  return (
    <>
      {isAuthenticated ? (
        <Navigate to={"/"} />
      ) : (
        <>
          <Outlet />
        </>
      )}
    </>
  );
};

export default AuthLayout;
