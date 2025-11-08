import { Link } from "react-router-dom";
import { MessageSquare } from "lucide-react";

export default function CardUser({usuario, tipo="jogadoras"}) {

    return (
        <div className={`bg-white shadow-sm px-1 py-2 md:px-1 md:py-2 sm:px-2 sm:py-4 flex gap-2 md:gap-1 justify-between items-center ${tipo === "jogadoras" ? "border-[#705C9B]" : "border-[#3C8834]"} border-1 rounded-lg`}>
            <div className="flex gap-3 justify-center items-center md:gap-5">
                <Link to={`${tipo === "jogadoras" ? "/perfil/jogadora" : "/perfil/olheiro"}/${usuario.id}`}>
                    <img className={`w-10 h-10 sm:w-14 sm:h-14 md:w-14 md:h-14 ml-3 cursor-pointer rounded-full ${tipo === "jogadoras" ? "border-[#705C9B]" : "border-[#3C8834]"} border-2`} src={usuario["foto-perfil"]} alt="" />
                </Link>
                <div className="text-left">
                    <p className="font-semibold sm:text-2xl md:text-xl">{usuario.nome}</p>
                    <p className={`${tipo === "jogadoras" ? "text-[#5a1ddc]" : "text-[#5C9B5C]"} font-light sm:text-xl md:text-lg`}>{usuario.posicao}</p>
                </div>
            </div>
            <Link to={`${tipo === "jogadoras" ? "/perfil/jogadora" : "/perfil/olheiro"}/${usuario.id}`}>
                <button className={`flex text-sm sm:text-xl md:text-base ${tipo === "jogadoras" ? "text-[#5a1ddc]" : "text-[#5C9B5C]"} gap-2 items-center font-medium rounded-lg ${tipo === "jogadoras" ? "bg-[#c8b3f6]" : "bg-[#bef6b3]"} p-2.5 sm:p-3 sm:px-3.5 md:p-2.5 py-1 cursor-pointer mr-3 md:mr-2`}>
                    <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6 md:w-6 md:h-6" />
                    Perfil
                </button>
            </Link>

        </div>
    )
}