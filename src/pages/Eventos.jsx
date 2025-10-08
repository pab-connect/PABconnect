import { Separator } from "@/components/ui/separator";
import { CollapsibleGroup } from "../components/Eventos/CollapsibleGroup";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import CardEvento from "../components/Eventos/CardEvento";
import { useState, useEffect } from "react";
import { getAll, API_POSTS_URL, API_BASE_URL } from "@/services/apiService";
import CriarEventoDialog from "../components/DialogComponents/CriarEventoDialog";
import LoadingOverlay from "@/components/LoadingOverlay/LoadingOverlay";

export default function Eventos() {
    const [eventos, setEventos] = useState([]);
    const [formData, setFormData] = useState({
        inputPesquisa: "",
        inputTipo: "",
        inputLocalizacao: "",
        inputStatus: ""
    });
    const [jogadoras, setJogadoras] = useState([])
    const [carregando, setCarregando] = useState(true);
    
    async function fetchUsers() {
        try {
            const jogs = await getAll(API_BASE_URL, "jogadoras");
            setJogadoras(jogs);
        } catch (error) {
            console.error("Erro ao buscar jogadoras:", error);
        }
    }
    

    async function fetchEventos() {
        try {
          const eventos = await getAll(API_POSTS_URL, "eventos");
          setEventos(eventos);
          setCarregando(false);
        } catch (error) {
          console.error("Erro ao buscar posts:", error);
        }
      }
    
    useEffect(()=>{
        fetchEventos()
        fetchUsers()
    }, [])

    const userLocal = JSON.parse(localStorage.getItem("user"));

    let localizacoes = [...new Set(eventos.map(e => e.localization))].sort()
    const filtrados = eventos.filter(e =>
        (!formData.inputPesquisa || e.title.toLowerCase().includes(formData.inputPesquisa.toLowerCase())) &&
        (!formData.inputStatus || formData.inputStatus === "todos" || e.situacao.toLowerCase() === formData.inputStatus.toLowerCase()) &&
        (!formData.inputTipo || formData.inputTipo === "todos" || e.tipo.toLowerCase() === formData.inputTipo.toLowerCase()) &&
        (!formData.inputLocalizacao || formData.inputLocalizacao === "todos" || e.localization.toLowerCase() === formData.inputLocalizacao.toLowerCase())
    )

    return (
        <div style={{ fontFamily: "var(--font-poppins)" }} className="flex flex-col bg-[#DAD0F0] min-h-screen">
            <Header />
            <div className="flex flex-1 pt-[88px]">
                <Sidebar isDesktop={true} />
                {carregando && <LoadingOverlay />}
                <div className="flex flex-1 flex-col items-center p-4 px-8 mt-4 md:mt-6 lg:ml-64 text-[#705C9B]">
                    <h2 className="text-3xl md:text-5xl lg:text-4xl font-semibold md:self-start md:font-bold text-black mb-6">Eventos</h2>
                    <section className="w-full relative flex flex-col gap-6 md:gap-4">
                        <CollapsibleGroup key={100} formData={formData} setFormData={setFormData} localizacoes={localizacoes}/>
                        <Separator className={'bg-[#307039]'}/>
                        {userLocal.tipo==="organizacao" && <CriarEventoDialog/>}
                        <section className="grid gap-6 justify-center md:grid-cols-1 sm:grid-cols-2">
                            {filtrados.length === 0 ? 
                            <p className="text-center text-gray-600">Nenhum evento encontrado.</p> :
                            filtrados.map(evento=>(
                                    <CardEvento key={evento.id} jogadoras={jogadoras} evento={evento} userLocal={userLocal} situacao={evento.situacao} title={evento.title} img={evento.img} localization={evento.localization} date={evento.date} description={evento.description} faixaEtaria={evento.faixaEtaria} periodoInscricao={evento.periodoInscricao} vagas={evento.vagas} inscritas={eventos.inscritas}/>
                            ))}
                            </section>
                    </section>
                </div>
            </div>
            <Footer />
        </div>
        )
}