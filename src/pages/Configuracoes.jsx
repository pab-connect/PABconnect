import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import { SquareUserRound, Bell, Shield, CircleQuestionMark } from "lucide-react"
import ConfigItem from "../components/Configuracoes/ConfigItem";
import { useState } from "react";
import ConfigCard from "../components/Configuracoes/ConfigCard";
import ConfigOption from "../components/Configuracoes/ConfigOption";
import UploadAndDisplayImage from "../components/Cadastro/UploadAndDisplayImage";
import InputWithLabel from "../components/Configuracoes/InputWithLabel";


export default function Configuracoes() {
  const [ configChoice, setConfigChoice ] = useState("Conta")
  const estadosBR = [
    "Acre","Alagoas","Amapá","Amazonas","Bahia","Ceará",
    "Distrito Federal","Espírito Santo","Goiás","Maranhão",
    "Mato Grosso","Mato Grosso do Sul","Minas Gerais","Pará",
    "Paraíba","Paraná","Pernambuco","Piauí","Rio de Janeiro",
    "Rio Grande do Norte","Rio Grande do Sul","Rondônia","Roraima",
    "Santa Catarina","São Paulo","Sergipe","Tocantins"
  ];
  return (
    <div className="flex flex-col bg-[#DAD0F0] min-h-screen">
      <Header />
      <div className="flex flex-1 pt-[88px]">
        <Sidebar isDesktop={true} />
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
                  <button className="bg-gray-200 sm:text-xl md:text-lg md:p-1 sm:w-40 hover:bg-yellow-200 hover:scale-99 transition-all hover:border-yellow-400 cursor-pointer p-2 text-wrap w-32 rounded-md ml-auto border-[#8CAB91] border-1 font-semibold">Alterar Senha</button>
                </div>,
                <ConfigOption state={true} text="Permitir que te encontrem na busca" description="Deixe seu perfil visível para outros usuários." size="sm" />,
                <ConfigOption text="Apenas conexões podem enviar mensagens" description="Restringe o envio de mensagens somente a quem já está na sua rede." size="sm" />,
                <div className="flex gap-5 items-center">
                  <p className="text-xl sm:text-2xl md:font-semibold md:text-xl">Deletar conta</p>
                  <button className="bg-red-300 sm:text-xl md:text-lg md:p-1  sm:w-40 hover:bg-red-400 hover:text-black hover:border-red-600 cursor-pointer hover:scale-99 transition-all text-red-900 p-2 text-wrap w-30 rounded-md ml-auto border-[#ab8c8c] border-1 font-semibold">Prosseguir</button>
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
                    pabconnect.fiap@ gmail.com
                  </a>
                </div>,
                <div className="flex gap-5 items-center">
                  <p className="text-xl sm:text-2xl md:font-semibold md:text-xl">Versão do site</p>
                  <span className="ml-auto sm:text-xl md:text-lg text-gray-600">v1.0.0</span>
                </div>,
                <div className="flex gap-5 items-center">
                  <p className="text-xl sm:text-2xl md:font-semibold md:text-xl">Última atualização</p>
                  <span className="ml-auto sm:text-xl md:text-lg text-gray-600">08/09/2025</span>
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
                <InputWithLabel label={"Nome"} width="w-auto"/>
                <InputWithLabel label={"Cidade"} width="w-auto"/>
                <label className="text-gray-900 mt-2 sm:mt-4 md:mt-3 md:text-sm text-sm sm:text-lg">Estado
                  <select className="w-full h-full sm:h-15 md:h-12 md:text-lg px-3 text-base sm:text-xl py-3 border border-gray-400 rounded-md focus:outline-none focus:border-blue-500">
                    {estadosBR.map((estado)=>(<option value={estado} key={estado}>{estado}</option>))}
                  </select>
                </label>
                <InputWithLabel label={"Sobre-mim"} width="w-auto"/>
                <InputWithLabel label={"Experiências"} width="w-auto"/>
                <InputWithLabel label={"Posição"} width="w-auto"/>
                <label className="text-gray-900 mt-2 sm:mt-4 md:mt-3 text-sm md:text-sm sm:text-lg">Pé dominante
                  <select className="w-full h-full sm:h-15 md:h-12 md:text-lg text-base sm:text-xl px-3 py-3 border border-gray-400 rounded-md focus:outline-none focus:border-blue-500">
                    <option value="Direito">Direito</option>
                    <option value="Esquerdo">Esquerdo</option>
                    <option value="Ambos">Ambos</option>
                  </select>
                </label>
                <InputWithLabel label={"Altura"} width="w-auto" type="number"/>
                <InputWithLabel label={"Peso"} width="w-auto" type="number"/>
                <InputWithLabel label={"Conquistas/destaques"} width="w-auto"/>
                <button className="bg-[#307039] md:col-span-2 mx-auto text-lg md:text-lg sm:text-xl mt-4 sm:mt-8 w-5/6 sm:w-3/6 md:w-2/6 rounded-md h-12 sm:h-14 md:h-12 hover:scale-99 transition-all text-white font-medium cursor-pointer">Salvar</button>
              </form>]}
            />
            
          }

        </main>
      </div>
      <Footer />
    </div>
  );
}
