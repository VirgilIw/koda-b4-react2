import SearchBtn from "./SearchBtn";
import { RickandMorty } from "../hooks/RickandMorty";

const RickAndMorty = () => {
  const { rickmor, fetchRick } = RickandMorty();

  return (
    <div className="flex flex-col">
      <SearchBtn onSearch={fetchRick} />
      <div className="mx-auto gap-4 p-4 grid grid-cols-4 grid-rows-3">
        {rickmor.map((rick) => (
          <div key={rick.id} className="flex flex-col items-center">
            <img src={rick.image} alt={rick.name} className="rounded-md" />
            <p>{rick.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RickAndMorty;
