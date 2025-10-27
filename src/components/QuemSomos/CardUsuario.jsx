export default function CardUsuario({nome, imagem, idade, descricao}) {
    return (
        <div className="flex flex-col lg:flex-row gap-4 md:max-w-1/2 items-center p-5 bg-white rounded-lg">
            <div className="relative">
                <img className="w-12 h-12 absolute bottom-5 right-5" src="https://i.ibb.co/HLcs11N5/Novo-projeto-23-78-E76-D8.png" alt="" />
                <img className="h-40 min-w-40 aspect-square object-cover rounded-full border-4 border-[#307039]" src={imagem} alt="" />
            </div>
            <div className="py-2 text-center md:text-start">
                <p className="text-2xl font-bold text-[#307039]">{nome}</p>
                <p>{idade}</p>
                <p>{descricao}</p>
            </div>
        </div>
    )
}