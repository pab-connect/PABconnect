import { 
    Camera,
    SquarePen,
 } from 'lucide-react';
import { create, API_POSTS_URL } from "../../services/apiService";
import { useState } from 'react';
import { Toastify } from "../Toastify/Toastify";
import IndexDialog from '../DialogComponents/IndexDialog';

export default function CriarPostIndexJogadora({ idJogadora, onPostCreated }) {
    const [imgUrl, setImgUrl] = useState("")
    const [text, setText] = useState("")

    async function handleCreate() {
        const agora = new Date();           
        const isoString = agora.toISOString();
        const dateAtual = isoString.split(".")[0] + "Z";

        const dataToSend = {
            usuario: idJogadora,
            tipoUsuario: "jogadoras",
            datahora: dateAtual,
            texto: text,
            midia: imgUrl,
            curtidas: 0
        };

        try {
            const response = await create(API_POSTS_URL, "posts", dataToSend);
            if (response) {
                console.log("Post criado com sucesso! Resposta da API:", response);
                setImgUrl("");
                setText("");
                if (onPostCreated) onPostCreated();
            } else {
                Toastify.erro("Erro ao fazer o post. Por favor, tente novamente.");
            }
        } catch (error) {
            Toastify.erro("Erro ao enviar o post. Verifique sua conexão e tente novamente.");
            console.error(error);
        }
    }

    return (
        <div className='flex flex-col bg-white p-4 w-full rounded-xl border border-[#85a095]'>
            <div className="flex-1 m-3">
                <input 
                    value={text} 
                    onChange={e => setText(e.target.value)} 
                    className="p-2 w-full rounded-full border border-[#307039]" 
                    type="text" 
                    placeholder="Comece um Post"
                />
            </div>
            <div className='flex items-center justify-between'>
                <IndexDialog setImgUrl={setImgUrl} imgUrl={imgUrl}/>
                <button onClick={handleCreate} className='flex items-center gap-2 p-4 cursor-pointer text-[#307039] hover:scale-102 duration-300 transition-all'>
                    <SquarePen className='w-6 h-6 md:w-7 md:h-7 lg:w-9 lg:h-9'/>
                    <span className='font-bold text-sm md:text-base lg:text-lg'>Escrever</span>
                </button>
            </div>
        </div>
    )
}
