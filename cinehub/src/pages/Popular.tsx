import { useState } from "react";
import { useInfiniteScroll } from "../hooks/useInfiniteScroll";

import { getPopularMovies } from "../services/tmdb";

import MovieCardSkeleton from "../components/MovieCardSkeleton";
import MovieCard from "../components/MovieCard";
import { MovieModal } from "../components/MovieModal";

import type { Movie } from "../types/movie";

const Popular = () => {
  const { movies, loading, loadMoreRef } = useInfiniteScroll(getPopularMovies);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Popular Movies</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {loading &&
          Array.from({ length: 10 }).map((_, i) => (
            <MovieCardSkeleton key={i} />
          ))}
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            onClick={(m) => setSelectedMovie(m)}
          />
        ))}
      </div>

      {selectedMovie && (
        <MovieModal
          movie={selectedMovie}
          onClose={() => setSelectedMovie(null)}
        />
      )}

      <div ref={loadMoreRef} className="h-10" />
    </div>
  );
};

export default Popular;
