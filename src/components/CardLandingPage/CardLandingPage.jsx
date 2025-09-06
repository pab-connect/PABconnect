export default function CardLandingPage({
  tipo = "retangular",
  icone,
  titulo,
  descricao,
}) {
  // Caso o card seja circular
  if (tipo === "circular") {
    return (
      <div>
        {icone}
        <h4>{titulo}</h4>
        <p>{descricao}</p>
      </div>
    );
  }
  // Caso o card seja retangular (padrao)
  return (
    <div>
      {icone}
      <h4>{titulo}</h4>
      <p>{descricao}</p>
    </div>
  );
}
