import React, { useEffect, useState } from "react";
import genreIds from "../utility/genre";

function WatchList({ watchList = [], setWatchlist }) {
  const [search, setSearch] = useState("");
  const [genreList, setGenreList] = useState(["All Genres"]);
  const [currentGenre, setCurrentGenre] = useState("All Genres");

  useEffect(() => {
    let temp = watchList.map((movie) => genreIds[movie.genre_ids[0]]);
    let uniqueGenres = ["All Genres", ...new Set(temp)];
    setGenreList(uniqueGenres);
  }, [watchList]);

  let handleSearch = (e) => {
    setSearch(e.target.value);
  };

  let sortIncreasing = () => {
    let sortedIncreasing = [...watchList].sort((a, b) => a.vote_average - b.vote_average);
    setWatchlist(sortedIncreasing);
    localStorage.setItem("watchList", JSON.stringify(sortedIncreasing));
  };

  let sortDecreasing = () => {
    let sortedDecreasing = [...watchList].sort((a, b) => b.vote_average - a.vote_average);
    setWatchlist(sortedDecreasing);
    localStorage.setItem("watchList", JSON.stringify(sortedDecreasing));
  };

  let handleFilter = (genre) => {
    setCurrentGenre(genre);
  };

  let handleDelete = (movieId) => {
    let updatedList = watchList.filter((movie) => movie.id !== movieId);
    setWatchlist(updatedList);
    localStorage.setItem("moviesApp", JSON.stringify(updatedList));
  };

  return (
    <>
      <div className="flex justify-center flex-wrap my-4">
        {genreList.map((genre, index) => (
          <div
            onClick={() => handleFilter(genre)}
            key={index}
            className={
              currentGenre === genre
                ? "mx-4 text-white font-bold items-center bg-blue-400 flex justify-center h-[3rem] w-[9rem] rounded-2xl"
                : "mx-4 text-white font-bold items-center bg-gray-400 flex justify-center h-[3rem] w-[9rem] rounded-2xl"
            }
          >
            {genre}
          </div>
        ))}
      </div>

      <div className="flex justify-center my-4">
        <input
          onChange={handleSearch}
          value={search}
          type="text"
          className="px-4 h-[3rem] w-[18rem] bg-gray-200 outline-none"
          placeholder="Search Movies"
        />
      </div>

      <div className="overflow-hidden border-2 border-gray-200 m-8">
        <table className="w-full text-gray-500 text-center">
          <thead className="border-b-2">
            <tr>
              <th>Movie Name</th>
              <th className="flex justify-center items-center">
                <div className="p-2 cursor-pointer" onClick={sortIncreasing}>
                  <i className="fa-solid fa-arrow-up"></i>
                </div>
                <div className="p-2">Rating</div>
                <div className="p-2 cursor-pointer" onClick={sortDecreasing}>
                  <i className="fa-solid fa-arrow-down"></i>
                </div>
              </th>
              <th>Popularity</th>
              <th>Genre</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {watchList.length > 0 ? (
              watchList
                .filter((movie) =>
                  currentGenre === "All Genres"
                    ? true
                    : genreIds[movie.genre_ids[0]] === currentGenre
                )
                .filter((movie) =>
                  movie.title.toLowerCase().includes(search.toLowerCase())
                )
                .map((movie, index) => (
                  <tr key={index} className="border-b-2">
                    <td className="flex items-center px-6 py-4">
                      <img
                        className="h-[8rem] w-[10rem]"
                        src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                        alt={movie.name}
                      />
                      <span className="ml-4">{movie.title}</span>
                    </td>
                    <td>{movie.vote_average}</td>
                    <td>{movie.popularity}</td>
                    <td>{genreIds[movie.genre_ids[0]]}</td>
                    <td
                      className="text-red-800 cursor-pointer"
                      onClick={() => handleDelete(movie.id)}
                    >
                      Delete
                    </td>
                  </tr>
                ))
            ) : (
              <tr>
                <td colSpan="5">No movies in the watchlist</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default WatchList;
