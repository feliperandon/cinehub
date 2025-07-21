import axios from "axios";
import type { Movie } from "../types/movie";

type TMDBResponse = {
  results: Movie[];
};

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: import.meta.env.VITE_TMDB_API_KEY,
    language: "en-US",
  },
});

export const getPopularMovies = async () => {
  const { data } = await api.get<TMDBResponse>("/movie/popular");
  return data.results;
};
