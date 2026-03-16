export default function Sobre() {
  const cards = [
    {
      titulo: "100% artesanal no acabamento",
      texto: "Pintura, retoques e finalização feitos manualmente.",
    },
    {
      titulo: "Projetos sob encomenda",
      texto: "Possibilidade de criar peças exclusivas sob pedido.",
    },
    {
      titulo: "Detalhes premium",
      texto: "Foco em estética, textura, cores e apresentação final.",
    },
    {
      titulo: "Peças criativas",
      texto: "Decoração, miniaturas, lembranças e itens colecionáveis.",
    },
  ];

  return (
    <section id="sobre" className="border-y border-white/10 bg-zinc-900/60">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-[1.1fr_0.9fr] md:items-center">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-pink-300">
            Sobre
          </p>

          <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
            Do digital para o artesanal.
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-300">
            Cada peça nasce na impressora 3D e ganha vida no acabamento manual:
            lixamento, pintura, detalhes finos e revisão final. A proposta é
            unir tecnologia e arte para entregar produtos com aparência premium,
            identidade própria e muito cuidado em cada etapa.
          </p>

          <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-300">
            Seja para decorar, presentear ou colecionar, o objetivo é criar
            peças que realmente chamem atenção pela qualidade e pelo carinho
            colocado no processo.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {cards.map((card) => (
            <div
              key={card.titulo}
              className="rounded-3xl border border-white/10 bg-white/5 p-5"
            >
              <h3 className="text-base font-semibold">{card.titulo}</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-300">
                {card.texto}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}