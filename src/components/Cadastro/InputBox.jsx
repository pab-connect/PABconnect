export default function InputBox({ label, placeholder, type, required = false }) {
  // Define autocomplete automaticamente
  const autoCompleteMap = {
    text: "name",
    email: "email",
    password: "new-password",
    number: "off",
  };

  const autoComplete = autoCompleteMap[type] || "off";

  const numberProps =
    type === "number" ? { step: 1, min: 0 } : {};

  return (
    <div className="flex flex-col items-start w-full text-[#4f3882]">
      <label>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        required={required}
        className="border mt-1 rounded-lg focus:outline-[#281452] h-12 md:h-10 w-full px-5 placeholder:text-lg"
        {...numberProps}
      />
    </div>
  );
}
