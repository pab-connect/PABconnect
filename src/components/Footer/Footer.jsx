import { Mail } from "lucide-react";
import { FaInstagram, FaTiktok, FaWhatsapp, FaYoutube } from "react-icons/fa";

export default function Footer({ tipo }) {
  const isLanding = tipo === "landing";

  return (
    <footer className="w-full bg-[#307039] text-white py-6">
      <div
        className={`container mx-auto px-4 ${
          isLanding
            ? "text-center"
            : "flex flex-col gap-4 lg:ml-64 lg:max-w-[calc(100%-16rem)]"
        }`}
      >
        <p className="text-sm text-center border-b border-white/75 pb-4">
          © {new Date().getFullYear()} Passa a Bola. Todos os direitos
          reservados.
        </p>

        {!isLanding && (
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-sm ">
              <Mail className="h-4 w-4" />
              <span>pabconnect.fiap@gmail.com</span>
            </div>

            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/passaabola"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-105 hover:text-[#DAD0F0] transition"
              >
                <FaInstagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.tiktok.com/@passabola"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-105 hover:text-[#DAD0F0] transition"
              >
                <FaTiktok className="h-5 w-5" />
              </a>
              <a
                href="https://whatsapp.com/channel/0029Vavm10347XeEyTTNi91i"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-105 hover:text-[#DAD0F0] transition"
              >
                <FaWhatsapp className="h-5 w-5" />
              </a>
              <a
                href="https://www.youtube.com/@passabola"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-105 hover:text-[#DAD0F0] transition"
              >
                <FaYoutube className="h-5 w-5" />
              </a>
            </div>
          </div>
        )}
      </div>
    </footer>
  );
}
