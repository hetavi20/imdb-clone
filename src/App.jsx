import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Movies from "./components/Movies";
import WatchList from "./components/WatchList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Banner from "./components/Banner";

function App() {
  let [watchlist, setWatchlist] = useState(() => {
    let movies = localStorage.getItem("moviesApp");
    return movies ? JSON.parse(movies) : [];
  });

  let handleAddToWatchlist = (movie) => {
    let newWatchlist = [...watchlist, movie];
    setWatchlist(newWatchlist);
    localStorage.setItem("moviesApp", JSON.stringify(newWatchlist));
  };

  let handleRemoveFromWatchlist = (movie) => {
    let filteredWatchlist = watchlist.filter((item) => item.id !== movie.id);
    setWatchlist(filteredWatchlist);
    localStorage.setItem("moviesApp", JSON.stringify(filteredWatchlist));
  };

  useEffect(() => {
    let movies = localStorage.getItem("moviesApp");
    if(!movies){
      return;
    }
    setWatchlist(JSON.parse(movies));
  }, []);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner />
                <Movies
                  handleAddToWatchlist={handleAddToWatchlist}
                  handleRemoveFromWatchlist={handleRemoveFromWatchlist}
                  watchlist={watchlist}
                />
              </>
            }
          ></Route>
          <Route
            path="/watchlist"
            element={
              <WatchList watchList={watchlist} setWatchlist={setWatchlist} />
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
