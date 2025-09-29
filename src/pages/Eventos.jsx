import { Separator } from "@/components/ui/separator";
import { CollapsibleGroup } from "../components/Eventos/CollapsibleGroup";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import CardEvento from "@/components/Eventos/CardEvento";

export default function Eventos() {
    return (
        <div style={{ fontFamily: "var(--font-poppins)" }} className="flex flex-col bg-[#DAD0F0] min-h-screen">
            <Header />
            <div className="flex flex-1 pt-[88px]">
                <Sidebar isDesktop={true} />
                <div className="flex flex-1 flex-col items-center p-4 px-8 mt-4 md:mt-6 lg:ml-64 text-[#705C9B]">
                    <h2 className="text-3xl md:text-5xl lg:text-4xl font-semibold text-black mb-6 md:mb-9">Eventos</h2>
                    <section className="w-full flex flex-col gap-6">
                        <CollapsibleGroup/>
                        <Separator className={'bg-[#307039]'}/>
                        <section className="grid gap-6">
                            <CardEvento situacao="encerrado" title="Peneira Aberta Sub-17" img="https://www.portalcomunicare.com.br/wp-content/uploads/2023/07/Feminino_006.jpg" localization="Estádio Municipal de São Paulo, SP" date="11/02/2025 - 09:00" description="Venha participar da nossa peneira. As inscrições são gratuitas, com avaliação técnica e olheiros"/>
                            <CardEvento situacao="andamento" title="Guerreiras FC vs. Real FC" img="https://i.ytimg.com/vi/QHXA059YBAo/maxresdefault.jpg" localization="Mercado Livre Arena Pacaembu - SP" date="16/02/2025 - 15:00" description="As Guerreiras FC enfrentam o Real FC em um amistoso que promete muita emoção e talento em campo. Essa é uma oportunidade de ouro para atletas mostrarem suas habilidades diante de olheiros e comissão técnica. Venha apoiar o futebol feminino de base e descobrir os novos talentos do esporte!"/>
                            <CardEvento situacao="aberto" title="Copa Revelação Feminina Sub-20" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOs8OpB2vc71MDuDrIb74vORR6yi67lFvVXw&s" localization="Centro Esportivo Zona Sul – São Paulo, SP" date="22/02/2025 - 10:00" description="A Copa Revelação Feminina é um dos torneios mais aguardados do futebol de base. Reunindo equipes de todo o estado, o evento promove jogos de alto nível técnico, com olheiros convidados e cobertura da mídia esportiva local. Esta é uma grande chance de visibilidade para jovens talentos que sonham em ingressar no futebol profissional."/>
                        </section>
                    </section>
                </div>
            </div>
            <Footer />
        </div>
        )
}