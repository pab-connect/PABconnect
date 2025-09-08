import { useState } from "react";
import InputBox from "./InputBox";
import logo from "/logo-text.png";
import UploadAndDisplayImage from "./UploadAndDisplayImage";
import CheckboxGroup from "./CheckboxGroup";
import CadastroConcluido from "./CadastroConcluido";

export default function AgenteCadastro() {

  const estadosBR = [
    "Acre","Alagoas","Amapá","Amazonas","Bahia","Ceará",
    "Distrito Federal","Espírito Santo","Goiás","Maranhão",
    "Mato Grosso","Mato Grosso do Sul","Minas Gerais","Pará",
    "Paraíba","Paraná","Pernambuco","Piauí","Rio de Janeiro",
    "Rio Grande do Norte","Rio Grande do Sul","Rondônia","Roraima",
    "Santa Catarina","São Paulo","Sergipe","Tocantins"
  ];

  const [step, setStep] = useState(1);

  return (
    <>
      {/* --- STEP 1 --- */}
      {step === 1 && (
        <section className="w-full md:h-3/4 md:m-5 md:w-4/5 p-10 md:p-6.5 md:px-16 flex flex-col items-center bg-white md:shadow-xl rounded-xl">
          <img src={logo} className="w-25 mb-4 transition-transform duration-300 hover:scale-105" alt="" />
          <h2 className="font-extrabold text-2xl text-center text-[#4f3882] mb-5">
            Cadastro de olheiro(a) - Informações Pessoais
          </h2>
          <form className="w-full flex flex-col items-center gap-4">
            <div className="grid w-full grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-10 mb-10 md:mb-5">
              <InputBox required label="Nome*" placeholder="Ex: Maria Silva" type="text"/>
              <InputBox required label="Email*" placeholder="Ex: maria@gmail.com" type="email"/>
              <InputBox required label="Senha*" placeholder="" type="password"/>
              <InputBox required label="Confirmar senha*" placeholder="" type="password"/>
              <InputBox label="Telefone/Whatsapp" placeholder="Ex: 1144443333" type="tel"/>
              <InputBox required label="Idade*" placeholder="Ex: 18" type="number"/>
              <div className="flex flex-col items-start w-full text-[#4f3882]">
                <label>Gênero</label>
                <select className="border mt-1 rounded-lg focus:outline-[#281452] h-12 md:h-10 w-full px-5 placeholder:text-lg transition-all duration-200 hover:shadow-md">
                  <option value="Prefiro-nao-responder">Prefiro não responder</option>
                  <option value="Masculino">Masculino</option>
                  <option value="Feminino">Feminino</option>
                  <option value="Nao-binario">Não-binário</option>
                  <option value="Outro">Outro</option>
                </select>
              </div>
              <div className="flex flex-col items-start w-full text-[#4f3882]">
                <label>Estado*</label>
                <select className="border mt-1 rounded-lg focus:outline-[#281452] h-12 md:h-10 w-full px-5 placeholder:text-lg transition-all duration-200 hover:shadow-md">
                  {estadosBR.map((estado)=>(<option value={estado} key={estado}>{estado}</option>))}
                </select>
              </div>
              <InputBox required label="Cidade*" placeholder="Ex: São Paulo" type="text"/>
            </div>
            <button type="button" className="h-14 md:h-12 md:w-3/6 w-full bg-[#307039] text-white font-semibold rounded-lg text-lg hover:bg-[#24582b] hover:scale-105 transition-all" onClick={() => setStep(2)}>
              Continuar
            </button>
          </form>
        </section>
      )}

      {/* --- STEP 2 --- */}
      {step === 2 && (
        <section className="w-full md:h-3/4 md:w-4/5 p-10 md:p-16 flex flex-col items-center bg-white md:shadow-xl rounded-xl">
          <img src={logo} className="w-25 mb-4 transition-transform duration-300 hover:scale-105" alt="" />
          <h2 className="font-extrabold text-2xl text-center text-[#4f3882] mb-5">
            Cadastro de olheiro(a) - Informações Profissionais
          </h2>
          <form className="w-full flex flex-col items-center gap-4">
            <div className="grid w-full grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-10 mb-10">
              <InputBox required label="Cargo/Função atual*" placeholder="Ex: Treinador" type="text"/>
              <InputBox label="Clube ou organização associada" placeholder="Ex: Corinthians" type="text"/>
              <div className="flex flex-col items-start w-full text-[#4f3882]">
                <label>Tempo de experiência (anos)</label>
                <select className="border mt-1 rounded-lg focus:outline-[#281452] h-12 md:h-10 w-full px-5 placeholder:text-lg transition-all duration-200 hover:shadow-md">
                  <option value="">Selecione</option>
                  <option value="0">Nenhuma experiência</option>
                  <option value="1">1 ano</option>
                  <option value="2-3">2 a 3 anos</option>
                  <option value="4-5">4 a 5 anos</option>
                  <option value="6-10">6 a 10 anos</option>
                  <option value="10+">Mais de 10 anos</option>
                </select>
              </div>
              <CheckboxGroup label="Categoria de atletas que busca" name="categorias" options={[
                { value: "Sub-13", label:"Sub-13" },
                { value: "Sub-15", label:"Sub-15" },
                { value: "Sub-17", label:"Sub-17" },
                { value: "Sub-20", label:"Sub-20" },
                { value: "Profissional", label:"Profissional" },
              ]}/>
            </div>
            <div className="flex gap-4 w-full md:justify-center">
              <button type="button" className="h-14 md:h-12 w-1/2 md:w-1/3 bg-gray-400 text-white font-semibold rounded-lg text-lg hover:scale-105 hover:shadow-md transition-all" onClick={() => setStep(1)}>Voltar</button>
              <button type="button" className="h-14 md:h-12 w-1/2 md:w-1/3 bg-[#307039] text-white font-semibold rounded-lg text-lg hover:bg-[#24582b] hover:scale-105 transition-all" onClick={() => setStep(3)}>Continuar</button>
            </div>
          </form>
        </section>
      )}

      {/* --- STEP 3 --- */}
      {step === 3 && (
        <section className="w-full md:h-3/4 md:w-4/5 md:m-5 p-10 md:p-16 flex flex-col items-center bg-white md:shadow-xl rounded-xl">
          <img src={logo} className="w-25 mb-4 transition-transform duration-300 hover:scale-105" alt="" />
          <h2 className="font-extrabold text-2xl text-center text-[#4f3882] mb-5">
            Cadastro de olheiro(a) - Redes e Portfólio
          </h2>
          <div className="grid w-full grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-10 mb-10">
            <InputBox label="Linkedin ou rede profissional" placeholder="Ex: linkedin.com/seuperfil" type="text"/>
            <InputBox label="Site ou portfólio" placeholder="Ex: meuportfolio.com" type="text"/>
          </div>
          <p className="font-semibold text-[#4f3882] mb-5 text-lg">Foto de perfil</p>
          <UploadAndDisplayImage />
          <div className="flex gap-4 w-full md:justify-center mt-10">
            <button type="button" className="h-14 md:h-12 w-1/2 md:w-1/3 bg-gray-400 text-white font-semibold rounded-lg text-lg hover:scale-105 hover:shadow-md transition-all" onClick={() => setStep(2)}>Voltar</button>
            <button type="button" className="h-14 md:h-12 w-1/2 md:w-1/3 bg-[#307039] text-white font-semibold rounded-lg text-lg hover:bg-[#24582b] hover:scale-105 transition-all" onClick={() => setStep(4)}>Finalizar</button>
          </div>
        </section>
      )}

      {/* --- STEP 4 --- */}
      {step === 4 && <CadastroConcluido />}
    </>
  );
}
