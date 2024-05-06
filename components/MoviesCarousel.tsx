import { cn } from "@/lib/utils";
import { Movie } from "@/typings";
import React from "react";
import MovieCard from "./MovieCard";
type Props = {
  title?: string;
  movies: Movie[];
  isVetical?: boolean;
};
function MoviesCarousel({ movies, title, isVetical }: Props) {
  return (
    <div className="z-50">
      <h2 className="text-xl font-bold px-10 py-2">{title}</h2>
      <div
        className={cn(
          "flex space-x-4 overflow-scroll scrollbar-hide px-5 lg:px-10 py-5",
          isVetical && "flex-col space-x-0 space-y-12"
        )}
      >
        {isVetical
          ? movies.map((movie) => (
              <div
                key={movie.id}
                className={cn(
                  isVetical &&
                    "flex flex-col space-y-5 mb-5 items-center lg:flex-row space-x-5"
                )}
              >
                <MovieCard movie={movie} />
                <div className="max-2-2xl">
                  <p className="font-bold mr-3 ">
                    {movie.title} {movie.release_date?.split("-")[0]}
                  </p>
                  <hr className="mb-3" />
                  <p className="mr-3">{movie.overview}</p>
                </div>
              </div>
            ))
          : movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </div>
  );
}

export default MoviesCarousel;
