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
          src="https://picsum.photos/300/400"
          alt="Exemplo de uso da plataforma"
          className="rounded-lg shadow-md mb-4"
        />
        <img
          src="https://picsum.photos/300/400"
          alt="Exemplo de uso da plataforma"
          className="rounded-lg shadow-md mb-4"
        />
        <img
          src="https://picsum.photos/300/400"
          alt="Exemplo de uso da plataforma"
          className="rounded-lg shadow-md mb-4"
        />
      </div>
    </section>
  );
}
