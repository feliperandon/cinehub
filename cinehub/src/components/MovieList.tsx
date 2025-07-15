import type { Movie } from "../types/movie";
import MovieCard from "./MovieCard";

const MovieList = () => {
  const movie: Movie = {
    id: 123,
    title: "Superman",
    poster_path: "/src/assets/superman.jpg",
    release_date: "2024-10-22",
    vote_average: 8,
  };

  const movies = [
    {
      id: 123,
      title: "Superman",
      poster_path: "/src/assets/superman.jpg",
      release_date: "2024-10-22",
      vote_average: 8,
    },
    {
      id: 12,
      title: "Dune",
      poster_path: "/src/assets/Dune.jpeg",
      release_date: "2025-10-22",
      vote_average: 2,
    },
    {
      id: 12333,
      title: "Ghost Rider",
      poster_path: "/src/assets/ghostrider.jpg",
      release_date: "2007-10-22",
      vote_average: 6,
    },
    {
      id: 15,
      title: "Bastardos Inglórios",
      poster_path: "/src/assets/bastardos.jpg",
      release_date: "2014-09-27",
      vote_average: 10,
    },
  ];

  return (
    <div>
      {movies.map((m) => (
        <MovieCard movie={m} />
      ))}
    </div>
  );
};

export default MovieList;
