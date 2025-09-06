import {Menu, X, Search, User} from 'lucide-react'

export default function Header() {
  return (
    <header>
      <div>
        <h1>PAB CONNECT</h1>
        {/* Barra de pesquisa */}
        <div>
          <div>
            <input type="text" name="busca" id="busca" placeholder="Pesquisar..." />
            <Search />
          </div>
        </div>

        {/* Perfil */}
        <div>
          <button>
            <User />
          </button>
        </div>

        {/* Mobile: botao de menu */}
        <button>
          <Menu />
        </button>
      </div>
    </header>
  )
}