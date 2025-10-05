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
import { Label } from "@/components/ui/label";

import { useState } from "react";
import { Toastify } from "../Toastify/Toastify";


export default function SenhaDialog({ handleMudarSenha, senhaAtualExt, novaSenha, setNovaSenha }) {
    const [open, setOpen] = useState(false)
    const [senhaAtual, setSenhaAtual] = useState("")
    const [confirmarNovaSenha, setConfirmarNovaSenha] = useState("")

    function handleSubmit(e) {
        e.preventDefault()
        if (!novaSenha && !senhaAtual && !confirmarNovaSenha) {
            Toastify.erro("Todos os campos estão vazios!")
        } else if (senhaAtual !== senhaAtualExt) {
            Toastify.erro("A senha atual está incorreta!")
            Toastify.erro(senhaAtualExt)
        } else {
            if (!novaSenha || !confirmarNovaSenha) {
                Toastify.erro("Preencha os campos vazios!")
            } else if (novaSenha !== confirmarNovaSenha) {
                Toastify.erro("As novas senhas não coincidem!")
            } else if (novaSenha.length < 7) {
                Toastify.erro("A nova senha esta curta (<7)")
            } else {
                handleMudarSenha()
                setOpen(false)
            }
        }
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger className="ml-auto bg-gray-200 sm:text-xl w-32 md:p-1 p-2 sm:w-40 md:text-lg hover:scale-99 hover:bg-yellow-200 transition-all hover:border-yellow-400 cursor-pointer text-wrap rounded-md border-[#8CAB91] border-1 font-semibold">
                Alterar senha
            </DialogTrigger>

            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Altere a sua senha</DialogTitle>
                    <DialogDescription>
                        Digite sua nova senha abaixo e confirme para atualizar seu login.
                    </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit}>
                    <div className="grid gap-4">
                        <div className="grid gap-3">
                            <Label htmlFor="senhaatual">Senha atual</Label>
                            <Input autoComplete="current-password" id="senhaatual" type={"password"} required name="senhaatual" value={senhaAtual} onChange={(e) => setSenhaAtual(e.target.value)} className={"focus-visible:border-[#46844e] focus-visible:ring-[#a0b5a3] selection:bg-[#a0b5a3]"} placeholder="Digite a sua senha atual"/>
                        </div>
                        <div className="grid gap-3">
                            <Label htmlFor="novasenha">Nova senha</Label>
                            <Input autoComplete="new-password" id="novasenha" type={"password"} required name="novasenha" value={novaSenha} onChange={(e) => setNovaSenha(e.target.value)} className={"focus-visible:border-[#46844e] focus-visible:ring-[#a0b5a3] selection:bg-[#a0b5a3]"} placeholder="Digita a sua nova senha"/>
                        </div>
                        <div className="grid gap-3">
                            <Label htmlFor="confirmanovasenha">Confirmar nova senha</Label>
                            <Input autoComplete="new-password"  id="confirmanovasenha" type={"password"} required name="confirmanovasenha" value={confirmarNovaSenha} onChange={(e) => setConfirmarNovaSenha(e.target.value)} className={"focus-visible:border-[#46844e] focus-visible:ring-[#a0b5a3] selection:bg-[#a0b5a3]"} placeholder="Confirme a sua nova senha"/>
                        </div>
                    </div>
                    <DialogFooter className={"mt-3"}>
                        <DialogClose asChild>
                            <Button variant="outline">Cancelar</Button>
                        </DialogClose>
                        <Button type="submit" className={"bg-[#307039] hover:bg-[#46844e]"}>Salvar mudanças</Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    )
}