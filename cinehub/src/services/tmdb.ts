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

export const getPopularMovies = async (page = 1) => {
  const { data } = await api.get<TMDBResponse>("/movie/popular", {
    params: {
      page,
    },
  });
  return data.results;
};

export const getTopRatedMovies = async (page = 1) => {
  const { data } = await api.get<TMDBResponse>("/movie/top_rated", {
    params: {
      page,
    },
  });
  console.log(data);
  return data.results;
};

export const getUpcomingMovies = async (page = 1) => {
  const { data } = await api.get<TMDBResponse>("/movie/upcoming", {
    params: {
      page,
    },
  });
  return data.results;
};
