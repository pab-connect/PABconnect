export default function CardRadarTalentos() {
    return (
        <div className="flex flex-col bg-gradient-to-r from-[#3b8734] to-[#325d54] p-4 w-full rounded-xl">
            <div className="flex-1 m-3">
                <div className='flex gap-4 items-center justify-between'>
                    <div className='flex flex-col'>
                        <span className='text-white font-bold text-base md:text-lg lg:text-2xl'>Radar de Talentos</span>
                        <div className='flex items-center gap-2 mt-1'>
                            <span className='text-white font-bold text-4xl md:text-5xl lg:text-6xl'>250</span>
                            <span className='text-white text-sm md:text-base lg:text-lg font-bold items-center'>Talentos</span>
                        </div>
                        <span className='text-white text-base md:text-lg lg:text-xl font-light mt-1'>Cadastrados na plataforma</span>
                    </div>
                    <div className='flex flex-col'>
                        <button className='bg-[#1d3631] text-green-200 m-1 p-1 md:m-2 md:p-2 lg:p-3 lg:m-3 rounded-xl text-sm md:text-base lg:text-lg cursor-pointer'>Talentos na sua região</button>
                        <button className='bg-[#1d3631] text-green-200 m-1 p-1 md:m-2 md:p-2 lg:p-3 lg:m-3 rounded-xl text-sm md:text-base lg:text-lg cursor-pointer'>Ver Novas Cadastradas</button>
                    </div>
                </div>
            </div>
        </div>
    )
}