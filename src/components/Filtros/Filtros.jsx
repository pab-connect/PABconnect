export default function Filtros({ filtro, setFiltro }) {
  const handleChange = (e) => {
    setFiltro(e.target.value);
  };
  
  return (
    <section id="filtros" className="bg-white w-full p-4 rounded-md shadow-lg">
      <h3 className="text-lg font-semibold mb-4">Filtros</h3>

      {/* select para mobile */}
      <select
        name="filtro"
        id="filtro"
        className="block w-full md:hidden outline-none border p-2 rounded-md hover:scale-102 focus:scale-102 transition-all"
        onChange={handleChange}
      >
        <option value="recentes">Mais recentes</option>
        <option value="proximas">Mais próximas</option>
        <option value="alfabetica">Ordem alfabética</option>
      </select>

      {/* botoes para desktop */}
      <div className="hidden md:flex flex-col gap-3">
        <button
          onClick={() => setFiltro("recentes")}
          className={`px-4 py-2 rounded-md cursor-pointer shadow-sm hover:shadow-md hover:scale-101 transition-all duration-300 text-left ${filtro === "recentes" ? "bg-[#5e4d83] text-[#dad0f0]" : "bg-[#705C9B] text-white"}`}
        >
          Mais recentes
        </button>
        <button
          onClick={() => setFiltro("proximas")}
          className={`px-4 py-2 rounded-md cursor-pointer shadow-sm hover:shadow-md hover:scale-101 transition-all duration-300 text-left ${filtro === "proximas" ? "bg-[#5e4d83] text-[#dad0f0]" : "bg-[#705C9B] text-white"}`}
        >
          Mais próximas
        </button>
        <button
          onClick={() => setFiltro("alfabetica")}
          className={`px-4 py-2 rounded-md cursor-pointer shadow-sm hover:shadow-md hover:scale-101 transition-all duration-300 text-left ${filtro === "alfabetica" ? "bg-[#5e4d83] text-[#dad0f0]" : "bg-[#705C9B] text-white"}`}
        >
          Ordem alfabética
        </button>
      </div>
    </section>
  );
}
