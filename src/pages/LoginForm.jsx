import React from 'react';
import Logo from '../assets/logo.png'; 

const Login = () => {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-900">
        <div className="flex w-full max-w-4xl bg-gray-800 rounded-lg shadow-md">
          <div className="hidden md:flex md:w-1/2 items-center justify-center p-4">
            <img src={Logo} alt="Logo" className="w-full h-auto object-contain" />
          </div>
  
          <div className="w-full md:w-1/2 p-8 space-y-4">
            <h2 className="text-2xl font-bold text-center text-white">Login</h2>
            <form className="space-y-6">
              <div>
                <label className="block mb-1 text-sm text-gray-300" htmlFor="email">Email:</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-3 py-2 text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00df9a]" 
                  placeholder="Digite seu email"
                />
              </div>
              <div>
                <label className="block mb-1 text-sm text-gray-300" htmlFor="password">Senha:</label>
                <input 
                  type="password" 
                  id="password" 
                  className="w-full px-3 py-2 text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00df9a]" 
                  placeholder="Digite sua senha"
                />
              </div>
              <button type="submit" className="w-full py-2 font-bold text-gray-900 bg-[#00df9a] rounded-md hover:bg-green-500">
                Entrar
              </button>
            </form>
            <p className="text-sm text-center text-gray-400">
              Ainda não tem conta?{' '}
              <a href="/register" className="text-[#00df9a] hover:underline">
                Cadastre-se
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default Login;
