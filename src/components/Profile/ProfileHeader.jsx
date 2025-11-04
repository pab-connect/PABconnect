import { useState, useEffect } from "react";
import { update, API_BASE_URL } from "../../services/apiService";
import { Link } from "react-router-dom";
import imagemPerfilPadrao from "../../assets/imagem-padrao-perfil.jpg";
import ModalSeguidores from "../ModalSeguidores/ModalSeguidores";
import { Toastify } from "../Toastify/Toastify";

const ProfileHeader = ({
  perfilVisualizado,
  handle,
  ehMeuPerfil,
  usuarioLogado,
  tipoPerfilVisualizado,
}) => {
  const [seguidoresPerfil, setSeguidoresPerfil] = useState([]);
  const [seguindoPerfil, setSeguindoPerfil] = useState([]);
  const [seguindoUsuario, setSeguindoUsuario] = useState([]);
  const [forcarUpdate, setForcarUpdate] = useState(0);

  const [modal, setModal] = useState(false);
  const [tipoModal, setTipoModal] = useState("seguidores");

  const tipoUsuarioLogado = JSON.parse(localStorage.getItem("user"))?.tipo;

  useEffect(() => {
    setSeguidoresPerfil(perfilVisualizado?.seguidores || []);
    setSeguindoPerfil(perfilVisualizado?.seguindo || []);
    setSeguindoUsuario(usuarioLogado?.seguindo || []);
  }, [perfilVisualizado, usuarioLogado, forcarUpdate]);

  const jaSegue = seguindoUsuario.includes(perfilVisualizado?.username);

  const handleToggleSeguir = async () => {
    if (!usuarioLogado || !perfilVisualizado) return;

    const novoSeguindoUsuario = jaSegue
      ? seguindoUsuario.filter((u) => u !== perfilVisualizado.username)
      : [...seguindoUsuario, perfilVisualizado.username];

    const novosSeguidoresPerfil = jaSegue
      ? seguidoresPerfil.filter((u) => u !== usuarioLogado.username)
      : [...seguidoresPerfil, usuarioLogado.username];

    try {
      const tipoUsuarioLogadoAPI =
        tipoUsuarioLogado === "jogadora" || tipoUsuarioLogado === "organizacao"
          ? "jogadoras"
          : "olheiros";

      await update(API_BASE_URL, tipoUsuarioLogadoAPI, usuarioLogado.id, {
        ...usuarioLogado,
        seguindo: novoSeguindoUsuario,
      });

      const tipoPerfilVisualizadoAPI =
        tipoPerfilVisualizado === "olheiro" ? "olheiros" : "jogadoras";

      await update(
        API_BASE_URL,
        tipoPerfilVisualizadoAPI,
        perfilVisualizado.id,
        {
          ...perfilVisualizado,
          seguidores: novosSeguidoresPerfil,
        }
      );

      setSeguindoUsuario(novoSeguindoUsuario);
      setSeguidoresPerfil(novosSeguidoresPerfil);

      if (jaSegue) {
        Toastify.sucesso(`Você parou de seguir ${perfilVisualizado.nome}`);
      } else {
        Toastify.sucesso(`Você começou a seguir ${perfilVisualizado.nome}`);
      }
    } catch (error) {
      console.error("Erro ao seguir/deixar de seguir:", error);
      Toastify.erro("Não foi possível completar a ação. Tente novamente.");
    }
  };

  // atualiza seguidores e seguindo apos seguir/deixar de seguir no modal
  const handleAtualizacaoSeguidores = (targetUsername, acao) => {
    setSeguindoUsuario((prev) => {
      const atual = Array.isArray(prev) ? prev : [];

      if (acao === "seguir") {
        if (!atual.includes(targetUsername)) return [...atual, targetUsername];
        return atual;
      } else {
        return atual.filter((u) => u !== targetUsername);
      }
    });

    if (perfilVisualizado?.username === targetUsername) {
      setSeguidoresPerfil((prev) => {
        const atual = Array.isArray(prev) ? prev : [];

        if (acao === "seguir") {
          if (!atual.includes(usuarioLogado.username))
            return [...atual, usuarioLogado.username];
          return atual;
        } else {
          return atual.filter((u) => u !== usuarioLogado.username);
        }
      });
    }

    setForcarUpdate((prev) => prev + 1);  
  };

  const abrirModal = (tipo) => {
    setModal(true);
    setTipoModal(tipo);
  };
  const fecharModal = () => setModal(false);

  return (
    <div className="bg-white rounded-lg shadow p-4 sm:p-6 flex flex-col md:flex-row items-center text-center md:text-left">
      <img
        src={perfilVisualizado?.["foto-perfil"] || imagemPerfilPadrao}
        alt={perfilVisualizado?.nome}
        className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border-4 border-white shadow-md"
      />

      <div className="mt-4 md:mt-0 md:ml-6">
        <h1 className="text-2xl sm:text-3xl font-bold">
          {perfilVisualizado?.nome}
        </h1>
        <p className="text-sm sm:text-md ">{handle}</p>
        <p className="text-base sm:text-lg mt-1">
          {perfilVisualizado?.["clube-atual"] || "Sem clube"} •{" "}
          {perfilVisualizado?.cidade + ", " + perfilVisualizado?.estado}
        </p>
        <div className="flex justify-center md:justify-start gap-4 text-[#705C9B] mt-2 ">
          <button
            onClick={() => abrirModal("seguidores")}
            className="font-bold cursor-pointer"
          >
            {seguidoresPerfil.length} seguidores
          </button>
          <button
            onClick={() => abrirModal("seguindo")}
            className="font-bold cursor-pointer"
          >
            {seguindoPerfil.length} seguindo
          </button>
        </div>
      </div>

      {ehMeuPerfil ? (
        <div className="mt-4 md:mt-0 md:ml-auto flex flex-col sm:flex-row items-center gap-3">
          <Link
            to="/configuracoes"
            className="bg-[#307039] text-white font-semibold py-2 px-6 rounded-full hover:bg-[#275c2e] transition duration-300 w-full sm:w-auto"
          >
            Editar perfil
          </Link>
        </div>
      ) : (
        <div className="mt-4 md:mt-0 md:ml-auto flex flex-col sm:flex-row items-center gap-3">
          <button
            onClick={handleToggleSeguir}
            className="cursor-pointer bg-[#307039] text-white font-semibold py-2 px-6 rounded-full hover:bg-[#275c2e] transition duration-300 w-full sm:w-auto"
          >
            {jaSegue ? "Deixar de seguir" : "Seguir"}
          </button>
        </div>
      )}

      <ModalSeguidores
        aberto={modal}
        fecharModal={fecharModal}
        usernames={
          tipoModal === "seguidores" ? seguidoresPerfil : seguindoPerfil
        }
        titulo={tipoModal === "seguidores" ? "Seguidores" : "Seguindo"}
        usuarioLogado={usuarioLogado}
        perfilVisualizado={perfilVisualizado}
        onAtualizacaoSeguidores={handleAtualizacaoSeguidores}
      />
    </div>
  );
};

export default ProfileHeader;
