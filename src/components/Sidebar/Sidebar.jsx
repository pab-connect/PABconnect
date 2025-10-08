import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAll, API_BASE_URL } from "../../services/apiService";
import {
  Search,
  CircleUserRoundIcon,
  Settings,
  House,
  UsersRound,
  Bell,
  X,
  Star,
  LogOut,
  CalendarDays,
} from "lucide-react";

export default function Sidebar({ onClose, isDesktop = false }) {
  const [tipoUsuario, setTipoUsuario] = useState(null);
  const [usuarioLogado, setUsuarioLogado] = useState(null);
  const userLocal = JSON.parse(localStorage.getItem("user"));
  const emailLogado = userLocal?.email;
  const location = useLocation();

  const isActive = (path) => location.pathname.startsWith(path);

  useEffect(() => {
    async function fetchUsuario() {
      if (!emailLogado) return;

      try {
        const todosUsuarios = await getAll(API_BASE_URL, "jogadoras");
        const encontrado = todosUsuarios.find((u) => u.email === emailLogado);
        setUsuarioLogado(encontrado || null);
      } catch (error) {
        console.error("Erro ao buscar usuário logado:", error);
      }
    }

    fetchUsuario();
  }, [emailLogado]);

  useEffect(() => {
    const usuario = JSON.parse(localStorage.getItem("user"));
    if (usuario) {
      setTipoUsuario(usuario.tipo);
    }
  }, []);

  if (isDesktop) {
    return (
      <aside className="hidden lg:block fixed left-0 top-[88px] h-[calc(100vh-88px)] w-64 bg-[#314334] text-white p-4 z-30">
        <nav>
          <ul className="flex flex-col gap-4">
            <li>
              <Link
                to={`/home/${
                  tipoUsuario === "jogadora"
                    ? "jogadora"
                    : tipoUsuario === "organizacao"
                    ? "organizacao"
                    : "agente"
                }`}
                className={`flex items-center gap-3 font-semibold ${
                  isActive(
                    `/home/${
                      tipoUsuario === "jogadora"
                        ? "jogadora"
                        : tipoUsuario === "organizacao"
                        ? "organizacao"
                        : "agente"
                    }`
                  )
                    ? "underline"
                    : ""
                } text-lg hover:text-[#DAD0F0] transition-colors p-2 rounded hover:bg-[#3a4d3d]`}
              >
                <House className="w-8 h-8" /> Página inicial
              </Link>
            </li>
            <li>
              {tipoUsuario === "organizacao" ? (
                <div className="flex flex-col gap-2">
                  <Link
                    to="/talentos"
                    className={`flex items-center gap-3 font-semibold ${
                      isActive("/talentos") ? "underline" : ""
                    } text-lg hover:text-[#DAD0F0] transition-colors p-2 rounded hover:bg-[#3a4d3d]`}
                  >
                    <Star className="w-8 h-8" /> Talentos
                  </Link>
                  <Link
                    to="/conexoes"
                    className={`flex items-center gap-3 font-semibold ${
                      isActive("/conexoes") ? "underline" : ""
                    } text-lg hover:text-[#DAD0F0] transition-colors p-2 rounded hover:bg-[#3a4d3d]`}
                  >
                    <UsersRound className="w-8 h-8" /> Conexões
                  </Link>
                </div>
              ) : (
                <Link
                  to={`/${tipoUsuario === "jogadora" ? "conexoes" : "talentos"}`}
                  className={`flex items-center gap-3 font-semibold ${
                    isActive(
                      `/${tipoUsuario === "jogadora" ? "conexoes" : "talentos"}`
                    )
                      ? "underline"
                      : ""
                  } text-lg hover:text-[#DAD0F0] transition-colors p-2 rounded hover:bg-[#3a4d3d]`}
                >
                  {tipoUsuario === "jogadora" ? (
                    <UsersRound className="w-8 h-8" />
                  ) : (
                    <Star className="w-8 h-8" />
                  )}
                  {tipoUsuario === "jogadora" ? "Conexões" : "Talentos"}
                </Link>
              )}
            </li>
            <li>
              <Link
                to="/eventos"
                className={`flex items-center gap-3 font-semibold ${
                  isActive("/eventos") ? "underline" : ""
                } text-lg hover:text-[#DAD0F0] transition-colors p-2 rounded hover:bg-[#3a4d3d]`}
              >
                <CalendarDays className="w-8 h-8" /> Eventos
              </Link>
            </li>
            <li>
              <Link
                to="/notificacoes"
                className={`flex items-center gap-3 font-semibold ${
                  isActive("/notificacoes") ? "underline" : ""
                } text-lg hover:text-[#DAD0F0] transition-colors p-2 rounded hover:bg-[#3a4d3d]`}
              >
                <Bell className="w-8 h-8" /> Notificações
              </Link>
            </li>
  
          </ul>
        </nav>

        <div className="mt-7">
          <Link
            to="/configuracoes"
            className={`flex items-center gap-3 font-semibold ${
              isActive("/configuracoes") ? "underline" : ""
            } text-lg cursor-pointer hover:text-[#DAD0F0] transition-colors p-2 rounded hover:bg-[#3a4d3d] w-full text-left`}
          >
            <Settings className="w-8 h-8" />
            <span>Configurações</span>
          </Link>
        </div>

        <div className="mt-7" onClick={() => localStorage.clear()}>
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

  return (
    <>
      <div
        className="fixed inset-0 bg-black opacity-50 z-40 lg:hidden"
        onClick={onClose}
      />
      <aside className="fixed top-0 right-0 h-full w-80 bg-[#314334] text-white p-4 z-50 lg:hidden transform transition-transform duration-300 ease-in-out">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl text-center leading-none">
            PAB<span className="block text-2xl font-bold -mt-1">CONNECT</span>
          </h2>
          <button onClick={onClose}>
            <X className="w-7 h-7" />
          </button>
        </div>
        <nav>
          <ul className="flex flex-col gap-4">
            <li>
              <Link
                to={`/home/${
                  tipoUsuario === "jogadora"
                    ? "jogadora"
                    : tipoUsuario === "organizacao"
                    ? "organizacao"
                    : "agente"
                }`}
                className={`flex items-center gap-3 font-semibold ${
                  isActive(
                    `/home/${
                      tipoUsuario === "jogadora"
                        ? "jogadora"
                        : tipoUsuario === "organizacao"
                        ? "organizacao"
                        : "agente"
                    }`
                  )
                    ? "underline"
                    : ""
                } text-lg hover:text-[#DAD0F0] transition-colors`}
              >
                <House className="w-8 h-8" /> Página inicial
              </Link>
            </li>
            <li>
              {tipoUsuario === "organizacao" ? (
                <div className="flex flex-col gap-2">
                  <Link
                    to="/talentos"
                    className={`flex items-center gap-3 font-semibold ${
                      isActive("/talentos") ? "underline" : ""
                    } text-lg hover:text-[#DAD0F0] transition-colors`}
                  >
                    <Star className="w-8 h-8" /> Talentos
                  </Link>
                  <Link
                    to="/conexoes"
                    className={`flex items-center gap-3 font-semibold ${
                      isActive("/conexoes") ? "underline" : ""
                    } text-lg hover:text-[#DAD0F0] transition-colors`}
                  >
                    <UsersRound className="w-8 h-8" /> Conexões
                  </Link>
                </div>
              ) : (
                <Link
                  to={`/${tipoUsuario === "jogadora" ? "conexoes" : "talentos"}`}
                  className={`flex items-center gap-3 font-semibold ${
                    isActive(
                      `/${tipoUsuario === "jogadora" ? "conexoes" : "talentos"}`
                    )
                      ? "underline"
                      : ""
                  } text-lg hover:text-[#DAD0F0] transition-colors`}
                >
                  {tipoUsuario === "jogadora" ? (
                    <UsersRound className="w-8 h-8" />
                  ) : (
                    <Star className="w-8 h-8" />
                  )}
                  {tipoUsuario === "jogadora" ? "Conexões" : "Talentos"}
                </Link>
              )}
            </li>
            <li>
              <Link
                to="/eventos"
                className={`flex items-center gap-3 font-semibold ${
                  isActive("/eventos") ? "underline" : ""
                } text-lg hover:text-[#DAD0F0] transition-colors`}
              >
                <CalendarDays className="w-8 h-8" /> Eventos
              </Link>
            </li>
            <li>
              <Link
                to="/notificacoes"
                className={`flex items-center gap-3 font-semibold ${
                  isActive("/notificacoes") ? "underline" : ""
                } text-lg hover:text-[#DAD0F0] transition-colors`}
              >
                <Bell className="w-8 h-8" /> Notificações
              </Link>
            </li>
          </ul>
        </nav>
        <div className="mt-7">
          <Link
            to="/configuracoes"
            className={`flex items-center gap-3 font-semibold ${
              isActive("/configuracoes") ? "underline" : ""
            } text-lg cursor-pointer hover:text-[#DAD0F0] transition-colors`}
          >
            <Settings className="w-8 h-8" />
            <span>Configurações</span>
          </Link>
        </div>
        <div className="mt-7" onClick={() => localStorage.clear()}>
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
