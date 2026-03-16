import Header from "../components/Header";
import Hero from "../components/Hero";
import Sobre from "../components/Sobre";
import Loja from "../components/Loja";
import Contato from "../components/Contato";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <Header />
      <main>
        <Hero />
        <Sobre />
        <Loja />
        <Contato />
      </main>
    </div>
  );
}