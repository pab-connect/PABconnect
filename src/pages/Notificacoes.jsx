import CardNotificacoes from "../components/CardNotificacoes/CardNotificacoes"
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";

export default function Notificacoes() {
    const notificacoes = [
        {
            titulo: "Boas vindas",
            descricao: "Cadastro concluído! Seja bem-vinda(o) ao PAB Connect."
        },
        {
            titulo: "Novata",
            descricao: "Primeira vez por aqui? Explore os recursos e personalize sua experiência."
        },
        {
            titulo: "Perfil",
            descricao: "Complete seu perfil para aproveitar ao máximo o PAB Connect."
        },
    ];
    return (
        <div className="flex flex-col bg-[#DAD0F0] min-h-screen">
            <Header />
            <div className="flex flex-1 pt-[88px]">
                <Sidebar isDesktop={true} />
                <div className="flex flex-1 flex-col items-center p-4 mt-4 md:mt-6 lg:ml-64 text-[#705C9B]">
                    <h2 className="text-3xl md:text-5xl lg:text-4xl font-semibold mb-6 md:mb-9">Notificações</h2>
                    <div className="grid gap-4 w-full">
                        {notificacoes.map((n, index) => (
                            <CardNotificacoes 
                                key={index}
                                titulo={n.titulo}
                                descricao={n.descricao}
                            />
                        ))}
                    </div>
                </div>
            </div>
        <Footer />
        </div>
    )
};