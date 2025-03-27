import { bottombarLinks } from "@/constants";
import { Link, useLocation } from "react-router-dom";

const BottomBar = () => {
  const { pathname } = useLocation();
  return (
    <section className="bottom-bar z-50 flex justify-center gap-2 w-full sticky bottom-0 rounded-t-[10px] px-4 py-2 md:hidden bg-gray-900">
      {bottombarLinks.map((link) => {
        const isActive = pathname === link.route;
        return (
          <li
            key={link.label}
            className={`rounded-lg base-medium hover:bg-blue-700 transition group list-none ${
              isActive && "bg-blue-700"
            }`}
          >
            <Link to={link.route} className="flex flex-col gap-1 items-center p-4">
              <img
                src={link.imgURL}
                alt={link.label}
                className={`group-hover:invert-white h-[20px]`}
              />
              <p className="text-[10px] font-semibold">{link.label}</p>
              
            </Link>
          </li>
        );
      })}
    </section>
  );
};

export default BottomBar;
