import { Search, CircleUserRoundIcon, Settings } from "lucide-react";

export default function Sidebar() {
  return (
    <aside>
      {/* Mobile: barra de pesquisa */}
      <div>
        <div>
          <input
            type="text"
            name="busca"
            id="busca"
          />
          <Search />
        </div>
      </div>

      {/* Links navegacao */}
      <nav>
        <ul>
          <li><a href="#">Página inicial</a></li>
          <li><a href="#">Conexões</a></li>
          <li><a href="#">Mensagens</a></li>
          <li><a href="#">Notificações</a></li>
          <li><a href="#">Perfil</a></li>
        </ul>
      </nav>

      {/* Configuracoes */}
      <div>
        <button>
          <Settings />
          <span>Configurações</span>
        </button>
      </div>
    </aside>
  )
}
