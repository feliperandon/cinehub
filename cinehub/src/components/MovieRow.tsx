import { useEffect, useState } from "react";

import type { Movie } from "../types/movie";
import MovieCard from "./MovieCard";

type Props = {
  title: string;
  fetchFunction: () => Promise<Movie[]>;
};

const MovieRow = ({ title, fetchFunction }: Props) => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchFunction();
        setMovies(data);
      } catch (error) {
        console.log("Erro ao buscar filmes: " + error);
      }
    };
    fetchData();
  }, [fetchFunction]);
  return (
    <div className="mb-6 px-4 w-full ">
      <h2 className="text-2xl font-bold mb-2 pl-2">{title}</h2>
      <div className="flex overflow-x-auto gap-4 pb-2 snap-x snap-mandatory">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieRow;
