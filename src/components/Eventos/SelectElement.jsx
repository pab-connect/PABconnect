import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function SelectElement({ title, placeholder, options, name, onChange, className="padrao" }) {
  return (
    <Select onValueChange={(value) => onChange({ name, value })} name={name}>
      <SelectTrigger className={className==="padrao" ? "w-full sm:max-w-50 min-h-12 md:shadow-gray-500 text-md bg-white" : className}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>{title}</SelectLabel>
          {className==="padrao" && <SelectItem value="todos" className={"truncate"}>Todos</SelectItem>}
          {options.map((option)=><SelectItem key={options.indexOf(option)+1} className={"truncate"} value={option.toLowerCase()}>{option.length > 25 ? option.slice(0, 25) + "..." : option}</SelectItem>)}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
