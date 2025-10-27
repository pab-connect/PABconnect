import CardUsuario from "./CardUsuario";
import SocialCard from "./SocialCard";

export default function QuemSomos() {
    return (
        <section id="quemSomos" className="bg-[#3c8834] w-full p-10 md:p-12 flex flex-col items-center gap-10">
            <h2 className="text-white text-3xl sm:text-4xl font-bold text-center">Quem nós somos</h2>
            <section className="flex flex-col md:flex-row gap-3">
                <CardUsuario nome={"Luana Maluf"} imagem={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeqZJcBVwC2ZyVVaFDHAzIVjq2oxI12Vcb1g&s"} idade={"31 Anos"} descricao={"Luana Maluf é uma jornalista esportiva, apresentadora e criadora de conteúdo brasileira, conhecida por seu trabalho em comentários de futebol e pela defesa do futebol feminino."}/>
                <CardUsuario nome={"Alessandra Xavier"} imagem={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmd7PAQNBLf_W4hrAn9J8OhCpdQUAcpotdIQ&s"} idade={"33 Anos"} descricao={"Alê Xavier é jornalista esportiva, apresentadora e ex-jogadora de futebol, reconhecida por seu engajamento na valorização do futebol feminino e por levar uma nova perspectiva feminina à cobertura esportiva no Brasil."}/>
            </section>
            <section className="flex gap-4 flex-col lg:flex-row">
                <SocialCard img="https://yt3.googleusercontent.com/3AsDJjJSPZkpyK-m2XYcI9m4gjgi1WPTkjzaY0V9i5Z0IJj0o-lIUWdQGKql_sInZlUn00uzVGM=s120-c-k-c0x00ffffff-no-rj" nome="Passa a Bola" username="passaabola" descricao="210 mil inscritos • 860 vídeos" link="https://www.youtube.com/@passabola" textoBotao="Visite nosso canal"/>
                <SocialCard img="https://yt3.googleusercontent.com/3AsDJjJSPZkpyK-m2XYcI9m4gjgi1WPTkjzaY0V9i5Z0IJj0o-lIUWdQGKql_sInZlUn00uzVGM=s120-c-k-c0x00ffffff-no-rj" nome="Passa a Bola" username="passaabola" descricao="245 mil seguidores • 2662 posts" link="https://www.instagram.com/passabola" textoBotao="Visite nosso insta"/>
                <SocialCard img="https://yt3.googleusercontent.com/3AsDJjJSPZkpyK-m2XYcI9m4gjgi1WPTkjzaY0V9i5Z0IJj0o-lIUWdQGKql_sInZlUn00uzVGM=s120-c-k-c0x00ffffff-no-rj" nome="Passa Bola ⚽" username="passabola" descricao="142 mil seguidores • 4 milhões de curtidas" link="https://www.tiktok.com/@passabola" textoBotao="Visite nosso TikTok"/>
            </section>
        </section>
    )
}