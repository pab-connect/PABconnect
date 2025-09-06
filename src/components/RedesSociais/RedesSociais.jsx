import { FaInstagram, FaTiktok, FaWhatsapp, FaYoutube } from "react-icons/fa";

export default function RedesSociais() {
  return (
    <div className="flex flex-col items-center gap-2">
      <h3 className="text-2xl text-bold">Acompanhe nas redes</h3>
      <div className="bg-white text-[#307039] p-2 rounded-lg text-lg cursor-pointer shadow-md hover:scale-103 transition duration-300 my-1 flex items-center gap-2">
        <FaInstagram />
        <span>@passaabola</span>
      </div>
      <div className="bg-white text-[#307039] p-2 rounded-lg text-lg cursor-pointer shadow-md hover:scale-103 transition duration-300 my-1 flex items-center gap-2">
        <FaWhatsapp />
        <span>00291034791</span>
      </div>
      <div className="bg-white text-[#307039] p-2 rounded-lg text-lg cursor-pointer shadow-md hover:scale-103 transition duration-300 my-1 flex items-center gap-2">
        <FaTiktok />
        <span>@passaabola</span>
      </div>
      <div className="bg-white text-[#307039] p-2 rounded-lg text-lg cursor-pointer shadow-md hover:scale-103 transition duration-300 my-1 flex items-center gap-2">
        <FaYoutube />
        <span>@passaabola</span>
      </div>
    </div>
  );
}
