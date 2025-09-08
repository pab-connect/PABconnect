import { useState } from "react";
import JogadorCadastro from "./JogadorCadastro";
import AgenteCadastro from "./AgenteCadastro";
import logo from "/logo-text.png";

export default function Cadastro() {
  const [tipo, setTipo] = useState("jogadora");
  const [step, setStep] = useState(0);

  return (
    <>
      {/* --- PASSO 1: Escolher tipo de conta --- */}
      {step === 0 && (
        <section className="w-full md:bg-white md:rounded-2xl md:w-4/5 flex flex-col justify-center items-center p-10 md:p-20">
          <img
            src={logo}
            className="w-50 mb-8 transition-transform duration-300 hover:scale-105"
            alt="logo"
          />
          <h2 className="font-extrabold text-3xl my-5 text-[#4f3882] mb-10 transition-colors duration-300 hover:text-[#281452]">
            Cadastro
          </h2>

          <form className="flex flex-col gap-4 items-center text-center w-full">
            <p className="text-lg mb-5">
              Primeiro, que tipo de conta você deseja cadastrar?
            </p>

            <div className="flex gap-5 justify-center mb-10 text-lg">
              <label className="flex items-center gap-2 cursor-pointer hover:text-[#5d3aff]">
                <input
                  type="radio"
                  value="jogadora"
                  checked={tipo === "jogadora"}
                  onChange={() => setTipo("jogadora")}
                  className="accent-[#9b6cff]"
                />
                Jogadora
              </label>
              <label className="flex items-center gap-2 cursor-pointer hover:text-[#5d3aff]">
                <input
                  type="radio"
                  value="agente"
                  checked={tipo === "agente"}
                  onChange={() => setTipo("agente")}
                  className="accent-[#9b6cff]"
                />
                Olheiro(a)
              </label>
            </div>

            <button
              type="button"
              className="h-14 md:w-xs w-full bg-[#307039] text-white font-semibold rounded-lg text-lg cursor-pointer transition-all duration-300 hover:bg-[#24582b] hover:scale-105"
              onClick={() => setStep(1)}
            >
              Continuar
            </button>
          </form>
        </section>
      )}

      {/* --- PASSO 2: Formulários --- */}
      {tipo === "jogadora" && step > 0 && <JogadorCadastro />}
      {tipo === "agente" && step > 0 && <AgenteCadastro />}
    </>
  );
}
