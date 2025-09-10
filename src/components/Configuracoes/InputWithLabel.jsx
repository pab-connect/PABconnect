export default function InputWithLabel({ label, type = "text", width = "w-64", height = "h-12" }) {
  return (
    <div className={`relative ${width} ${height} mt-4 sm:mt-8`}>
      {/* Label fixa em cima */}
      <label className="absolute -top-2 sm:-top-3 left-2 bg-white px-1 text-gray-700 text-sm sm:text-lg">
        {label}
      </label>

      {/* Input */}
      <input
        type={type}
        className="block w-full h-full sm:h-15 sm:text-xl px-3 py-2 border border-gray-400 rounded-md focus:outline-none focus:border-blue-500"
      />
    </div>
  );
}
