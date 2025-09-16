import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";

const Mensagens = () => {
    return(
        <div className="bg-[#DAD0F0]">
            <Header/>
            <div className=" flex flex-col items-center pt-30 p-6 gap-5 lg:ml-64 lg:pt-30 lg:p-10">
                <Sidebar isDesktop={true} />
                <div className="flex flex-row-2 justify-center gap-100">
                    <div className="border-2 border-[#705C9B] bg-gray-200 h-auto w-100">
                        <h1 className="text-4xl font-extrabold dark:text-[#705C9B] mb-8 flex flex-row justify-center">Mensagens</h1>
                    </div>
                    <div className="border-2 border-[#705C9B] bg-gray-200 h-auto w-100">
                        <h1 className="text-4xl font-extrabold dark:text-[#705C9B] mb-8 flex flex-row justify-center">Nome</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mensagens