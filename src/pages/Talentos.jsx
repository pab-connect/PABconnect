import imagemPadraoPerfil from "../assets/imagem-padrao-perfil.jpg";
import { useState, useEffect, useMemo } from "react";
import { getAll, API_BASE_URL } from "../services/apiService";
import CardTalentos from "../components/CardTalentos/CardTalentos";
import Filtros from "../components/Filtros/Filtros";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import { useLocation } from "react-router-dom";

export default function Talentos() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const filtroInicial = params.get("filtro") || "recentes";
  const [jogadoras, setJogadoras] = useState([]);
  const [olheiro, setOlheiro] = useState(null);
  const [filtro, setFiltro] = useState(filtroInicial);

  const user = JSON.parse(localStorage.getItem("user"));
  const emailOlheiro = user?.tipo === "olheiro" ? user.email : null;

  // buscar dados do olheiro logado
  useEffect(() => {
    async function fetchOlheiro() {
      if (!emailOlheiro) return;

      const todosOlheiros = await getAll(API_BASE_URL, "olheiros");
      const encontrado = todosOlheiros.find((o) => o.email === emailOlheiro);
      setOlheiro(encontrado || null);
    }

    fetchOlheiro();
  }, [emailOlheiro]);

  // buscar dados de todas as jogadoras
  useEffect(() => {
    async function fetchJogadoras() {
      const data = await getAll(API_BASE_URL, "jogadoras");
      setJogadoras(data);
    }

    fetchJogadoras();
  }, []);

  const jogadorasFiltradas = useMemo(() => {
    if (!jogadoras) return [];

    let lista = [...jogadoras];

    if (filtro === "alfabetica") {
      return lista.sort((a, b) => a.nome.localeCompare(b.nome));
    }

    if (filtro === "recentes") {
      return lista.sort((a, b) => b.id - a.id);
    }

    if (filtro === "proximas" && olheiro) {
      const mesmasCidade = lista.filter(
        (j) =>
          j.cidade?.toLowerCase() === olheiro.cidade?.toLowerCase() &&
          j.estado?.toLowerCase() === olheiro.estado?.toLowerCase()
      );
      if (mesmasCidade.length > 0) return mesmasCidade;

      const mesmosEstado = lista.filter(
        (j) => j.estado?.toLowerCase() === olheiro.estado?.toLowerCase()
      );
      if (mesmosEstado.length > 0) return mesmosEstado;

      return [];
    }

    return lista;
  }, [jogadoras, filtro, olheiro]);

  return (
    <div style={{ fontFamily: "var(--font-poppins)" }} className="flex flex-col min-h-screen bg-[#DAD0F0]">
      <Header />
      <div className="flex flex-1 pt-[88px]">
        <Sidebar isDesktop={true} />
        <main className="flex flex-1 flex-col items-center gap-4 lg:ml-64 p-4 text-[#705C9B]">
          <h2 className="text-4xl font-semibold mb-4">Talentos</h2>
          <div className="flex flex-col md:flex-row-reverse gap-8">
            {/* filtros - sidebar em desktop */}
            <aside className="md:w-64 md:flex-shrink-0">
              <Filtros filtro={filtro} setFiltro={setFiltro} />
            </aside>

            {/* cards */}
            <section
              id="jogadoras"
              className="flex-1 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4"
            >
              {jogadorasFiltradas.map((j) => (
                <CardTalentos
                  key={j.id}
                  idJogadora={j.id}
                  imagem={j["foto-perfil"] || imagemPadraoPerfil}
                  nome={j.nome}
                  posicao={j.posicao}
                  localizacao={`${j.cidade}, ${j.estado}`}
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
