import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    language: "en-US",
  },
});

export const getMovieById = async (id: string) => {
  const response = await api.get(`/movie/${id}`);
  return response.data;
};
