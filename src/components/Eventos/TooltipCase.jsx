import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export default function TooltipCase({ trigger, children }) {
    return (
        <Tooltip delayDuration={500} >
            <TooltipTrigger asChild>{trigger}</TooltipTrigger>
            <TooltipContent className={"bg-[#307039]"}>
                {children}
            </TooltipContent>
        </Tooltip>
    )
}