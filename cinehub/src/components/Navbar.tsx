import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="text-white flex justify-between px-12 h-20 items-center">
      <Link to="/">
        <h1 className="uppercase font-bold text-3xl ">Cinehub</h1>
      </Link>
      <div className="flex items-center gap-30">
        <div className="gap-14 font-semibold text-xl hidden sm:flex">
          <Link to="/popular">Popular</Link>
          <Link to="/top-rated">Top Rated</Link>
          <Link to="/upcoming">Upcoming</Link>
        </div>
        <FaBars className="h-7 w-7 cursor-pointer sm:hidden" />
      </div>
    </div>
  );
};

export default Navbar;
