import { Separator } from "@/components/ui/separator";
import { CollapsibleGroup } from "../components/Eventos/CollapsibleGroup";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import CardEvento from "@/components/Eventos/CardEvento";
import { useState, useEffect } from "react";
import { getAll, API_POSTS_URL } from "@/services/apiService";

export default function Eventos() {
    const [eventos, setEventos] = useState([]);

    async function fetchEventos() {
        try {
          const posts = await getAll(API_POSTS_URL, "eventos");
          setEventos(posts);
        } catch (error) {
          console.error("Erro ao buscar posts:", error);
        }
      }
    
    useEffect(()=>{
        fetchEventos()
    }, [])

    eventos && console.log(eventos)
    
    return (
        <div style={{ fontFamily: "var(--font-poppins)" }} className="flex flex-col bg-[#DAD0F0] min-h-screen">
            <Header />
            <div className="flex flex-1 pt-[88px]">
                <Sidebar isDesktop={true} />
                <div className="flex flex-1 flex-col items-center p-4 px-8 mt-4 md:mt-6 lg:ml-64 text-[#705C9B]">
                    <h2 className="text-3xl md:text-5xl lg:text-4xl font-semibold md:self-start md:font-bold text-black mb-6">Eventos</h2>
                    <section className="w-full flex flex-col gap-6 md:gap-4">
                        <CollapsibleGroup/>
                        <Separator className={'bg-[#307039]'}/>
                        <section className="grid gap-6 justify-center md:grid-cols-1 sm:grid-cols-2">
                            {eventos && eventos.map(evento=>(
                                <CardEvento key={evento.id} situacao={evento.situacao} title={evento.title} img={evento.img} localization={evento.localization} date={evento.date} description={evento.description} faixaEtaria={evento.faixaEtaria} periodoInscricao={evento.periodoInscricao} vagas={evento.vagas} inscritas={eventos.inscritas}/>
                            ))}
                            </section>
                    </section>
                </div>
            </div>
            <Footer />
        </div>
        )
}