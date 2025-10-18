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
import { Link } from "react-router-dom";

export default function InfoJogadoraDialog({
  nome,
  cpf,
  contato,
  id,
  idade,
  img
}) {
  const [open, setOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger className={"cursor-pointer"}>
        <span>{nome}</span>
      </DialogTrigger>

      <DialogContent showCloseButton={false} className="max-w-[350px] sm:w-2/4 md:max-w-[500px] p-0 flex flex-col mx-auto border-1 border-[#307039] rounded-xl">
        <DialogHeader className="bg-[#307039] rounded-t-lg" style={{ fontFamily: "var(--font-poppins)" }}>
          <DialogTitle className="pb-2 pt-4 md:pb-1 md:pt-4 sm:pt-6 sm:pb-3 px-4 sm:text-xl md:text-lg md:text-center font-semibold text-white">
            INFORMAÇÕES DE INSCRIÇÃO
          </DialogTitle>
          <Separator className="bg-[#214d27]" />
        </DialogHeader>

        <div className="pt-2 px-4 gap-3 bg-white flex items-center md:flex-row">
          <img src={img} className="w-30 md:mx-4 sm:w-50 md:w-40 rounded-lg" alt={nome} />

          <div className="px-2">
            <p className="text-lg sm:text-xl font-semibold text-center md:text-start mb-1">{nome}</p>
            <div className="sm:text-lg">
              <p><span className="font-bold text-[#307039]">CPF:</span> {cpf}</p>
              <p><span className="font-bold text-[#307039]">Contato:</span> {contato}</p>
              <p><span className="font-bold text-[#307039]">Idade:</span> {idade} anos</p>
            </div>
          </div>
        </div>

        <form className="bg-white rounded-b-lg self-end pb-2 px-4">
          <DialogFooter className={"flex flex-row"}>
            <DialogClose asChild>
              <Button className={"cursor-pointer w-fit bg-[#307039] hover:bg-[#46844e] sm:text-lg sm:mb-2"}>Voltar</Button>
            </DialogClose>
            <Link to={`/perfil/jogadora/${id}`}><Button className={"cursor-pointer bg-[#307039] hover:bg-[#46844e] sm:text-lg sm:mb-2"}>Ver perfil</Button></Link>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
