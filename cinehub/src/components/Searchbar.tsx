import { FaSearch } from "react-icons/fa";

const Searchbar = () => {
  return (
    <div className="w-full flex justify-center px-4 my-4">
      <div className="flex items-center bg-zinc-900 rounded-2xl py-3 px-4 w-full max-w-4xl">
        <FaSearch className="text-zinc-400 mr-3" />
        <input
          type="text"
          placeholder="Search for movies"
          className="bg-transparent outline-none text-white placeholder:text-zinc-400 w-full"
        />
      </div>
    </div>
  );
};

export default Searchbar;
