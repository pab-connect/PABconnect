export default function Filtros(){
  return (
    <section id="filtros">
      <h3>Filtros</h3>
      <select name="filtro" id="filtro">
        <option value="">Escolha uma opção de filtro</option>
        <option value="recentes">Mais recentes</option>
        <option value="proximas">Mais próximas</option>
        <option value="alfabetica">Ordem alfabética</option>
      </select>
    </section>
  )
}