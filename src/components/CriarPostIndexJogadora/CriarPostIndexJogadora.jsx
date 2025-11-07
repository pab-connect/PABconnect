import { 
    Camera,
    SquarePen,
 } from 'lucide-react';
import { API_POSTS_URL } from "../../services/apiService";
import { useState } from 'react';
import { Toastify } from "../Toastify/Toastify";
import IndexDialog from '../DialogComponents/IndexDialog';

export default function CriarPostIndexJogadora() {
    const [imgUrl, setImgUrl] = useState("")
    const [text, setText] = useState("")

    return (
        <div className='flex flex-col bg-white p-4 w-full rounded-xl border border-[#85a095]'>
            <div className="flex-1 m-3">
                <input 
                    value={text} 
                    onChange={(e)=>setText(e.target.value)}
                    className="p-2 w-full rounded-full border border-[#307039]" 
                    type="text" 
                    placeholder="Comece um Post"
                />
            </div>
            <div className='flex items-center justify-between'>
                <IndexDialog setImgUrl={setImgUrl} imgUrl={imgUrl}/>
                <button onClick={()=>Toastify.erro("Função não disponivel em preview")} className='flex items-center gap-2 p-4 cursor-pointer text-[#307039] hover:scale-102 duration-300 transition-all'>
                    <SquarePen className='w-6 h-6 md:w-7 md:h-7 lg:w-9 lg:h-9'/>
                    <span className='font-bold text-sm md:text-base lg:text-lg'>Escrever</span>
                </button>
            </div>
        </div>
    )
}
