import { 
    Info, 
} from 'lucide-react';

export default function CardNotificacoes({titulo, descricao}) {
    return (
        <div className="flex flex-col gap-3 md:gap-2 lg:gap-1 p-4 lg:p-3 mb-2 mx-3 lg:mx-5 shadow-md rounded-lg bg-white">
        <div className='flex gap-1'>
            <Info className='md:w-6 md:h-7 lg:w-6 lg:h-7'/>
            <h3 className="text-base md:text-xl lg:text-lg font-bold">{titulo}</h3>
        </div>
            <p className="text-base md:text-xl lg:text-lg">{descricao}</p>
        </div>
    )
}