import { Calendar, MapPin, X, Check, Hourglass } from 'lucide-react';

export default function CardEvento({ situacao="aberto", title, img, localization, date, description }) {
    return (
        <div className="grid grid-cols-1 auto-rows-auto gap-4 justify-items-center items-center bg-white p-6 rounded-lg">
            <img src={img} alt="" className="w-40 border-black border-2 rounded-lg"/>
            <section className="">
                <div className='flex flex-col items-center'>
                    <h5 className='font-semibold'>{title}</h5>
                    {situacao === "aberto" && 
                        <div className='text-green-700 flex'>
                            <Check/>
                            Aberto
                        </div>
                    }
                    {situacao === "andamento" && 
                        <div className='text-yellow-400 flex'>
                            <Hourglass/>
                            Em andamento
                        </div>
                    }
                    {situacao === "encerrado" && 
                        <div className='text-red-500 flex'>
                            <X/>
                            Encerrado
                        </div>
                    }
                </div>
                <div className='flex gap-2 my-2'>
                    <MapPin className='text-[#307039]'/>
                    {localization}
                </div>
                <div className='flex gap-2 my-2'>
                    <Calendar className='text-[#307039]'/>
                    {date}
                </div>
                <p>{description}</p>
            </section>
            <section className='flex flex-col items-center gap-2'>
                <button className='bg-[#307039] text-white px-6 py-2 rounded-lg'>Mais informações</button>
                {situacao == "aberto" && <button className='bg-[#307039] text-white px-6 py-2 rounded-lg'>Inscrever-se</button>}
            </section>
        </div>
    )
}