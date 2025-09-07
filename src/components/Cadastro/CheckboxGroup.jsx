export default function CheckboxGroup({ label, options = [], name }) {
  return (
    <div className="flex flex-col items-start w-full text-[#4f3882]">
      <label className="mb-2 font-semibold">{label}</label>
      <div className="flex flex-col gap-2">
        {options.map((option) => (
          <label key={option.value} className="flex items-center gap-2">
            <input
              type="checkbox"
              name={name}
              value={option.value}
              className="accent-[#9b6cff] w-5 h-5 cursor-pointer"
            />
            {option.label}
          </label>
        ))}
      </div>
    </div>
  );
}
