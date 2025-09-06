import { CalendarDays, Check, UserRound } from "lucide-react";
import CardLandingPage from "../CardLandingPage/CardLandingPage";

export default function ComoFunciona() {
  return (
    <section id="comoFunciona">
      <h2>Como funciona?</h2>
      <div>
        <CardLandingPage
          icone={<UserRound />}
          titulo={"Crie seu perfil"}
          descricao={
            "Mostre suas habilidades, vídeos e trajetória como jogadora."
          }
        />
        <CardLandingPage
          icone={<CalendarDays />}
          titulo={"Encontre peneiras"}
          descricao={
            "Busque eventos próximos com filtros por cidade e posição."
          }
        />
        <CardLandingPage
          icone={<Check />}
          titulo={"Seja descoberta"}
          descricao={
            "Olheiros e clubes podem te encontrar e entrar em contato."
          }
        />
      </div>
    </section>
  );
}
