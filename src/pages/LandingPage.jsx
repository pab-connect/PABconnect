import Banner from "../components/Banner/Banner";
import ComoFunciona from "../components/ComoFunciona/ComoFunciona";
import Contato from "../components/Contato/Contato";
import Footer from "../components/Footer/Footer";
import HeaderLandingPage from "../components/HeaderLandingPage/HeaderLandingPage";
import ParaQuem from "../components/ParaQuem/ParaQuem";
import Pratica from "../components/Pratica/Pratica";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#DAD0F0]">
      <HeaderLandingPage />
      <Banner />
      <ComoFunciona />
      <ParaQuem />
      <Pratica />
      <Contato />
      <Footer />
    </div>
  )
}