export default function CardTalentos({ imagem, nome, posicao, localizacao }){
  return (
    <>
      <img src={imagem} alt={nome} />

      <h3>{nome}</h3>
      <p>{posicao}</p>
      <p>{localizacao}</p>

      <div>
        <button>Ver mais</button>
        <button>Enviar mensagem</button>
      </div>
    </>
  )
}