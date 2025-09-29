import * as React from "react"
import { Funnel } from "lucide-react"
import SelectElement from "./SelectElement"
import DatePickerElement from "./DatePickerElement"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

export function CollapsibleGroup() {
    const [isOpen, setIsOpen] = React.useState(false)
    const tiposDeEvento = ["Peneira", "Copa", "Campeonato"]
    const localizações = ["São Paulo, SP", "Pacaembu, SP"]

    return (
        <Collapsible
        open={isOpen}
        onOpenChange={setIsOpen}
        className=""
        >
            <div className="flex gap-2">
                <Input placeholder="Pesquisar eventos" className={"bg-white h-12 selection:bg-purple-300 selection:text-purple-950"}/>
                <CollapsibleTrigger asChild>
                    <Button size="icon" className="size-12 bg-[#307039] shadow-sm border-[#3e6e45] border-1">
                        <Funnel color="white"/>
                        <span className="sr-only">Toggle</span>
                    </Button>
                </CollapsibleTrigger>
            </div>
            <CollapsibleContent className="my-2 flex flex-col gap-2 bg-[#307039] shadow-sm rounded-lg p-3 py-5">
                <SelectElement title={"Tipos"} placeholder={"Tipo de evento"} options={tiposDeEvento} />
                <SelectElement title={"Localizações"} placeholder={"Localização"} options={localizações} />
                <DatePickerElement/>
            </CollapsibleContent>
        </Collapsible>
    )
}
