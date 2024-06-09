import React from "react";
import { useGetDataByPageNoQuery } from "../redux/api/movieApi";
import { Content } from "../redux/api/types/DataResponse";

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
          <li key={idx} style={{ margin: "20px" }}>
            {i.name}
          </li>
        ))}
    </>
  );
};

export default React.memo(MovieList);
