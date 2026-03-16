export default function Contato() {
  return (
    <section id="contato" className="border-t border-white/10 bg-zinc-900/70">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-20 md:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-pink-300">
            Contato
          </p>

          <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
            Vamos criar algo único?
          </h2>

          <p className="mt-6 max-w-md text-base leading-7 text-zinc-300">
            Entre em contato para tirar dúvidas, solicitar orçamento ou fazer
            uma encomenda personalizada.
          </p>

          <div className="mt-8 space-y-4 text-sm text-zinc-300">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="font-medium text-white">Instagram</p>
              <p>@seuatelie3d</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="font-medium text-white">WhatsApp</p>
              <p>(11) 99999-9999</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="font-medium text-white">E-mail</p>
              <p>contato@seuatelie3d.com.br</p>
            </div>
          </div>
        </div>

        <form className="rounded-[32px] border border-white/10 bg-white/5 p-6 md:p-8">
          <div className="grid gap-5 md:grid-cols-2">
            <label className="block">
              <span className="mb-2 block text-sm text-zinc-300">Nome</span>
              <input
                type="text"
                placeholder="Seu nome"
                className="w-full rounded-2xl border border-white/10 bg-zinc-950 px-4 py-3 text-sm text-white outline-none transition focus:border-pink-300"
              />
            </label>

            <label className="block">
              <span className="mb-2 block text-sm text-zinc-300">
                Telefone
              </span>
              <input
                type="text"
                placeholder="(11) 99999-9999"
                className="w-full rounded-2xl border border-white/10 bg-zinc-950 px-4 py-3 text-sm text-white outline-none transition focus:border-pink-300"
              />
            </label>
          </div>

          <label className="mt-5 block">
            <span className="mb-2 block text-sm text-zinc-300">E-mail</span>
            <input
              type="email"
              placeholder="voce@email.com"
              className="w-full rounded-2xl border border-white/10 bg-zinc-950 px-4 py-3 text-sm text-white outline-none transition focus:border-pink-300"
            />
          </label>

          <label className="mt-5 block">
            <span className="mb-2 block text-sm text-zinc-300">Mensagem</span>
            <textarea
              rows={6}
              placeholder="Fale sobre a peça que você quer, cores, tamanho, referências e prazo..."
              className="w-full rounded-2xl border border-white/10 bg-zinc-950 px-4 py-3 text-sm text-white outline-none transition focus:border-pink-300"
            />
          </label>

          <button
            type="button"
            className="mt-6 rounded-2xl bg-pink-500 px-5 py-3 font-medium text-white transition hover:scale-[1.01]"
          >
            Enviar mensagem
          </button>
        </form>
      </div>

      <footer className="border-t border-white/10 px-6 py-6 text-center text-sm text-zinc-400">
        © 2026 Arte em Camadas — Impressão 3D com acabamento artesanal.
      </footer>
    </section>
  );
}