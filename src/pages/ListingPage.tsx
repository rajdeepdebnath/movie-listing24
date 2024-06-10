import { useCallback, useEffect, useMemo, useState } from "react";
import MovieList from "../components/MovieList";
import { useGetDataByPageNoQuery } from "../redux/api/movieApi";
import { useInView } from "react-intersection-observer";
import Header from "../components/Header";

const ListingPage = () => {
  const [pageNo, setPageNo] = useState(1);
  const { data, error, isLoading } = useGetDataByPageNoQuery(1);
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  const maxPageCount = useMemo(
    () => (data ? Math.ceil(data.totalItems / data.itemsReturned) : 0),
    [data]
  );

  useEffect(() => {
    if (inView && pageNo < maxPageCount) {
      setPageNo((p) => p + 1);
    }
  }, [inView]);

  const getAllMovieList = useCallback(() => {
    return Array.from(Array(pageNo).keys()).map((i) => (
      <MovieList pageNo={i + 1} key={i} />
    ));
  }, [pageNo]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error!!!</div>;

  return (
    <>
      {data && (
        <div className="m-3">
          <Header title={data.title} />
          <ul className="w-full grid grid-cols-3 grid-flow-row auto-rows-min gap-x-4 gap-y-8">
            {getAllMovieList()}
            <li ref={ref} className=""></li>
          </ul>
        </div>
      )}
    </>
  );
};

export default ListingPage;
