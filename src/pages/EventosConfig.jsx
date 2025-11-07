import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import { Check, X } from "lucide-react";
import { useParams } from "react-router-dom"
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import AccordionEvento from "@/components/Eventos/AccordionEvento";
import TimesEvento from "@/components/Eventos/TimesEvento";
import useData from "@/services/useData";
import LoadingOverlay from "@/components/LoadingOverlay/LoadingOverlay";
import { useState, useEffect } from "react";
import SelectElement from "../components/Eventos/SelectElement"
import { Toastify } from "@/components/Toastify/Toastify";
import TooltipCase from "@/components/Eventos/TooltipCase";
import InfoJogadoraDialog from "@/components/DialogComponents/InfoJogadoraDialog";
import DelEventoDialog from "@/components/DialogComponents/DelEventoDialog";


export default function EventosConfig() {
    const params = useParams()
    const idEvento = params.id
    const { data: eventos, loading: loadingEventos } = useData("eventos");
    const { data: jogadoras, loading: loadingJogadoras } = useData("jogadoras");
    const evento = eventos.filter(e=>e.id===idEvento)[0]
    const tiposDeStatus = ["encerrado", "andamento", "aberto"]
    const [formData, setFormData] = useState({
        title: "",
        situacao: "",
        localization: "",
        date: "",
        description: "",
        faixaEtaria: "",
        qtdTimes: 0
    });

    const handleChange = ({ name, value }) => {
        if(name === "date" && value){
            const [ano, mes, dia] = value.split("-");
            value = `${dia}/${mes}/${ano}`;
        }
        setFormData(prevData => ({
            ...prevData,
            [name]: value,
        }));
    };

    useEffect(() => {
        if (evento) {
          setFormData(prev => ({ ...prev, ...evento }));
        }
      }, [evento]);
    
    const originalDate = formData.date ? formData.date.split(" ")[0].split("/").reverse().join("-") : "";
    
    async function handleDeleteSubmit(e) {
        e.preventDefault()
        Toastify.erro("Função não disponivel em preview")
    }

    async function handleSubmit(e) {
        e.preventDefault()
        Toastify.erro("Função não disponivel em preview")
    }

    async function removerJogadora() {
        Toastify.erro("Função não disponivel em preview")
    }

    async function aceitarJogadora() {
        Toastify.erro("Função não disponivel em preview")
    }

    return (
        <div style={{ fontFamily: "var(--font-poppins)" }} className="flex flex-col bg-[#DAD0F0] min-h-screen">
            <Header />
            
            <div className="flex flex-1 pt-[88px]">
                <Sidebar isDesktop={true} />
                {(loadingEventos || loadingJogadoras) && <LoadingOverlay />}
                <div className="flex flex-1 flex-col p-4 px-8 mt-4 md:mt-6 lg:ml-64">
                    <h1 className="text-2xl font-semibold mb-4">{evento?.title}</h1>
                    <section className="flex flex-col md:w-full md:flex-row gap-4">
                        <div className="md:w-1/3 md:min-w-[350px]">
                            <AccordionEvento nmbInscricao={evento?.jogadorasInscritas.length} nmbJogadoras={evento?.jogadorasAprovadas.length} childrenInscricao={
                                <ul className="flex flex-col gap-1">
                                    {evento?.jogadorasInscritas.map(j=>(
                                        <li className="bg-gray-100 border-1 text-lg w- items-center rounded-md p-2 flex justify-between" key={j.id}>
                                            {
                                                <TooltipCase trigger={<InfoJogadoraDialog cpf={j.cpf} contato={j.contato} nome={jogadoras?.filter(jg=>jg.id==j.id)[0]?.nome} id={jogadoras?.filter(jg=>jg.id==j.id)[0]?.id} idade={jogadoras?.filter(jg=>jg.id==j.id)[0]?.idade} img={jogadoras?.filter(jg=>jg.id==j.id)[0]?.["foto-perfil"]} />} children={`Clique aqui pra ver mais informações`} />
                                            }
                                            <div className="flex gap-4">
                                                <X onClick={()=>removerJogadora()} size={30} color="white" className="bg-[#703030] hover:bg-red-500 hover:scale-102 transition-all cursor-pointer rounded-sm w-8 h-8 p-1"/>
                                                <Check onClick={()=>aceitarJogadora()} size={30} color="white" className="bg-[#307033] hover:bg-green-600 hover:scale-102 transition-all cursor-pointer rounded-sm w-8 h-8 p-1"/>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            } childrenJogadoras={
                                <ul className="flex flex-col gap-1">
                                    {evento?.jogadorasAprovadas.map(j=>(
                                        <li className="bg-gray-100 border-1 text-lg w- items-center rounded-md p-2 flex justify-between" key={j.id}>
                                            {
                                                <TooltipCase trigger={<InfoJogadoraDialog cpf={j.cpf} contato={j.contato} nome={jogadoras?.filter(jg=>jg.id==j.id)[0]?.nome} id={jogadoras?.filter(jg=>jg.id==j.id)[0]?.id} idade={jogadoras?.filter(jg=>jg.id==j.id)[0]?.idade} img={jogadoras?.filter(jg=>jg.id==j.id)[0]?.["foto-perfil"]} />} children={`Clique aqui pra ver mais informações`} />
                                            }
                                            <div className="flex gap-4">
                                                <X onClick={()=>removerJogadora()} size={30} color="white" className="bg-[#703030] hover:bg-red-500 hover:scale-102 transition-all cursor-pointer rounded-sm w-8 h-8 p-1"/>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            }/>
                            <TimesEvento evento={evento} jogadoras={jogadoras}/>
                        </div>
                        <div className="bg-white rounded-md p-3 md:h-fit md:w-2/3">
                            <h2 className="text-lg font-medium mb-3">Editar informações do evento</h2>
                            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                                <div className="grid gap-1 md:gap-2">
                                    <Label htmlFor="title" className={"sm:text-lg"}>Titulo:</Label>
                                    <Input id="title" required name="title" value={formData.title} onChange={(e) => handleChange({ name: e.target.name, value: e.target.value })} className={"focus-visible:border-[#46844e] focus-visible:ring-[#a0b5a3] selection:bg-[#a0b5a3] sm:text-lg md:text-lg"} placeholder="Título"/>
                                </div>
                                <div className="grid gap-1 md:gap-2">
                                    <Label htmlFor="description" className={"sm:text-lg"}>Descrição:</Label>
                                    <Input id="description" required name="description" value={formData.description} onChange={(e) => handleChange({ name: e.target.name, value: e.target.value })} className={"focus-visible:border-[#46844e] focus-visible:ring-[#a0b5a3] selection:bg-[#a0b5a3] sm:text-lg md:text-lg"} placeholder="Descrição"/>
                                </div>
                                <div className="grid gap-1 md:gap-2">
                                    <Label htmlFor="localization" className={"sm:text-lg"}>Localização:</Label>
                                    <Input id="localization" required name="localization" value={formData.localization} onChange={(e) => handleChange({ name: e.target.name, value: e.target.value })} className={"focus-visible:border-[#46844e] focus-visible:ring-[#a0b5a3] selection:bg-[#a0b5a3] sm:text-lg md:text-lg"} placeholder="Título"/>
                                </div>
                                <div className="grid gap-1 md:gap-2">
                                    <Label htmlFor="qtdTimes" className={"sm:text-lg"}>Número de times:</Label>
                                    <Input id="qtdTimes" type={"number"} min={0} step={1} name="qtdTimes" value={formData.qtdTimes} onChange={(e) => handleChange({ name: e.target.name, value: e.target.value })} className={"focus-visible:border-[#46844e] focus-visible:ring-[#a0b5a3] selection:bg-[#a0b5a3] sm:text-lg md:text-lg"} placeholder="Sub-17 (2007–2009)"/>
                                </div>
                                <div className="grid gap-1 md:gap-2">
                                    <Label htmlFor="faixaEtaria" className={"sm:text-lg"}>Faixa Etária:</Label>
                                    <Input id="faixaEtaria" required name="faixaEtaria" value={formData.faixaEtaria} onChange={(e) => handleChange({ name: e.target.name, value: e.target.value })} className={"focus-visible:border-[#46844e] focus-visible:ring-[#a0b5a3] selection:bg-[#a0b5a3] sm:text-lg md:text-lg"} placeholder="Sub-17 (2007–2009)"/>
                                </div>
                                <div className="grid gap-1 md:gap-2">
                                    <Label htmlFor="date" className={"sm:text-lg"}>Data do evento:</Label>
                                    <input type="date" name="date" value={originalDate || ""} onChange={(e) => handleChange({ name: e.target.name, value: e.target.value })} className="focus-visible:border-[#46844e] focus-visible:ring-[#a0b5a3] selection:bg-[#a0b5a3] sm:text-lg md:text-lg w-full border border-gray-300 rounded-lg px-3 py-1 text-gray-700 outline-none transition" required/>
                                </div>
                                <div className="grid gap-1 md:gap-2">
                                    <Label htmlFor="situacao" className={"sm:text-lg"}>Situação do evento:</Label>
                                    <SelectElement key={100} className="focus-visible:border-[#46844e] focus-visible:ring-[#a0b5a3] selection:bg-[#a0b5a3] sm:text-lg md:text-lg w-full" title={"situacao"} name="situacao" onChange={handleChange} value={formData.situacao} placeholder={"Situação do evento"} options={tiposDeStatus} />
                                </div>
                                <div className="flex gap-2 self-end sm:items-center sm:mx-auto">
                                    <DelEventoDialog handle={handleDeleteSubmit} />
                                    <Button type="submit" className={"cursor-pointer bg-[#307039] sm:mt-2 hover:bg-[#46844e] sm:text-lg sm:mb-2 sm:px-7"}>Salvar</Button>
                                </div>
                            </form>
                        </div>
                    </section>
                </div>
            </div>
            <Footer />
        </div>
    )
}