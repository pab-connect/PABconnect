import { Star } from "lucide-react";
import FormularioContato from "../FormularioContato/FormularioContato";
import RedesSociais from "../RedesSociais/RedesSociais";

export default function Contato() {
  return (
    <section
      id="contato"
      className="relative bg-linear-to-b from-[#3C8834] to-[#307039] text-white text-center py-8"
    >
      <h2 className="text-xl font-semibold">Entre em contato conosco!</h2>

      <div className="absolute top-10 left-20 text-white/20 text-6xl">
        <Star />
      </div>
      <div className="absolute top-32 right-16 w-12 h-12 bg-white/20 rounded-full"></div>
      <div className="absolute bottom-20 left-10 text-white/20 text-4xl">
        <Star />
      </div>
      <div className="absolute top-89 left-40 w-24 h-24 bg-white/30 rounded-full"></div>
      <div className="absolute bottom-47 left-50 text-white/20 rotate-45">
        <Star />
      </div>
      <div className="absolute bottom-87 right-50 text-white/20 text-9xl rotate-90">
        <Star />
      </div>
      

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-around gap-4 pt-4 py-4 md:px-0 sm:px-6 lg:px-8">
        <RedesSociais />
        <FormularioContato />
      </div>
    </section>
  );
}
