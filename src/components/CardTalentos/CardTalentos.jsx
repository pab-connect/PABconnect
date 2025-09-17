import { Link } from "react-router-dom";

export default function CardTalentos({
  idJogadora,
  imagem,
  nome,
  posicao,
  localizacao,
}) {
  return (
    <div className="flex flex-col items-center text-center gap-3 bg-white p-4 rounded-lg shadow-md">
      <img src={imagem} alt={nome} className="w-full h-auto rounded-md" />

      <h3 className="text-lg font-semibold">{nome}</h3>
      <p className="text-sm text-gray-600">{posicao}</p>
      <p className="text-sm text-gray-600">{localizacao}</p>

      <div className="flex flex-col border-t pt-3 w-full gap-2">
        <Link to={`/perfil/jogadora/${idJogadora}`} className="bg-[#705C9B] text-white px-4 py-2 rounded-md cursor-pointer shadow-sm hover:shadow-md hover:scale-101 transition-all duration-300">
          Ver mais
        </Link>
        <button className="bg-[#705C9B] text-white px-4 py-2 rounded-md cursor-pointer shadow-sm hover:shadow-md hover:scale-101 transition-all duration-300">
          Enviar mensagem
        </button>
      </div>
    </div>
  );
}
