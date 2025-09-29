import { Calendar, MapPin, X, Check, Hourglass } from 'lucide-react';

export default function CardEvento() {
    return (
        <div className="grid grid-cols-1 auto-rows-auto gap-4 justify-items-center items-center bg-white p-6 rounded-lg">
            <img src="https://www.portalcomunicare.com.br/wp-content/uploads/2023/07/Feminino_006.jpg" alt="" className="w-40 border-black border-2 rounded-lg"/>
            <section className="">
                <div className='flex flex-col items-center'>
                    <h5 className='font-semibold'>Peneira Aberta Sub-17</h5>
                    <div className='text-red-500 flex'>
                        <X/>
                        Encerrado
                    </div>
                </div>
                <div className='flex gap-2 my-2'>
                    <MapPin className='text-[#307039]'/>
                    Estádio Municipal de São Paulo, SP
                </div>
                <div className='flex gap-2 my-2'>
                    <Calendar className='text-[#307039]'/>
                    11/02/2025 - 09:00
                </div>
                <p>Venha participar da nossa peneira. As inscrições são gratuitas, com avaliação técnica e olheiros</p>
            </section>
            <section className=''>
                <button className='bg-[#307039] text-white px-6 py-2 rounded-lg'>Mais informações</button>
            </section>
        </div>
    )
}