import RadarTalentos from "../components/RadarTalentos/RadarTalentos"
import PostUser from "../components/PostUser/PostUser"
import PostMarta from "../components/PostMarta/PostMarta"

export default function IndexAgente() {
    return (
        <div className="flex flex-1 bg-[#DAD0F0]">
            <div className="flex flex-1 flex-col items-center pt-30 p-6 gap-5 lg:ml-64 lg:pt-30 lg:p-10">
                <RadarTalentos />
                <hr className="w-full my-4 border-t-2 border-[#457c50]" />
                <PostUser />
                <PostMarta />
            </div>
        </div>
    )
}