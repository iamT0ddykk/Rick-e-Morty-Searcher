import TerminalError from "@/app/components/TerminalError";
import TerminalScreen from "@/app/components/TerminalScreen";

type characterProp = {
  params: Promise<{
    name: string;
  }>;
};

type CharacterData = {
  id: number;
  name: string;
  status: string;
  species: string;
  image: string;
};

export default async function Character({ params }: characterProp) {
  const { name } = await params;
  const decodificado = decodeURIComponent(name);

  const res = await fetch(
    `https://rickandmortyapi.com/api/character/?name=${decodificado}`,
  );
  const data = await res.json();

  if (data.error || !data.results || data.results.length === 0) {
    return (
      <div className="flex justify-center">
        <TerminalError></TerminalError>
      </div>
    );
  }

  const character: CharacterData = data.results[0];

  return (
    <div className="flex justify-center">
      <TerminalScreen
        especie={character.species}
        image={character.image}
        name={character.name}
        statu={character.status}
      />
    </div>
  );
}
