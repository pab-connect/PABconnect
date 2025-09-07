import "../App.css";
import logo from "/logo-text.png"
import Cadastro from "../components/Cadastro/Cadastro.jsx";
import { useState } from "react";

function Auth() {
  const [isRegister, toggle]  = useState(false);

  return (
    <div className="w-full min-h-full overflow-y-auto md:flex md:items-center md:justify-center font-(family-name:--font-poppins)">
      <main className="md:relative bg-white w-full md:w-3/5 flex justify-center md:shadow-xl md:rounded-xl overflow-hidden">

        {/* Formulário de Login */}
        <section className={`md:absolute md:w-2/3 flex flex-col justify-center items-center p-10 py-15 ${isRegister ? "hidden" : ""}`}>
          <img src={logo} className="w-50 my-8 transition-transform duration-300 hover:scale-105" alt="" />
          <h2 className="font-extrabold text-3xl my-5 text-[#4f3882] transition-colors duration-300 hover:text-[#281452]">LOGIN</h2>
          <form className="flex flex-col gap-4 text-center">
            <p>Utilize seu email para logar no site</p>
            <input 
              autoComplete="email" 
              required 
              type="email" 
              placeholder="E-mail" 
              className="focus:outline-[#281452] h-15 w-full p-5 placeholder:text-lg bg-[#DAD0F0] font-bold text-[#281452] rounded-lg transition-shadow duration-300 focus:shadow-md"
            />
            <input 
              autoComplete="password" 
              required 
              type="password" 
              placeholder="Senha" 
              className="focus:outline-[#281452] h-15 w-full p-5 placeholder:text-lg bg-[#DAD0F0] font-bold text-[#281452] rounded-lg transition-shadow duration-300 focus:shadow-md"
            />
            <p className="text-[#4f3882] text-lg cursor-pointer transition-colors duration-300 hover:text-[#281452]">Esqueceu sua senha?</p>
            <button className="h-14 w-full bg-[#307039] text-white font-semibold rounded-lg text-lg cursor-pointer transition-all duration-300 hover:bg-[#24582b] hover:scale-105">Entrar</button>
            <p className="text-[#307039] cursor-pointer transition-colors duration-300 hover:text-[#24582b]" onClick={() => toggle(true)}>Ou registre-se</p>
          </form>
        </section>

        {/* Formulário de Registro */}
        {isRegister && (
          <Cadastro toggle={toggle} />
        )}

      </main>
    </div>
  )
}

export default Auth;
