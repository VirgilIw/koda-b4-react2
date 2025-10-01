import SearchBtn from "./SearchBtn";
import { RickandMorty } from "../hooks/RickandMorty";
import { Link } from "react-router-dom";

const RickAndMorty = () => {
  const { rickmor, fetchRick } = RickandMorty();

  return (
    <div className="flex flex-col">
      <SearchBtn onSearch={fetchRick} />
      <div className="mx-auto gap-4 p-4 grid grid-cols-4 grid-rows-3">
        {rickmor.map((rick) => (
          <Link key={rick.id} to={`/character/${rick.id}`}>
            <div className="flex flex-col items-center">
              <img src={rick.image} alt={rick.name} className="rounded-md" />
              <p>{rick.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RickAndMorty;
