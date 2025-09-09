import logo from "/logo-text.png";

export default function CadastroConcluido() {
  return (
    <div className="bg-[#307039] md:bg-transparent h-screen w-screen flex items-center justify-center">
        <section className="w-4/5 h-2/4 bg-white rounded-xl flex flex-col justify-center items-center p-10 text-center">
        <img src={logo} className="w-35 mb-6" alt="logo" />
        <h2 className="font-extrabold text-xl text-[#4f3882] mb-4">
            Bem-vinda(o) ao Passa a Bola Connect!
        </h2>
        <p className="text-lg text-gray-700 mb-8">
            Agora você faz parte da nossa rede de pessoas em busca de oportunidades!
        </p>

        <p className="text-[#4f3882] font-bold animate-pulse">Preparando sua experiência</p>
        </section>
    </div>
  );
}
