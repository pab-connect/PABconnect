import CardTalentos from "../components/CardTalentos/CardTalentos";
import Filtros from "../components/Filtros/Filtros";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";

export default function Talentos() {
  const jogadoras = [
    {
      imagem: "https://picsum.photos/100/100",
      nome: "Maria Silva",
      posicao: "Atacante",
      localizacao: "São Paulo, SP",
    },
    {
      imagem: "https://picsum.photos/100/100",
      nome: "Julia Ferreira",
      posicao: "Zagueira",
      localizacao: "Rio de Janeiro, RJ",
    },
    {
      imagem: "https://picsum.photos/100/100",
      nome: "Daniela Costa",
      posicao: "Goleira",
      localizacao: "São Paulo, SP",
    },
  ];
  return (
    <div className="flex flex-col min-h-screen bg-[#DAD0F0]">
      <Header />
      <div className="flex flex-1 pt-[88px]">
        <Sidebar isDesktop={true} />
        <main className="flex flex-1 flex-col items-center gap-4 lg:ml-64 p-4 text-[#705C9B]">
          <h2 className="text-2xl font-semibold mb-4">Talentos</h2>
          <div className="flex flex-col md:flex-row-reverse gap-8">
            {/* filtros - sidebar em desktop */}
            <aside className="md:w-64 md:flex-shrink-0">
              <Filtros />
            </aside>

            {/* cards - ocupa o resto do espaco */}
            <section
              id="jogadoras"
              className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4"
            >
              {jogadoras.map((j, index) => (
                <CardTalentos
                  key={index}
                  imagem={j.imagem}
                  nome={j.nome}
                  posicao={j.posicao}
                  localizacao={j.localizacao}
                />
              ))}
            </section>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
