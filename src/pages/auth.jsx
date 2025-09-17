import "../App.css";
import logo from "/logo-text.png";
import Cadastro from "../components/Cadastro/Cadastro.jsx";
import { useState, useEffect } from "react";
import { getAll, API_BASE_URL } from "../services/apiService.js";
import { useNavigate } from "react-router-dom";

function Auth() {
  const navigate = useNavigate();

  const [isRegister, toggle] = useState(false);
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [dataJogadora, setDataJogadora] = useState([]);
  const [dataOlheiro, setDataOlheiro] = useState([]);

  const [erro, setErro] = useState("");

  const handleEmail = (e) => setEmail(e.target.value);
  const handleSenha = (e) => setSenha(e.target.value);

  function checkLogin(data, email, senha) {
    const user = data.find((j) => j.email === email);

    if (!user) return "naoExiste";
    if (user.senha === senha) return "ok";
    return "senhaErrada";
  }

  function handleSubmit(event) {
    event.preventDefault();

    const jogadorCheck = checkLogin(dataJogadora, email, senha);
    const olheiroCheck = checkLogin(dataOlheiro, email, senha);

    if (jogadorCheck === "ok") {
      setErro("");
      localStorage.setItem(
        "user",
        JSON.stringify({ tipo: "jogadora", email: email })
      );
      navigate("/home/jogadora");
    } else if (olheiroCheck === "ok") {
      setErro("");
      localStorage.setItem(
        "user",
        JSON.stringify({ tipo: "olheiro", email: email })
      );
      navigate("/home/agente");
    } else if (
      jogadorCheck === "senhaErrada" ||
      olheiroCheck === "senhaErrada"
    ) {
      setErro("Senha incorreta!");
    } else {
      setErro("Usuário não encontrado!");
    }
  }

  useEffect(() => {
    getAll(API_BASE_URL, "jogadoras")
      .then((jogadoras) => {
        setDataJogadora(jogadoras);
      })
      .finally(() => {
        console.log("Carregamento de jogadoras finalizado!");
      });

    getAll(API_BASE_URL, "olheiros")
      .then((olheiros) => {
        setDataOlheiro(olheiros);
      })
      .finally(() => {
        console.log("Carregamento de olheiros finalizado!");
      });
  }, []);

  return (
    <div className="w-full min-h-full md:min-h-screen overflow-y-auto md:flex md:bg-[#DAD0f0] md:items-center md:justify-center font-(family-name:--font-poppins)">
      <main className="md:relative bg-white md:bg-transparent w-full sm:w-full md:w-4/5 md:max-w-5xl md:min-w-[760px] flex justify-center overflow-hidden md:rounded-2xl ">
        {/*LOGIN*/}
        <section
          className={`md:w-1/2 sm:w-2/3 flex md:bg-white flex-col justify-center rounded-l-2xl items-center p-10 py-12 sm:p-15 sm:mt-15 md:p-10 md:mt-0 ${
            isRegister ? "hidden" : ""
          }`}
        >
          <img
            src={logo}
            className="w-50 sm:w-75 md:w-50 my-8 transition-transform duration-300 hover:scale-105"
            alt="logo"
          />

          <h2 className="font-extrabold text-3xl sm:text-4xl md:text-3xl my-5 text-[#4f3882] transition-colors duration-300 hover:text-[#281452]">
            LOGIN
          </h2>

          <form
            className="flex flex-col gap-4 text-center items-center w-full"
            onSubmit={handleSubmit}
          >
            <p className="sm:text-xl md:text-base">
              Utilize seu email para logar no site
            </p>

            <input
              autoComplete="email"
              required
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={handleEmail}
              className="focus:outline-[#281452] md:w-2/3 h-15 md:h-12 w-full p-5 placeholder:text-lg bg-[#DAD0F0] font-bold text-[#281452] rounded-lg transition-shadow duration-300 focus:shadow-md"
            />

            <input
              autoComplete="password"
              required
              type="password"
              placeholder="Senha"
              value={senha}
              onChange={handleSenha}
              className="focus:outline-[#281452] md:w-2/3 h-15 md:h-12 w-full p-5 placeholder:text-lg bg-[#DAD0F0] font-bold text-[#281452] rounded-lg transition-shadow duration-300 focus:shadow-md"
            />
            {erro && <p className="text-red-500 text-sm font-medium">{erro}</p>}

            <p className="text-[#4f3882] sm:text-xl text-lg md:text-lg cursor-pointer transition-colors duration-300 hover:text-[#281452]">
              Esqueceu sua senha?
            </p>

            <button className="h-14 md:h-12 md:w-2/3 w-full bg-[#307039] text-white font-semibold rounded-lg text-lg cursor-pointer transition-all duration-300 hover:bg-[#24582b] hover:scale-105">
              Entrar
            </button>

            {/* Apenas mobile mostra isso */}
            <p
              className="text-[#307039] cursor-pointer transition-colors duration-300 md:hidden hover:text-[#24582b]"
              onClick={() => toggle(true)}
            >
              Ou registre-se
            </p>
          </form>
        </section>

        {/*CADASTRO */}
        {isRegister && <Cadastro />}

        {/*OVERLAY VERDE*/}
        {!isRegister && (
          <section
            className={`w-1/2 rounded-r-2xl text-white gap-10 bg-[#307039] flex-col justify-center items-center px-10 py-15 hidden md:flex`}
          >
            <h2 className="text-3xl text-center">Primeira vez por aqui?</h2>
            <p className="font-light text-xl text-center">
              Crie sua conta e entre para a rede de jogadoras e olheiros que
              estão transformando o futebol feminino
            </p>
            <button
              onClick={() => toggle(true)}
              className="border-white text-lg border cursor-pointer hover:scale-101 active:bg-white active:text-[#307039] active:border-green-950 active:scale-99 transition-all font-light py-2 px-3 rounded-lg"
            >
              Quero me cadastrar
            </button>
          </section>
        )}
      </main>
    </div>
  );
}

export default Auth;
