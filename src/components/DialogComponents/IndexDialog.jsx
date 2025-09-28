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
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { 
    Camera,
 } from 'lucide-react';
import { useState } from "react";
import { Toastify } from "../Toastify/Toastify";


export default function IndexDialog({ setImgUrl, imgUrl }) {
    const [open, setOpen] = useState(false)

    function handleSubmit(e) {
        e.preventDefault()
        console.log(imgUrl)
        if (imgUrl) {
            Toastify.sucesso("Mídia adicionada!")
            setOpen(false)
        } else {
            Toastify.erro("O campo da url está vazio")
        }
        
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger className='flex items-center gap-2 p-4 cursor-pointer text-[#307039] hover:scale-102 duration-300 transition-all'>
                <Camera className='w-6 h-6 md:w-7 md:h-7 lg:w-9 lg:h-9'/>
                <span className='font-bold text-sm md:text-base lg:text-lg'>Mídia</span>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Upload de mídia</DialogTitle>
                    <DialogDescription>
                        Digite a url da sua imagem/video
                    </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit}>
                    <div>
                        <Input name="midia" value={imgUrl} onChange={(e) => setImgUrl(e.target.value)} className={"focus-visible:border-[#46844e] focus-visible:ring-[#a0b5a3] selection:bg-[#a0b5a3] mb-2"} placeholder="midia.com.br/foto.png"/>
                    </div>
                    <DialogFooter>
                        <DialogClose asChild>
                            <Button variant="outline">Cancel</Button>
                        </DialogClose>
                        <Button type="submit" className={"bg-[#307039] hover:bg-[#46844e]"}>Save changes</Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    )
}