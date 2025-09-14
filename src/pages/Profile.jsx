import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getAll, API_BASE_URL, API_POSTS_URL } from "../services/apiService";
import ProfileHeader from "../components/Profile/ProfileHeader";
import Experience from "../components/Profile/Experience";
import MediaTabs from "../components/Profile/MediaTabs";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Sidebar from "../components/Sidebar/Sidebar";
import imagemPerfilPadrao from "../assets/imagem-padrao-perfil.jpg";
import PostUser from "../components/PostUser/PostUser";

// Componente de Card reutilizável e responsivo
const ProfileCard = ({ title, children }) => (
  <div className="bg-white rounded-lg shadow p-4 sm:p-6">
    <h3 className="text-xl font-bold mb-4 pb-2 border-b border-gray-200">
      {title}
    </h3>
    {children}
  </div>
);

const Profile = () => {
  const { id } = useParams();
  const [usuarioLogado, setUsuarioLogado] = useState(null);
  const [perfilVisualizado, setPerfilVisualizado] = useState(null);
  const [posts, setPosts] = useState([]);
  const [midia, setMidia] = useState({ imagens: [], videos: [] });
  const userLocal = JSON.parse(localStorage.getItem("user"));
  const emailLogado = userLocal?.email;

  // buscando jogadora logada atualmente
  useEffect(() => {
    async function fetchJogadora() {
      if (!emailLogado) return;

      try {
        const todosUsuarios = await getAll(API_BASE_URL, "jogadoras");

        const encontrado = todosUsuarios.find((j) => j.email === emailLogado);
        setUsuarioLogado(encontrado || null);
      } catch (error) {
        console.error("Erro ao buscar jogadora:", error);
      }
    }

    fetchJogadora();
  }, [emailLogado]);

  // buscando posts e midias da jogadora logada
  useEffect(() => {
    async function fetchPosts() {
      if (!usuarioLogado) return;

      try {
        const todosPosts = await getAll(API_POSTS_URL, "posts");
        // filtra apenas os posts da jogadora logada
        const meusPosts = todosPosts.filter(
          (post) => post.usuario === usuarioLogado.id
        );
        setPosts(meusPosts);

        // separa as midias em images e videos
        const imagens = meusPosts
          .filter(
            (p) =>
              p.midia && !p.midia.endsWith(".mp4") && !p.midia.endsWith(".mov")
          )
          .map((p) => p.midia);

        const videos = meusPosts
          .filter(
            (p) =>
              p.midia && (p.midia.endsWith(".mp4") || p.midia.endsWith(".mov"))
          )
          .map((p) => p.midia);

        setMidia({ imagens, videos });
      } catch (error) {
        console.error("Erro ao buscar posts:", error);
      }
    }

    fetchPosts();
  }, [usuarioLogado]);

  useEffect(() => {
    async function fetchPerfil() {
      if (!id) return;

      try {
        const todosUsuarios = await getAll(API_BASE_URL, "jogadoras");
        const encontrado = todosUsuarios.find((u) => u.id === id);
        setPerfilVisualizado(encontrado || null);
      } catch (err) {
        console.error(err);
      }
    }
    fetchPerfil();
  }, [id]);

  console.log("ID:", id)
  console.log("Usuário logado:", usuarioLogado)
  console.log("perfil visualizado:", perfilVisualizado)

  return (
    <div className="min-h-screen flex flex-col bg-[#DAD0F0] text-[#705C9B]">
      <Header />

      <div className="flex flex-1 pt-[88px]">
        <Sidebar isDesktop={true} />

        <main className="flex-1 p-4 lg:p-8 lg:ml-64">
          <ProfileHeader
            name={perfilVisualizado?.nome}
            team={perfilVisualizado?.["clube-atual"] || "Sem clube"}
            location={perfilVisualizado?.cidade + ", " + perfilVisualizado?.estado}
            avatar={perfilVisualizado?.["foto-perfil"] || imagemPerfilPadrao}
            followers={perfilVisualizado?.seguidores.length}
            following={perfilVisualizado?.seguindo.length}
            idUsuario={perfilVisualizado?.id}
            idUsuarioLogado={usuarioLogado?.id}
          />

          <div className="mt-6 lg:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Coluna esquerda */}
            <div className="lg:col-span-2 flex flex-col gap-6 lg:gap-8">
              <ProfileCard title="Sobre mim">
                <p>{perfilVisualizado?.["sobre-mim"]}</p>
              </ProfileCard>

              <ProfileCard title="Experiência e clubes">
                <Experience experience={perfilVisualizado?.["experiencias"]} />
              </ProfileCard>

              <MediaTabs media={midia} />

              <h3 className="text-xl font-bold mb-2 pb-2 border-b border-[#705C9B]">
                Meus posts
              </h3>

              {posts.map((post) => (
                <PostUser
                  key={post.id}
                  post={post}
                  usuario={perfilVisualizado}
                  idUsuarioLogado={usuarioLogado?.id}
                />
              ))}
            </div>

            {/* Coluna direita */}
            <div className="flex flex-col gap-6 lg:gap-8">
              <ProfileCard title="Dados rápidos">
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Posição: {perfilVisualizado?.posicao}</li>
                  <li>Idade: {perfilVisualizado?.idade}</li>
                  <li>Pé dominante: {perfilVisualizado?.["pe-dominante"]}</li>
                  <li>Altura: {perfilVisualizado?.altura / 100} m</li>
                  <li>Peso: {perfilVisualizado?.peso} kg</li>
                </ul>
              </ProfileCard>
              <ProfileCard title="Disponível para transferência?">
                <p>{perfilVisualizado?.["disp-transferencia"] ? "Sim" : "Não"}</p>
              </ProfileCard>
              <ProfileCard title="Conquistas e destaques">
                <p>
                  {perfilVisualizado?.["conquistas"] || "Nenhuma conquista registrada."}
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
