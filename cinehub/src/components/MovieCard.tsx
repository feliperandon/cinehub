import type { Movie } from "../types/movie";

type Props = {
  movie: Movie;
};

const MovieCard = ({
  movie: { title, poster_path, release_date, vote_average },
}: Props) => {
  return (
    <div className="bg-zinc-800 p-3 rounded-lg shadow-md text-white w-[200px] mb-1.5">
      <img
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt={title}
        className="rounded mb-2"
      />
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="text-sm text-zinc-400">Release Date: {release_date}</p>
      <p className="text-sm">Average Vote: {vote_average}</p>
    </div>
  );
};

export default MovieCard;
