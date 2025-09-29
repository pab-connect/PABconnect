import { Separator } from "@/components/ui/separator";
import { CollapsibleGroup } from "../components/Eventos/CollapsibleGroup";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import CardEvento from "@/components/Eventos/CardEvento";

export default function Eventos() {
    return (
        <div style={{ fontFamily: "var(--font-poppins)" }} className="flex flex-col bg-[#DAD0F0] min-h-screen">
            <Header />
            <div className="flex flex-1 pt-[88px]">
                <Sidebar isDesktop={true} />
                <div className="flex flex-1 flex-col items-center p-4 px-8 mt-4 md:mt-6 lg:ml-64 text-[#705C9B]">
                    <h2 className="text-3xl md:text-5xl lg:text-4xl font-semibold text-black mb-6 md:mb-9">Eventos</h2>
                    <section className="w-full flex flex-col gap-6">
                        <CollapsibleGroup/>
                        <Separator className={'bg-[#307039]'}/>
                        <CardEvento/>
                    </section>
                </div>
            </div>
            <Footer />
        </div>
        )
}