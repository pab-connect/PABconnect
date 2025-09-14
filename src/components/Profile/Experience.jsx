
const Experience = ({ items }) => {
  return (
    <div className="relative pl-6">
      {/* A linha vertical */}
      <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-purple-600"></div>

      <ul className="space-y-4">
        {items.map((item, index) => (
          <li key={index} className="relative">
            {/* O ponto na linha do tempo */}
            <div className="absolute -left-[27px] top-1.5 w-3 h-3 bg-purple-600 rounded-full border-2 border-white"></div>

            <p className="text-gray-700">
              {item.year && (
                <strong className="font-semibold">{`${item.year}: `}</strong>
              )}
              {item.club || item.event}
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Experience
