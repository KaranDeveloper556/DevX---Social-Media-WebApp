import { useEffect } from "react";
import { TbLogout } from "react-icons/tb";
import { Button } from "../ui/button";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { useSignOutAccount } from "@/lib/react-query/quiresAndMutation";
import { useUserContext } from "@/context/AuthContext";
import { sidebarLinks } from "@/constants";
import { INavLink } from "@/types";

const LeftSideBar = () => {
  const { mutate: signOut, isSuccess } = useSignOutAccount();
  const nagivate = useNavigate();
  const { user } = useUserContext();
  const { pathname } = useLocation();

  useEffect(() => {
    if (isSuccess) {
      nagivate(0);
    }
  }, [isSuccess]);

  console.log(user);

  return (
    <section className="leftsidebar hidden md:flex px-6 py-10 flex-col justify-between min-w-[240px] h-full bg-gray-900">
      <div className="relative h-full flex flex-col justify-between gap-11">
        <div className="flex flex-col gap-4 items-start">
          <Link to="/">
            <img
              src="/assets/kdevelops-logo.png"
              alt="logo"
              className="w-[11rem]"
            />
          </Link>
          <Link to={`/profile/${user.id}`} className=" flex gap-2">
            <img
              src="/assets/profileImg.png"
              alt="profile"
              className="h-[3rem] w-[3rem] object-cover rounded-full"
            />
            <div>
              <b className="Profile-name text-xl capitalize">
                {user.name || "the user"}
              </b>
              <p className="Profile-username text-sm text-gray-400">
                @{user.name || "Username123"}
              </p>
            </div>
          </Link>
        </div>
        <ul className="flex flex-col gap-2">
          {sidebarLinks.map((link: INavLink) => {
            const isActive = pathname === link.route;
            return (
              <li
                key={link.label}
                className={`rounded-lg base-medium hover:bg-blue-700 transition group ${
                  isActive && "bg-blue-700"
                }`}
              >
                <NavLink
                  to={link.route}
                  className="flex gap-2 items-center p-4"
                >
                  <img
                    src={link.imgURL}
                    alt={link.label}
                    className={`group-hover:invert-white`}
                  />
                  {link.label}
                </NavLink>
              </li>
            );
          })}
        </ul>
        <Button
          variant="ghost"
          className="shad-button_ghost cursor-pointer"
          onClick={() => signOut()}
        >
          <TbLogout className="text-red-500 scale-[1.5]" />Logout
        </Button>
      </div>
    </section>
  );
};

export default LeftSideBar;
