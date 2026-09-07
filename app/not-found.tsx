import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <div className="flex justify-center flex-col items-center text-white p-10">
        <h1 className="text-3xl font-mono">OOOps, Dimensão errada...</h1>
        <h1 className="text-2xl font-mono">
          Entre no <span className="text-green-400">portal</span> para voltar a
          pagina principal
        </h1>
      </div>
      <div className=" flex items-center justify-center mt-50">
        {}

        <Link href={"/"}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="transition-transform duration-00 hover:cursor-pointer hover:scale-110 "
            src="/portal.gif"
            alt=""
            style={{ width: "150px" }}
          />
        </Link>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/MortySmith.png" alt="" style={{ width: "100px" }} />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/rickz.png" alt="" style={{ width: "250px" }} />
      </div>
    </>
  );
}
