import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";

const Mensagens = () => {
    return(
        <div className="bg-[#DAD0F0]">
            <Header/>
            <div className=" flex flex-col items-center pt-30 p-6 gap-5 lg:ml-64 lg:pt-30 lg:p-10">
                <Sidebar isDesktop={true} />
                <div className="flex flex-row-2 justify-center gap-50">
                    <div className="border-2 border-[#705C9B] bg-gray-200 h-auto w-150">
                        <h1 className="text-4xl font-extrabold dark:text-[#705C9B] mb-8 flex flex-row justify-center">Mensagens</h1>
                        <div className="flex items-center gap-4 p-4">
                        <img src="img.png" alt="" className="w-20 h-20 rounded-full"/>
                        <div className="flex-1">
                            <h2 className="text-lg font-semibold">Nome</h2>
                            <p className="text-gray-600 text-sm">Cargo</p>
                        </div>
                        </div>
                    </div>
                    <div className="border-2 border-[#705C9B] bg-gray-200 h-auto w-150">
                        <h1 className="text-4xl font-extrabold dark:text-[#705C9B] mb-8 flex flex-row justify-center">Nome</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mensagens