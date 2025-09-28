import { LoaderCircle } from "lucide-react"

export default function LoadingOverlay() {
  return (
    <div>
      <div>
        <LoaderCircle />
        <span>
          Carregando...
        </span>
      </div>
    </div>
  )
}