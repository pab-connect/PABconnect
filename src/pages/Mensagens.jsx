import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";

const Mensagens = () => {
    return(
        <div className="flex flex-1 bg-[#DAD0F0]">
            <Header/>
            <div className="flex flex-1 flex-col items-center pt-30 p-6 gap-5 lg:ml-64 lg:pt-30 lg:p-10">
                <Sidebar isDesktop={true} />
            </div>
        </div>
    )
}

export default Mensagens