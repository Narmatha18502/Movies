import React from "react";

function Banner({ movie }) {
  const baseURL = "https://image.tmdb.org/t/p/original";
  const imageUrl =
    movie && movie.backdrop_path
      ? `${baseURL}${movie.backdrop_path}`
      : "https://via.placeholder.com/1280x720?text=No+Image";
  const title = movie?.title || movie?.original_title || "Trending Moviees";

  return (
    <div
      className=" h-[90vh]  bg-cover bg-center bg-contain flex items-end box-border"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    >
      <div className="text-white text-3xl text-center w-full bg-gray-900/60 p-4 font-serif">
        {title}
      </div>
    </div>
  );
}

export default Banner;
