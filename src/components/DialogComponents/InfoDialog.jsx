import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function InfoDialog({
  situacao = "aberto",
  title,
  img,
  localization,
  date,
  description,
  faixaEtaria,
  periodoInscricao,
  vagas,
  inscritas
}) {
  const [open, setOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger className='flex items-center cursor-pointer text-[#307039] hover:scale-102 duration-300 transition-all'>
        <span className='bg-[#307039] hover:scale-99 hover:bg-gradient-to-b from-[#307039] to-[#295f30] transition-all cursor-pointer text-white px-6 py-2 rounded-lg sm:text-lg'>Mais informações</span>
      </DialogTrigger>

      <DialogContent showCloseButton={false} className="sm:w-2/3 p-0 flex flex-col mx-auto border-1 border-[#307039] rounded-xl">
        <DialogHeader className="bg-[#307039] rounded-t-lg" style={{ fontFamily: "var(--font-poppins)" }}>
          <DialogTitle className="pb-2 pt-4 px-4 font-semibold text-white">
            INFORMAÇÕES SOBRE O EVENTO
          </DialogTitle>
          <Separator className="bg-[#214d27]" />
        </DialogHeader>

        <div className="pt-2 px-4 gap-3 bg-white flex flex-col items-center sm:flex-row">
          <img src={img} className="w-40 rounded-lg" alt={title} />

          <div className="px-2">
            <p className="text-lg font-semibold text-center mb-1">{title}</p>
            <div>
              <p><span className="font-bold text-[#307039]">Localização:</span> {localization}</p>
              <p><span className="font-bold text-[#307039]">Data:</span> {date}</p>
              <p><span className="font-bold text-[#307039]">Organizador:</span> Passa a Bola</p>
            </div>

            <Separator className="my-2" />

            <div>
              <p>{description}</p>
              <p><span className="font-bold text-[#5a1ddc]">Faixa etária:</span> {faixaEtaria}</p>
              <p><span className="font-bold text-[#5a1ddc]">Período de inscrição:</span> {periodoInscricao}</p>
            </div>

            <Separator className={`my-2 ${situacao == "aberto" ? "flex" : "hidden"}`} />

            <div className={`gap-2 justify-center mt-3 ${situacao == "aberto" ? "flex" : "hidden"}`}>
              <p className="bg-green-100 w-fit py-1 px-2 rounded-sm font-bold text-[#307039]">
                {vagas} Vagas disponíveis
              </p>
              <p className="bg-purple-100 w-fit py-1 px-2 rounded-sm font-bold text-[#5a1ddc]">
                {inscritas} Jogadoras
              </p>
            </div>
          </div>
        </div>

        <form className="bg-white rounded-b-lg pb-2 px-4">
          <DialogFooter>
            <DialogClose asChild>
              <Button className={"bg-[#307039] mx-auto hover:bg-[#46844e] h-10 w-40 font-bold mb-2"}>OK</Button>
            </DialogClose>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
