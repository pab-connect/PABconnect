import { Calendar, MapPin, X, Check, Hourglass } from 'lucide-react';

export default function CardEvento({ situacao="aberto", title, img, localization, date, description }) {
    return (
        <div className={`flex flex-col gap-4 max-w-90 sm:max-w-full justify-center items-center md:items-start bg-white md:bg-transparent md:border-none p-6 sm:p-8 md:pl-0 md:pb-0 rounded-lg ${situacao=="aberto" ? "border-green-700 border-1" : situacao=="andamento" ? "border-yellow-400 border-1" : "border-red-500 border-1"}`}>
            <div className='flex flex-col md:flex-row md:items-start items-center gap-3 md:gap-6'>
                <img src={img} alt="" className="w-40 cursor-pointer hover:scale-99 hover:shadow-md transition-all sm:w-50 h-fit border-black border-2 rounded-lg"/>
                <section className="w-full self-start">
                    <div className='flex flex-col md:flex-row md:gap-6 items-center md:items-start'>
                        <h5 className='font-semibold text-center sm:text-lg cursor-pointer hover:text-purple-950 transition-all'>{title}</h5>
                        {situacao === "aberto" && 
                            <div className='text-green-700 flex'>
                                <Check/>
                                Aberto
                            </div>
                        }
                        {situacao === "andamento" && 
                            <div className='text-yellow-400 md:text-yellow-600 flex'>
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
                    <div className='flex gap-2 sm:text-lg my-2'>
                        <MapPin className='text-[#307039]'/>
                        {localization}
                    </div>
                    <div className='flex gap-2 sm:text-lg my-2'>
                        <Calendar className='text-[#307039]'/>
                        {date}
                    </div>
                    <p className='sm:text-lg'>{description}</p>
                </section>
            </div>
            <section className='flex md:ml-56 flex-col md:flex-row items-center gap-1 md:gap-3 sm:mt-auto md:mt-0'>
                <button className='bg-[#307039] hover:bg-[#295f30] transition-all cursor-pointer hover:outline-[#1d4422] hover:outline-1 text-white px-6 py-2 rounded-lg sm:text-lg'>Mais informações</button>
                {situacao == "aberto" && <button className='bg-[#307039] hover:bg-[#295f30] transition-all cursor-pointer hover:outline-[#1d4422] hover:outline-1 sm:text-lg text-white px-6 py-2 rounded-lg'>Inscrever-se</button>}
            </section>
        </div>
    )
}