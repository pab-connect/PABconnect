import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import { getAll, API_POSTS_URL, API_BASE_URL } from "../services/apiService";
import { useEffect, useState } from "react";
const Conexoes = () => {
    return(
        <div className="bg-[#DAD0F0]">
            <Header/>
            <div className="flex-col items-center pt-30 p-6 gap-5 lg:ml-64 lg:pt-30 lg:p-10">
                <Sidebar isDesktop={true} />
                <h1 className="text-4xl font-extrabold dark:text-[#705C9B] mb-8">Conexões</h1>
                <input type="text" placeholder="Buscar por nome ou posição..." className="rounded-xl border-2 border-[#705C9B] bg-gray-200 mb-8 w-80 h-10"/>
                <div className="rounded-xl border-2 border-[#705C9B] bg-gray-200 text-black p-6 w-100 font-mono text-lg grid grid-cols-4 gap-4 mb-8">
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                    <div>4</div>
                </div>
            </div>
        </div>
    )
}

export default Conexoes