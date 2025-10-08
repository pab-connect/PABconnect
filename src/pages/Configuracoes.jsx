import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import { SquareUserRound, Bell, Shield, CircleQuestionMark } from "lucide-react"
import ConfigItem from "../components/Configuracoes/ConfigItem";
import { useState, useEffect } from "react";
import ConfigCard from "../components/Configuracoes/ConfigCard";
import ConfigOption from "../components/Configuracoes/ConfigOption";
import UploadAndDisplayImage from "../components/Cadastro/UploadAndDisplayImage";
import InputWithLabel from "../components/Configuracoes/InputWithLabel";
import {getAll, update, API_BASE_URL } from ".././services/apiService.js"
import { Toastify } from "../components/Toastify/Toastify.jsx"
import SenhaDialog from "@/components/DialogComponents/SenhaDialog";
import LoadingOverlay from "@/components/LoadingOverlay/LoadingOverlay";


export default function Configuracoes() {
  const [ configChoice, setConfigChoice ] = useState("Conta")
  const [dataJogadora, setDataJogadora] = useState([])
  const [dataOlheiro, setDataOlheiro] = useState([]);
  const [novaSenha, setNovaSenha] = useState("")
  const [carregando, setCarregando] = useState(true);
  const user = JSON.parse(localStorage.getItem("user"));
  const tipo = user?.tipo === "jogadora" ? "jogadoras" : user?.tipo === "organizacao" ? "jogadoras" : "olheiros";
  const email = user?.email;


  const estadosBR = [
    "Acre","Alagoas","Amapá","Amazonas","Bahia","Ceará",
    "Distrito Federal","Espírito Santo","Goiás","Maranhão",
    "Mato Grosso","Mato Grosso do Sul","Minas Gerais","Pará",
    "Paraíba","Paraná","Pernambuco","Piauí","Rio de Janeiro",
    "Rio Grande do Norte","Rio Grande do Sul","Rondônia","Roraima",
    "Santa Catarina","São Paulo","Sergipe","Tocantins"
  ];

  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    senha: "",
    idade: "",
    estado: estadosBR[0],
    cidade: "",
    posicao: "",
    "pe-dominante": "Direito",
    altura: "",
    peso: "",
    "clube-atual": "",
    "sobre-mim": "",
    experiencias: "",
    conquistas: "",
    telefone: "",
    genero: "",
    cargo: "",
    clube: "",
    "tempo-experiencia": "Mais de 10 anos",
    "categoria-atletas": "sub-17"
  })

  const searchedUser = tipo === "jogadoras" ? dataJogadora.find((j) => j.email === email) : dataOlheiro.find((j) => j.email === email)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  // efeito pra buscar dados
  useEffect(() => {
    getAll(API_BASE_URL, "jogadoras").then(setDataJogadora);
    getAll(API_BASE_URL, "olheiros").then(setDataOlheiro);
    setCarregando(false);
  }, []);

  // efeito pra atualizar formData quando os dados e o email existirem
  useEffect(() => {
    if (searchedUser) {
      setFormData(prev => ({ ...prev, ...searchedUser }));
    }
  }, [searchedUser]);

  function tempo(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  const handleSubmit = async () => {
    const idadeNumero = Number(formData.idade);

    if (isNaN(idadeNumero) || idadeNumero < 10 || idadeNumero > 150) {
      Toastify.erro("Por favor, digite uma idade válida (entre 10 e 150 anos).");
      return;
    }

    const dataToSend = {
      ...formData,
      idade: idadeNumero
    };
    
    
    try {
      const response = await update(API_BASE_URL, tipo, formData.id, dataToSend);
      if (response) {
        Toastify.sucesso("Suas informações foram atualizadas com sucesso")
        console.log("Atualizado com sucesso")
      } else {
        Toastify.erro("Erro ao atualizar o cadastro. Por favor, tente novamente.");
      }
    } catch (error) {
      Toastify.erro("Erro ao atualizar. Verifique sua conexão e tente novamente.");
      console.error(error);
    }
  };

  async function handleMudarSenha() {
    try {
      const response = await update(API_BASE_URL, tipo, formData.id, { senha: novaSenha });
      if (response) {
        Toastify.sucesso("Senha atualizada com sucesso!");
        await tempo(1800)
        localStorage.clear();
        window.location.href = "/";
      } else {
        Toastify.erro("Erro ao atualizar a senha.");
      }
    } catch (error) {
      console.error(error);
      Toastify.erro("Erro de conexão ao atualizar a senha.");
    }
  }



  return (
    <div style={{ fontFamily: "var(--font-poppins)" }} className="flex flex-col bg-[#DAD0F0] min-h-screen">
      <Header />
      <div className="flex flex-1 pt-[88px]">
        <Sidebar isDesktop={true} />
        {carregando && <LoadingOverlay />}
        <main className="flex flex-1 flex-col md:grid md:grid-cols-[1fr_3fr] md:grid-rows-[2.5rem_1fr] gap-4 lg:ml-64 p-8 md:pr-10 ">
          <h2 className="text-3xl md:col-span-2 md:font-bold sm:text-4xl md:text-3xl text-center md:text-left font-semibold mb-2 md:px-2">Configurações</h2>
          <section className="bg-white md:bg-transparent font-(family-name:--font-inter) w-full p-2 rounded-lg flex flex-col">
            <ConfigItem 
              icon={<SquareUserRound size={30} strokeWidth={1.5} color="#5100FF"/>} 
              text="Conta" 
              setConfig={() => setConfigChoice("Conta")}
              active={configChoice}
            />
            <ConfigItem 
              icon={<Bell size={30} strokeWidth={1.5} color="#5100FF"/>} 
              text="Notificações" 
              setConfig={() => setConfigChoice("Notificações")}
              active={configChoice}
            />
            <ConfigItem 
              icon={<Shield size={30} strokeWidth={1.5} color="#5100FF"/>} 
              text="Segurança" 
              setConfig={() => setConfigChoice("Segurança")}
              active={configChoice}
            />
            <ConfigItem 
              icon={<CircleQuestionMark size={30} strokeWidth={1.5} color="#5100FF"/>} 
              text="Suporte" 
              setConfig={() => setConfigChoice("Suporte")}
              active={configChoice}
            />
          </section>
          {configChoice === "Notificações" && 
            <ConfigCard
              title="Notificações"
              description="Controle os tipos de notificações que recebe."
              items={[
                <ConfigOption text="Notificações via email" description="Receba alertas e avisos diretamente na sua caixa de entrada." size="sm" />,
                <ConfigOption text="Notificações via sms" description="Mensagens rápidas enviadas para o seu celular." size="sm" />,
                <ConfigOption text="Notificações Pop-up" description="Avisos imediatos exibidos na tela enquanto você usa a plataforma." size="sm" />,
                <ConfigOption text="Receber novidades e atualizações da plataforma" size="sm" />
              ]}
            />
          }
          {configChoice === "Segurança" &&
            <ConfigCard
              title="Segurança"
              description="Fortaleça a segurança e proteja seus dados."
              items={[
                <div className="flex gap-5 items-center">
                  <p className="text-xl sm:text-2xl md:font-semibold md:text-xl">Mudar senha</p>
                  <SenhaDialog handleMudarSenha={handleMudarSenha} senhaAtualExt={searchedUser?.senha} novaSenha={novaSenha} setNovaSenha={setNovaSenha}/>
                </div>,
                <ConfigOption state={true} text="Permitir que te encontrem na busca" description="Deixe seu perfil visível para outros usuários." size="sm" />,
                <ConfigOption text="Apenas conexões podem enviar mensagens" description="Restringe o envio de mensagens somente a quem já está na sua rede." size="sm" />,
                <div className="flex gap-5 items-center">
                  <p className="text-xl sm:text-2xl md:font-semibold md:text-xl">Deletar conta</p>
                  <button onClick={()=>Toastify.erro("Função não implementada")} className="bg-red-300 sm:text-xl md:text-lg md:p-1  sm:w-40 hover:bg-red-400 hover:text-black hover:border-red-600 cursor-pointer hover:scale-99 transition-all text-red-900 p-2 text-wrap w-30 rounded-md ml-auto border-[#ab8c8c] border-1 font-semibold">Prosseguir</button>
                </div>
              ]}
            />
          }
          {configChoice === "Suporte" && 
            <ConfigCard
              title="Suporte"
              description="Entre em contato conosco e veja informações do sistema."
              items={[
                <div className="flex gap-5 items-center">
                  <p className="text-xl sm:text-2xl md:font-semibold md:text-xl">Email de contato</p>
                  <a 
                    href="mailto:pabconnect.fiap@gmail.com" 
                    className="ml-auto sm:text-xl md:text-lg text-center text-purple-700 text-wrap w-40 sm:w-47 md:text-nowrap md:w-auto font-medium underline"
                  >
                    pabconnect.fiap@gmail.com
                  </a>
                </div>,
                <div className="flex gap-5 items-center">
                  <p className="text-xl sm:text-2xl md:font-semibold md:text-xl">Versão do site</p>
                  <span className="ml-auto sm:text-xl md:text-lg text-gray-600">v2.0.0</span>
                </div>,
                <div className="flex gap-5 items-center">
                  <p className="text-xl sm:text-2xl md:font-semibold md:text-xl">Última atualização</p>
                  <span className="ml-auto sm:text-xl md:text-lg text-gray-600">08/10/2025</span>
                </div>
              ]}
            />
          }
          {configChoice === "Conta" && 
            <ConfigCard
              title="Conta"
              description="Veja e edita as informações da sua conta."
              items={[
              <form className="flex flex-col md:grid md:gap-x-10 md:grid-cols-2">
                <label className="text-gray-900 mt-2 sm:text-xl md:col-span-2 sm:text-center">Foto
                  <UploadAndDisplayImage/>
                </label>
                <InputWithLabel label={"Nome"} name={"nome"} value={formData.nome} onChange={handleChange} width="w-auto"/>
                <InputWithLabel label={"Idade"} name={"idade"} value={formData.idade} onChange={handleChange} width="w-auto" type="number"/>
                <InputWithLabel label={"Cidade"} name={"cidade"} value={formData.cidade} onChange={handleChange} width="w-auto"/>
                {tipo === "olheiros" && <InputWithLabel label={"Telefone"} name={"telefone"} value={formData.telefone} onChange={handleChange} width="w-auto" type="number"/>}
                {tipo === "olheiros" && 
                  <label className="text-gray-900 mt-2 sm:mt-4 md:mt-3 text-sm md:text-sm sm:text-lg">Gênero
                    <select name="genero" onChange={handleChange} value={formData.genero} className="w-full h-full sm:h-15 md:h-12 md:text-lg text-base sm:text-xl px-3 py-3 border border-gray-400 rounded-md focus:outline-none focus:border-blue-500">
                      <option value="Prefiro-nao-responder">Prefiro não responder</option>
                      <option value="Masculino">Masculino</option>
                      <option value="Feminino">Feminino</option>
                      <option value="Nao-binario">Não-binário</option>
                      <option value="Outro">Outro</option>
                    </select>
                  </label>
                }
                {tipo === "olheiros" && <InputWithLabel label={"Cargo"} name={"cargo"} value={formData.cargo} onChange={handleChange} width="w-auto"/>}
                {tipo === "olheiros" && <InputWithLabel label={"Clube"} name={"clube"} value={formData.clube} onChange={handleChange} width="w-auto"/>}
                <label className="text-gray-900 mt-2 sm:mt-4 md:mt-3 md:text-sm text-sm sm:text-lg">Estado
                  <select name="estado" onChange={handleChange} value={formData.estado} className="w-full h-full sm:h-15 md:h-12 md:text-lg px-3 text-base sm:text-xl py-3 border border-gray-400 rounded-md focus:outline-none focus:border-blue-500">
                    {estadosBR.map((estado)=>(<option value={estado} key={estado}>{estado}</option>))}
                  </select>
                </label>
                <InputWithLabel label={"Sobre-mim"} name={"sobre-mim"} value={formData["sobre-mim"]} onChange={handleChange} width="w-auto"/>
                {tipo === "jogadoras" && <InputWithLabel label={"Experiências"} name={"experiencias"} value={formData.experiencias} onChange={handleChange} width="w-auto"/>}
                {tipo === "jogadoras" && <InputWithLabel label={"Posição"} name={"posicao"} value={formData.posicao} onChange={handleChange} width="w-auto"/>}
                {tipo === "jogadoras" && 
                  <label className="text-gray-900 mt-2 sm:mt-4 md:mt-3 text-sm md:text-sm sm:text-lg">Pé dominante
                    <select name="pe-dominante" onChange={handleChange} value={formData["pe-dominante"]} className="w-full h-full sm:h-15 md:h-12 md:text-lg text-base sm:text-xl px-3 py-3 border border-gray-400 rounded-md focus:outline-none focus:border-blue-500">
                      <option value="Direito">Direito</option>
                      <option value="Esquerdo">Esquerdo</option>
                      <option value="Ambos">Ambos</option>
                    </select>
                  </label>
                }
                {tipo === "jogadoras" && <InputWithLabel label={"Altura"} name={"altura"} value={formData.altura} onChange={handleChange} width="w-auto" type="number"/>}
                {tipo === "jogadoras" && <InputWithLabel label={"Peso"} name={"peso"} value={formData.peso} onChange={handleChange} width="w-auto" type="number"/>}
                <InputWithLabel label={"Conquistas/destaques"} value={formData.conquistas} onChange={handleChange} name={"conquistas"} width="w-auto"/>
                {tipo === "olheiros" && 
                  <label className="text-gray-900 mt-2 sm:mt-4 md:mt-3 text-sm md:text-sm sm:text-lg">Tempo de experiência
                    <select name="tempo-experiencia" onChange={handleChange} value={formData["tempo-experiencia"]} className="w-full h-full sm:h-15 md:h-12 md:text-lg text-base sm:text-xl px-3 py-3 border border-gray-400 rounded-md focus:outline-none focus:border-blue-500">
                      <option value="Nenhuma experiência">Nenhuma experiência</option>
                      <option value="1 ano">1 ano</option>
                      <option value="2 a 3 anos">2 a 3 anos</option>
                      <option value="4 a 5 anos">4 a 5 anos</option>
                      <option value="6 a 10 anos">6 a 10 anos</option>
                      <option value="Mais de 10 anos">Mais de 10 anos</option>
                    </select>
                  </label>
                }
                <button type="button" className="bg-[#307039] md:col-span-2 mx-auto text-lg md:text-lg sm:text-xl mt-4 sm:mt-8 w-5/6 sm:w-3/6 md:w-2/6 rounded-md h-12 sm:h-14 md:h-12 hover:scale-99 transition-all text-white font-medium cursor-pointer" onClick={handleSubmit}>Salvar</button>
              </form>]}
            />
            
          }

        </main>
      </div>
      <Footer />
    </div>
  );
}
