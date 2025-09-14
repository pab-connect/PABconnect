import { CircleUserRound, ThumbsUp, Share2 } from "lucide-react";

export default function PostUser({ post, usuario, idUsuarioLogado }) {
  const isPerfilProprio = post.usuario === idUsuarioLogado;
  const isVideo = post.midia?.endsWith(".mp4") || post.midia?.endsWith(".mov");
  const data = new Date(post.datahora);
  const dataFormatada = `${data.getDate()}/${
    data.getMonth() + 1
  }/${data.getFullYear()} às ${data.getHours()}:${data.getMinutes()}`;

  return (
    <div className="bg-white p-4 w-full rounded-xl border border-[#85a095]">
      <div className="flex items-center justify-between">
        <div className="flex gap-4 items-center">
          <CircleUserRound className="text-[#705c9b] w-10 h-10 md:w-12 md:h-12 lg:w-15 lg:h-15 ml-3 cursor-pointer" />
          <div className="flex flex-col">
            <div className="flex gap-2 items-center">
              <span className="font-bold text-xs md:text-base lg:text-lg">
                {usuario.nome}
              </span>
              <div className="bg-[#9f92bc] w-1 h-1 lg:w-2 lg:h-2 rounded-full"></div>
              <span className="text-[#9f92bc] text-xs md:text-base lg:text-lg font-bold">
                {dataFormatada}
              </span>
            </div>
            <span className="text-[#705c9b] text-xs md:text-base lg:text-lg">
              {usuario?.["clube-atual"] || "Sem clube"}
            </span>
          </div>
        </div>
        {!isPerfilProprio && (
          <button className="bg-[#705c9b] px-2 py-1 rounded-full text-[#dad0f0] text-xs md:text-base cursor-pointer hover:scale-95 duration-300 transition-all">
            Seguir
          </button>
        )}
      </div>
      <p className="m-3 text-xs md:text-sm lg:text-base">{post.texto}</p>
      {post.midia && (
        <div className="flex justify-center mb-2">
          {isVideo ? (
            <video controls className="w-full max-w-md rounded-md">
              <source src={post.midia} type="video/mp4" />
            </video>
          ) : (
            <img
              src={post.midia}
              alt="Post"
              className="w-full max-w-md rounded-md object-cover"
            />
          )}
        </div>
      )}
      <div className="flex items-center justify-between text-[#705c9b]">
        <div className="flex items-center">
          <button className="flex-1 p-2 items-center justify-center cursor-pointer hover:scale-110 duration-300 transition-all">
            <ThumbsUp className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
          </button>
          <span className="text-xs md:text-sm lg:text-base">
            {post.curtidas}
          </span>
        </div>
        <button className="cursor-pointer mr-3 hover:scale-110 duration-300 transition-all">
          <Share2 className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
        </button>
      </div>
    </div>
  );
}
