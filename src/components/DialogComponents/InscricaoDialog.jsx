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
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Toastify } from "../Toastify/Toastify";
import { update, API_POSTS_URL } from "@/services/apiService";

export default function InscricaoDialog({ title, evento, localization, date, userLocal, jogadoras }) {
  const [open, setOpen] = useState(false)
  const [CPF, setCPF] = useState("")
  const [contato, setContato] = useState("")

  const jogadoraLogada = jogadoras?.find(jogadora=>jogadora.email===userLocal.email)
  

  async function handleSubmit(e) {
    e.preventDefault()
    if (!CPF || !contato) return Toastify.erro("Preencha os campos vazios")
    if (CPF.length!==11) return Toastify.erro("Digite um cpf válido!")
    if (contato.length<11) return Toastify.erro("Digite um número válido")
    if (jogadoraLogada) { 
      const jogadora = {
        id: jogadoraLogada.id,
        cpf: CPF,
        contato: contato
      }
      const jogadorasAtualizadas = [...evento.jogadorasInscritas, jogadora];
      const vagasAtualizadas = evento.vagas - 1 
      const inscritasAtualizadas = evento.inscritas + 1
      try {
        const response = await update(API_POSTS_URL, "eventos", evento.id, { jogadorasInscritas: jogadorasAtualizadas, vagas: vagasAtualizadas, inscritas: inscritasAtualizadas });
        if (response) {
          Toastify.sucesso("Jogadora inscrita com sucesso!");
        } else {
          Toastify.erro("Erro ao inscrever-se.");
        }
      } catch (error) {
        console.error(error);
        Toastify.erro("Erro de conexão ao inscrever-se.");
      }
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger className='flex items-center cursor-pointer text-[#307039] hover:scale-102 duration-300 transition-all'>
        <span className='bg-[#307039] hover:scale-99 hover:bg-gradient-to-b from-[#307039] to-[#295f30] transition-all cursor-pointer text-white px-6 py-2 rounded-lg sm:text-lg'>Inscrever-se</span>
      </DialogTrigger>

      <DialogContent showCloseButton={false} className="sm:w-3/4 md:max-w-[750px] p-0 flex flex-col mx-auto border-1 border-[#307039] rounded-xl">
        <DialogHeader className="bg-[#307039] rounded-t-lg" style={{ fontFamily: "var(--font-poppins)" }}>
          <DialogTitle className="pb-2 pt-4 md:pb-1 md:pt-4 sm:pt-6 sm:pb-3 px-4 sm:text-xl md:text-lg md:text-center font-semibold text-white">
            FORMULÁRIO DE INSCRIÇÃO
          </DialogTitle>
          <Separator className="bg-[#214d27]" />
        </DialogHeader>
        <form onSubmit={handleSubmit} className="bg-white rounded-b-lg pb-2 px-4">
          <div className="gap-3 mb-4 md:mb-0 bg-white flex flex-col items-center md:flex-row">
            <div className="px-2 md:flex-1">
              <p className="text-lg sm:text-xl font-semibold text-center md:text-start mb-1">{title}</p>
              <div className="sm:text-lg">
                <p><span className="font-bold text-[#307039]">Localização:</span> {localization}</p>
                <p><span className="font-bold text-[#307039]">Data:</span> {date}</p>
              </div>

              <Separator className="my-2" />

              <div className={`gap-2 flex justify-center sm:text-lg my-3`}>
                <p className="bg-green-100 w-fit py-1 px-2 rounded-sm font-bold text-[#307039]">
                  {evento.vagas} Vagas disponíveis
                </p>
                <p className="bg-purple-100 w-fit py-1 px-2 rounded-sm font-bold text-[#5a1ddc]">
                  {evento.inscritas} Jogadoras
                </p>
              </div>

              <Separator className="my-2 md:hidden" />

            </div>

            <div className="grid gap-4 w-full md:flex-1 sm:px-2">
              <div className="grid gap-3">
                <Label htmlFor="senhaatual" className={"sm:text-lg"}>Digite seu CPF:</Label>
                <Input id="cpf" required name="cpf" value={CPF} onChange={(e) => setCPF(e.target.value)} className={"focus-visible:border-[#46844e] focus-visible:ring-[#a0b5a3] selection:bg-[#a0b5a3] sm:text-lg md:text-lg"} placeholder="Ex: 12345678901"/>
              </div>
              <div className="grid gap-3">
                <Label htmlFor="senhaatual" className={"sm:text-lg"}>Digite seu telefone:</Label>
                <Input id="telefone" required type={"tel"} name="telefone" value={contato} onChange={(e) => setContato(e.target.value)} className={"focus-visible:border-[#46844e] focus-visible:ring-[#a0b5a3] selection:bg-[#a0b5a3] sm:text-lg md:text-lg"} placeholder="Ex: 12 934567890"/>
              </div>
            </div>
          </div>

          <DialogFooter className={"sm:px-2"}>
            <DialogClose asChild>
              <Button variant="outline" className={"sm:text-lg cursor-pointer"}>Cancelar</Button>
            </DialogClose>
            <Button type="submit" className={"cursor-pointer bg-[#307039] hover:bg-[#46844e] sm:text-lg sm:mb-2"}>Inscrever-se</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
