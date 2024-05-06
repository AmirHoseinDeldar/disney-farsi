import AISuggestion from "@/components/AISuggestion";
import MoviesCarousel from "@/components/MoviesCarousel";
import { getPopularMovies, getSearchedMovies } from "@/lib/getMovies";

type Props = {
  params: {
    term: string;
  };
};
async function SearchPage({ params: { term } }: Props) {
  const termToUse = decodeURI(term);

  const movies = await getSearchedMovies(termToUse);
  const popularMovies = await getPopularMovies();

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col space-y-5 mt-32 xl:mt-44">
        <h1 className="text-6xl font-bold px-10">نتیجه برای {termToUse}</h1>
        <AISuggestion/>
        <MoviesCarousel title="فیلم ها" movies={movies} isVetical />
        <MoviesCarousel
          title="شما ممکنه دوست داشته باشید ..."
          movies={popularMovies}
          isVetical
        />
      </div>
    </div>
  );
}

export default SearchPage;
