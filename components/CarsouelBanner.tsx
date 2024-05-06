"use client";
import getImagePath from "@/lib/getImagePath";
import { Movie } from "@/typings";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import React from "react";
import Autoplay from "embla-carousel-autoplay";

// bad az 2 saat test kardan !! :|||||||||||||||||||||||||||||||||||||

Autoplay.globalOptions = { delay: 3000 };
function CarsouelBanner({ movies }: { movies: Movie[] }) {
  const [emblaRef] = useEmblaCarousel(
    {
      direction: "rtl",
      loop: true,
      duration: 100,
    },
    [Autoplay()]
  );
  return (
    <div
      ref={emblaRef}
      className="overflow-hidden lg:mt-40 relative cursor-pointer"
    >
      <div className="flex">
        {movies.map((movie) => (
          <div key={movie.id} className="flex-full min-w-0 relative">
            <Image
              key={movie.id}
              src={getImagePath(movie.backdrop_path, true)}
              width={1920}
              height={1080}
              alt=""
            />
            <div className="hidden lg:inline absolute mt-0 top-0 pt-40 xl:pt-52 right-0 lg:mt-40 bg-transparent z-20 h-full w-full bg-gradient-to-r from-gray-900/90 via-transparent p-10 space-y-5 text-white">
              <h2 className="text-5xl font-bold line-clamp-3">{movie.title}</h2>
              <p className="max-w-xl line-clamp-3">{movie.overview}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-gray-200/0 via-gray-900/25 to-gray-300 dark:to-[#1a1c29]" />
    </div>
  );
}

export default CarsouelBanner;
