export default function HeaderLandingPage() {
  return (
    <header>
      <h1 className="text-xl text-center leading-none">
        PAB<span className="block text-4xl font-bold -mt-1">CONNECT</span>
      </h1>

      {/* Navegacao */}
      <nav>
        <ul>
          <li>
            <a href="#comoFunciona">Como funciona</a>
            <a href="#paraQuem">Para quem é a plataforma</a>
            <a href="#pratica">Veja na prática</a>
            <a href="#contato">Contato</a>
          </li>
        </ul>
      </nav>

      {/* Login */}
      <button>Entrar</button>
    </header>
  );
}
