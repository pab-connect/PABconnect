import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function AccordionTime({ times, jogadoras }) {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full bg-white rounded-md px-3"
    >
      {times && times.map((time, index) => (
        <AccordionItem key={index} value={`item-${index}`}>
          <AccordionTrigger className={"text-lg hover:no-underline"}>
            {time.nome}
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            {time.participantes.map((jogadora) => (
              <li key={Number(jogadoras?.find(j => j.id === jogadora)?.id)}>{jogadoras?.find(j => j.id === jogadora)?.nome}</li>
            ))}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
