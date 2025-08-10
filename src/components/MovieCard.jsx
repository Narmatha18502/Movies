import React from "react";
import WatchList from "./WatchList";

function MovieCard({
  movieObj,
  poster_path,
  name,
  handleAddtoWatchlist,
  handleRemoveFromWatchlist,
  Watchlist,
}) {
  function doesContain(movieObj) {
    for (let i = 0; i < Watchlist.length; i++) {
      if (Watchlist[i].id == movieObj.id) {
        return true;
      }
    }
    return false;
  }

  return (
    <div
      className="h-[40vh] w-[250px] bg-center bg-cover rounded-2xl hover:scale-110 duration-300 hover:cursor-pointer flex flex-col justify-between items-end relative"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})`,
      }}
    >
      {doesContain(movieObj) ? (
        <div
          onClick={() => handleRemoveFromWatchlist(movieObj)}
          className="m-4 flex-col justity-center h-8 w-8 items-center rounded-lg bg-gray-900/60 py-1 px-1"
        >
          &#10060;
        </div>
      ) : (
        <div
          onClick={() => handleAddtoWatchlist(movieObj)}
          className="m-4 flex-col justity-center h-8 w-8 items-center rounded-lg bg-gray-900/60 py-1 px-1"
        >
          &#128571;
        </div>
      )}

      <div className="text-white text-xl w-full p-2 bg-cover text-center bg-gray-900/60 rounded-2xl absolute input-x-0 bottom-0">
        {name}
      </div>
    </div>
  );
}

export default MovieCard;
