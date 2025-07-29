import { useEffect, useState } from "react";

import { getPopularMovies } from "../services/tmdb";

import MovieCard from "../components/MovieCard";

import type { Movie } from "../types/movie";

const Popular = () => {
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
    <div className="grid grid-rows-6 grid-cols-6">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default Popular;
