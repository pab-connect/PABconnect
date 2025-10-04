import { useState, useEffect } from "react";
import { getAll, API_BASE_URL } from "../../services/apiService";
import { Menu, X, Search, CircleUserRoundIcon } from "lucide-react";
import Sidebar from "../Sidebar/Sidebar";
import { Link } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [usuarioLogado, setUsuarioLogado] = useState(null);
  const userLocal = JSON.parse(localStorage.getItem("user"));
  const emailLogado = userLocal?.email;

  useEffect(() => {
    async function fetchUsuario() {
      if (!emailLogado) return;

      try {
        const todasJogadoras = await getAll(API_BASE_URL, "jogadoras");

        const todosOlheiros = await getAll(API_BASE_URL, "olheiros"); // ou "agentes"
        const encontrado =
          todasJogadoras.find((j) => j.email === emailLogado) ||
          todosOlheiros.find((o) => o.email === emailLogado);
        setUsuarioLogado(encontrado || null);
      } catch (error) {
        console.error("Erro ao buscar usuário logado:", error);
      }
    }

    fetchUsuario();
  }, [emailLogado]);

  return (
    <header className="fixed top-0 left-0 right-0 w-full bg-[#307039] text-white p-4 flex items-center justify-between z-50">
      <h1 className="text-xl text-center leading-none">
        PAB<span className="block text-4xl font-bold -mt-1">CONNECT</span>
      </h1>

      {/* Perfil */}
      <div className="hidden lg:flex items-center">
        <Link to={`/perfil/${userLocal?.tipo}/${usuarioLogado?.id}`}>
          {usuarioLogado?.["foto-perfil"] ? (
            <img
              src={usuarioLogado?.["foto-perfil"]}
              alt={usuarioLogado?.nome}
              className="w-15 h-15 rounded-full shadow-md"
            />
          ) : (
            <CircleUserRoundIcon className="w-15 h-15 text-[#DAD0F0]" />
          )}
        </Link>
      </div>

      {/* Mobile: botao de menu */}
      <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? (
          <X className="w-7 h-7 text-[#DAD0F0]" />
        ) : (
          <Menu className="w-7 h-7 text-[#DAD0F0]" />
        )}
      </button>

      {/* Mobile: sidebar */}
      {isOpen && <Sidebar onClose={() => setIsOpen(false)} isDesktop={false} />}
    </header>
  );
}
