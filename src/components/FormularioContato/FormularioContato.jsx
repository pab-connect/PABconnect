export default function FormularioContato() {
  return (
    <div>
      <p>Quer participar ou apoiar o projeto? Fale com a gente!</p>
      <form>
        <input type="text" name="nome" id="nome" placeholder="Nome" />
        <input type="text" name="email" id="email" placeholder="Email" />
        <textarea
          name="mensagem"
          id="mensagem"
          placeholder="Mensagem"
        ></textarea>
        <button type="submit">Enviar</button>
        <p>Responderemos em até 48h. Sua mensagem é muito importante!</p>
      </form>
    </div>
  );
}
