import AIAZureSuggestion from "@/components/AIAZureSuggestion";
import MoviesCarousel from "@/components/MoviesCarousel";
import { getDiscoverMovies } from "@/lib/getMovies";

type Props = {
  params: {
    id: string;
  };
  searchParams: {
    genre: string;
  };
};
async function GenrePage({ params: { id }, searchParams: { genre } }: Props) {
  const movies = await getDiscoverMovies(id);

  return (
    <div>
      <div className="flex flex-col space-y-5 mt-32 xl:mt-44">
        <h1 className="text-6xl font-bold px-10">نتیجه برای {genre}</h1>
        <AIAZureSuggestion term={genre} />
        <MoviesCarousel title="ژانر" movies={movies} isVetical />
      </div>
    </div>
  );
}

// http://localhost:3000/genre/80?genre=Action

export default GenrePage;
