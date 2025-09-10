export default function InputWithLabel({ label, type = "text", width = "w-64", height = "h-12" }) {
  return (
    <div className={`relative ${width} ${height} mt-4`}>
      {/* Label fixa em cima */}
      <label className="absolute -top-2 left-2 bg-white px-1 text-gray-700 text-sm">
        {label}
      </label>

      {/* Input */}
      <input
        type={type}
        className="block w-full h-full px-3 pt-2 pb-2 border border-gray-400 rounded-md focus:outline-none focus:border-blue-500"
      />
    </div>
  );
}
