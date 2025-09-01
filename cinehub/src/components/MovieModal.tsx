import type { Movie } from "../types/movie";

type MovieModalProps = {
  movie: Movie;
  onClose: () => void;
};

export function MovieModal({ movie, onClose }: MovieModalProps) {
  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      <div className="bg-zinc-900 text-white p-6 rounded-lg max-w-lg w-full relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-400 hover:text-white cursor-pointer"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold mb-2">{movie.title}</h2>
        <p className="text-sm text-zinc-400 mb-2">{movie.release_date}</p>
      </div>
    </div>
  );
}
