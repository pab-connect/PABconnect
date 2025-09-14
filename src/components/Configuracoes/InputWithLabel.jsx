export default function InputWithLabel({ label, name, value, onChange, type = "text", width = "w-64", height = "h-12" }) {
  return (
    <div className={`relative ${width} ${height} mt-4 sm:mt-8`}>
      {/* Label fixa em cima */}
      <label className="absolute -top-2 md:-top-2 sm:-top-3 left-2 bg-white px-1 text-gray-700 text-sm sm:text-lg md:text-sm">
        {label}
      </label>

      {/* Input */}
      <input
        type={type}
        name={name}
        onChange={onChange}
        value={value}
        className="block w-full h-full sm:h-15 md:h-12 sm:text-xl md:text-lg px-3 py-2 border border-gray-400 rounded-md focus:outline-none focus:border-blue-500"
      />
    </div>
  );
}
