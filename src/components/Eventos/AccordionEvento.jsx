import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion"

export default function AccordionEvento({childrenInscricao, childrenJogadoras, nmbJogadoras=0, nmbInscricao=0}) {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full bg-white rounded-md px-3"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger className={"text-lg hover:no-underline"}>
          <div className="flex gap-2">
            <span>Pedidos de Inscrição</span>
            <span className="rounded-full bg-yellow-500 px-2 text-white">{nmbInscricao}</span>
          </div>

        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          {childrenInscricao}
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className={"text-lg hover:no-underline"}>
          <div className="flex gap-2">
            <span>Jogadoras Aprovadas</span>
            <span className="rounded-full bg-green-600 px-2 text-white">{nmbJogadoras}</span>
          </div>
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          {childrenJogadoras}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
