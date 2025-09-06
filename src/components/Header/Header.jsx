import { Menu, X, Search, CircleUserRoundIcon } from "lucide-react";

export default function Header() {
  return (
    <header className="w-full bg-[#307039] text-white p-4 flex items-center justify-between">
      <h1 className="text-xl text-center leading-none">
        PAB<span className="block text-4xl font-bold -mt-1">CONNECT</span>
      </h1>

      {/* Barra de pesquisa */}
      <div className="hidden lg:flex flex-1 max-w-md mx-6">
        <div className="flex items-center w-full bg-[#DAD0F0] rounded-lg px-3 py-1 text-[#705C9B] cursor-pointer hover:shadow-md hover:bg-[#cec4e4] focus:bg-[#cec4e4] transition-all duration-300 ease-in-out">
          <input
            type="text"
            name="busca"
            id="busca"
            className="flex-1 outline-none bg-transparent"
          />
          <Search className="w-5 h-5" />
        </div>
      </div>

      {/* Perfil */}
      <div className="hidden lg:flex items-center">
        <button>
          <CircleUserRoundIcon className="w-10 h-10 text-[#DAD0F0]" />
        </button>
      </div>

      {/* Mobile: botao de menu */}
      <button className="lg:hidden">
        <Menu className="w-7 h-7 text-[#DAD0F0]" />
      </button>
    </header>
  );
}
