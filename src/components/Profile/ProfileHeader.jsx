import { Link } from "react-router-dom";

const ProfileHeader = ({
  name,
  handle,
  team,
  location,
  avatar,
  followers,
  following,
  idUsuario,
  idUsuarioLogado,
}) => {
  const isPerfilProprio = idUsuario === idUsuarioLogado;
  return (
    // Layout muda de coluna para linha em telas médias (tablets)
    // Centraliza itens e texto em mobile
    <div className="bg-white rounded-lg shadow p-4 sm:p-6 flex flex-col md:flex-row items-center text-center md:text-left">
      <img
        src={avatar}
        alt={name}
        // Tamanho do avatar ajustado para telas diferentes
        className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border-4 border-white shadow-md"
      />

      {/* Margem ajustada para mobile (topo) e desktop (esquerda) */}
      <div className="mt-4 md:mt-0 md:ml-6">
        <h1 className="text-2xl sm:text-3xl font-bold">{name}</h1>
        <p className="text-sm sm:text-md ">{handle}</p>
        <p className="text-base sm:text-lg  mt-1">
          {team} • {location}
        </p>
        <div className="flex justify-center md:justify-start gap-4 text-[#705C9B] mt-2 ">
          <p className="font-bold">{followers} seguidores</p>
          <p className="font-bold">{following} seguindo</p>
        </div>
      </div>

      {/* Botões empilham em mobile e ficam lado a lado em desktop */}
      {isPerfilProprio && (
        <div className="mt-4 md:mt-0 md:ml-auto flex flex-col sm:flex-row items-center gap-3">
          <Link to="/configuracoes" className="bg-[#307039] text-white font-semibold py-2 px-6 rounded-full hover:bg-[#275c2e] transition duration-300 w-full sm:w-auto">
            Editar perfil
          </Link>
        </div>
      )}
    </div>
  );
};

export default ProfileHeader;
