import { useState } from "react";

export default function Switch({ id, size = "md", style = "", state = false }) {
  const [checked, setChecked] = useState(state);

  const sizes = {
    sm: {
      track: "w-12 h-6",
      circle: "w-4 h-4",
      translate: "translate-x-6",
    },
    md: {
      track: "w-16 h-8",
      circle: "w-6 h-6",
      translate: "translate-x-8",
    },
    lg: {
      track: "w-20 h-10",
      circle: "w-8 h-8",
      translate: "translate-x-10",
    },
  };

  const current = sizes[size];

  return (
    <div className={`flex items-center ${style}`}>
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={() => setChecked(!checked)}
        className="hidden"
      />
      <label
        htmlFor={id}
        className={`flex items-center cursor-pointer ${current.track} rounded-full p-1 transition-colors duration-300 ${
          checked ? "bg-green-500" : "bg-gray-400"
        }`}
      >
        <span
          className={`bg-white rounded-full shadow-md transform transition-transform duration-300 ${
            current.circle
          } ${checked ? current.translate : "translate-x-0"}`}
        />
      </label>
    </div>
  );
}
