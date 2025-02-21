import { Outlet, Navigate } from "react-router-dom";

const AuthLayout = () => {
  let isAuthenticated = false;

  return isAuthenticated ? (
    <Navigate to={"/"} />
  ) : (
    <section className="auth_routing relative h-full w-full flex justify-between items-center">
      <div className="Outlet_wapper relative w-full flex justify-center items-center flex-col">
        <Outlet />
      </div>
      <img
        src="https://i.pinimg.com/736x/9b/cc/4a/9bcc4ad887e1ea79f7a2e1cf7c55221e.jpg"
        alt="social_media_img"
        className="relative md:block hidden w-1/2 h-[95%] bg-no-repeat opacity-90 object-cover m-4 rounded-[2vh] "
      />
    </section>
  );
};

export default AuthLayout;
