"use client";
import { useState } from "react";

export function InputFetch() {
  const [value, setValue] = useState("");

  async function handleFetch(char: string) {
    try {
      const fetar = await fetch(
        `https://rickandmortyapi.com/api/character/?name=${char}`,
      );
      const js = await fetar.json();
      console.log(Array(js)[0].results[0]);
    } catch {
      alert("erro");
    }
  }

  return (
    <>
      <input
        type="text"
        name=""
        id=""
        placeholder="Digite o nome"
        className="border-slate-300 border-2"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      <button onClick={() => handleFetch(value)}> clica </button>
    </>
  );
}
