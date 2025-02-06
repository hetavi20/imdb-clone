import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Movies from "./components/Movies";
import WatchList from "./components/WatchList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Banner from "./components/Banner";

function App() {
  let [watchlist, setWatchlist] = useState([]);

  let handleAddToWatchlist = (movie) => {
    setWatchlist([...watchlist, movie]);
    console.log(watchlist);
  };
  let handleRemoveFromWatchlist = (movie) => {
    let newWatchlist = watchlist.filter((m) => m.id !== movie.id);
    setWatchlist(newWatchlist);
    console.log(watchlist);
  };

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
            element={<WatchList watchlist={watchlist} />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
