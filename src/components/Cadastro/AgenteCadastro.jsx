import { useState } from "react";
import InputBox from "./InputBox";
import logo from "/logo-text.png";
import UploadAndDisplayImage from "./UploadAndDisplayImage";
import CheckboxGroup from "./CheckboxGroup";
import CadastroConcluido from "./CadastroConcluido";


export default function AgenteCadastro () {

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
      <main className="bg-white w-full max-w-3xl overflow-x-hidden">
        
        {/* Step 1: Informações Pessoais */}
        {step === 1 && (
          <section className="w-full flex flex-col justify-center items-center p-10">
            <img 
              src={logo} 
              className="w-25 mb-4 transition-transform duration-300 hover:scale-105" 
              alt="" 
            />
            <h2 className="font-extrabold text-2xl text-center text-[#4f3882] mb-10 transition-colors duration-300 hover:text-[#281452]">
              Cadastro de olheiro(a) - Informações Pessoais
            </h2>
            <form className="flex flex-col gap-4 text-center">
              <div className="flex flex-col gap-5 justify-center items-center mb-10 text-lg">
                <InputBox required={true} label="Nome*" placeholder="Ex: Maria Silva" type="text"/>
                <InputBox required={true} label="Email*" placeholder="Ex: maria@gmail.com" type="email"/>
                <InputBox required={true} label="Senha*" placeholder="" type="password"/>
                <InputBox required={true} label="Confirmar senha*" placeholder="" type="password"/>
                <InputBox label="Telefone/Whatsapp" placeholder="Ex: 1144443333" type="tel"/>
                <InputBox required={true} label="Idade*" placeholder="Ex: 18" type="number"/>
                <div className="flex flex-col items-start w-full text-[#4f3882]">
                  <label>Gênero</label>
                  <select className="border mt-1 rounded-lg focus:outline-[#281452] h-12 w-full px-5 placeholder:text-lg transition-all duration-200 hover:shadow-md">
                    <option value="Prefiro-nao-responder" key="Prefiro-nao-responder">Prefiro não responder</option>
                    <option value="Masculino" key="Masculino">Masculino</option>
                    <option value="Feminino" key="Feminino">Feminino</option>
                    <option value="Nao-binario" key="Nao-binario">Não-binário</option>
                    <option value="Outro" key="Outro">Outro</option>
                  </select>
                </div>
                <div className="flex flex-col items-start w-full text-[#4f3882]">
                  <label>Estado*</label>
                  <select className="border mt-1 rounded-lg focus:outline-[#281452] h-12 w-full px-5 placeholder:text-lg transition-all duration-200 hover:shadow-md">
                    <option value="Acre" key="Acre">Acre</option>
                    {estadosBR.map((estado)=>(
                      <option value={estado} key={estado}>{estado}</option>
                    ))}
                  </select>
                </div>
                <InputBox required={true} label="Cidade*" placeholder="Ex: São Paulo" type="text"/>
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

        {/* Step 2: Informações profissionais */}
        {step === 2 && (
          <section className="w-full flex flex-col justify-center items-center p-10">
            <img 
              src={logo} 
              className="w-25 mb-4 transition-transform duration-300 hover:scale-105" 
              alt="" 
            />
            <h2 className="font-extrabold text-2xl text-center text-[#4f3882] mb-10 transition-colors duration-300 hover:text-[#281452]">
              Cadastro de olheiro(a) - Informações profissionais
            </h2>
            <form className="flex flex-col gap-4 text-center">
              <div className="flex flex-col gap-5 justify-center items-center mb-10 text-lg">
                <InputBox required={true} label="Cargo/Função atual*" placeholder="Ex: Treinador" type="text"/>
                <InputBox label="Clube ou organização associada" placeholder="Ex: Corinthians" type="text"/>
                <div className="flex flex-col items-start w-full text-[#4f3882]">
                    <label>Tempo de experiência (anos)</label>
                    <select className="border mt-1 rounded-lg focus:outline-[#281452] h-12 w-full px-5 placeholder:text-lg transition-all duration-200 hover:shadow-md">
                        <option value="" key="default">Selecione</option>
                        <option value="0" key="0">Nenhuma experiência</option>
                        <option value="1" key="1">1 ano</option>
                        <option value="2-3" key="2-3">2 a 3 anos</option>
                        <option value="4-5" key="4-5">4 a 5 anos</option>
                        <option value="6-10" key="6-10">6 a 10 anos</option>
                        <option value="10+" key="10+">Mais de 10 anos</option>
                    </select>
                </div>

                <CheckboxGroup label="Categoria de atletas que busca" name='categorias' options={[
                    { value: "Sub-13", label:"Sub-13" },
                    { value: "Sub-15", label:"Sub-15" },
                    { value: "Sub-17", label:"Sub-17" },
                    { value: "Sub-20", label:"Sub-20" },
                    { value: "Profissional", label:"Profissional" },
                ]}/>
                
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

        {/* Step 3: Redes e portfólio */}
        {step === 3 && (
          <section className="w-full flex flex-col justify-center items-center p-10">
            <img 
              src={logo} 
              className="w-25 mb-4 transition-transform duration-300 hover:scale-105" 
              alt="" 
            />
            <h2 className="font-extrabold text-2xl text-center text-[#4f3882] mb-10 transition-colors duration-300 hover:text-[#281452]">
              Cadastro de jogadora - Redes e Portfólio
            </h2>
            <form className="flex flex-col gap-4 text-center">
              <div className="flex flex-col gap-5 justify-center items-center mb-10 text-lg">
            <InputBox label="Linkedin ou rede profissional" placeholder="Ex: linkedin.com/seuperfil" type="text"/>
            <InputBox label="Site ou portfólio" placeholder="Ex: meuportfolio.com" type="text"/>
            </div>
            

            <p className="font-semibold text-[#4f3882] text-lg">Foto de perfil</p>
        
            <UploadAndDisplayImage />
            </form>
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
                type="button"
                className="h-14 w-1/2 bg-[#307039] text-white font-semibold rounded-lg text-lg cursor-pointer transition-all duration-300 hover:bg-[#24582b] hover:scale-105"
                onClick={() => setStep(4)}
                >
                Finaliza
              </button>

            </div>
          </section>
        )}
        {step === 4 && <CadastroConcluido />}

      </main>
    </div>
  );
}