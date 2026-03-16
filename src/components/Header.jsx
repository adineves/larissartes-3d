export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-zinc-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-pink-300">
            LarissArtes 3D
          </p>
          <h1 className="text-xl font-semibold">Arte em Camadas</h1>
        </div>

        <nav className="hidden gap-8 text-sm md:flex">
          <a href="#home" className="transition hover:text-pink-300">
            Home
          </a>
          <a href="#sobre" className="transition hover:text-pink-300">
            Sobre
          </a>
          <a href="#loja" className="transition hover:text-pink-300">
            Loja
          </a>
          <a href="#contato" className="transition hover:text-pink-300">
            Contato
          </a>
        </nav>

        <a
          href="#loja"
          className="rounded-2xl border border-pink-400/40 bg-pink-500/10 px-4 py-2 text-sm font-medium text-pink-200 transition hover:bg-pink-500/20"
        >
          Ver produtos
        </a>
      </div>
    </header>
  );
}