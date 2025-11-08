export default function SocialCard({ img, nome, username, descricao, link, textoBotao }) {
  return (
    <div className="flex w-full md:flex-row gap-2 p-4 rounded-xl bg-zinc-800 hover:scale-101 hover:outline-1 hover:outline-zinc-400 transition-all">
      <img className="w-20 h-20 rounded-full" src={img} alt={nome} />
      <div className="flex flex-col gap-2 md:gap-0 justify-between">
        <h1 className="text-2xl font-bold text-white">{nome}</h1>
        <p className="text-white font-bold">@{username}</p>
        <p className="text-zinc-300">{descricao}</p>
        <a target="_blank" rel="noopener noreferrer" className="bg-white transition-all hover:bg-gray-100 hover:shadow-md py-1 px-4 w-fit rounded-full font-medium" href={link}>{textoBotao}</a>
      </div>
    </div>
  );
}
