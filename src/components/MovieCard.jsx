import React from "react";

function MovieCard({
  movie,
  handleAddToWatchlist,
  handleRemoveFromWatchlist,
  watchlist,
}) {
  function isContains(movie) {
    for (let i = 0; i < watchlist.length; i++) {
      if (watchlist[i].id === movie.id) {
        return true;
      }
    }
    return false;
  }

  return (
    <div
      className="h-[30vh] w-[200px] bg-center bg-cover rounded-xl hover:scale-110 duration-300 hover:cursor-pointer flex flex-col justify-between items-end relative"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w500/${movie.poster_path})`,
      }}
    >
      {isContains(movie) ? (
        <div
          onClick={() => handleRemoveFromWatchlist(movie)}
          className="m-4 flex justify-center h-8 w-8 itens-center rounded-xl bg-gray-900"
        >
          &#10060;
        </div>
      ) : (
        <div
          onClick={() => handleAddToWatchlist(movie)}
          className="m-4 flex justify-center h-8 w-8 itens-center rounded-xl bg-gray-900"
        >
          &#128525;
        </div>
      )}

      <div className="rounded-xl absolute bottom-0 left-0 w-full text-white text-xl p-2 text-center bg-gray-900/60">
        {movie.title}
      </div>
    </div>
  );
}

export default MovieCard;
