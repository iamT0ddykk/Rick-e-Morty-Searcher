import { InputFetch } from "./components/InputFetch";

export default function Home() {
  return (
    <>
      <div className="bg-black border-cyan-300 border-2 w-fit flex flex-col justify-center self-center p-10">
        <h1 className=" drop-shadow-[0_0_8px_rgba(0,255,255,0.8)] text-white font-mono font-extrabold text-4xl mb-10">
          Pesquisador <span className="text-cyan-400">C</span>-
          <span className="text-green-400">137</span>
        </h1>
        <InputFetch></InputFetch>
      </div>
    </>
  );
}
