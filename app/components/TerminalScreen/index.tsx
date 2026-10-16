"use client";
import Link from "next/link";
import { useRef } from "react";

type TerminalProp = {
  name: string;
  statu: string;
  especie: string;
  image: string;
};

export function TerminalScreen({ name, especie, image, statu }: TerminalProp) {
  const inptref = useRef<HTMLInputElement>(null);
  return (
    <div className="relative w-full max-w-2xl bg-black border-2 border-cyan-500 font-mono text-cyan-400 shadow-[0_0_30px_rgba(0,255,255,0.3)] overflow-hidden [clip-path:polygon(0_0,100%_0,100%_calc(100%-20px),calc(100%-20px)_100%,0_100%)]">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%)] bg-size-[100%_4px] pointer-events-none opacity-40 z-20" />

      <div className="bg-cyan-950/40 px-4 py-2 flex items-center justify-between border-b border-cyan-800 relative z-30">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
        </div>

        <Link
          href={"/"}
          className="text-xs text-cyan-400 hover:text-black hover:bg-cyan-400 px-2 py-0.5 font-bold transition-all border border-cyan-500/50 [clip-path:polygon(0_0,100%_0,calc(100%-4px)_100%,0_100%)]"
        >
          [ X ]
        </Link>
      </div>

      <div className="p-6 text-sm text-cyan-300 space-y-4 relative z-10">
        <p className="tracking-wide">
          <span className="text-cyan-400 font-bold">rick@pc</span>:
          <span className="text-purple-400 font-bold">~</span>$&nbsp;
          <span className="text-cyan-200">echo: Alvo Encontrado!</span>
        </p>

        <div className="my-4 p-5 bg-cyan-950/20 border border-cyan-500/40 relative flex flex-col md:flex-row justify-center items-center gap-6 [clip-path:polygon(0_0,100%_0,100%_calc(100%-12px),calc(100%-12px)_100%,0_100%)]">
          <div className="relative border-2 border-cyan-400 p-1 bg-black shadow-[0_0_15px_rgba(0,255,255,0.4)]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="relative grayscale hover:grayscale-0 transition-all duration-300 object-cover"
              src={image}
              alt={name}
              width={150}
            />
          </div>

          <div className="flex flex-col gap-2 text-left w-full md:w-auto">
            <div className="border-b border-cyan-900 pb-1">
              <span className="text-[10px] text-cyan-600 block tracking-widest uppercase">
                NOME
              </span>
              <p className="text-lg font-black text-cyan-200 tracking-wider uppercase drop-shadow-[0_0_8px_rgba(0,255,255,0.6)]">
                {name}
              </p>
            </div>

            <div className="border-b border-cyan-900 pb-1">
              <span className="text-[10px] text-cyan-600 block tracking-widest uppercase">
                ESPÉCIE
              </span>
              <p className="text-sm font-bold text-cyan-300 uppercase tracking-wide">
                {especie}
              </p>
            </div>

            <div>
              <span className="text-[10px] text-cyan-600 block tracking-widest uppercase">
                STATUS
              </span>
              <p className="text-sm font-bold uppercase tracking-wide flex items-center gap-2">
                {statu == "Alive" && (
                  <span className="text-green-400">{statu}</span>
                )}
                {statu == "Dead" && (
                  <span className="text-red-400">{statu}</span>
                )}
                {statu == "unknown" && (
                  <span className="text-yellow-400">{statu}</span>
                )}
              </p>
            </div>
          </div>
        </div>

        <p className="flex items-center gap-1 pt-2">
          <span className="text-cyan-400 font-bold">rick@pc</span>:
          <span className="text-purple-400 font-bold">~</span>$&nbsp;
          <input
            className="outline-0"
            type="text"
            ref={inptref}
            autoFocus={true}
          />
        </p>
      </div>
    </div>
  );
}

export default TerminalScreen;
