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

export default function SelectElement({ title, placeholder, options }) {
  return (
    <Select>
      <SelectTrigger className="w-full min-h-12 md:shadow-gray-500 text-md bg-white">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>{title}</SelectLabel>
          {options.map((option)=><SelectItem value={option.toLowerCase()}>{option}</SelectItem>)}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
