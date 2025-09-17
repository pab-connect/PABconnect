export default function InputBox({ 
  label, 
  placeholder, 
  type, 
  required = false, 
  name, 
  value, 
  onChange 
}) {
 
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
      <label className="md:text-base text-base sm:text-xl">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        autoComplete={autoComplete}
        required={required}
        className="border mt-1 rounded-lg focus:outline-[#281452] h-12 md:h-10 w-full px-5 placeholder:text-lg"
        {...numberProps}
      />
    </div>
  );
}
