import AccordionTime from "./AccordionTime";
import { Button } from "@/components/ui/button";
import { shuffle } from "lodash";
import { update, API_POSTS_URL } from "@/services/apiService";
import { Toastify } from "../Toastify/Toastify";

export default function TimesEvento({evento, jogadoras}) {
    async function handleGerar() {
        if (!evento?.jogadorasAprovadas?.length || !evento?.qtdTimes) return;

        const jogadorasSorteadas = shuffle(evento.jogadorasAprovadas);
        const chunkSize = Math.ceil(
            jogadorasSorteadas.length / evento.qtdTimes
        );

        const novos = [];
        for (let i = 0; i < jogadorasSorteadas.length; i += chunkSize) {
            const chunk = jogadorasSorteadas.slice(i, i + chunkSize).map((j) => j.id);
            const nomeTime = `Time ${novos.length + 1}`;
            novos.push({ nome: nomeTime, participantes: chunk });
        }

        try {
            const response = await update(API_POSTS_URL, "eventos", evento.id, {times: novos});
            if (response) {
                Toastify.sucesso("Times atualizados com sucesso!");
                setTimeout(() => {
                    window.location.reload();
                }, 800);
            } else {
                Toastify.erro("Erro ao atualizar os times. Tente novamente.");
            }
        } catch {
            Toastify.erro("Erro ao gerar os times. Verifique sua conexão.");
        }
    }

    async function handleLimpar() {
        try {
            const response = await update(API_POSTS_URL, "eventos", evento.id, {times: []});
            if (response) {
                Toastify.sucesso("Times resetados com sucesso!");
                setTimeout(() => {
                    window.location.reload();
                }, 800);
            } else {
                Toastify.erro("Erro ao atualizar os times. Tente novamente.");
            }
        } catch {
            Toastify.erro("Erro ao resetar os times. Verifique sua conexão.");
        }
    }

    return (
        <div className="bg-white w-full rounded-md mt-4 ">
            <h2 className="font-semibold p-3 rounded-t-md text-lg bg-[#307039] text-white">Gestão de times</h2>
            <div className="rounded-md pt-2 pb-3 px-3">
                <p>Numero de times: <span className="inline-block text-white bg-green-700 rounded-full py-1 px-2">{evento?.qtdTimes}</span></p>
                <hr className="my-2"/> 
                <div>
                    <h3 className="font-semibold">TIMES EXISTENTES</h3>
                    {evento?.times.length < 1 && <p>Não há times formados</p>}
                    {evento?.times.length > 0 && <AccordionTime times={evento?.times} jogadoras={jogadoras} />}
                </div>
                <hr className="my-2"/> 
                <div className="flex p-2 flex-wrap justify-center gap-4 md:gap-1 md:justify-between ">
                    <Button type="button" onClick={()=>handleGerar()} className={"cursor-pointer bg-[#7647dc] hover:bg-[#5a1ddc] text-[14px] sm:px-4 max-w-30 md:max-w-none md:flex-1"}>Gerar times</Button>
                    <Button type="button" onClick={()=>handleLimpar()} className={"cursor-pointer bg-[#703030] hover:bg-[#d20000] text-[14px] sm:px-4 max-w-30 md:max-w-none md:flex-1"}>Limpar times</Button>
                </div>
            </div>
        </div>
    )
}