import { FaBars } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="text-white flex justify-between px-12 h-20 items-center">
      <a href="#">
        <h1 className="uppercase font-bold text-3xl">Cinehub</h1>
      </a>
      <div className="flex items-center gap-30">
        <div className="flex gap-14 font-semibold">
          <a href="#">Home</a>
          <a href="#">Popular</a>
          <a href="#">About</a>
        </div>
        <FaBars className="h-7 w-7 cursor-pointer" />
      </div>
    </div>
  );
};

export default Navbar;
