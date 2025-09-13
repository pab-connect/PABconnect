import { Link } from "react-router-dom";
import bannerImage from "../../assets/banner-image.jpg";

export default function Banner() {
  return (
    <div
      className="relative w-full h-[300px] bg-cover bg-center flex flex-col items-center justify-center gap-3 text-white text-center p-4 before:content-[''] before:absolute before:inset-0 before:bg-black before:opacity-60 before:z-0"
      style={{ backgroundImage: `url(${bannerImage})` }}
    >
      <h2 className="relative z-10 text-xl font-regular">
        Transformando sonhos em oportunidades no futebol feminino.
      </h2>
      <p className="relative z-10 text-sm">
        Encontre peneiras, conecte-se com olheiros e dê o próximo passo na sua
        carreira.
      </p>
      <Link
        to="/login"
        className="relative z-10 bg-[#DAD0F0] text-[#705C9B] px-8 py-2 rounded-md cursor-pointer hover:bg-[#c7bae2] transition-colors duration-300"
      >
        Acesse a plataforma
      </Link>
    </div>
  );
}
