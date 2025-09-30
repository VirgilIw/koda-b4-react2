import { Link, useParams } from "react-router-dom";
import { Detail } from "../hooks/Detail";

const DetailCharacter = () => {
  const { id } = useParams();
  const { character } = Detail(id);

  if (!character) return <p>Loading...</p>;

  return (
    <div className="p-4">
      <Link to={"/"} className="bg-black text-white p-2 rounded-sm">
        Back
      </Link>
      <div className="flex flex-col items-center mt-4">
        <img
          src={character.image}
          alt={character.name}
          className="rounded-md w-48 h-48"
        />
        <h2 className="text-xl font-bold mt-2">{character.name}</h2>
        <p>
          Status:{" "}
          {character.status === "Alive" ? (
            <span className="text-2xl">alive 😎</span>
          ) : (
            <span className="text-2xl">Dead💀</span>
          )}
        </p>
        <p>Species: {character.species}</p>
        <p>Gender: {character.gender}</p>
        <p>Origin: {character.origin?.name}</p>
      </div>
    </div>
  );
};

export default DetailCharacter;
