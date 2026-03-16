export default function Loja() {
  const produtos = [
    {
      nome: "Miniatura Personalizada",
      preco: "R$ 79,90",
      descricao:
        "Peças feitas em impressão 3D com acabamento manual e pintura detalhada.",
    },
    {
      nome: "Decoração Geek",
      preco: "R$ 119,90",
      descricao:
        "Itens decorativos exclusivos para quarto, escritório ou setup.",
    },
    {
      nome: "Colecionável Premium",
      preco: "R$ 149,90",
      descricao:
        "Modelos com atenção aos mínimos detalhes, ideais para presente ou coleção.",
    },
    {
      nome: "Peça Sob Encomenda",
      preco: "Sob consulta",
      descricao:
        "Projeto personalizado com pintura, acabamento fino e detalhes únicos.",
    },
  ];

  return (
    <section id="loja" className="mx-auto max-w-7xl px-6 py-20">
      <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-pink-300">
            Loja
          </p>
          <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
            Produtos em destaque
          </h2>
        </div>

        <p className="max-w-xl text-sm leading-6 text-zinc-400">
          Você pode usar esta seção para mostrar peças prontas, lançamentos e
          também divulgar encomendas personalizadas.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {produtos.map((produto, index) => (
          <div
            key={produto.nome}
            className="group rounded-[28px] border border-white/10 bg-white/5 p-5 transition hover:-translate-y-1 hover:border-pink-300/40 hover:bg-white/10"
          >
            <div
              className={`mb-5 h-56 rounded-2xl ${
                index % 2 === 0
                  ? "bg-gradient-to-br from-pink-400/25 via-zinc-700 to-zinc-900"
                  : "bg-gradient-to-br from-violet-400/25 via-zinc-700 to-zinc-900"
              }`}
            />

            <div className="flex items-start justify-between gap-4">
              <h3 className="text-lg font-semibold">{produto.nome}</h3>
              <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-zinc-300">
                {produto.preco}
              </span>
            </div>

            <p className="mt-3 text-sm leading-6 text-zinc-300">
              {produto.descricao}
            </p>

            <button className="mt-5 w-full rounded-2xl bg-white px-4 py-3 text-sm font-medium text-zinc-950 transition group-hover:scale-[1.01]">
              Quero esta peça
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}