import React from "react";

function MovieCard({ movie }) {
  return (
    <div
      className="h-[40vh] w-[200px] bg-center bg-cover rounded-xl hover:scale-110 duration-300 hover:cursor-pointer relative"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w500/${movie.poster_path})`,
      }}
    >
      <div className="rounded-xl absolute bottom-0 left-0 w-full text-white text-xl p-2 text-center bg-gray-900/60">
        {movie.title}
      </div>
    </div>
  );
}

export default MovieCard;
