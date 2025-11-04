import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button";

import { useState } from "react";

export default function DelEventoDialog({handle}) {
    const [open, setOpen] = useState(false)
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger type="button" className="text-white rounded-md p-1 cursor-pointer bg-[#703030] hover:bg-[#d20000] sm:text-lg sm:px-7 ">
                Excluir evento
            </DialogTrigger>

            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Deletar evento</DialogTitle>
                    <DialogDescription>
                        Você tem certeza que deseja deletar o evento?
                    </DialogDescription>
                </DialogHeader>
                <form onSubmit={handle}>
                    <DialogFooter className={"mt-3"}>
                        <DialogClose asChild>
                            <Button className={"bg-[#307039] hover:text-white cursor-pointer text-white hover:bg-[#46844e]"} variant="outline">Cancelar</Button>
                        </DialogClose>
                        <Button type="button" onClick={handle} className={"bg-[#703030] cursor-pointer hover:bg-[#b41919]"}>Confirmar</Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    )
}