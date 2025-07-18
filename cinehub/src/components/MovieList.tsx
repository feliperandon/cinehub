import { useEffect, useState } from "react";

import type { Movie } from "../types/movie";

import { getPopularMovies } from "../services/tmdb";

import MovieCard from "./MovieCard";

const MovieList = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getPopularMovies();
        setMovies(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
      {movies && movies.map((m) => <MovieCard key={m.id} movie={m} />)}
    </div>
  );
};

export default MovieList;
