import { useState } from "react";
import InputBox from "./InputBox";
import logo from "/logo-text.png";
import UploadAndDisplayImage from "./UploadAndDisplayImage";

export default function JogadorCadastro() {
  const estadosBR = [
    "Acre", "Alagoas", "Amapá", "Amazonas", "Bahia", "Ceará",
    "Distrito Federal", "Espírito Santo", "Goiás", "Maranhão",
    "Mato Grosso", "Mato Grosso do Sul", "Minas Gerais", "Pará",
    "Paraíba", "Paraná", "Pernambuco", "Piauí", "Rio de Janeiro",
    "Rio Grande do Norte", "Rio Grande do Sul", "Rondônia", "Roraima",
    "Santa Catarina", "São Paulo", "Sergipe", "Tocantins"
  ];

  const [step, setStep] = useState(1);

  return (
    <div className="w-screen min-h-screen overflow-y-auto flex flex-col items-center font-(family-name:--font-poppins)">
      <main className="bg-white w-full max-w-3xl rounded-xl overflow-x-hidden">
        
        {/* Step 1: Informações Pessoais */}
        {step === 1 && (
          <section className="w-full flex flex-col justify-center items-center p-10">
            <img 
              src={logo} 
              className="w-25 mb-4 transition-transform duration-300 hover:scale-105" 
              alt="" 
            />
            <h2 className="font-extrabold text-2xl text-center text-[#4f3882] mb-10 transition-colors duration-300 hover:text-[#281452]">
              Cadastro de jogadora - Informações Pessoais
            </h2>
            <form className="flex flex-col gap-4 text-center">
              <div className="flex flex-col gap-5 justify-center items-center mb-10 text-lg">
                <InputBox label="Nome*" placeholder="Ex: Maria Silva" type="text"/>
                <InputBox label="Email*" placeholder="Ex: maria@gmail.com" type="email"/>
                <InputBox label="Senha*" placeholder="" type="password"/>
                <InputBox label="Confirmar senha*" placeholder="" type="password"/>
                <InputBox label="Idade*" placeholder="Ex: 18" type="number"/>
                <div className="flex flex-col items-start w-full text-[#4f3882]">
                  <label>Estado*</label>
                  <select className="border mt-1 rounded-lg focus:outline-[#281452] h-12 w-full px-5 placeholder:text-lg transition-all duration-200 hover:shadow-md">
                    <option value="Acre" key="Acre">Acre</option>
                    {estadosBR.map((estado)=>(
                      <option value={estado} key={estado}>{estado}</option>
                    ))}
                  </select>
                </div>
                <InputBox label="Cidade*" placeholder="Ex: São Paulo" type="text"/>
              </div>
              <div className="flex gap-4 w-full">
                <button
                  type="button"
                  className="h-14 w-full bg-[#307039] text-white font-semibold rounded-lg text-lg cursor-pointer transition-all duration-300 hover:bg-[#24582b] hover:scale-105"
                  onClick={() => setStep(2)}
                >
                  Continuar
                </button>
              </div>
            </form>
          </section>
        )}

        {/* Step 2: Informações Esportivas */}
        {step === 2 && (
          <section className="w-full flex flex-col justify-center items-center p-10">
            <img 
              src={logo} 
              className="w-25 mb-4 transition-transform duration-300 hover:scale-105" 
              alt="" 
            />
            <h2 className="font-extrabold text-2xl text-center text-[#4f3882] mb-10 transition-colors duration-300 hover:text-[#281452]">
              Cadastro de jogadora - Dados Atléticos
            </h2>
            <form className="flex flex-col gap-4 text-center">
              <div className="flex flex-col gap-5 justify-center items-center mb-10 text-lg">
                <InputBox label="Posição*" placeholder="Ex: Atacante" type="text"/>
                <InputBox label="Clube*" placeholder="Ex: Corinthians" type="text"/>
                <InputBox label="Altura*" placeholder="Ex: 165cm" type="number"/>
                <div className="flex flex-col items-start w-full text-[#4f3882]">
                  <label>Pé dominante</label>
                  <select className="border mt-1 rounded-lg focus:outline-[#281452] h-12 w-full px-5 placeholder:text-lg transition-all duration-200 hover:shadow-md">
                    <option value="Direito" key="Direito">Direito</option>
                    <option value="Esquerdo" key="Esquerdo">Esquerdo</option>
                    <option value="Ambos" key="Ambos">Ambos</option>
                  </select>
                </div>
              </div>
              <div className="flex gap-4 w-full">
                <button
                  type="button"
                  className="h-14 w-1/2 bg-gray-400 text-white font-semibold rounded-lg text-lg cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-md"
                  onClick={() => setStep(1)}
                >
                  Voltar
                </button>
                <button
                  type="button"
                  className="h-14 w-1/2 bg-[#307039] text-white font-semibold rounded-lg text-lg cursor-pointer transition-all duration-300 hover:bg-[#24582b] hover:scale-105"
                  onClick={() => setStep(3)}
                >
                  Continuar
                </button>
              </div>
            </form>
          </section>
        )}

        {/* Step 3: Revisão ou Finalização */}
        {step === 3 && (
          <section className="w-full flex flex-col justify-center items-center p-10">
            <img 
              src={logo} 
              className="w-25 mb-4 transition-transform duration-300 hover:scale-105" 
              alt="" 
            />
            <h2 className="font-extrabold text-2xl text-center text-[#4f3882] mb-10 transition-colors duration-300 hover:text-[#281452]">
              Cadastro de jogadora - Mídia
            </h2>
            <p className="font-semibold text-[#4f3882] mb-5 text-lg">Foto de perfil</p>
            <UploadAndDisplayImage />
            <p className="my-10 text-center text-lg transition-colors duration-300 hover:text-[#307039] cursor-pointer">
              Clique em finalizar para concluir o cadastro
            </p>
            <div className="flex gap-4 w-full">
              <button
                type="button"
                className="h-14 w-1/2 bg-gray-400 text-white font-semibold rounded-lg text-lg cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-md"
                onClick={() => setStep(2)}
              >
                Voltar
              </button>
              <button
                type="submit"
                className="h-14 w-1/2 bg-[#307039] text-white font-semibold rounded-lg text-lg cursor-pointer transition-all duration-300 hover:bg-[#24582b] hover:scale-105"
              >
                Finalizar
              </button>
            </div>
          </section>
        )}

      </main>
    </div>
  );
}
