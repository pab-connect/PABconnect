import Switch from "./Switch";

export default function ConfigOption({text, size, state=false, description=""}) {
    return (
        <div className="flex gap-5">
            <p className="text-xl sm:text-2xl md:font-semibold md:text-xl">{text}<br className="hidden md:block"/><span className="hidden md:inline text-gray-500 text-lg text-wrap font-light">{description}</span></p>
            <Switch id={text} size={size} state={state} style="ml-auto"/> 
        </div>
    )
}