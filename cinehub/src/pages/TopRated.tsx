import { getTopRatedMovies } from "../services/tmdb";

import MovieCard from "../components/MovieCard";

import { useInfiniteScroll } from "../hooks/useInfiniteScroll";

const TopRated = () => {
  const { movies, loading, loadMoreRef } = useInfiniteScroll(getTopRatedMovies);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Top Rated</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>

      <div ref={loadMoreRef} className="h-10" />

      {loading && <p className="text-center mt-4">Loading...</p>}
    </div>
  );
};

export default TopRated;
