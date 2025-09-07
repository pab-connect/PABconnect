export default function Filtros() {
  return (
    <section
      id="filtros"
      className="bg-white w-full p-4 rounded-md shadow-lg"
    >
      <h3 className="text-lg font-semibold mb-4">Filtros</h3>
      
      {/* select para mobile */}
      <select
        name="filtro"
        id="filtro"
        className="block w-full md:hidden outline-none border p-2 rounded-md hover:scale-102 focus:scale-102 transition-all"
      >
        <option value="">Escolha uma opção de filtro</option>
        <option value="recentes">Mais recentes</option>
        <option value="proximas">Mais próximas</option>
        <option value="alfabetica">Ordem alfabética</option>
      </select>

      {/* botoes para desktop */}
      <div className="hidden md:flex flex-col gap-3">
        <button className="bg-[#705C9B] text-white px-4 py-2 rounded-md cursor-pointer shadow-sm hover:shadow-md hover:scale-101 transition-all duration-300 text-left">
          Mais recentes
        </button>
        <button className="bg-[#5e4d83] text-[#DAD0F0] px-4 py-2 rounded-md cursor-pointer shadow-sm hover:shadow-md hover:scale-101 transition-all duration-300 text-left">
          Mais próximas
        </button>
        <button className="bg-[#705C9B] text-white px-4 py-2 rounded-md cursor-pointer shadow-sm hover:shadow-md hover:scale-101 transition-all duration-300 text-left">
          Ordem alfabética
        </button>
      </div>
    </section>
  );
}