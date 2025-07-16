import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: import.meta.env.VITE_TMDB_API_KEY,
    language: "en-US",
  },
});

export const getPopularMovies = async () => {
  const {
    data: { results },
  } = await api.get("/movie/popular");
  console.log(results);
  return results;
};
