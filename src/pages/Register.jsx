import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom"; // Usando useNavigate para navegação
import { createUserWithEmailAndPassword } from "firebase/auth";
import { getAuth } from "firebase/auth";
import app from "../components/firebase";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const navigate = useNavigate();
  const auth = getAuth(app); // Para manipular a navegação programática

  // Função para navegar para a página de "Home"
  const handleGoHome = () => {
    navigate("/"); // Navega para a rota /
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      console.log(user);
      console.log("Usuário Registrado!");
      toast.success("Usuário Registrado!", {
        position: "top-center",
      });
      navigate("/login");
    } catch (error) {
      console.log(error.message);
      toast.success(error.message, {
        position: "bottom-center",
      });
    }
  };

  return (
    <div
      className="flex items-center justify-center h-screen bg-gray-900"
      onSubmit={handleRegister}
    >
      <div className="flex w-full max-w-4xl bg-gray-800 rounded-lg shadow-md">
        <div className="hidden md:flex md:w-1/2 items-center justify-center p-4">
          <img src={Logo} alt="Logo" className="w-full h-auto object-contain" />
        </div>

        <div className="w-full md:w-1/2 p-8 space-y-4">
          <h2 className="text-2xl font-bold text-center text-white">
            Registrar
          </h2>
          <form className="space-y-6">
            <div>
              <label
                className="block mb-1 text-sm text-gray-300"
                htmlFor="email"
              >
                Email:
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-3 py-2 text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00df9a]"
                placeholder="Digite seu email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label
                className="block mb-1 text-sm text-gray-300"
                htmlFor="password"
              >
                Senha:
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-3 py-2 text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00df9a]"
                placeholder="Digite sua senha"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 font-bold text-gray-900 bg-[#00df9a] rounded-md hover:bg-green-500"
            >
              Registrar
            </button>
          </form>

          <p className="text-sm text-center text-gray-400">
            Já tem uma conta?{" "}
            <a href="/login" className="text-[#00df9a] hover:underline">
              Faça login
            </a>
          </p>

          {/* Botão de Voltar para Home */}
          <div className="mt-6">
            <button
              onClick={handleGoHome} // Ao clicar, vai para a rota /
              className="w-full py-2 font-bold text-gray-900 bg-gray-700 rounded-md hover:bg-gray-600 transition duration-200"
            >
              Voltar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
