export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className='absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(236,72,153,0.18),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(168,85,247,0.14),transparent_28%)]' />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-2 md:items-center md:py-28">
        <div>
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-pink-300">
            Impressão 3D + acabamento artesanal
          </p>

          <h2 className="max-w-xl text-4xl font-semibold leading-tight md:text-6xl">
            Peças criadas em 3D e finalizadas à mão com personalidade.
          </h2>

          <p className="mt-6 max-w-xl text-base leading-7 text-zinc-300 md:text-lg">
            Miniaturas, itens decorativos, colecionáveis e projetos sob
            encomenda feitos com impressão 3D, pintura cuidadosa e acabamento
            fino em cada detalhe.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#loja"
              className="rounded-2xl bg-white px-5 py-3 font-medium text-zinc-950 transition hover:scale-[1.02]"
            >
              Explorar loja
            </a>

            <a
              href="#contato"
              className="rounded-2xl border border-white/15 px-5 py-3 font-medium text-white transition hover:border-pink-300 hover:text-pink-200"
            >
              Fazer encomenda
            </a>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-[28px] border border-white/10 bg-white/5 p-5 shadow-2xl shadow-black/20 backdrop-blur">
            <div className="mb-4 h-56 rounded-2xl bg-gradient-to-br from-pink-400/30 via-fuchsia-500/10 to-zinc-800" />
            <h3 className="text-lg font-semibold">Colecionáveis</h3>
            <p className="mt-2 text-sm leading-6 text-zinc-300">
              Peças exclusivas para fãs de cultura geek, anime, games e
              decoração criativa.
            </p>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-white/5 p-5 shadow-2xl shadow-black/20 backdrop-blur sm:translate-y-10">
            <div className="mb-4 h-56 rounded-2xl bg-gradient-to-br from-violet-400/30 via-indigo-500/10 to-zinc-800" />
            <h3 className="text-lg font-semibold">Personalizados</h3>
            <p className="mt-2 text-sm leading-6 text-zinc-300">
              Projetos feitos sob encomenda com acabamento manual e atenção aos
              detalhes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}