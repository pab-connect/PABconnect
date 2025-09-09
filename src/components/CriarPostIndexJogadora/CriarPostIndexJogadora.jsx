import { 
    Camera,
    SquarePen,
 } from 'lucide-react';

export default function CriarPostIndexJogadora() {
    return (
        <div className='flex flex-col bg-white p-4 w-full rounded-xl border border-[#85a095]'>
            <div className="flex-1 m-3">
                <input className="p-2 w-full rounded-full border border-[#307039]" type="text" placeholder="Comece um Post"/>
            </div>
            <div className='flex items-center justify-between'>
                <div className="flex items-center text-[#307039]">
                    <button className='flex-1 p-4 items-center justify-center cursor-pointer'><Camera className='w-6 h-6 md:w-7 md:h-7 lg:w-9 lg:h-9'/></button>
                    <span className='font-bold text-sm md:text-base lg:text-lg'>Mídia</span>
                </div>
                <div className="flex items-center text-[#307039]">
                    <span className='font-bold text-sm md:text-base lg:text-lg'>Escrever</span>
                    <button className='flex-1 p-3 items-center justify-center cursor-pointer'><SquarePen className='w-6 h-6 md:w-7 md:h-7 lg:w-9 lg:h-9'/></button>
                </div>
            </div>
        </div>
    )
}