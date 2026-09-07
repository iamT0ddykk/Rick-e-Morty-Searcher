"use client";
import { Character } from "@/app/types/types";
import { Howl } from "howler";
import { useState } from "react";

export function InputFetch() {
  const [value, setValue] = useState("");
  const [character, setCharacter] = useState<Character | null>(null);

  async function handleFetch(char: string) {
    if (!char.trim()) return;

    if (char.trim() === "wubalubadubdub") {
      const playSound = () => {
        const sound = new Howl({
          src: ["/wubalubdubdub.mp3"],
          volume: 0.5,
        });
        sound.play();
      };
      playSound();
      return;
    }
    try {
      const res = await fetch(
        `https://rickandmortyapi.com/api/character/?name=${char}`,
      );
      const js = await res.json();
      if (js.error) {
        alert(js.error);
      }
      if (js.results && js.results.length > 0) {
        setCharacter(js.results[0]);
      } else {
        setCharacter(null);
      }
    } catch {
      alert("Erro ao buscar o personagem");
    }
  }

  const url = `http://localhost:3000/character/${character?.name}`;

  return (
    <div className="relative max-w-md mx-auto p-6 bg-black border-2 border-cyan-500 font-mono text-cyan-400 shadow-[0_0_30px_rgba(0,255,255,0.3)] [clip-path:polygon(0_0,100%_0,100%_calc(100%-20px),calc(100%-20px)_100%,0_100%)]">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%)] bg-size-[100%_4px] pointer-events-none opacity-50 z-20" />

      <div className="flex justify-between items-center text-[10px] text-cyan-600 mb-4 tracking-widest border-b border-cyan-900 pb-1">
        <span>[SYS.LOC_V3.0]</span>
        <span className="animate-pulse">● LIVE_FEED</span>
      </div>

      <div className="flex flex-col gap-4 relative z-10">
        <div className="relative">
          <input
            type="text"
            placeholder="[ BUSCAR_ALVO ]"
            className="w-full bg-cyan-950/20 border-2 border-cyan-500/60 text-cyan-200 placeholder-cyan-800 px-4 py-3 focus:outline-none focus:border-cyan-300 focus:bg-cyan-950/40 uppercase tracking-widest transition-all text-sm [clip-path:polygon(0_0,calc(100%-10px)_0,100%_100%,0_100%)]"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>

        <button
          className=" relative bg-cyan-500 text-black font-black px-6 py-3 border-2 border-cyan-300 hover:bg-cyan-400 hover:shadow-[0_0_20px_#00ffff] hover:cursor-pointer active:translate-y-0.5 transition-all uppercase tracking-widest text-xs [clip-path:polygon(10px_0,100%_0,100%_100%,0_100%,0_10px)]"
          onClick={() => handleFetch(value)}
        >
          EXECUTAR_PESQUISA
        </button>
      </div>

      {character && (
        <div className="mt-6 p-4 bg-cyan-950/30 border-2 border-cyan-500/80 relative z-10 flex flex-col items-center gap-4 [clip-path:polygon(0_0,100%_0,100%_calc(100%-15px),calc(100%-15px)_100%,0_100%)]">
          <div className="w-full flex justify-between text-[9px] text-cyan-500/70 border-b border-cyan-800 pb-1 uppercase">
            <span>TARGET_FOUND</span>
            <span>ID: #{character.id || "000"}</span>
          </div>

          <div className="relative border-2 border-cyan-400 p-1 bg-black shadow-[0_0_15px_rgba(0,255,255,0.4)]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="relative grayscale hover:grayscale-0 transition-all duration-300 object-cover"
              src={character.image}
              alt={character.name}
              width={140}
            />
          </div>

          <div className="w-full text-center space-y-2">
            <h1 className="text-xl font-black text-cyan-300 tracking-wider uppercase drop-shadow-[0_0_8px_rgba(0,255,255,0.8)]">
              {character.name}
            </h1>

            <div className="grid grid-cols-2 gap-2 text-xs border-t border-b border-cyan-900/80 py-2 my-2">
              <div className="text-left">
                <span className="text-cyan-700 block text-[9px]">STATUS:</span>
                <span className="text-cyan-200 font-bold uppercase">
                  {character.status}
                </span>
              </div>
              <div className="text-right">
                <span className="text-cyan-700 block text-[9px]">ESPÉCIE:</span>
                <span className="text-cyan-200 font-bold uppercase">
                  {character.species}
                </span>
              </div>
            </div>

            <a
              href={url}
              className="inline-block mt-2 text-xs text-black bg-cyan-400 hover:bg-cyan-300 font-bold px-4 py-1.5 uppercase tracking-widest transition-all [clip-path:polygon(0_0,100%_0,calc(100%-8px)_100%,0_100%)]"
            >
              [ Acessar_Ficha ]
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
