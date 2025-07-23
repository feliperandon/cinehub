import Hero from "./components/Hero";
import MovieRow from "./components/MovieRow";
import Navbar from "./components/Navbar";
import { getPopularMovies } from "./services/tmdb";

const App = () => {
  return (
    <div className="bg-zinc-950 text-white min-h-screen overflow-hidden ">
      <Navbar />
      <Hero />
      <div className="flex flex-col items-center ">
        <MovieRow title="Popular" fetchFunction={getPopularMovies} />
        <MovieRow title="Top Rated" fetchFunction={getPopularMovies} />{" "}
        {/* teste */}
      </div>
    </div>
  );
};

export default App;
