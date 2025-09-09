import CriarPostIndexJogadora from "../components/CriarPostIndexJogadora/CriarPostIndexJogadora"
import PostUser from "../components/PostUser/PostUser"
import PostMarta from "../components/PostMarta/PostMarta"

export default function IndexJogadora() {
    return (
        <div className="flex flex-1 bg-[#DAD0F0]">
            <div className="flex flex-1 flex-col items-center pt-30 p-6 gap-5 lg:ml-64 lg:pt-30 lg:p-10">
                <CriarPostIndexJogadora />
                <hr className="w-full my-4 border-t-2 border-[#9f92bc]" />
                <PostUser />
                <PostMarta />
            </div>
        </div>
    )
}