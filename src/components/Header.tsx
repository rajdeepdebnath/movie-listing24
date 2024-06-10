import arrow from "../assets/arrow.svg";
import search from "../assets/search.svg";

interface Props {
  title: string;
}

const Header = ({ title }: Props) => {
  return (
    <div className="h-16 flex justify-between items-center">
      <div className="flex w-auto justify-between items-center gap-2">
        <img src={arrow} alt="" className="w-[30px] aspect-square" />
        <h1 className="text-2xl">{title}</h1>
      </div>
      <img src={search} alt="" className="w-[30px] aspect-square" />
    </div>
  );
};

export default Header;
