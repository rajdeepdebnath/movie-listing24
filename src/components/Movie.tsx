interface Props {
  name: string;
  imageName: string;
}
const Movie = ({ name, imageName }: Props) => {
  return (
    <li className="flex flex-col gap-2">
      <img
        src={` https://test.create.diagnal.com/images/${imageName}`}
        alt={name}
        className="rounded-sm"
      />
      {name}
    </li>
  );
};

export default Movie;
