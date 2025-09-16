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
                    <div className="flex items-center gap-4 p-4">
                        <img src="img.png" alt="" className="w-20 h-20"/>
                        <div className="flex-1">
                            <h2 className="text-lg font-semibold">Nome</h2>
                            <p className="text-gray-600 text-sm">Zagueira | Clube Profissional Acreano</p>
                        </div>
                        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Mensagens</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Conexoes