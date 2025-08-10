import React, { useEffect, useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import WatchListPage from "./components/WatchList";
import Movies from "./components/Movies";

import { HashRouter, Route, Routes } from "react-router-dom";
import Banner from "./components/Banner";

function App() {
  let [Watchlist, setWatchList] = useState([]);

  let handleAddtoWatchlist = (movieObj) => {
    let newWatchlist = [...Watchlist, movieObj];
    localStorage.setItem("moviesApp", JSON.stringify(newWatchlist));
    setWatchList(newWatchlist);
  };

  let handleRemoveFromWatchlist = (movieObj) => {
    let filteredWatchlist = Watchlist.filter((movie) => {
      return movie.id != movieObj.id;
    });
    setWatchList(filteredWatchlist);
    localStorage.setItem("moviesApp", JSON.stringify(filteredWatchlist));
  };

  useEffect(() => {
    let moviesFromLocalStorage = localStorage.getItem("moviesApp");
    if (!moviesFromLocalStorage) {
      return;
    }
    setWatchList(JSON.parse(moviesFromLocalStorage));
  }, []);
  return (
    <>
      <HashRouter>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                {/* <Banner />{" "} */}
                <Movies
                  Watchlist={Watchlist}
                  handleAddtoWatchlist={handleAddtoWatchlist}
                  handleRemoveFromWatchlist={handleRemoveFromWatchlist}
                />
              </>
            }
          />
          <Route
            path="/WatchList"
            element={
              <WatchListPage
                Watchlist={Watchlist}
                setWatchList={setWatchList}
                handleRemoveFromWatchlist={handleRemoveFromWatchlist}
              />
            }
          />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
