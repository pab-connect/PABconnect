import { useState } from "react";
import { Menu, X, Search, CircleUserRoundIcon } from "lucide-react";
import Sidebar from "../Sidebar/Sidebar";
import { Link } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 w-full bg-[#307039] text-white p-4 flex items-center justify-between z-50">
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
        <Link to="/perfil">
          <CircleUserRoundIcon className="w-10 h-10 text-[#DAD0F0]" />
        </Link>
      </div>

      {/* Mobile: botao de menu */}
      <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? (
          <X className="w-7 h-7 text-[#DAD0F0]" />
        ) : (
          <Menu className="w-7 h-7 text-[#DAD0F0]" />
        )}
      </button>

      {/* Mobile: sidebar */}
      {isOpen && <Sidebar onClose={() => setIsOpen(false)} isDesktop={false} />}
    </header>
  );
}
