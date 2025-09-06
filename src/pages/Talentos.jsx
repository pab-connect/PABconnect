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
    <div>
      <Header />
      <div>
        <Sidebar isDesktop={true} />
        <main>
          <h2>Talentos</h2>
          <Filtros />
          <section id="jogadoras">
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
        </main>
      </div>
      <Footer />
    </div>
  );
}
