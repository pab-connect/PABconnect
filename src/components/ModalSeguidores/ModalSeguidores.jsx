import { useEffect, useState } from "react";
import imagemPerfilPadrao from "../../assets/imagem-padrao-perfil.jpg";
import { X } from "lucide-react";
import { getAll, API_BASE_URL, update } from "../../services/apiService";
import LoadingOverlay from "../LoadingOverlay/LoadingOverlay";
import { Link } from "react-router-dom";
import { Toastify } from "../Toastify/Toastify";

export default function ModalSeguidores({
  aberto,
  fecharModal,
  usernames = [],
  titulo,
  usuarioLogado,
  perfilVisualizado,
  onAtualizacaoSeguidores
}) {
  const [usuarios, setUsuarios] = useState([]);
  const [carregando, setCarregando] = useState(false);
  const tipoUsuarioLogado = JSON.parse(localStorage.getItem("user"))?.tipo;

  useEffect(() => {
    if (aberto && usernames.length > 0) {
      buscarUsuarios();
    } else {
      setUsuarios([]);
    }
  }, [aberto, usernames]);

  // filtra usuarios que esta seguindo ou seguidores
  const buscarUsuarios = async () => {
    try {
      setCarregando(true);

      const todasJogadoras = await getAll(API_BASE_URL, "jogadoras");
      const todosOlheiros = await getAll(API_BASE_URL, "olheiros");

      const jogadorasTipo = todasJogadoras.map((j) => ({
        ...j,
        tipo: "jogadora",
      }));
      const olheirosTipo = todosOlheiros.map((o) => ({
        ...o,
        tipo: "olheiro",
      }));

      const todosUsuarios = [...jogadorasTipo, ...olheirosTipo];

      const filtrados = todosUsuarios.filter((usuario) =>
        usernames.includes(usuario.username)
      );

      setUsuarios(filtrados);
    } catch (error) {
      console.error("Erro ao carregar usuários:", error);
    } finally {
      setCarregando(false);
    }
  };

  // segue ou deixar de seguir as pessoas no modal
  const handleSeguir = async (e, usuario) => {
    e.preventDefault();

    try {
      const jaSegue = usuarioLogado?.seguindo.includes(usuario.username);
      const novoSeguindo = jaSegue
        ? usuarioLogado?.seguindo.filter(
            (username) => username !== usuario.username
          )
        : [...usuarioLogado?.seguindo, usuario.username];

      const dataToSend = { seguindo: novoSeguindo };

      const response = await update(
        API_BASE_URL,
        tipoUsuarioLogado === "jogadora" ? "jogadoras" : "olheiros",
        usuarioLogado.id,
        dataToSend
      );

      if (response) {
        usuarioLogado.seguindo = novoSeguindo;

        setUsuarios((prev) =>
        jaSegue && titulo === "Seguindo"
          ? prev.filter((u) => u.username !== usuario.username)
          : prev.map((u) =>
              u.username === usuario.username ? { ...u } : u
            )
      );

        Toastify.sucesso(
          jaSegue
            ? `Você parou de seguir ${usuario.nome}`
            : `Você começou a seguir ${usuario.nome}`
        );
      }

      if (onAtualizacaoSeguidores) {
        onAtualizacaoSeguidores(usuario.username, jaSegue ? 'deixarDeSeguir' : 'seguir');
      }
    } catch (error) {
      console.error("Erro ao seguir/deixar de seguir:", error);
      Toastify.erro("Não foi possível completar a ação.");
    }
  };

  if (!aberto) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      {carregando && <LoadingOverlay />}
      <div className="bg-white rounded-lg shadow-lg w-11/12 sm:w-[400px] max-h-[80vh] overflow-hidden">
        <div className="flex justify-between items-center p-4 border-b">
          <h2>{titulo}</h2>
          <button onClick={fecharModal} className="cursor-pointer">
            <X />
          </button>
        </div>

        <div className="overflow-y-auto max-h-[60vh] p-4">
          {usuarios.length === 0 ? (
            <p className="text-center text-gray-500">
              Nenhum usuário encontrado.
            </p>
          ) : (
            usuarios.map((usuario, index) => {
              const ehMeuPerfil = usuarioLogado?.username === usuario?.username;
              const euSigo = usuarioLogado?.seguindo?.includes(
                usuario.username
              );
              const perfilSendoVistoEhMeu =
                usuarioLogado?.username === perfilVisualizado?.username;

              return (
                <div
                  key={index}
                  className="flex justify-between items-center p-2 rounded-md hover:bg-gray-100 cursor-pointer"
                >
                  <Link
                    to={`/perfil/${usuario.tipo}/${usuario.id}`}
                    onClick={fecharModal}
                    className="flex items-center gap-3 flex-1"
                  >
                    <img
                      src={usuario["foto-perfil"] || imagemPerfilPadrao}
                      alt={usuario.nome || "Usuário"}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold">{usuario.nome}</p>
                    </div>
                  </Link>

                  {/* Botao de seguir/deixar de seguir */}
                  {!ehMeuPerfil && (
                    <button
                      onClick={(e) => handleSeguir(e, usuario)}
                      className={`cursor-pointer text-sm font-semibold py-1 px-3 rounded-full transition duration-300 ${
                        euSigo
                          ? "bg-[#9F92BC] text-white hover:bg-[#705C9B]"
                          : "bg-[#307039] text-white hover:bg-[#275c2e]"
                      }`}
                    >
                      {euSigo ? "Deixar de seguir" : "Seguir"}
                    </button>
                  )}
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}
