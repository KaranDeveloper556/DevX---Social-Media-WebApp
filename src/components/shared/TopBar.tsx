import { useEffect } from "react";
import { TbLogout } from "react-icons/tb";
import { Button } from "../ui/button";
import { Link, useNavigate } from "react-router-dom";
import { useSignOutAccount } from "@/lib/react-query/quiresAndMutation";

const TopBar = () => {
  const { mutate: signOut, isSuccess } = useSignOutAccount();
  const nagivate = useNavigate();

  useEffect(() => {
    if (isSuccess) {
      nagivate(0);
    }
  }, [isSuccess]);

  return (
    <section className="topbar bg-gray-900 flex justify-between items-center gap-2 md:px-6 px-4 py-4">
      <div className="logo-container">
        <Link to={"/"}>
          <img
            src="/assets/kdevelops-logo.png"
            alt="logo"
            className="w-[11rem]"
          />
        </Link>
      </div>
      <div className="flex gap-3 items-center justify-center">
        <Button
          variant="ghost"
          className="shad-button_ghost cursor-pointer"
          onClick={() => signOut()}
        >
          <TbLogout className=" scale-[1.5]" />
        </Button>
        <Link to={"/profile"} className="flex-center gap-3">
          <img src="/assets/profileImg.png" alt="" className="h-[3rem] w-[3rem] object-cover rounded-full"/>
        </Link>
      </div>
    </section>
  );
};

export default TopBar;
