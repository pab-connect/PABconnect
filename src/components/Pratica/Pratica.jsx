import conexoes from "../../assets/conexoes.png";
import feed from "../../assets/feed.png";
import perfil from "../../assets/perfil.png";

export default function Pratica() {
  return (
    <section
      id="pratica"
      className="flex flex-col items-center justify-center gap-4 p-8 text-[#705C9B] text-center"
    >
      <h2 className="text-xl font-semibold">
        Veja como a plataforma funciona na prática
      </h2>
      <p>
        Criamos uma experiência simples, moderna e pensada para todos os perfis:
        jogadoras, olheiros e organizadores.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <img
          src={feed}
          alt="Exemplo de uso da plataforma"
          className="rounded-lg shadow-md mb-4 w-70 sm:w-65 md:w-55 border-black border-y-8 border-3"
        />
        <img
          src={conexoes}
          alt="Exemplo de uso da plataforma"
          className="rounded-lg shadow-md mb-4 w-70 sm:w-65 md:w-55 border-black border-y-8 border-3"
        />
        <img
          src={perfil}
          alt="Exemplo de uso da plataforma"
          className="rounded-lg shadow-md mb-4 w-70 sm:w-65 md:w-55 border-black border-y-8 border-3"
        />
      </div>
    </section>
  );
}
