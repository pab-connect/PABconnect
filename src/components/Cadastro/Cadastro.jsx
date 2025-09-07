import { useState } from "react";
import JogadorCadastro from "./JogadorCadastro";
import AgenteCadastro from "./AgenteCadastro";
import logo from "/logo-text.png"

export default function Cadastro({ toggle }) {
  const [tipo, setTipo] = useState("jogadora");
  const [step, setStep] = useState(0);

  return (
    <div>
      {step === 0 && (
        <div className="w-full min-h-full overflow-y-auto md:flex md:items-center md:justify-center font-(family-name:--font-poppins)">
          <main className="md:relative bg-white w-full md:w-3/5 md:shadow-xl md:rounded-xl overflow-hidden">
            <section className="md:absolute md:w-2/3 flex flex-col justify-center items-center p-10">
              <img src={logo} className="w-50 mb-8 transition-transform duration-300 hover:scale-105" alt="" />
              <h2 className="font-extrabold text-3xl my-5 text-[#4f3882] mb-10 transition-colors duration-300 hover:text-[#281452]">Cadastro</h2>
              <form className="flex flex-col gap-4 text-center">
                <p className="text-lg">Primeiro, que tipo de conta você deseja cadastrar?</p>
                <div className="flex gap-5 justify-center mb-10 text-lg">
                  <label className="flex items-center gap-2 cursor-pointer transition-colors duration-300 hover:text-[#5d3aff]">
                    <input
                      type="radio"
                      value="jogadora"
                      checked={tipo === "jogadora"}
                      onChange={() => setTipo("jogadora")}
                      className="accent-[#9b6cff] transition-transform duration-200 hover:scale-110"
                    />
                    Jogadora
                  </label>

                  <label className="flex items-center gap-2 cursor-pointer transition-colors duration-300 hover:text-[#5d3aff]">
                    <input
                      type="radio"
                      value="agente"
                      checked={tipo === "agente"}
                      onChange={() => setTipo("agente")}
                      className="accent-[#9b6cff] transition-transform duration-200 hover:scale-110"
                    />
                    Olheiro(a)
                  </label>
                </div>

                <button
                  type="button"
                  className="h-14 w-full bg-[#307039] text-white font-semibold rounded-lg text-lg cursor-pointer transition-all duration-300 hover:bg-[#24582b] hover:scale-105"
                  onClick={() => setStep(1)}
                >
                  Continuar
                </button>

                <p
                  className="text-[#307039] cursor-pointer transition-colors duration-300 hover:text-[#24582b] mt-4"
                  onClick={() => {
                    toggle(false);
                    setStep(0);
                  }}
                >
                  Ou faça login
                </p>
              </form>
            </section>
          </main>
        </div>
      )}

      {tipo === "jogadora" && step > 0 && (
        <JogadorCadastro step={step} setStep={setStep} />
      )}
      {tipo === "agente" && step > 0 && (
        <AgenteCadastro step={step} setStep={setStep} />
      )}
    </div>
  );
}
