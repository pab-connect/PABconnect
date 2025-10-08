import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import ModalBox from "../components/Mensagem/ModalBox";
import Sidebar from "../components/Sidebar/Sidebar";
import { useState, useEffect } from "react";

export default function Mensagem() {
    return(
        <div className="bg-[#DAD0F0] min-h-screen" style={{ fontFamily: "var(--font-poppins)" }}>
            <Header/>
            <div className="lg:ml-64 p-6 pt-[88px]">
                <ModalBox />
                <Sidebar isDesktop={true}/>
                <Footer/>
            </div>
        </div>
    );
}