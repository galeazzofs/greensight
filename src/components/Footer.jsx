import React from "react";
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 text-gray-300">
      {/* Grid principal com responsividade */}
      <div className="grid lg:grid-cols-4 sm:grid-cols-1 gap-8">
        {/* Primeira coluna: Título e Redes Sociais */}
        <div>
          <h1 className="w-full text-3xl font-bold text-[#00df9a]">
            GREEN SIGHT
          </h1>
          <p className="py-4">Cuidar da Terra é nossa prioridade.</p>
          <div className="flex justify-between md:w-[75%] my-6">
            <FaFacebookSquare size={30} />
            <FaInstagram size={30} />
            <FaTwitterSquare size={30} />
            <FaGithubSquare size={30} />
          </div>
        </div>

        {/* Seções de Links */}
        <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Monitoramento Inteligente */}
          <div>
            <h6 className="font-medium text-gray-400">Monitoramento</h6>
            <ul>
              <li className="py-2 text-sm">Monitoramento de Bueiros</li>
              <li className="py-2 text-sm">Integração com Caminhões</li>
              <li className="py-2 text-sm">Relatórios em Tempo Real</li>
              <li className="py-2 text-sm">Prevenção de Alagamentos</li>
            </ul>
          </div>

          {/* Sustentabilidade */}
          <div>
            <h6 className="font-medium text-gray-400">Sustentabilidade</h6>
            <ul>
              <li className="py-2 text-sm">Redução de Resíduos</li>
              <li className="py-2 text-sm">Uso Inteligente de Recursos</li>
              <li className="py-2 text-sm">Parcerias Verdes</li>
              <li className="py-2 text-sm">Educação Ambiental</li>
            </ul>
          </div>

          {/* Tecnologia */}
          <div>
            <h6 className="font-medium text-gray-400">Tecnologia</h6>
            <ul>
              <li className="py-2 text-sm">Câmeras Inteligentes</li>
              <li className="py-2 text-sm">Integração com IoT</li>
              <li className="py-2 text-sm">Plataforma Digital</li>
              <li className="py-2 text-sm">Análise de Dados</li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h6 className="font-medium text-gray-400">Contato</h6>
            <ul>
              <li className="py-2 text-sm">Fale Conosco</li>
              <li className="py-2 text-sm">Suporte Técnico</li>
              <li className="py-2 text-sm">Carreiras</li>
              <li className="py-2 text-sm">Parceiros</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
