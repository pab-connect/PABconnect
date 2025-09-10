import { 
    Info, 
} from 'lucide-react';

export default function CardNotificacoes({titulo, descricao}) {
    return (
        <div className="flex flex-col gap-3 p-4 mb-2 mx-3 shadow-md rounded-lg bg-white">
        <div className='flex gap-1'>
            <Info />
            <h3 className="text-base font-bold">{titulo}</h3>
        </div>
            <p className="text-base ">{descricao}</p>
        </div>
    )
}