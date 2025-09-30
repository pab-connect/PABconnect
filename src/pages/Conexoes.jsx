import CardUser from "../components/Conexoes/CardUser";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import { Search } from "lucide-react";
import { useState, useEffect } from "react";
import { getAll, API_BASE_URL } from "../services/apiService.js";
import CardUserAdd from "../components/Conexoes/CardUserAdd.jsx";
import Footer from "@/components/Footer/Footer";
import LoadingOverlay from "@/components/LoadingOverlay/LoadingOverlay";

const Conexoes = () => {
  const [jogadoras, setJogadoras] = useState([]);
  const [agentes, setAgentes] = useState([]);
  const [jogadorasSeguindo, setJogadorasSeguindo] = useState([]);
  const [agentesSeguindo, setAgentesSeguindo] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [carregando, setCarregando] = useState(true);

  const userLocal = JSON.parse(localStorage.getItem("user"));
  const userLogadoEmail = userLocal?.email;
  const userLogadoTipo = userLocal?.tipo;

  // seleciona o usuario logado baseado no tipo
  const usuarioLogado =
    userLogadoTipo === "jogadora"
      ? jogadoras.find((u) => u.email === userLogadoEmail)
      : agentes.find((u) => u.email === userLogadoEmail);

  // busca todas jogadoras e agentes
  useEffect(() => {
    async function fetchUsers() {
      try {
        const jogs = await getAll(API_BASE_URL, "jogadoras");
        setJogadoras(jogs);
      } catch (error) {
        console.error("Erro ao buscar jogadoras:", error);
      } finally {
        setCarregando(false);
      }

      try {
        const olhs = await getAll(API_BASE_URL, "olheiros");
        setAgentes(olhs);
      } catch (error) {
        console.error("Erro ao buscar olheiros:", error);
      }
    }

    fetchUsers();
  }, []);

  // atualiza a lista de seguindo quando os dados mudam
  useEffect(() => {
    if (usuarioLogado?.seguindo) {
      setJogadorasSeguindo(
        jogadoras.filter((j) => usuarioLogado.seguindo.includes(j.username))
      );
      setAgentesSeguindo(
        agentes.filter((a) => usuarioLogado.seguindo.includes(a.username))
      );
    } else {
      setJogadorasSeguindo([]);
      setAgentesSeguindo([]);
    }
  }, [jogadoras, agentes, usuarioLogado]);

  // Filtragem para busca
  const jogadorasFiltradas = jogadorasSeguindo.filter(
    (j) =>
      j.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
      j.posicao?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const agentesFiltrados = agentesSeguindo.filter(
    (a) =>
      a.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
      a.posicao?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Sugestões de usuários para seguir
  const todasSugestoes = jogadoras;
  const sugestoes = todasSugestoes
    .filter(
      (u) =>
        u.id !== usuarioLogado?.id &&
        !(usuarioLogado?.seguindo || []).includes(u.username)
    )
    .slice(0, 4);

  return (
    <div
      className="flex flex-col bg-[#DAD0F0] min-h-screen"
      style={{ fontFamily: "var(--font-poppins)" }}
    >
      <Header />
      <div className="flex-1 lg:ml-64 p-6 pt-[88px]">
        <Sidebar isDesktop={true} />
        {carregando && <LoadingOverlay />}
        <h1 className="text-4xl pt-5 md:pt-6 font-bold text-black mb-6 text-center sm:text-left md:text-left">
          Conexões
        </h1>

        <div className="flex flex-col md:flex-row gap-5">
          {/* Minhas Conexões */}
          <section className="md:w-1/2 text-center sm:text-left">
            <button className="text-[#5a1ddc] font-semibold mb-4 py-2 px-3 sm:py-3 sm:px-4 text-lg sm:text-xl cursor-pointer rounded-lg bg-[#c8b3f6]">
              Minhas Conexões
            </button>

            <div className="flex border-2 border-[#705C9B] items-center max-w-full sm:max-w-md sm:py-2 sm:text-lg bg-white rounded-lg px-3 py-1 text-[#705C9B] transition-all duration-300 ease-in-out">
              <Search className="w-5 h-5" />
              <input
                type="text"
                name="busca"
                id="busca"
                placeholder="Buscar por nome ou posição..."
                className="flex-1 bg-white outline-0 px-2 py-1"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="flex flex-col gap-3 mt-8">
              {jogadorasFiltradas.length + agentesFiltrados.length > 0 ? (
                <>
                  {jogadorasFiltradas.map((j) => (
                    <CardUser key={j.id} usuario={j} />
                  ))}
                  {agentesFiltrados.map((a) => (
                    <CardUser key={a.id} usuario={a} tipo="olheiros" />
                  ))}
                </>
              ) : (
                <p>Nenhuma jogadora encontrada...</p>
              )}
            </div>
          </section>

          {/* Sugestões */}
          <section className="md:w-5/12 md:h-full p-6 rounded-lg shadow-sm font-bold bg-white border-[#705C9B] border-1">
            <h1 className="text-lg sm:text-2xl md:text-xl text-left mb-2">
              Sugestões para você
            </h1>
            <div>
              {sugestoes.length > 0 ? (
                sugestoes.map((u) => <CardUserAdd key={u.id} usuario={u} />)
              ) : (
                <p>Carregando sugestões...</p>
              )}
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Conexoes;
