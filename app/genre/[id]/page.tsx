type Props = {
  params: {
    id: string;
  };
  searchParams: {
    genre: string;
  };
};
const GenrePage = ({ params: { id }, searchParams: { genre } }: Props) => {
  return (
    <div>
      page ba id:{id}
      va zhanr{genre}
    </div>
  );
};

// http://localhost:3000/genre/80?genre=Action

export default GenrePage;
