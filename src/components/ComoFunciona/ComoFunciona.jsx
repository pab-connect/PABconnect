import { CalendarDays, Check, UserRound } from "lucide-react";
import CardLandingPage from "../CardLandingPage/CardLandingPage";

export default function ComoFunciona() {
  return (
    <section id="comoFunciona" className="flex flex-col items-center justify-center gap-4 text-[#705C9B] my-8">
      <h2 className="text-xl font-semibold">Como funciona?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-0">
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
