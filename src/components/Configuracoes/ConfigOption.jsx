import Switch from "./Switch";

export default function ConfigOption({text, size, state=false}) {
    return (
        <div className="flex gap-5">
            <p className="text-xl">{text}</p>
            <Switch id={text} size={size} state={state} style="ml-auto"/> 
        </div>
    )
}