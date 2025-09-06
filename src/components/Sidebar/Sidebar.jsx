import { Search, CircleUserRoundIcon, Settings, House, UsersRound, MessagesSquare, Bell } from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="bg-[#314334] text-white p-4">
      {/* Mobile: barra de pesquisa */}

      <div className="mb-4 flex items-center w-full bg-[#DAD0F0] rounded-lg px-3 py-1 text-[#705C9B] cursor-pointer hover:shadow-md hover:bg-[#cec4e4] focus:bg-[#cec4e4] transition-all duration-300 ease-in-out">
        <input
          type="text"
          name="busca"
          id="busca"
          className="flex-1 outline-none bg-transparent"
        />
        <Search className="w-5 h-5" />
      </div>

      {/* Links navegacao */}
      <nav>
        <ul className="flex flex-col gap-2">
          <li>
            <a href="#" className="flex gap-2 font-semibold underline"><House /> Página inicial</a>
          </li>
          <li>
            <a href="#" className="flex gap-2 font-semibold"><UsersRound /> Conexões</a>
          </li>
          <li>
            <a href="#" className="flex gap-2 font-semibold"><MessagesSquare /> Mensagens</a>
          </li>
          <li>
            <a href="#" className="flex gap-2 font-semibold"><Bell /> Notificações</a>
          </li>
          <li>
            <a href="#" className="flex gap-2 font-semibold"><CircleUserRoundIcon /> Perfil</a>
          </li>
        </ul>
      </nav>

      {/* Configuracoes */}
      <div className="mt-6">
        <button className="flex items-center gap-2 font-semibold">
          <Settings />
          <span>Configurações</span>
        </button>
      </div>
    </aside>
  );
}
