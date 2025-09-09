import { 
    ThumbsUp,
    Share2,
} from 'lucide-react'
import Marta from "../../assets/imagem-marta.jpg"
import PostMarta from "../../assets/post-marta.jpg"

export default function CardPostMarta() {
    return (
        <div className="bg-white p-4 w-full rounded-xl mt-2 border border-[#85a095]">
            <div className='flex items-center justify-between'>
                <div className='flex gap-4 items-center'>
                    <img src={Marta} alt="foto-de-perfil" className="w-11 h-11 md:w-13 md:h-13 lg:w-16 lg:h-16 rounded-full border-2 border-[#9f92bc] ml-3"/>
                    <div className='flex flex-col'>
                        <div className='flex gap-2 items-center'>
                            <span className='font-bold text-xs md:text-base lg:text-lg'>Marta Vieira</span>
                            <div className="bg-[#9f92bc] w-1 h-1 lg:w-2 lg:h-2 rounded-full"></div>
                            <span className='text-[#9f92bc] text-xs md:text-base font-bold lg:text-lg'>5h</span>
                        </div>
                        <span className='text-[#705c9b] text-xs md:text-base lg:text-lg'>Clube Orlando Pride</span>
                    </div>
                </div> 
                <button className='bg-[#705c9b] px-2 py-1 mr-1 md:px-4 md:mr-3 lg:px-4 lg:mr-3 lg:py-2 rounded-full text-[#dad0f0] text-xs md:text-base lg:text-lg cursor-pointer'>seguindo</button>
            </div>
            <p className='m-3 text-xs md:text-sm lg:text-base'>Dentro de campo, nenhuma jogadora vence sozinha. É o time, a união, a tática. Cada uma de nós tem um papel fundamental na busca pelo mesmo objetivo. Feliz por mais um dia fazendo o que amo, ao lado de profissionais incríveis. O trabalho continua, sempre em busca da melhor versão de nós mesmas.</p>
            <p className='m-3 text-xs md:text-sm lg:text-base'>#TrabalhoEmEquipe #Foco #Futebol #OrlandoPride #SeleçãoFeminina</p>
            <div className='m-4'>
                <img src={PostMarta} alt="post-marta" className='rounded-3xl'/>
            </div>
            <div className='flex items-center justify-between text-[#705c9b] mt-3'>
                <div className="flex items-center">
                    <button className='flex-1 p-2 items-center justify-center cursor-pointer'><ThumbsUp className='w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7'/></button>
                    <span className='text-xs md:text-sm lg:text-base'>20k</span>
                </div>  
                <button className='cursor-pointer mr-3'><Share2 className='w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7'/></button> 
            </div>     
        </div>
    )
}