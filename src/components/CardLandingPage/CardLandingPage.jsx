export default function CardLandingPage({
  tipo = "retangular",
  icone,
  titulo,
  descricao,
}) {
  // Caso o card seja circular
  if (tipo === "circular") {
    return (
      <div className="flex flex-col items-center justify-center gap-2 text-[#705C9B] border rounded-full p-6 w-64 h-64 text-center shadow-md hover:scale-101 hover:shadow-lg transition-transform">
        {icone}
        <h4 className="text-lg font-semibold">{titulo}</h4>
        <p>{descricao}</p>
      </div>
    );
  }
  // Caso o card seja retangular (padrao)
  return (
    <div className="flex flex-col items-center justify-center gap-2 text-[#705C9B] border rounded-lg p-4 w-64 h-64 text-center shadow-md hover:scale-101 hover:shadow-lg transition-transform">
      {icone}
      <h4 className="text-lg font-semibold">{titulo}</h4>
      <p>{descricao}</p>
    </div>
  );
}
