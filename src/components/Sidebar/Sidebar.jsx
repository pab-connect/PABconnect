import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  Search,
  CircleUserRoundIcon,
  Settings,
  House,
  UsersRound,
  MessagesSquare,
  Bell,
  X,
  Star,
  LogOut,
} from "lucide-react";

export default function Sidebar({ onClose, isDesktop = false }) {
  const [tipoUsuario, setTipoUsuario] = useState(null);

  useEffect(() => {
    const usuario = JSON.parse(localStorage.getItem("user"));
    if (usuario) {
      setTipoUsuario(usuario.tipo);
    }
  }, []);
  // Sidebar para desktop
  if (isDesktop) {
    return (
      <aside className="hidden lg:block fixed left-0 top-[88px] h-[calc(100vh-88px)] w-64 bg-[#314334] text-white p-4 z-30">
        {/* Links navegacao */}
        <nav>
          <ul className="flex flex-col gap-4">
            <li>
              <Link
                to={`/home/${
                  tipoUsuario === "jogadora" ? "jogadora" : "agente"
                }`}
                className="flex items-center gap-3 font-semibold underline text-lg hover:text-[#DAD0F0] transition-colors p-2 rounded hover:bg-[#3a4d3d]"
              >
                <House className="w-8 h-8" /> Página inicial
              </Link>
            </li>
            <li>
              <Link
                to={`/${tipoUsuario === "jogadora" ? "conexoes" : "talentos"}`}
                className="flex items-center gap-3 font-semibold text-lg hover:text-[#DAD0F0] transition-colors p-2 rounded hover:bg-[#3a4d3d]"
              >
                {tipoUsuario === "jogadora" ? (
                  <UsersRound className="w-8 h-8" />
                ) : (
                  <Star className="w-8 h-8" />
                )}
                {tipoUsuario === "jogadora" ? "Conexões" : "Talentos"}
              </Link>
            </li>
            <li>
              <Link
                to="/mensagens"
                className="flex items-center gap-3 font-semibold text-lg hover:text-[#DAD0F0] transition-colors p-2 rounded hover:bg-[#3a4d3d]"
              >
                <MessagesSquare className="w-8 h-8" /> Mensagens
              </Link>
            </li>
            <li>
              <Link
                to="/notificacoes"
                className="flex items-center gap-3 font-semibold text-lg hover:text-[#DAD0F0] transition-colors p-2 rounded hover:bg-[#3a4d3d]"
              >
                <Bell className="w-8 h-8" /> Notificações
              </Link>
            </li>
          </ul>
        </nav>

        {/* Configuracoes */}
        <div className="mt-7">
          <Link
            to="/configuracoes"
            className="flex items-center gap-3 font-semibold text-lg cursor-pointer hover:text-[#DAD0F0] transition-colors p-2 rounded hover:bg-[#3a4d3d] w-full text-left"
          >
            <Settings className="w-8 h-8" />
            <span>Configurações</span>
          </Link>
        </div>

        {/* Sair */}
        <div className="mt-7">
          <Link
            to="/"
            className="flex items-center gap-3 font-semibold text-lg cursor-pointer hover:text-[#DAD0F0] transition-colors p-2 rounded hover:bg-[#3a4d3d] w-full text-left"
          >
            <LogOut className="w-8 h-8" />
            <span>Sair</span>
          </Link>
        </div>
      </aside>
    );
  }
  // Sidebar para mobile
  return (
    <>
      {/* Overlay para fechar o menu ao clicar fora */}
      <div
        className="fixed inset-0 bg-black opacity-50 z-40 lg:hidden"
        onClick={onClose}
      />

      {/* Sidebar */}
      <aside className="fixed top-0 right-0 h-full w-80 bg-[#314334] text-white p-4 z-50 lg:hidden transform transition-transform duration-300 ease-in-out">
        {/* botao de fechar */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl text-center leading-none">
            PAB<span className="block text-2xl font-bold -mt-1">CONNECT</span>
          </h2>
          <button onClick={onClose}>
            <X className="w-7 h-7" />
          </button>
        </div>

        {/* Mobile: barra de pesquisa */}
        <div className="mb-4 flex items-center w-full bg-[#DAD0F0] rounded-lg px-3 py-2 text-[#705C9B] cursor-pointer hover:shadow-md hover:bg-[#cec4e4] focus:bg-[#cec4e4] transition-all duration-300 ease-in-out">
          <input
            type="text"
            name="busca"
            id="busca"
            className="flex-1 outline-none bg-transparent text-lg"
          />
          <Search className="w-7 h-7" />
        </div>

        {/* Links navegacao */}
        <nav>
          <ul className="flex flex-col gap-4">
            <li>
              <Link
                to={`/home/${
                  tipoUsuario === "jogadora" ? "jogadora" : "agente"
                }`}
                className="flex items-center gap-3 font-semibold underline text-lg hover:text-[#DAD0F0] transition-colors"
              >
                <House className="w-8 h-8" /> Página inicial
              </Link>
            </li>
            <li>
              <Link
                to={`/${tipoUsuario === "jogadora" ? "conexoes" : "talentos"}`}
                className="flex items-center gap-3 font-semibold text-lg hover:text-[#DAD0F0] transition-colors"
              >
                {tipoUsuario === "jogadora" ? (
                  <UsersRound className="w-8 h-8" />
                ) : (
                  <Star className="w-8 h-8" />
                )}
                {tipoUsuario === "jogadora" ? "Conexões" : "Talentos"}
              </Link>
            </li>
            <li>
              <Link
                to="/mensagens"
                className="flex items-center gap-3 font-semibold text-lg hover:text-[#DAD0F0] transition-colors"
              >
                <MessagesSquare className="w-8 h-8" /> Mensagens
              </Link>
            </li>
            <li>
              <Link
                to="/notificacoes"
                className="flex items-center gap-3 font-semibold text-lg hover:text-[#DAD0F0] transition-colors"
              >
                <Bell className="w-8 h-8" /> Notificações
              </Link>
            </li>
            <li>
              <Link
                to="/perfil"
                className="flex items-center gap-3 font-semibold text-lg hover:text-[#DAD0F0] transition-colors"
              >
                <CircleUserRoundIcon className="w-8 h-8" /> Perfil
              </Link>
            </li>
          </ul>
        </nav>

        {/* Configuracoes */}
        <div className="mt-7">
          <Link
            to="/configuracoes"
            className="flex items-center gap-3 font-semibold text-lg cursor-pointer hover:text-[#DAD0F0] transition-colors"
          >
            <Settings className="w-8 h-8" />
            <span>Configurações</span>
          </Link>
        </div>

        {/* Sair */}
        <div className="mt-7">
          <Link
            to="/"
            className="flex items-center gap-3 font-semibold text-lg cursor-pointer hover:text-[#DAD0F0] transition-colors"
          >
            <LogOut className="w-8 h-8" />
            <span>Sair</span>
          </Link>
        </div>
      </aside>
    </>
  );
}
