import { 
    CircleUserRound,
    ThumbsUp,
    Share2,
} from 'lucide-react';

export default function PostUser() {
    return (
        <div className="bg-white p-4 w-full rounded-xl border border-[#85a095]">
            <div className='flex items-center justify-between'>
                <div className='flex gap-4 items-center'>
                    <CircleUserRound className='text-[#705c9b] w-10 h-10 md:w-12 md:h-12 lg:w-15 lg:h-15 ml-3 cursor-pointer'/>
                    <div className='flex flex-col'>
                        <div className='flex gap-2 items-center'>
                            <span className='font-bold text-xs md:text-base lg:text-lg'>Jogadora cara</span>
                            <div className="bg-[#9f92bc] w-1 h-1 lg:w-2 lg:h-2 rounded-full"></div>
                            <span className='text-[#9f92bc] text-xs md:text-base lg:text-lg font-bold'>5h</span>
                        </div>
                        <span className='text-[#705c9b] text-xs md:text-base lg:text-lg'>Clube esportivo acreano</span>
                    </div>
                </div>
                <button className='bg-[#705c9b] px-2 py-1 mr-1 md:px-4 md:mr-3 lg:px-4 lg:mr-3 lg:py-2 rounded-full text-[#dad0f0] text-xs md:text-base lg:text-lg cursor-pointer hover:scale-95 duration-300 transition-all'>seguindo</button>
            </div>
            <p className='m-3 text-xs md:text-sm lg:text-base'>Fim de treino e a gente tá como? Só o bagaço kkkkkkk mas com a sensação de dever cumprido. O professor pegou pesado hoje, mas é assim que a gente evolui! Partiu açaí pra recuperar as energias que não sou de ferro. 😂💪</p>
            <div className='flex items-center justify-between text-[#705c9b]'>
                <div className="flex items-center">
                    <button className='flex-1 p-2 items-center justify-center cursor-pointer hover:scale-110 duration-300 transition-all'><ThumbsUp className='w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7'/></button>
                    <span className='text-xs md:text-sm lg:text-base'>250</span>
                </div>  
                <button className='cursor-pointer mr-3 hover:scale-110 duration-300 transition-all'><Share2 className='w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7'/></button> 
            </div>     
        </div>
    )
}