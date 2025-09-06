import {
  FaInstagram,
  FaSpotify,
  FaTiktok,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";

export default function RedesSociais() {
  return (
    <div className="flex flex-col items-center gap-2">
      <h3 className="text-2xl text-bold">Acompanhe nas redes</h3>
      <div className="bg-white text-[#307039] p-2 rounded-lg text-lg cursor-pointer shadow-md hover:scale-103 transition duration-300 my-1 w-full">
        <a
          className="flex items-center gap-2"
          target="_blank"
          href="https://www.instagram.com/passaabola"
        >
          <FaInstagram />
          <span>@passaabola</span>
        </a>
      </div>
      <div className="bg-white text-[#307039] p-2 rounded-lg text-lg cursor-pointer shadow-md hover:scale-103 transition duration-300 my-1 w-full">
        <a
          target="_blank"
          href="https://whatsapp.com/channel/0029Vavm10347XeEyTTNi91i"
          className="flex items-center gap-2"
        >
          <FaWhatsapp />
          <span>00291034791</span>
        </a>
      </div>
      <div className="bg-white text-[#307039] p-2 rounded-lg text-lg cursor-pointer shadow-md hover:scale-103 transition duration-300 my-1 w-full">
        <a
          target="_blank"
          href="https://www.tiktok.com/@passabola"
          className="flex items-center gap-2"
        >
          <FaTiktok />
          <span>@passaabola</span>
        </a>
      </div>
      <div className="bg-white text-[#307039] p-2 rounded-lg text-lg cursor-pointer shadow-md hover:scale-103 transition duration-300 my-1 w-full">
        <a
          target="_blank"
          href="https://www.youtube.com/@passabola"
          className="flex items-center gap-2"
        >
          <FaYoutube />
          <span>@passaabola</span>
        </a>
      </div>
      <div className="bg-white text-[#307039] p-2 rounded-lg text-lg cursor-pointer shadow-md hover:scale-103 transition duration-300 my-1 w-full">
        <a
          target="_blank"
          href="https://open.spotify.com/show/18H1ysI9zyDIRahuCnZGQr?si=93b3d3ed36de4a9a"
          className="flex items-center gap-2"
        >
          <FaSpotify />
          <span>Fala, Bebê</span>
        </a>
      </div>
    </div>
  );
}
