import * as React from "react"
import { Funnel } from "lucide-react"
import SelectElement from "./SelectElement"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

export function CollapsibleGroup({ formData, setFormData, localizacoes }) {
    const [isOpen, setIsOpen] = React.useState(false)
    const tiposDeEvento = ["Peneira", "Copa", "Campeonato", "Amistoso", "Torneio", "Outro"]

    const handleChange = ({ name, value }) => {
        setFormData(prevData => ({
            ...prevData,
            [name]: value,
        }));
    };

    return (
        <Collapsible
        open={isOpen}
        onOpenChange={setIsOpen}
        className="md:flex md:gap-2"
        >
            <div className="flex gap-2">
                <Input placeholder="Pesquisar eventos" onChange={(e) => handleChange({ name: e.target.name, value: e.target.value })} name="inputPesquisa" value={formData.inputPesquisa} className={"bg-white h-12 sm:placeholder:text-lg md:shadow-gray-500 md:placeholder:text-base selection:bg-purple-300 selection:text-purple-950"}/>
                <CollapsibleTrigger asChild className="md:hidden">
                    <Button size="icon" className="size-12 bg-[#307039] shadow-sm border-[#3e6e45] border-1">
                        <Funnel color="white"/>
                        <span className="sr-only">Toggle</span>
                    </Button>
                </CollapsibleTrigger>
            </div>

            <CollapsibleContent className="my-2 md:hidden sm:justify-center max-w-full flex flex-col sm:flex-row gap-2 bg-[#307039] shadow-sm rounded-lg p-3 py-5">
                <SelectElement key={50} title={"Tipos"} name="inputTipo" onChange={handleChange} placeholder={"Tipo de evento"} options={tiposDeEvento} />
                <SelectElement key={60} title={"Localizações"} name="inputLocalizacao" onChange={handleChange} placeholder={"Localização"} options={localizacoes} />
                <SelectElement key={70} title={"Status"} name="inputStatus" onChange={handleChange} placeholder={"Status"} options={["Andamento", "Aberto", "Encerrado"]} />
            </CollapsibleContent>

            <div className="hidden md:block">
                <SelectElement key={50}  title={"Tipos"} name="inputTipo" onChange={handleChange} placeholder={"Tipo de evento"} options={tiposDeEvento} />
            </div>

            <div className="hidden md:block">
                <SelectElement key={60} title={"Localizações"} name="inputLocalizacao" onChange={handleChange} placeholder={"Localização"} options={localizacoes} />
            </div>

            <div className="hidden md:block">
                <SelectElement key={70} title={"Status"} name="inputStatus" onChange={handleChange} placeholder={"Status"} options={["Andamento", "Aberto", "Encerrado"]} />
            </div>

        </Collapsible>
    )
}
