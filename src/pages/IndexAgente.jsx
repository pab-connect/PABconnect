import RadarTalentos from "../components/RadarTalentos/RadarTalentos";
import PostUser from "../components/PostUser/PostUser";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import { getAll, API_POSTS_URL, API_BASE_URL } from "../services/apiService";
import { useEffect, useState } from "react";

export default function IndexAgente() {
  const [posts, setPosts] = useState([]);
  const [jogadoras, setJogadoras] = useState([]);

  const userLogadoEmail = JSON.parse(localStorage.getItem("user"))?.email;
  const usuarioLogado = jogadoras.find(u => u.email === userLogadoEmail);

  // Puxa todas as jogadoras
  useEffect(() => {
    async function fetchUsers() {
      try {
        const users = await getAll(API_BASE_URL, "jogadoras");
        setJogadoras(users);
      } catch (error) {
        console.error("Erro ao buscar jogadoras:", error);
      }
    }

    fetchUsers();
  }, []);

  // Puxa todos os posts
  async function fetchPosts() {
    try {
      const posts = await getAll(API_POSTS_URL, "posts");
      setPosts(posts);
    } catch (error) {
      console.error("Erro ao buscar posts:", error);
    }
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div style={{ fontFamily: "var(--font-poppins)" }} className="flex flex-1 bg-[#DAD0F0]">
      <Header />
      <div className="flex flex-1 flex-col items-center pt-30 p-6 gap-5 lg:ml-64 lg:pt-30 lg:p-10">
        <Sidebar isDesktop={true} />
        <RadarTalentos />
        <hr className="w-full my-4 border-t-2 border-[#457c50]" />
        {posts.map((post) => (
          <PostUser
            key={post.id}
            post={post}
            usuario={jogadoras.find(u => u.id === post.usuario) || {}} // dono do post
            idUsuarioLogado={usuarioLogado?.id}
            ignore={true}
          />
        ))}
      </div>
    </div>
  );
}
