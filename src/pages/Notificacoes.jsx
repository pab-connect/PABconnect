import CardNotificacoes from "../components/CardNotificacoes/CardNotificacoes"

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
        <div className="flex flex-1 bg-[#DAD0F0]  min-h-screen">
            <div className="flex flex-1 flex-col items-center pt-[88px] p-4 mt-6 text-[#705C9B]">
                <h2 className="text-3xl font-semibold mb-6">Notificações</h2>
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
    )
};