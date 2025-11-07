import { Link } from "react-router-dom";
import { Plus, Check } from "lucide-react";
import { Toastify } from "../Toastify/Toastify";
import { useState } from "react";

export default function CardUserAdd({ usuario, usuarioLogado }) {
    const [segue, setSegue] = useState(usuarioLogado.seguindo.includes(usuario.username));

    async function handleClick() {
        Toastify.erro("Função não disponivel em preview")
    }

    return (
        <div className="bg-white py-2 flex gap-2 justify-between items-center rounded-lg">
            <div className="flex gap-3 justify-center items-center">
                <Link to={`/perfil/jogadora/${usuario.id}`}>
                    <img className="w-12 h-12 sm:w-14 sm:h-14 md:w-13 md:h-13 cursor-pointer rounded-full border-[#705c9b] border-2" src={usuario["foto-perfil"]} alt="" />
                </Link>
                <div className="text-left">
                    <p className="font-semibold text-lg sm:text-2xl md:text-lg">{usuario.nome}</p>
                    <p className="text-md text-[#5a1ddc] sm:text-xl md:text-base font-light">{usuario.posicao}</p>
                </div>
            </div>
            {segue ? (
                <button onClick={handleClick} className="rounded-lg bg-gray-200 px-3 py-1 cursor-pointer">
                    <Check className="w-5 h-5" />
                </button>
            ) : (
                <button onClick={handleClick} className="flex gap-2 items-center font-medium rounded-lg bg-gray-200 px-3 py-1 cursor-pointer">
                    <Plus className="w-5 h-5" />
                </button>
            )}
        </div>
    )
}