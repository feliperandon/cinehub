const MovieCardSkeleton = () => {
  return (
    <div className="p-3 rounded-lg shadow-md text-white min-w-[200px] mb-1.5 snap-start animate-pulse">
      <div className="w-full aspect-[2/3] bg-gray-500 rounded mb-2"></div>
      <div className="h-3.5 bg-gray-200 rounded-full w-3/4 mb-3.5 dark:bg-gray-700"></div>
      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[250px] mb-2.5"></div>
      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[200px] mb-2.5"></div>
    </div>
  );
};

export default MovieCardSkeleton;
