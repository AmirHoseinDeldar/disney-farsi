import getImagePath from "@/lib/getImagePath";
import { Movie } from "@/typings";
import Image from "next/image";
import React from "react";

function MovieCard({ movie }: { movie: Movie }) {
  return (
    <div className="flex-shrink-0 relative cursor-pointer transform hover:scale-105 transition duration-200 ease-out hover:drop-shadow">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-200/0 via-gray-900/10 to-gray-300 dark:to-[#1a1c29]/80 z-10" />
      <p className="absolute z-20 bottom-5 right-5">{movie.title}</p>
      <Image
        width={1920}
        height={1080}
        key={movie.id}
        alt={movie.title}
        className="w-fit lg:min-w-[480px] h-56 object-cover object-center shadow-md shadow-gray-900 drop-shadow-xl"
        src={getImagePath(movie.backdrop_path || movie.poster_path)}
      />
    </div>
  );
}

export default MovieCard;
