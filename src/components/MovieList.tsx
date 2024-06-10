import React from "react";
import { useGetDataByPageNoQuery } from "../redux/api/movieApi";
import { Content } from "../redux/api/types/DataResponse";
import Movie from "./Movie";

interface Props {
  pageNo: number;
}
const MovieList = ({ pageNo }: Props) => {
  const { data, error, isLoading } = useGetDataByPageNoQuery(pageNo);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error!!!</div>;

  return (
    <>
      {data &&
        data.content.map((i: Content, idx) => (
          <Movie key={idx} name={i.name} imageName={i["poster-image"]} />
        ))}
    </>
  );
};

export default React.memo(MovieList);
