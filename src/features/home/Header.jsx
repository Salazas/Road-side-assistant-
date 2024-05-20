import GeoLocation from "../../components/GeoLocation";
import { SlLocationPin } from "react-icons/sl";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="h-18 min-h-18 flex justify-between gap-2 text-gray-900">
      <NavLink
        to="/current-location"
        className="flex items-center gap-2 rounded-md p-1 font-bold"
      >
        <SlLocationPin className="text-3xl" />
        <GeoLocation />
      </NavLink>
    </div>
  );
};

export default Header;
