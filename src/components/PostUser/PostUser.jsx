import { ThumbsUp, Share2 } from "lucide-react";
import { Link } from "react-router-dom";
import { update, API_BASE_URL, API_POSTS_URL } from "../../services/apiService";
import { useState } from "react";
import { Toastify } from "../Toastify/Toastify";

export default function PostUser({ post, usuario, usuarioLogado, tipoUsuario = "jogadora", setUsuarios }) {
  const isVideo = post.midia?.endsWith(".mp4") || post.midia?.endsWith(".mov");
  const [curtido, setCurtir] = useState(false);
  const idUsuarioLogado = usuarioLogado?.id;
  const isPerfilProprio = post.usuario === idUsuarioLogado;
  const userLogado = usuarioLogado
  const userLogadoTipo = JSON.parse(localStorage.getItem("user"))?.tipo;
  const data = new Date(post.datahora);
  const dataFormatada = `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()} às ${data.getHours()}:${data.getMinutes()}`;
  const [seguindo, setSeguindo] = useState(userLogado?.seguindo.includes(usuario.username));

  async function handleSeguir() {
    if (!userLogado || !usuario) return;

    const jaSegue = userLogado.seguindo.includes(usuario.username);
    const novoSeguindo = jaSegue
      ? userLogado.seguindo.filter(username => username !== usuario.username)
      : [...userLogado.seguindo, usuario.username];

    try {
      const tipoUsuarioLogado = userLogadoTipo === "jogadora" ? "jogadoras" : "olheiros";
      const dataToSend = { seguindo: novoSeguindo };
      const response = await update(API_BASE_URL, tipoUsuarioLogado, idUsuarioLogado, dataToSend);

      if (response) {
        setUsuarios(prev =>
          prev.map(j => j.id === idUsuarioLogado ? { ...j, seguindo: novoSeguindo } : j)
        );
        setSeguindo(!seguindo);
      } else {
        console.error("Erro ao atualizar o cadastro.");
      }
    } catch (error) {
      console.error("Erro ao atualizar:", error);
    }
  }


  async function handleCurtir() {
    if (!usuario) return;

    const novasCurtidas = curtido ? post.curtidas - 1 : post.curtidas + 1;
    const postAtualizado = { ...post, curtidas: novasCurtidas };

    try {
      await update(API_POSTS_URL, "posts", post.id, postAtualizado);
      setCurtir(!curtido);
    } catch (error) {
      console.error("Erro ao atualizar curtidas:", error);
    }
  }

  return (
    <div className="bg-white p-4 w-full rounded-xl border border-[#85a095]">
      <div className="flex items-center justify-between">
        <div className="flex gap-4 items-center">
          <Link to={`/perfil/${tipoUsuario}/${usuario.id}`}>
            <img
              className="w-10 h-10 sm:w-12 sm:h-12 lg:w-15 lg:h-15 ml-3 cursor-pointer rounded-full border-[#705c9b] border-2"
              src={usuario["foto-perfil"]}
              alt={usuario.nome}
            />
          </Link>
          <div className="flex flex-col">
            <div className="flex gap-2 items-center">
              <span className="font-bold text-xs sm:text-lg md:text-base lg:text-lg">{usuario.nome}</span>
              <div className="bg-[#9f92bc] w-1 h-1 lg:w-2 lg:h-2 rounded-full"></div>
              <span className="text-[#9f92bc] sm:text-sm hidden sm:block text-xs md:text-base lg:text-lg font-bold">{dataFormatada}</span>
            </div>
            <span className="text-[#705c9b] text-xs sm:text-sm md:text-base lg:text-lg">{usuario?.["clube-atual"] || "Sem clube"}</span>
          </div>
        </div>

        {!isPerfilProprio && (
          <button
            onClick={handleSeguir}
            className="bg-[#705c9b] px-2 py-1 mr-1 md:px-4 md:mr-3 sm:px-4 sm:py-1.5 lg:px-4 lg:mr-3 lg:py-2 rounded-full text-[#dad0f0] text-xs sm:text-lg md:text-base lg:text-lg cursor-pointer hover:scale-95 duration-300 transition-all"
          >
            {seguindo ? "Seguindo" : "Seguir"}
          </button>
        )}
      </div>

      <p className="m-3 text-xs md:text-sm sm:text-lg lg:text-base">{post.texto}</p>

      {post.midia && (
        <div className="flex justify-center mb-2">
          {isVideo ? (
            <video controls className="w-full max-w-md rounded-md">
              <source src={post.midia} type="video/mp4" />
            </video>
          ) : (
            <img src={post.midia} alt="Post" className="w-full max-w-md rounded-md object-cover" />
          )}
        </div>
      )}

      <div className="flex items-center justify-between text-[#705c9b]">
        <div className="flex items-center">
          <button
            onClick={handleCurtir}
            className="flex-1 p-2 items-center justify-center cursor-pointer hover:scale-110 duration-300 transition-all"
          >
            {!curtido && <ThumbsUp className="w-5 h-5 sm:w-7 sm:h-7 md:w-6 md:h-6 lg:w-7 lg:h-7" />}
            {curtido && <ThumbsUp fill="#705c9b" className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />}
          </button>
          <span className="text-xs md:text-sm sm:text-lg lg:text-base">
            {curtido ? post.curtidas + 1 : post.curtidas}
          </span>
        </div>

        <button
          onClick={() => {
            const textoParaCompartilhar = `A ${usuario.nome} postou: "${post.texto}", venha conferir!`;
            navigator.clipboard.writeText(textoParaCompartilhar)
              .then(() => Toastify.sucesso('Texto copiado para o clipboard!'))
              .catch(() => Toastify.erro('Não foi possível copiar o texto.'));
          }}
          className="cursor-pointer mr-3 hover:scale-110 duration-300 transition-all"
        >
          <Share2 className="w-5 h-5 sm:w-7 sm:h-7 md:w-6 md:h-6 lg:w-7 lg:h-7" />
        </button>
      </div>
    </div>
  );
}
