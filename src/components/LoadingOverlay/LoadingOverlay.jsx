import { LoaderCircle } from "lucide-react"

export default function LoadingOverlay() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white/50 backdrop-blur-sm z-50">
      <div className="flex flex-col items-center gap-3">
        <LoaderCircle className="h-14 w-14 animate-spin" />
        <span className="text-sm">
          Carregando...
        </span>
      </div>
    </div>
  )
}