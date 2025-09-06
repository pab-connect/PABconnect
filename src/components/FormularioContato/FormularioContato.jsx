export default function FormularioContato() {
  return (
    <div className="flex flex-col items-center gap-4">
      <p>Quer participar ou apoiar o projeto? Fale com a gente!</p>
      <form className="flex flex-col gap-2 w-64 md:w-80">
        <input
          type="text"
          name="nome"
          id="nome"
          placeholder="Nome"
          className="bg-white text-[#307039] placeholder:text-[#307039] p-2 rounded-md outline-none hover:bg-[#f0f0f0] hover:scale-101 transition duration-300 focus:bg-[#f0f0f0] focus:scale-101"
        />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          className="bg-white text-[#307039] placeholder:text-[#307039] p-2 rounded-md outline-none hover:bg-[#f0f0f0] hover:scale-101 transition duration-300 focus:bg-[#f0f0f0] focus:scale-101"
        />
        <textarea
          name="mensagem"
          id="mensagem"
          placeholder="Mensagem"
          rows={5}
          className="bg-white text-[#307039] placeholder:text-[#307039] p-2 rounded-md outline-none hover:bg-[#f0f0f0] hover:scale-101 transition duration-300 focus:bg-[#f0f0f0] focus:scale-101 resize-none"
        ></textarea>
        <button
          type="submit"
          className="border rounded-md py-2 cursor-pointer hover:bg-white hover:text-[#307039] transition duration-300"
        >
          Enviar
        </button>
        <p className="text-[10px]">Responderemos em até 48h. Sua mensagem é muito importante!</p>
      </form>
    </div>
  );
}
