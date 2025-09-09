import type { Movie } from "../types/movie";

type Props = {
  movie: Movie;
  onClick?: (movie: Movie) => void;
};

const MovieCard = ({
  movie,
  movie: { title, poster_path, release_date, vote_average },
  onClick,
}: Props) => {
  return (
    <div
      className="p-3 rounded-lg shadow-md text-white min-w-[200px] mb-1.5 snap-start hover:opacity-60 cursor-pointer"
      onClick={() => onClick?.(movie)}
    >
      <img
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt={title}
        className="rounded mb-2"
      />
      <h2 className="text-xl font-bold mb-2 border-l-4 border-red-500 pl-2">
        {title}
      </h2>
      <p className="text-sm text-zinc-400">Release Date: {release_date}</p>
      <p className="text-sm">Average Vote: {vote_average.toFixed(1)}</p>
    </div>
  );
};

export default MovieCard;
