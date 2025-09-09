import Hero from "../components/Hero";
import MovieRow from "../components/MovieRow";
import Searchbar from "../components/Searchbar";
import {
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
} from "../services/tmdb";

const Home = () => {
  return (
    <div>
      <Searchbar />
      <Hero />
      <div className="flex flex-col items-center ">
        <MovieRow title="Popular" fetchFunction={getPopularMovies} />
        <MovieRow title="Top Rated" fetchFunction={getTopRatedMovies} />
        <MovieRow title="Upcoming" fetchFunction={getUpcomingMovies} />
        {/* teste */}
      </div>
    </div>
  );
};

export default Home;
