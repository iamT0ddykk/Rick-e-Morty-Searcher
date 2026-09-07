import Link from "next/link";

export function TerminalScreen() {
  return (
    <div className="relative w-full max-w-2xl bg-black border-2 border-cyan-500 font-mono text-cyan-400 shadow-[0_0_30px_rgba(0,255,255,0.3)] overflow-hidden [clip-path:polygon(0_0,100%_0,100%_calc(100%-20px),calc(100%-20px)_100%,0_100%)]">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%)] bg-size-[100%_4px] pointer-events-none opacity-40 z-20" />

      <div className="bg-cyan-950/40 px-4 py-2 flex items-center justify-between border-b border-cyan-800 relative z-30">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span className="text-xs text-cyan-400 font-bold tracking-widest">
            [ BASH_TERMINAL — 80x24 ]
          </span>
        </div>

        <Link
          href={"/"}
          className="text-xs text-cyan-400 hover:text-black hover:bg-cyan-400 px-2 py-0.5 font-bold transition-all border border-cyan-500/50 [clip-path:polygon(0_0,100%_0,calc(100%-4px)_100%,0_100%)]"
        >
          [ X ]
        </Link>
      </div>

      <div className="p-6 text-sm text-cyan-300 space-y-4 relative z-10">
        <div className="text-xs text-cyan-700 tracking-wider">
          # INICIANDO DIAGNÓSTICO DO SISTEMA...
        </div>

        <p className="tracking-wide">
          <p className="tracking-wide">
            <span className="text-cyan-400 font-bold">rick@pc</span>:
            <span className="text-purple-400 font-bold">~</span>$&nbsp;
            <span className="text-rose-500 font-bold tracking-wider drop-shadow-[0_0_8px_rgba(244,63,94,0.6)]">
              echo: [ERRO_404] ALVO NÃO ENCONTRADO!
            </span>
          </p>
        </p>
        <div className="my-4 p-5 bg-rose-950/30 border-2 border-rose-600/80 relative flex flex-col items-center gap-3 text-center [clip-path:polygon(0_0,100%_0,100%_calc(100%-12px),calc(100%-12px)_100%,0_100%)] shadow-[0_0_25px_rgba(225,29,72,0.3)] animate-pulse">
          <div className="w-full flex justify-between text-[10px] text-rose-500 border-b border-rose-900/80 pb-1 font-bold tracking-widest">
            <span>[CRITICAL_SYSTEM_ERROR]</span>
            <span>CODE: 0x8004005</span>
          </div>

          <div className="w-12 h-12 rounded-full bg-rose-500/10 border-2 border-rose-500 flex items-center justify-center text-rose-500 shadow-[0_0_15px_rgba(244,63,94,0.6)] my-1">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </div>

          <h2 className="text-xl font-black text-rose-500 tracking-widest uppercase drop-shadow-[0_0_10px_rgba(244,63,94,0.8)]">
            ALVO NÃO ENCONTRADO
          </h2>

          <p className="text-xs text-rose-300/80 max-w-md tracking-wide leading-relaxed">
            O NOME INFORMADO NÃO CORRESPONDE A NENHUM REGISTRO CONHECIDO NA BASE
            DE DADOS MULTIVERSAL.
          </p>

          <div className="w-full text-[9px] text-rose-600 border-t border-rose-900/80 pt-2 mt-1 tracking-widest uppercase">
            VERIFIQUE A GRAFIA E TENTE NOVAMENTE
          </div>
        </div>
        <p className="flex items-center gap-1 pt-2">
          <span className="text-cyan-400 font-bold">user@pc</span>:
          <span className="text-purple-400 font-bold">~</span>$&nbsp;
          <span className="w-2.5 h-4 bg-cyan-400 inline-block animate-pulse shadow-[0_0_8px_#00ffff]" />
        </p>
      </div>
    </div>
  );
}

export default TerminalScreen;
