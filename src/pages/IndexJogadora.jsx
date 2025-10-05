import CriarPostIndexJogadora from "../components/CriarPostIndexJogadora/CriarPostIndexJogadora";
import PostUser from "../components/PostUser/PostUser";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import { getAll, API_POSTS_URL, API_BASE_URL } from "../services/apiService";
import { useEffect, useState } from "react";
import Footer from "../components/Footer/Footer";

export default function IndexJogadora() {
  const [posts, setPosts] = useState([]);
  const [jogadoras, setJogadoras] = useState([]);
  const [agentes, setAgentes] = useState([]);
  const userLogadoEmail = JSON.parse(localStorage.getItem("user"))?.email;
  const userLogadoTipo = JSON.parse(localStorage.getItem("user"))?.tipo;
  const usuarioLogado =
    userLogadoTipo === "jogadora"
      ? jogadoras.find((u) => u.email === userLogadoEmail)
      : agentes.find((u) => u.email === userLogadoEmail);

  async function fetchPosts() {
    try {
      const posts = await getAll(API_POSTS_URL, "posts");
      setPosts(posts);
    } catch (error) {
      console.error("Erro ao buscar posts:", error);
    }
  }

  useEffect(() => {
    async function fetchUsers() {
      try {
        const jogs = await getAll(API_BASE_URL, "jogadoras");
        setJogadoras(jogs);
      } catch (error) {
        console.error("Erro ao buscar jogadoras:", error);
      }

      try {
        const olhs = await getAll(API_BASE_URL, "olheiros");
        setAgentes(olhs);
      } catch (error) {
        console.error("Erro ao buscar olheiros:", error);
      }
    }

    fetchUsers();
    fetchPosts();
  }, []);

  // pega todos os posts e seus usuarios e tipos
  const postsComUsuarios = posts
    .map((post) => {
      let usuario = null;
      let tipoUsuario = "";

      if (
        jogadoras.some(
          (j) => j.id === post.usuario && post.tipoUsuario === "jogadoras"
        )
      ) {
        usuario = jogadoras.find((j) => j.id === post.usuario);
        tipoUsuario = "jogadoras";
      } else if (
        agentes.some(
          (a) => a.id === post.usuario && post.tipoUsuario === "olheiros"
        )
      ) {
        usuario = agentes.find((a) => a.id === post.usuario);
        tipoUsuario = "olheiros";
      }

      return { ...post, usuario, tipoUsuario };
    })
    .filter((post) => post.usuario)
    .slice()
    .sort((a, b) => new Date(b.datahora) - new Date(a.datahora));

  return (
    <div
      style={{ fontFamily: "var(--font-poppins)" }}
      className="flex flex-col flex-1 bg-[#DAD0F0]"
    >
      <Header />
      <div className="flex flex-1 flex-col items-center pt-30 p-6 gap-5 lg:ml-64 lg:pt-30 lg:p-10">
        <Sidebar isDesktop={true} />
        <CriarPostIndexJogadora
          idJogadora={usuarioLogado?.id}
          onPostCreated={fetchPosts}
        />
        <hr className="w-full my-4 border-t-2 border-[#9f92bc]" />

        {postsComUsuarios.map((post) => (
          <PostUser
            key={`${post.tipoUsuario}-${post.id}`}
            post={post}
            usuario={post.usuario}
            usuarioLogado={usuarioLogado}
            tipoUsuario={post.tipoUsuario}
            setUsuarios={
              post.tipoUsuario === "jogadoras" ? setJogadoras : setAgentes
            }
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}
