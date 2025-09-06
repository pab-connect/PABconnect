import { Eye, Shield, UsersRound } from "lucide-react";
import CardLandingPage from "../CardLandingPage/CardLandingPage";

export default function ParaQuem() {
  return (
    <section id="paraQuem">
      <h2>Para quem é a plataforma?</h2>
      <div>
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
