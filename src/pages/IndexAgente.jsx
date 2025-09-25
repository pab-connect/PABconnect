import RadarTalentos from "../components/RadarTalentos/RadarTalentos";
import PostUser from "../components/PostUser/PostUser";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import { getAll, API_POSTS_URL, API_BASE_URL } from "../services/apiService";
import { useEffect, useState } from "react";

export default function IndexAgente() {
  const [posts, setPosts] = useState([]);
  const [jogadoras, setJogadoras] = useState([]);
  const [agentes, setAgentes] = useState([]);

  const userLogadoEmail = JSON.parse(localStorage.getItem("user"))?.email;
  const usuarioLogado = agentes.find(u => u.email === userLogadoEmail);

  async function fetchUsers() {
    try {
      const jogs = await getAll(API_BASE_URL, "jogadoras");
      setJogadoras(jogs);
      const olhs = await getAll(API_BASE_URL, "olheiros");
      setAgentes(olhs);
    } catch (error) {
      console.error("Erro ao buscar usuários:", error);
    }
  }

  async function fetchPosts() {
    try {
      const posts = await getAll(API_POSTS_URL, "posts");
      setPosts(posts);
    } catch (error) {
      console.error("Erro ao buscar posts:", error);
    }
  }

  useEffect(() => {
    fetchUsers();
    fetchPosts();
  }, []);

  const postsComUsuarios = posts
    .map(post => {
      const usuario = jogadoras.find(j => j.id === post.usuario && post.tipoUsuario === "jogadoras") ||
        agentes.find(a => a.id === post.usuario && post.tipoUsuario === "olheiros");
      
      const tipoUsuario = post.tipoUsuario;

      return { ...post, usuario, tipoUsuario };
    })
    .filter(post => post.usuario) 
    .slice()
    .sort((a, b) => new Date(b.datahora) - new Date(a.datahora));

  return (
    <div style={{ fontFamily: "var(--font-poppins)" }} className="flex flex-1 bg-[#DAD0F0]">
      <Header />
      <div className="flex flex-1 flex-col items-center pt-30 p-6 gap-5 lg:ml-64 lg:pt-30 lg:p-10">
        <Sidebar isDesktop={true} />
        <RadarTalentos />
        <hr className="w-full my-4 border-t-2 border-[#457c50]" />
        {postsComUsuarios.map(post => (
          <PostUser
            key={`${post.tipoUsuario}-${post.id}`}
            post={post}
            usuario={post.usuario}
            idUsuarioLogado={usuarioLogado?.id}
            tipoUsuario={post.tipoUsuario}
            usuarios={post.tipoUsuario === "jogadoras" ? jogadoras : agentes}
            setUsuarios={post.tipoUsuario === "jogadoras" ? setJogadoras : setAgentes}
          />
        ))}
      </div>
    </div>
  );
}
