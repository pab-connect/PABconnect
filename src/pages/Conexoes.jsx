import CardUser from "../components/Conexoes/CardUser";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import { Search } from "lucide-react";
import { useState, useEffect } from "react";
import { getAll, API_BASE_URL } from "../services/apiService.js";
import CardUserAdd from "../components/Conexoes/CardUserAdd.jsx";

const Conexoes = () => {
  const [jogadoras, setJogadoras] = useState([]);
  const [jogadorasSeguindo, setJogadorasSeguindo] = useState([]);

  const userLogadoEmail = JSON.parse(localStorage.getItem("user"))?.email;
  const usuarioLogado = jogadoras.find(u => u.email === userLogadoEmail);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const users = await getAll(API_BASE_URL, "jogadoras");
        setJogadoras(users);
      } catch (error) {
        console.error("Erro ao buscar jogadoras:", error);
      }
    }
    fetchUsers();
  }, []);

  useEffect(() => {
    if (usuarioLogado?.seguindo) {
      setJogadorasSeguindo(
        jogadoras.filter(j => usuarioLogado.seguindo.includes(j.username))
      );
    }
  }, [jogadoras, usuarioLogado]);

  return (
    <div className="bg-[#DAD0F0] min-h-screen" style={{ fontFamily: "var(--font-poppins)" }}>
      <Header />
      <div className="lg:ml-64 p-6 pt-[88px]">
        <Sidebar isDesktop={true} />
        <h1 className="text-4xl pt-5 md:pt-6 font-bold text-black mb-6 text-center sm:text-left md:text-left">
          Conexões
        </h1>

        {/* Container flex para as sections */}
        <div className="flex flex-col md:flex-row gap-5">
          {/* Minhas Conexões */}
          <section className="md:w-1/2 text-center sm:text-left">
            <button className="text-[#5a1ddc] font-semibold mb-4 py-2 px-3 sm:py-3 sm:px-4 text-lg sm:text-xl cursor-pointer rounded-lg bg-[#c8b3f6]">
              Minhas Conexões
            </button>
            <div className="flex border-2 border-[#705C9B] items-center max-w-full sm:max-w-md sm:py-2 sm:text-lg bg-white rounded-lg px-3 py-1 text-[#705C9B] cursor-pointer transition-all duration-300 ease-in-out">
              <Search className="w-5 h-5" />
              <input
                type="text"
                name="busca"
                id="busca"
                placeholder="Buscar por nome ou posição..."
                className="flex-1 bg-white outline-0 px-2 py-1"
              />
            </div>
            <div className="flex flex-col gap-3 mt-8">
              {jogadorasSeguindo.length > 0 ? (
                jogadorasSeguindo.map(j => <CardUser key={j.id} usuario={j} />)
              ) : (
                <p>Carregando jogadoras...</p>
              )}
            </div>
          </section>

          {/* Sugestões */}
          <section className="md:w-5/12 md:h-full p-6 rounded-lg shadow-sm font-bold bg-white border-[#705C9B] border-1">
            <h1 className="text-lg sm:text-2xl md:text-xl text-left mb-2">Sugestões para você</h1>
            <div>
              {usuarioLogado && jogadoras.length > 0 ? (
                jogadoras
                  .filter(
                    j =>
                      j.id !== usuarioLogado.id &&
                      !(usuarioLogado.seguindo || []).includes(j.username)
                  )
                  .slice(0, 4)
                  .map(j => <CardUserAdd key={j.id} usuario={j} />)
              ) : (
                <p>Carregando jogadoras...</p>
              )}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Conexoes;
