import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getAll, API_BASE_URL, API_POSTS_URL } from "../services/apiService";
import ProfileHeader from "../components/Profile/ProfileHeader";
import Experience from "../components/Profile/Experience";
import MediaTabs from "../components/Profile/MediaTabs";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Sidebar from "../components/Sidebar/Sidebar";
import PostUser from "../components/PostUser/PostUser";
import LoadingOverlay from "@/components/LoadingOverlay/LoadingOverlay";

const ProfileCard = ({ title, children }) => (
  <div className="bg-white rounded-lg shadow p-4 sm:p-6">
    <h3 className="text-xl font-bold mb-4 pb-2 border-b border-gray-200">
      {title}
    </h3>
    {children}
  </div>
);

const Profile = () => {
  const { id, tipo } = useParams();
  const [usuarioLogado, setUsuarioLogado] = useState(null);
  const [perfilVisualizado, setPerfilVisualizado] = useState(null);
  const [tipoPerfilVisualizado, setTipoPerfilVisualizado] = useState(null);
  const [posts, setPosts] = useState([]);
  const [jogadoras, setJogadoras] = useState([]);
  const [agentes, setAgentes] = useState([]);
  const [midia, setMidia] = useState({ imagens: [], videos: [] });
  const [carregando, setCarregando] = useState(true);
  const userLocal = JSON.parse(localStorage.getItem("user"));
  const emailLogado = userLocal?.email;

  useEffect(() => {
    async function fetchUsuarios() {
      if (!emailLogado) return;

      try {
        const todasJogadoras = await getAll(API_BASE_URL, "jogadoras");
        const todosOlheiros = await getAll(API_BASE_URL, "olheiros");

        const logado =
          todasJogadoras.find((j) => j.email === emailLogado) ||
          todosOlheiros.find((o) => o.email === emailLogado);
        setUsuarioLogado(logado || null);

        let perfil = null;

        if (tipo === "jogadora") {
          perfil = todasJogadoras.find((j) => j.id === id);
        } else if (tipo === "organizacao") {
          perfil = todasJogadoras.find((j) => j.id === id);
        } else if (tipo === "olheiro") {
          perfil = todosOlheiros.find((o) => o.id === id);
        }

        setPerfilVisualizado(perfil || null);
        setTipoPerfilVisualizado(tipo);
        setJogadoras(todasJogadoras);
        setAgentes(todosOlheiros);
        setCarregando(false);
      } catch {
        console.error("Erro ao buscar usuários");
      }
    }

    fetchUsuarios();
  }, [emailLogado, id, tipo]);

  useEffect(() => {
    async function fetchPosts() {
      if (!perfilVisualizado) return;

      try {
        const todosPosts = await getAll(API_POSTS_URL, "posts");

        const postsPerfilVisualizado = todosPosts
          .filter((post) => {
            let tipoPost;
            if (tipoPerfilVisualizado === "jogadora") tipoPost = "jogadoras";
            else if (tipoPerfilVisualizado === "olheiro") tipoPost = "olheiros";
            else if (tipoPerfilVisualizado === "organizacao") tipoPost = "jogadoras";
            return post.usuario === perfilVisualizado.id && post.tipoUsuario === tipoPost;
          })
          .slice()
          .sort((a, b) => new Date(b.datahora) - new Date(a.datahora));

        setPosts(postsPerfilVisualizado);

        const imagens = postsPerfilVisualizado
          .filter(
            (p) =>
              p.midia && !p.midia.endsWith(".mp4") && !p.midia.endsWith(".mov")
          )
          .map((p) => p.midia);

        const videos = postsPerfilVisualizado
          .filter(
            (p) =>
              p.midia && (p.midia.endsWith(".mp4") || p.midia.endsWith(".mov"))
          )
          .map((p) => p.midia);

        setMidia({ imagens, videos });
        setCarregando(false);
      } catch {
        console.error("Erro ao buscar posts");
      }
    }

    fetchPosts();
  }, [perfilVisualizado, tipoPerfilVisualizado]);

  const ehMeuPerfil =
    usuarioLogado?.id === perfilVisualizado?.id &&
    userLocal?.tipo === tipoPerfilVisualizado;

  return (
    <div
      style={{ fontFamily: "var(--font-poppins)" }}
      className="min-h-screen flex flex-col bg-[#DAD0F0] text-[#705C9B]"
    >
      <Header />

      <div className="flex flex-1 pt-[88px]">
        <Sidebar isDesktop={true} />

        <main className="flex-1 p-4 lg:p-8 lg:ml-64">
          {carregando && (<LoadingOverlay />)}
          <ProfileHeader
            perfilVisualizado={perfilVisualizado}
            ehMeuPerfil={ehMeuPerfil}
            usuarioLogado={usuarioLogado}
            tipoPerfilVisualizado={tipoPerfilVisualizado}
          />

          <div className="mt-6 lg:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            <div className="lg:col-span-2 flex flex-col gap-6 lg:gap-8">
              <ProfileCard title="Sobre mim">
                <p>{perfilVisualizado?.["sobre-mim"]}</p>
              </ProfileCard>

              <ProfileCard title="Experiência e clubes">
                <Experience experience={perfilVisualizado?.["experiencias"]} />
              </ProfileCard>

              <div className="space-y-6">
                <MediaTabs media={midia} />

                <h3 className="text-xl font-bold mb-2 pb-2 border-b border-[#705C9B]">
                  Meus posts
                </h3>

                {posts.map((post) => (
                  <PostUser
                    key={`${post.tipoUsuario}-${post.id}`}
                    post={post}
                    usuario={perfilVisualizado}
                    usuarioLogado={usuarioLogado}
                    tipoUsuario={post.tipoUsuario}
                    setUsuarios={
                      post.tipoUsuario === "jogadoras"
                        ? setJogadoras
                        : setAgentes
                    }
                  />
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-6 lg:gap-8">
              {tipoPerfilVisualizado === "jogadora" && (
                <div className="space-y-6">
                  <ProfileCard title="Dados rápidos">
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>Posição: {perfilVisualizado?.posicao}</li>
                      <li>Idade: {perfilVisualizado?.idade}</li>
                      <li>
                        Pé dominante: {perfilVisualizado?.["pe-dominante"]}
                      </li>
                      <li>Altura: {perfilVisualizado?.altura / 100} m</li>
                      <li>Peso: {perfilVisualizado?.peso} kg</li>
                    </ul>
                  </ProfileCard>
                  <ProfileCard title="Disponível para transferência?">
                    <p>
                      {perfilVisualizado?.["disp-transferencia"]
                        ? "Sim"
                        : "Não"}
                    </p>
                  </ProfileCard>
                </div>
              )}

              {tipoPerfilVisualizado === "olheiro" && (
                <ProfileCard title="Tempo de experiência">
                  <p>{perfilVisualizado?.["tempo-experiencia"]}</p>
                </ProfileCard>
              )}

              {tipoPerfilVisualizado === "organizacao" && (
                <ProfileCard title="Informações da Organização">
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Nome: {perfilVisualizado?.nome}</li>
                    <li>Cidade: {perfilVisualizado?.cidade}</li>
                    <li>Fundação: {perfilVisualizado?.fundacao}</li>
                  </ul>
                </ProfileCard>
              )}

              <ProfileCard title="Conquistas e destaques">
                <p>
                  {perfilVisualizado?.["conquistas"] ||
                    "Nenhuma conquista registrada."}
                </p>
              </ProfileCard>
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default Profile;
