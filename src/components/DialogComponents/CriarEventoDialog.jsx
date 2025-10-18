import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog"
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import SelectElement from "../Eventos/SelectElement"
import { useState } from "react";
import { Toastify } from "../Toastify/Toastify";
import { create, API_POSTS_URL } from "@/services/apiService";

export default function CriarEventoDialog() {
    const [open, setOpen] = useState(false)
    const tiposDeEvento = ["Peneira", "Copa", "Campeonato", "Amistoso", "Torneio", "Outro"]
    const tiposDeStatus = ["encerrado", "andamento", "aberto"]
    const [formData, setFormData] = useState({
        title: "",
        tipo: "",
        situacao: "",
        img: "",
        localization: "",
        date: "",
        description: "",
        faixaEtaria: "",
        periodoInscricao: "",
        vagas: 0,
        inscritas: 0,
        jogadorasInscritas: [],
        jogadorasAprovadas: []
    });

    const handleChange = ({ name, value }) => {
        setFormData(prevData => ({
            ...prevData,
            [name]: value,
        }));
    };

    async function handleSubmit(e) {
        e.preventDefault()
        const [ano, mes, dia] = formData.date.split("-");
        const [ano2, mes2, dia2] = formData.periodoInscricao.split("-");
        const novoEvento = {
            ...formData,
            date: `${dia}/${mes}/${ano}`,
            periodoInscricao: `até ${dia2}/${mes2}/${ano2}`
        };
        try {
            const response = await create(API_POSTS_URL, "eventos", novoEvento);
            if (response) {
                Toastify.sucesso("Evento criado com sucesso! ")
                setTimeout(() => {
                    window.location.reload();
                }, 500);
            } else {
                Toastify.erro("Erro ao fazer o evento. Por favor, tente novamente.");
            }
        } catch {
            Toastify.erro("Erro ao enviar o evento. Verifique sua conexão e tente novamente.");
        }
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger className="fixed bottom-8 right-8 z-50 text-white bg-[#307039] text-3xl w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-full shadow-lg cursor-pointer hover:bg-[#3d8547] transition">+</DialogTrigger>

        <DialogContent showCloseButton={false} className="sm:w-3/4 md:max-w-[750px] p-0 flex flex-col mx-auto border-1 border-[#307039] rounded-xl max-h-[90vh] overflow-y-auto">
            <DialogHeader className="bg-[#307039] rounded-t-lg" style={{ fontFamily: "var(--font-poppins)" }}>
            <DialogTitle className="pb-1 pt-4 md:pt-4 sm:pt-6 px-4 sm:text-xl md:text-lg md:text-center font-semibold text-white">
                CRIAÇÃO DE EVENTOS
            </DialogTitle>
            <DialogDescription className={"text-center sm:text-left md:text-center text-white px-14 sm:px-4 md:px-14"}>Crie um novo evento e compartilhe oportunidades com jogadoras da rede. Preencha as informações abaixo para divulgar seu evento.</DialogDescription>
            <Separator className="bg-[#214d27]" />
            </DialogHeader>
            <form onSubmit={handleSubmit} className="bg-white rounded-b-lg pb-2 px-4">
            <div className="gap-3 mb-4 md:mb-4 bg-white flex flex-col items-center md:flex-row">
                <div className="grid gap-4 sm:grid-cols-2 w-full md:flex-1 sm:px-2">
                    <div className="grid gap-3 md:gap-2">
                        <Label htmlFor="title" className={"sm:text-lg"}>Titulo:</Label>
                        <Input id="title" required name="title" value={formData.title} onChange={(e) => handleChange({ name: e.target.name, value: e.target.value })} className={"focus-visible:border-[#46844e] focus-visible:ring-[#a0b5a3] selection:bg-[#a0b5a3] sm:text-lg md:text-lg"} placeholder="Título"/>
                    </div>
                    <div className="grid gap-3 md:gap-2">
                        <Label htmlFor="description" className={"sm:text-lg"}>Descrição:</Label>
                        <Input id="description" required name="description" value={formData.description} onChange={(e) => handleChange({ name: e.target.name, value: e.target.value })} className={"focus-visible:border-[#46844e] focus-visible:ring-[#a0b5a3] selection:bg-[#a0b5a3] sm:text-lg md:text-lg"} placeholder="Descrição"/>
                    </div>
                    <div className="grid gap-3 md:gap-2">
                        <Label htmlFor="img" className={"sm:text-lg"}>Link da imagem:</Label>
                        <Input id="img" name="img" value={formData.img} onChange={(e) => handleChange({ name: e.target.name, value: e.target.value })} className={"focus-visible:border-[#46844e] focus-visible:ring-[#a0b5a3] selection:bg-[#a0b5a3] sm:text-lg md:text-lg"} placeholder="www.img.com/img.png"/>
                    </div>
                    <div className="grid gap-3 md:gap-2">
                        <Label htmlFor="localization" className={"sm:text-lg"}>Localização:</Label>
                        <Input id="localization" required name="localization" value={formData.localization} onChange={(e) => handleChange({ name: e.target.name, value: e.target.value })} className={"focus-visible:border-[#46844e] focus-visible:ring-[#a0b5a3] selection:bg-[#a0b5a3] sm:text-lg md:text-lg"} placeholder="Endereço, estado"/>
                    </div>
                    <div className="grid gap-3 md:gap-2">
                        <Label htmlFor="faixaEtaria" className={"sm:text-lg"}>Faixa Etária:</Label>
                        <Input id="faixaEtaria" required name="faixaEtaria" value={formData.faixaEtaria} onChange={(e) => handleChange({ name: e.target.name, value: e.target.value })} className={"focus-visible:border-[#46844e] focus-visible:ring-[#a0b5a3] selection:bg-[#a0b5a3] sm:text-lg md:text-lg"} placeholder="Sub-17 (2007–2009)"/>
                    </div>
                    <div className="grid gap-3 md:gap-2">
                        <Label htmlFor="vagas" className={"sm:text-lg"}>Número de vagas:</Label>
                        <Input id="vagas" type={"number"} min={0} step={1} required name="vagas" value={formData.vagas} onChange={(e) => handleChange({ name: e.target.name, value: e.target.value })} className={"focus-visible:border-[#46844e] focus-visible:ring-[#a0b5a3] selection:bg-[#a0b5a3] sm:text-lg md:text-lg"} placeholder="0"/>
                    </div>
                    <div className="grid gap-3 md:gap-2">
                        <Label htmlFor="tipo" className={"sm:text-lg"}>Tipo do evento:</Label>
                        <SelectElement key={90} className="focus-visible:border-[#46844e] focus-visible:ring-[#a0b5a3] selection:bg-[#a0b5a3] sm:text-lg md:text-lg w-full" title={"tipo"} name="tipo" onChange={handleChange} placeholder={"Tipo de evento"} options={tiposDeEvento} />
                    </div>
                    <div className="grid gap-3 md:gap-2">
                        <Label htmlFor="situacao" className={"sm:text-lg"}>Situação do evento:</Label>
                        <SelectElement key={100} className="focus-visible:border-[#46844e] focus-visible:ring-[#a0b5a3] selection:bg-[#a0b5a3] sm:text-lg md:text-lg w-full" title={"situacao"} name="situacao" onChange={handleChange} placeholder={"Situação do evento"} options={tiposDeStatus} />
                    </div>
                    <div className="grid gap-3 md:gap-2">
                        <Label htmlFor="date" className={"sm:text-lg"}>Data do evento:</Label>
                        <input type="date" name="date" value={formData.date || ""} onChange={(e) => handleChange({ name: e.target.name, value: e.target.value })} className="focus-visible:border-[#46844e] focus-visible:ring-[#a0b5a3] selection:bg-[#a0b5a3] sm:text-lg md:text-lg w-full border border-gray-300 rounded-lg px-3 py-1 text-gray-700 outline-none transition" required/>
                    </div>
                    <div className="grid gap-3 md:gap-2">
                        <Label htmlFor="periodoInscricao" className={"sm:text-lg"}>Limite de inscrição:</Label>
                        <input type="date" name="periodoInscricao" value={formData.periodoInscricao || ""} onChange={(e) => handleChange({ name: e.target.name, value: e.target.value })} className="focus-visible:border-[#46844e] focus-visible:ring-[#a0b5a3] selection:bg-[#a0b5a3] sm:text-lg md:text-lg w-full border border-gray-300 rounded-lg px-3 py-1 text-gray-700 outline-none transition" required/>
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
