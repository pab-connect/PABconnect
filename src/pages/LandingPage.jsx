import Banner from "../components/Banner/Banner";
import ComoFunciona from "../components/ComoFunciona/ComoFunciona";
import HeaderLandingPage from "../components/HeaderLandingPage/HeaderLandingPage";
import ParaQuem from "../components/ParaQuem/ParaQuem";

export default function LandingPage() {
  return (
    <>
      <HeaderLandingPage />
      <Banner />
      <ComoFunciona />
      <ParaQuem />
    </>
  )
}