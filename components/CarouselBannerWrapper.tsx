import { getDiscoverMovies } from "@/lib/getMovies";
import React from "react";
import CarsouelBanner from "./CarsouelBanner";

type Props = {
  id?: string;
  keywords?: string;
};
async function CarouselBannerWrapper({ id, keywords }: Props) {
  const movies = await getDiscoverMovies(id, keywords);
  return <CarsouelBanner movies={movies} />;
}

export default CarouselBannerWrapper;
