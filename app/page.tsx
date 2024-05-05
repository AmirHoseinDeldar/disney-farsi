import Image from "next/image";
import { Button } from "@/components/ui/button";
import CarouselBannerWrapper from "@/components/CarouselBannerWrapper";
import {
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
} from "@/lib/getMovies";
import MoviesCarousel from "@/components/MoviesCarousel";

export default async function Home() {
  const UpcomingMovies = await getUpcomingMovies();
  const TopRatedMovies = await getTopRatedMovies();
  const PopularMovies = await getPopularMovies();
  return (
    <main className="">
      <CarouselBannerWrapper />
      <div className="flex flex-col space-y-2 xl:mt-48">
        <MoviesCarousel movies={UpcomingMovies} title="به زودی" />
        <MoviesCarousel movies={TopRatedMovies} title="بالاترین امتیاز" />
        <MoviesCarousel movies={PopularMovies} title="محبوب ترین" />
      </div>
    </main>
  );
}
