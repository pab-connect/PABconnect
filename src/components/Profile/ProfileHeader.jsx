const ProfileHeader = ({ name, handle, team, location, avatar }) => {
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
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">{name}</h1>
        <p className="text-sm sm:text-md text-gray-500">{handle}</p>
        <p className="text-base sm:text-lg text-gray-800 mt-1">
          {team} • {location}
        </p>
      </div>

      {/* Botões empilham em mobile e ficam lado a lado em desktop */}
      <div className="mt-4 md:mt-0 md:ml-auto flex flex-col sm:flex-row items-center gap-3">
        <button className="bg-purple-600 text-white font-semibold py-2 px-6 rounded-full hover:bg-purple-700 transition duration-300 w-full sm:w-auto">
          Editar perfil
        </button>
      </div>
    </div>
  )
}

export default ProfileHeader
