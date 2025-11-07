import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export default function HeaderLandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate()

  function handleLogin() {
    setIsMenuOpen(false)
    localStorage.setItem(
        "user",
        JSON.stringify({ tipo: "organizacao", email: "pabconnect.fiap@gmail.com" })
    );
    navigate("/home/organizacao");
  }

  return (
    <header className="w-full bg-[#307039] text-white p-4 relative">
      <div className="flex items-center justify-between">
        <h1 className="text-xl text-center leading-none">
          PAB<span className="block text-4xl font-bold -mt-1">CONNECT</span>
        </h1>

        {/* Navegacao desktop */}
        <nav className="hidden lg:block">
          <ul className="flex gap-6">
            <li>
              <a
                href="#comoFunciona"
                className="hover:text-[#DAD0F0] transition-colors"
              >
                Como funciona
              </a>
            </li>
            <li>
              <a
                href="#paraQuem"
                className="hover:text-[#DAD0F0] transition-colors"
              >
                Para quem é a plataforma
              </a>
            </li>
            <li>
              <a
                href="#pratica"
                className="hover:text-[#DAD0F0] transition-colors"
              >
                Veja na prática
              </a>
            </li>
            <li>
              <a
                href="#quemSomos"
                className="hover:text-[#DAD0F0] transition-colors"
              >
                Quem somos
              </a>
            </li>
            <li>
              <a
                href="#contato"
                className="hover:text-[#DAD0F0] transition-colors"
              >
                Contato
              </a>
            </li>
          </ul>
        </nav>

        {/* Login desktop */}
        
        <button className="hidden lg:block cursor-pointer text-white border px-6 py-2 rounded-md hover:bg-white hover:text-[#307039] transition-colors duration-300" onClick={()=>handleLogin()}>
          Entrar
        </button>

        {/* Menu hamburguer mobile */}
        <button
          className="lg:hidden cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="w-7 h-7 text-[#DAD0F0]" />
          ) : (
            <Menu className="w-7 h-7 text-[#DAD0F0]" />
          )}
        </button>
      </div>

      {/* Menu mobile */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-[#307039] z-50">
          <nav className="p-4">
            <ul className="flex flex-col gap-4">
              <li>
                <a
                  href="#comoFunciona"
                  className="block py-2 hover:text-[#DAD0F0] transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Como funciona
                </a>
              </li>
              <li>
                <a
                  href="#paraQuem"
                  className="block py-2 hover:text-[#DAD0F0] transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Para quem é a plataforma
                </a>
              </li>
              <li>
                <a
                  href="#pratica"
                  className="block py-2 hover:text-[#DAD0F0] transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Veja na prática
                </a>
              </li>
              <li>
                <a
                  href="#quemSomos"
                  className="block py-2 hover:text-[#DAD0F0] transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Quem somos
                </a>
              </li>
              <li>
                <a
                  href="#contato"
                  className="block py-2 hover:text-[#DAD0F0] transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contato
                </a>
              </li>
            </ul>

            {/* Botão Login Mobile */}
            <div className="mt-4 pt-4">
              <button className="w-full cursor-pointer text-white border px-6 py-2 rounded-md hover:bg-white hover:text-[#307039] transition-colors duration-300" onClick={()=>handleLogin()}>
                Entrar
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
