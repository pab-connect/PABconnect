import {
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts"

export default function BarChartTalentos({ jogadoras }) {
  // Agrupar jogadoras por posição
  const posicoesCount = jogadoras.reduce((acc, jog) => {
    const pos = jog.posicao || "Não informada"
    acc[pos] = (acc[pos] || 0) + 1
    return acc
  }, {})

  const data = Object.keys(posicoesCount).map((pos) => ({
    posicao: pos,
    total: posicoesCount[pos],
  }))

  return (
    <div className="bg-[#5C4B8A] text-white rounded-xl p-4 w-full shadow-md">
      <h3 className="text-lg font-semibold mb-2">Jogadoras por posição</h3>
      <p className="text-sm mb-4">Distribuição atual no sistema</p>

      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#7E68B0" />
          <XAxis dataKey="posicao" stroke="#E6DAFF" />
          <YAxis stroke="#E6DAFF" />
          <Tooltip
            contentStyle={{ backgroundColor: "#3B2D5F", borderRadius: "8px" }}
            labelStyle={{ color: "#E6DAFF" }}
          />
          <Bar dataKey="total" fill="#B197FC" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>

      <p className="text-green-300 text-sm mt-2">
        +5.2% crescimento em relação ao mês passado ↑
      </p>
      <p className="text-xs text-gray-200">
        Dados reais baseados nas jogadoras cadastradas
      </p>
    </div>
  )
}
