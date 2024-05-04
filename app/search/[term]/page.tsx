type Props = {
  params: {
    term: string;
  };
};
function SearchPage({ params: { term } }: Props) {
  const termToUse = decodeURI(term);
  return (
    <div>
      <h1>salam {termToUse}</h1>
    </div>
  );
}

export default SearchPage;
