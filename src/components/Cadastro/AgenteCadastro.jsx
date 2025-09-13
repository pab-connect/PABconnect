import { useState } from "react";
import InputBox from "./InputBox";
import logo from "/logo-text.png";
import UploadAndDisplayImage from "./UploadAndDisplayImage";
import CheckboxGroup from "./CheckboxGroup";
import CadastroConcluido from "./CadastroConcluido";
import { create, API_BASE_URL } from "../../services/apiService";

export default function AgenteCadastro() {
  const estadosBR = [
    "Acre","Alagoas","Amapá","Amazonas","Bahia","Ceará",
    "Distrito Federal","Espírito Santo","Goiás","Maranhão",
    "Mato Grosso","Mato Grosso do Sul","Minas Gerais","Pará",
    "Paraíba","Paraná","Pernambuco","Piauí","Rio de Janeiro",
    "Rio Grande do Norte","Rio Grande do Sul","Rondônia","Roraima",
    "Santa Catarina","São Paulo","Sergipe","Tocantins"
  ];
  const categoriasAtletas = [
    { value: "Sub-13", label:"Sub-13" },
    { value: "Sub-15", label:"Sub-15" },
    { value: "Sub-17", label:"Sub-17" },
    { value: "Sub-20", label:"Sub-20" },
    { value: "Profissional", label:"Profissional" },
  ];

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    senha: "",
    confirmarSenha: "",
    telefone: "",
    idade: "",
    genero: "Prefiro-nao-responder",
    estado: estadosBR[0],
    cidade: "",
    cargo: "",
    clube: "",
    "tempo-experiencia": "",
    "categoria-atletas": [],
    linkedin: "",
    portfolio: "",
    "foto-perfil": "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (selectedOptions) => {
    setFormData(prevData => ({
      ...prevData,
      "categoria-atletas": selectedOptions,
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
    if (!formData.cargo) {
      alert("Por favor, preencha o cargo.");
      return;
    }
    setStep(3);
  };
  
  const handleSubmit = async () => {

    const idadeNumero = Number(formData.idade);

    if (isNaN(idadeNumero) || idadeNumero < 10 || idadeNumero > 150) {
      alert("Por favor, digite uma idade válida (entre 10 e 100 anos).");
      return;
    }

    const partesNome = formData.nome.split(" ");
    const username = `${partesNome[0].toLowerCase()}.${partesNome[partesNome.length - 1].toLowerCase()}`;

    const dataToSend = {
      ...formData,
      idade: idadeNumero,
      username: username,
      seguidores: [],
      seguindo: [],
      "sobre-mim": "",
      experiencias: "",
      conquistas: "",
    };
    delete dataToSend.confirmarSenha;
    
    try {
      const response = await create(API_BASE_URL, "olheiros", dataToSend);
      if (response) {
        console.log("Cadastro de olheiro concluído com sucesso!", response);
        localStorage.setItem("user", JSON.stringify({ tipo: "olheiro", email: dataToSend.email }));
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
      {step === 1 && (
        <section className="w-full md:h-3/4 md:w-4/5 sm:p-18 md:m-5 p-10 md:p-16 flex flex-col items-center bg-white md:shadow-xl rounded-xl">
          <img src={logo} className="w-25 sm:w-50 md:w-25 mb-4 transition-transform duration-300 hover:scale-105" alt="" />
          <h2 className="font-extrabold text-2xl text-center text-[#4f3882] mb-5">
            Cadastro de olheiro(a) - Informações Pessoais
          </h2>
          <form className="w-full flex flex-col items-center gap-4">
            <div className="grid sm:grid-cols-2 w-full grid-cols-1 gap-y-5 gap-x-10 mb-10 md:mb-5">
              <InputBox name="nome" value={formData.nome} onChange={handleChange} required label="Nome*" placeholder="Ex: Maria Silva" type="text"/>
              <InputBox name="email" value={formData.email} onChange={handleChange} required label="Email*" placeholder="Ex: maria@gmail.com" type="email"/>
              <InputBox name="senha" value={formData.senha} onChange={handleChange} required label="Senha*" placeholder="" type="password"/>
              <InputBox name="confirmarSenha" value={formData.confirmarSenha} onChange={handleChange} required label="Confirmar senha*" placeholder="" type="password"/>
              <InputBox name="telefone" value={formData.telefone} onChange={handleChange} label="Telefone/Whatsapp" placeholder="Ex: 1144443333" type="tel"/>
              <InputBox name="idade" value={formData.idade} onChange={handleChange} required label="Idade*" placeholder="Ex: 18" type="number"/>
              <div className="flex flex-col items-start w-full text-[#4f3882]">
                <label>Gênero</label>
                <select name="genero" value={formData.genero} onChange={handleChange} className="border mt-1 rounded-lg focus:outline-[#281452] h-12 md:h-10 w-full px-5 placeholder:text-lg transition-all duration-200 hover:shadow-md">
                  <option value="Prefiro-nao-responder">Prefiro não responder</option>
                  <option value="Masculino">Masculino</option>
                  <option value="Feminino">Feminino</option>
                  <option value="Nao-binario">Não-binário</option>
                  <option value="Outro">Outro</option>
                </select>
              </div>
              <div className="flex flex-col items-start w-full text-[#4f3882]">
                <label>Estado*</label>
                <select name="estado" value={formData.estado} onChange={handleChange} className="border mt-1 rounded-lg focus:outline-[#281452] h-12 md:h-10 w-full px-5 placeholder:text-lg transition-all duration-200 hover:shadow-md">
                  {estadosBR.map((estado)=>(<option value={estado} key={estado}>{estado}</option>))}
                </select>
              </div>
              <InputBox name="cidade" value={formData.cidade} onChange={handleChange} required label="Cidade*" placeholder="Ex: São Paulo" type="text"/>
            </div>
            <button type="button" className="h-14 sm:w-2/3 sm:text-xl md:h-12 md:w-3/6 w-full bg-[#307039] text-white font-semibold rounded-lg text-lg hover:bg-[#24582b] hover:scale-105 transition-all" onClick={handleNextStep1}>
              Continuar
            </button>
          </form>
        </section>
      )}

      {step === 2 && (
        <section className="w-full md:h-3/4 md:w-4/5 sm:p-20 md:mt-0 sm:mt-10 p-10 md:p-16 flex flex-col items-center bg-white md:shadow-xl rounded-xl">
          <img src={logo} className="w-25 sm:w-50 md:w-25 mb-4 transition-transform duration-300 hover:scale-105" alt="" />
          <h2 className="font-extrabold text-2xl text-center text-[#4f3882] mb-5">
            Cadastro de olheiro(a) - Informações Profissionais
          </h2>
          <form className="w-full flex flex-col items-center gap-4">
            <div className="grid sm:grid-cols-2 w-full grid-cols-1 gap-y-5 gap-x-10 mb-10">
              <InputBox name="cargo" value={formData.cargo} onChange={handleChange} required label="Cargo/Função atual*" placeholder="Ex: Treinador" type="text"/>
              <InputBox name="clube" value={formData.clube} onChange={handleChange} label="Clube ou organização associada" placeholder="Ex: Corinthians" type="text"/>
              <div className="flex flex-col items-start w-full text-[#4f3882]">
                <label>Tempo de experiência (anos)</label>
                <select name="tempo-experiencia" value={formData["tempo-experiencia"]} onChange={handleChange} className="border mt-1 rounded-lg focus:outline-[#281452] h-12 md:h-10 w-full px-5 placeholder:text-lg transition-all duration-200 hover:shadow-md">
                  <option value="">Selecione</option>
                  <option value="0">Nenhuma experiência</option>
                  <option value="1">1 ano</option>
                  <option value="2-3">2 a 3 anos</option>
                  <option value="4-5">4 a 5 anos</option>
                  <option value="6-10">6 a 10 anos</option>
                  <option value="10+">Mais de 10 anos</option>
                </select>
              </div>
              <CheckboxGroup name="categoria-atletas" label="Categoria de atletas que busca" options={categoriasAtletas} onSelectionChange={handleCheckboxChange} />
            </div>
            <div className="flex gap-4 w-full sm:justify-center">
              <button type="button" className="h-14 md:h-12 w-1/2 md:w-1/3 sm:w-2/5 bg-gray-400 text-white font-semibold rounded-lg text-lg hover:scale-105 hover:shadow-md transition-all" onClick={() => setStep(1)}>Voltar</button>
              <button type="button" className="h-14 md:h-12 w-1/2 md:w-1/3 sm:w-2/5 bg-[#307039] text-white font-semibold rounded-lg text-lg hover:bg-[#24582b] hover:scale-105 transition-all" onClick={handleNextStep2}>Continuar</button>
            </div>
          </form>
        </section>
      )}

      {step === 3 && (
        <section className="w-full md:h-3/4 md:w-4/5 sm:p-20 md:m-5 sm:mt-10 p-10 md:p-16 flex flex-col items-center bg-white md:shadow-xl rounded-xl">
          <img src={logo} className="w-25 sm:w-50 md:w-25 mb-4 transition-transform duration-300 hover:scale-105" alt="" />
          <h2 className="font-extrabold text-2xl text-center text-[#4f3882] mb-5">
            Cadastro de olheiro(a) - Redes e Portfólio
          </h2>
          <div className="grid sm:grid-cols-2 w-full grid-cols-1 gap-y-5 gap-x-10 mb-10">
            <InputBox name="linkedin" value={formData.linkedin} onChange={handleChange} label="Linkedin ou rede profissional" placeholder="Ex: linkedin.com/seuperfil" type="text"/>
            <InputBox name="portfolio" value={formData.portfolio} onChange={handleChange} label="Site ou portfólio" placeholder="Ex: meuportfolio.com" type="text"/>
          </div>
          <p className="font-semibold text-[#4f3882] mb-5 text-lg">Foto de perfil</p>
          <UploadAndDisplayImage setFormData={setFormData} />
          <div className="flex gap-4 w-full sm:justify-center mt-10">
            <button type="button" className="h-14 md:h-12 w-1/2 md:w-1/3 sm:w-2/5 bg-gray-400 text-white font-semibold rounded-lg text-lg hover:scale-105 hover:shadow-md transition-all" onClick={() => setStep(2)}>Voltar</button>
            <button type="button" className="h-14 md:h-12 w-1/2 md:w-1/3 sm:w-2/5 bg-[#307039] text-white font-semibold rounded-lg text-lg hover:bg-[#24582b] hover:scale-105 transition-all" onClick={handleSubmit}>Finalizar</button>
          </div>
        </section>
      )}

      {step === 4 && <CadastroConcluido />}
    </>
  );
}