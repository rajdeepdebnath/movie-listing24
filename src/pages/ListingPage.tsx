import { useCallback, useEffect, useState } from "react";
import MovieList from "../components/MovieList";
import { useGetDataByPageNoQuery } from "../redux/api/movieApi";
import { useInView } from "react-intersection-observer";
import { Content, Page } from "../redux/api/types/DataResponse";

const PAGE_SIZE = 20;

const ListingPage = () => {
  const [pageNo, setPageNo] = useState(1);
  const { data, error, isLoading } = useGetDataByPageNoQuery(1);
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView && pageNo < 3) {
      setPageNo((p) => p + 1);
    }
  }, [inView]);

  const getAllMovieList = useCallback(() => {
    return Array.from(Array(pageNo).keys()).map((i) => (
      <MovieList pageNo={i + 1} />
    ));
  }, [pageNo]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error!!!</div>;

  return (
    <>
      {data && (
        <>
          <h3>{data.title}</h3>
          <ul>
            {getAllMovieList()}
            <li ref={ref}>none</li>
          </ul>
        </>
      )}
    </>
  );
};

export default ListingPage;
