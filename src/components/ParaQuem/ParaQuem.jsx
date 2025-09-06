import { Eye, Shield, UsersRound } from "lucide-react";
import CardLandingPage from "../CardLandingPage/CardLandingPage";

export default function ParaQuem() {
  return (
    <section
      id="paraQuem"
      className="bg-[#E4D9FD] flex flex-col items-center justify-center gap-4 text-[#705C9B] py-4 my-8"
    >
      <h2 className="text-xl font-semibold">Para quem é a plataforma?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-0">
        <CardLandingPage
          tipo={"circular"}
          icone={<Eye />}
          titulo={"Olheiros"}
          descricao={"Buscam talentos por posição, idade e localização."}
        />
        <CardLandingPage
          tipo={"circular"}
          icone={<UsersRound />}
          titulo={"Jogadoras"}
          descricao={"Criam perfis, postam vídeos e se inscrevem nas peneiras."}
        />
        <CardLandingPage
          tipo={"circular"}
          icone={<Shield />}
          titulo={"Organizadores"}
          descricao={
            "Cadastram eventos, gerenciam inscrições e aprovam jogadoras."
          }
        />
      </div>
    </section>
  );
}
