import { useState } from "react";
import InputBox from "./InputBox";
import logo from "/logo-text.png";
import UploadAndDisplayImage from "./UploadAndDisplayImage";
import CadastroConcluido from "./CadastroConcluido";
import { create, API_BASE_URL } from "../../services/apiService";

export default function JogadorCadastro() {
  const estadosBR = [
    "Acre","Alagoas","Amapá","Amazonas","Bahia","Ceará","Distrito Federal",
    "Espírito Santo","Goiás","Maranhão","Mato Grosso","Mato Grosso do Sul",
    "Minas Gerais","Pará","Paraíba","Paraná","Pernambuco","Piauí","Rio de Janeiro",
    "Rio Grande do Norte","Rio Grande do Sul","Rondônia","Roraima","Santa Catarina",
    "São Paulo","Sergipe","Tocantins"
  ];

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    senha: "",
    confirmarSenha: "",
    idade: "",
    estado: estadosBR[0],
    cidade: "",
    posicao: "",
    "clube-atual": "",
    altura: "",
    "pe-dominante": "Direito",
    "foto-perfil": "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleNextStep1 = () => {
    if (!formData.nome || !formData.email || !formData.senha || !formData.confirmarSenha || !formData.idade || !formData.cidade) {
      alert("Por favor, preencha todos os campos obrigatórios.");
      return;
    }
    if (formData.senha !== formData.confirmarSenha) {
      alert("As senhas não coincidem.");
      return;
    }
    setStep(2);
  };

  const handleNextStep2 = () => {
    if (!formData.posicao || !formData.altura) {
      alert("Por favor, preencha todos os campos obrigatórios.");
      return;
    }
    setStep(3);
  };

  const handleSubmit = async () => {
    const idadeNumero = Number(formData.idade);
    const alturaNumero = Number(formData.altura);
    
    const partesNome = formData.nome.split(" ");
    const username = `${partesNome[0].toLowerCase()}.${partesNome[partesNome.length - 1].toLowerCase()}`;
    
    const dataToSend = {
      ...formData, // copia todos os dados do formulário
      idade: idadeNumero,
      altura: alturaNumero,
      username: username,
      // valores padrão, pq não estão no form
      seguidores: [],
      seguindo: [],
      "sobre-mim": "",
      experiencias: "",
      conquistas: "",
      "disp-tranferencia": false,
    };
    
    // Remove o campo de confirmação da senha antes de enviar
    delete dataToSend.confirmarSenha;
    
    try {
      const response = await create(API_BASE_URL, "jogadoras", dataToSend);
      
      if (response) {
        console.log("Cadastro concluído com sucesso! Resposta da API:", response);
        localStorage.setItem("user", JSON.stringify({ tipo: "jogadora", email: dataToSend.email }));
        setStep(4);
      } else {
        alert("Erro ao finalizar o cadastro. Por favor, tente novamente.");
      }
    } catch (error) {
      alert("Erro ao enviar o cadastro. Verifique sua conexão e tente novamente.");
      console.error(error);
    }
  };
  
  return (
    <>
      {/*STEP 1*/}
      {step === 1 && (
        <section className="w-full md:h-3/4 md:w-4/5 p-10 md:p-16 sm:p-20 sm:mt-10 md:mt-0 flex flex-col items-center bg-white md:shadow-xl rounded-xl">
          <img src={logo} className="w-25 sm:w-50 md:w-25 mb-4 transition-transform duration-300 hover:scale-105" alt="" />
          <h2 className="font-extrabold text-2xl text-center text-[#4f3882] mb-5">
            Cadastro de jogadora - Informações Pessoais
          </h2>
          <form className="w-full flex flex-col items-center gap-4">
            <div className="grid sm:grid-cols-2 w-full grid-cols-1 gap-y-5 gap-x-10 mb-10">
              <InputBox name="nome" value={formData.nome} onChange={handleChange} required label="Nome*" placeholder="Ex: Maria Silva" type="text" />
              <InputBox name="email" value={formData.email} onChange={handleChange} required label="Email*" placeholder="Ex: maria@gmail.com" type="email" />
              <InputBox name="senha" value={formData.senha} onChange={handleChange} required label="Senha*" placeholder="" type="password" />
              <InputBox name="confirmarSenha" value={formData.confirmarSenha} onChange={handleChange} required label="Confirmar senha*" placeholder="" type="password" />
              <InputBox name="idade" value={formData.idade} onChange={handleChange} required label="Idade*" placeholder="Ex: 18" type="number" />
              <div className="flex flex-col items-start w-full text-[#4f3882]">
                <label>Estado*</label>
                <select name="estado" value={formData.estado} onChange={handleChange} className="border mt-1 rounded-lg focus:outline-[#281452] h-12 md:h-10 w-full px-5 placeholder:text-lg transition-all duration-200 hover:shadow-md">
                  {estadosBR.map((estado)=>(<option value={estado} key={estado}>{estado}</option>))}
                </select>
              </div>
              <InputBox name="cidade" value={formData.cidade} onChange={handleChange} required label="Cidade*" placeholder="Ex: São Paulo" type="text"/>
            </div>
            <button
              type="button"
              className="h-14 sm:w-2/3 sm:text-xl md:h-12 md:w-3/6 w-full bg-[#307039] text-white font-semibold rounded-lg text-lg cursor-pointer transition-all duration-300 hover:bg-[#24582b] hover:scale-105"
              onClick={handleNextStep1}
            >
              Continuar
            </button>
          </form>
        </section>
      )}

      {/*STEP 2*/}
      {step === 2 && (
        <section className="w-full md:h-3/4 md:w-4/5 sm:p-20 md:mt-0 sm:mt-10 p-10 md:p-16 flex flex-col items-center bg-white md:shadow-xl rounded-xl">
          <img src={logo} className="w-25 sm:w-50 md:w-25 mb-4 transition-transform duration-300 hover:scale-105" alt="" />
          <h2 className="font-extrabold text-2xl text-center text-[#4f3882] mb-5">
            Cadastro de jogadora - Dados Atléticos
          </h2>
          <form className="w-full flex flex-col items-center gap-4">
            <div className="grid grid-cols-1 sm:w-3/5 md:w-full md:grid-cols-2 gap-y-5 gap-x-10 mb-10 w-full">
              <InputBox name="posicao" value={formData.posicao} onChange={handleChange} required label="Posição*" placeholder="Ex: Atacante" type="text"/>
              <InputBox name="clube-atual" value={formData["clube-atual"]} onChange={handleChange} label="Clube" placeholder="Ex: Corinthians" type="text"/>
              <InputBox name="altura" value={formData.altura} onChange={handleChange} required label="Altura*" placeholder="Ex: 165cm" type="number"/>
              <div className="flex flex-col items-start w-full text-[#4f3882]">
                <label>Pé dominante</label>
                <select name="pe-dominante" value={formData["pe-dominante"]} onChange={handleChange} className="border mt-1 rounded-lg focus:outline-[#281452] h-12 md:h-10 w-full px-5 placeholder:text-lg transition-all duration-200 hover:shadow-md">
                  <option value="Direito">Direito</option>
                  <option value="Esquerdo">Esquerdo</option>
                  <option value="Ambos">Ambos</option>
                </select>
              </div>
            </div>
            <div className="flex gap-4 w-full sm:justify-center">
              <button type="button" className="h-14 md:h-12 w-1/2 md:w-1/3 sm:w-2/5 bg-gray-400 text-white font-semibold rounded-lg text-lg hover:scale-105 hover:shadow-md transition-all" onClick={() => setStep(1)}>
                Voltar
              </button>
              <button 
                type="button" 
                className="h-14 md:h-12 w-1/2 md:w-1/3 sm:w-2/5 bg-[#307039] text-white font-semibold rounded-lg text-lg hover:bg-[#24582b] hover:scale-105 transition-all" 
                onClick={handleNextStep2}
              >
                Continuar
              </button>
            </div>
          </form>
        </section>
      )}

      {/*STEP 3*/}
      {step === 3 && (
        <section className="w-full md:h-3/4 md:w-4/5 sm:p-20 md:mt-0 sm:mt-10 p-10 md:p-16 md:m-5 flex flex-col items-center bg-white md:shadow-xl rounded-xl">
          <img src={logo} className="w-25 sm:w-50 md:w-25 mb-4 transition-transform duration-300 hover:scale-105" alt="" />
          <h2 className="font-extrabold text-2xl text-center text-[#4f3882] mb-5">
            Cadastro de jogadora - Mídia
          </h2>
          <p className="font-semibold text-[#4f3882] mb-5 text-lg">Foto de perfil</p>
          <UploadAndDisplayImage setFormData={setFormData} />
          <p className="my-10 text-center text-lg hover:text-[#307039] cursor-pointer">
            Clique em finalizar para concluir o cadastro
          </p>
          <div className="flex gap-4 w-full sm:justify-center">
            <button type="button" className="h-14 md:h-12 w-1/2 md:w-1/3 sm:w-2/5 bg-gray-400 text-white font-semibold rounded-lg text-lg hover:scale-105 hover:shadow-md transition-all" onClick={() => setStep(2)}>
              Voltar
            </button>
            <button 
              type="button" 
              className="h-14 md:h-12 w-1/2 md:w-1/3 sm:w-2/5 bg-[#307039] text-white font-semibold rounded-lg text-lg hover:bg-[#24582b] hover:scale-105 transition-all" 
              onClick={handleSubmit}
            >
              Finalizar
            </button>
          </div>
        </section>
      )}

      {/*STEP 4*/}
      {step === 4 && <CadastroConcluido />}
    </>
  );
}