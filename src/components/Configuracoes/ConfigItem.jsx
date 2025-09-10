export default function ConfigItem({icon, text, setConfig, active=""}) {
    const isActive = active === text;
    return (
        <div
            onClick={setConfig}
            className={`flex w-full items-center p-3 gap-5 cursor-pointer rounded
                hover:text-[#8a53ff] hover:bg-purple-200 hover:font-semibold
                ${isActive ? "font-semibold bg-purple-300 text-[#5100FF]" : "text-[#777777]"}`}
        >
            {icon}
            <h3 className="text-xl text-inherit">{text}</h3>
        </div>
    );
}