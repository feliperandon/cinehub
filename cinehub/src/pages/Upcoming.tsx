import { useEffect, useRef, useState } from "react";

import { getUpcomingMovies } from "../services/tmdb";

import MovieCard from "../components/MovieCard";

import type { Movie } from "../types/movie";

const Upcoming = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const loadMoreRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const newMovies = await getUpcomingMovies(page);
        setMovies((prev) => [...prev, ...newMovies]);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [page]);

  useEffect(() => {
    if (loading) return;

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setPage((prev) => prev + 1);
        observer.unobserve(entries[0].target);
      }
    });

    if (loadMoreRef.current) {
      observer.observe(loadMoreRef.current);
    }

    return () => {
      if (loadMoreRef.current) {
        observer.unobserve(loadMoreRef.current);
      }
    };
  }, [loading]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Popular Movies</h1>
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

export default Upcoming;
