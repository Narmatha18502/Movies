//import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import Pagination from "./Pagination";
import Banner from "./Banner";
import { FireIcon } from '@heroicons/react/24/solid';
function Movies({
  handleAddtoWatchlist,
  handleRemoveFromWatchlist,
  Watchlist,
}) {
  const [movies, setMovies] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  const [bannerIndex, setBannerIndex] =useState(0);

  const apiKey = import.meta.env.VITE_TMDB_API_KEY;

  const handlePrev = () => {
    if (pageNo == 1) {
      setPageNo(pageNo);
    } else {
      setPageNo(pageNo - 1);
    }
  };
  const handleNext = () => {
    setPageNo(pageNo + 1);
  };
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=${pageNo}`
      )
      .then((res) => {
        setMovies(res.data.results);
      })
      .catch((err) => {
        console.error("Error fetching movies:", err);
      });
  }, [pageNo, apiKey]);

  useEffect (()=>{
      if(movies.length === 0) return;
      const interval = setInterval(()=>{
        setBannerIndex((prevIndex)=>(prevIndex+1)%movies.length);
      },5000);
      return()=> clearInterval(interval)
     
  },[movies]);


  return (
    <div className="p-5">
      {movies.length > 0 && <Banner movie={movies[bannerIndex]} />}
      <div className="flex justify-center items-center mb-6">
      <h2 className="text-3xl font-bold flex items-center gap-2 py-5 text-sky-950 text-shadow-2xs text-shadow-sky-300">Trending Now
      <FireIcon className="h-8 w-8 text-red-600 animate-pulse" />
      </h2>
      </div>
      <div className="flex flex-row justify-around flex-wrap m-10 gap-8">
        {movies.map((movieObj) => {
          return (
            <MovieCard
              key={movieObj.id}
              movieObj={movieObj}
              poster_path={movieObj.poster_path}
              name={movieObj.original_title}
              handleAddtoWatchlist={handleAddtoWatchlist}
              handleRemoveFromWatchlist={handleRemoveFromWatchlist}
              Watchlist={Watchlist}
            />
          );
        })}
      </div>
     
      <Pagination
        pageNo={pageNo}
        handleNext={handleNext}
        handlePrev={handlePrev}
      />
    </div>
  );
}

export default Movies;

//https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1
