import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaTachometerAlt, FaMapMarkedAlt, FaAddressBook, FaBars, FaTimes } from 'react-icons/fa';

const ControlScreen = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('dashboard'); // Controla a seção ativa
  const [isTransitioning, setIsTransitioning] = useState(false); // Controla a animação de transição

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSectionChange = (section) => {
    // Inicia a transição antes de mudar a seção
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveSection(section);
      setIsTransitioning(false);
    }, 300); // O tempo deve coincidir com a duração da animação no CSS
  };

  const addressData = [
    { endereco: "Rua das Flores, 123", status: "Obstruído", alertas: 5 },
    { endereco: "Av. Paulista, 987", status: "Cheio", alertas: 2 },
    { endereco: "Praça Central, 45", status: "Meio Cheio", alertas: 8 },
    { endereco: "Rua Ametista, 876", status: "Vazio", alertas: 1 },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Obstruído':
        return 'text-red-600';
      case 'Cheio':
        return 'text-orange-500';
      case 'Meio Cheio':
        return 'text-yellow-500';
      case 'Vazio':
        return 'text-green-600';
      default:
        return 'text-gray-600';
    }
  };

  return (
    <div className="h-screen flex">
      {/* Botão de alternância do menu para dispositivos móveis */}
      <button
        onClick={toggleMenu}
        className={`p-4 fixed top-4 left-4 z-20 md:hidden ${
          isMenuOpen ? 'text-white bg-black' : 'text-black bg-transparent'
        }`}
      >
        {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      {/* Menu lateral */}
      <div
        className={`bg-black text-white flex flex-col space-y-6 p-8 transform transition-transform duration-300 ease-in-out z-10 ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 w-64 h-full fixed md:relative`}
      >
        <h2 className="text-2xl font-bold text-center mb-4">Menu</h2>
        <button
          onClick={() => handleSectionChange('dashboard')}
          className="flex items-center p-3 font-bold space-x-2"
        >
          <FaTachometerAlt size={20} />
          <span>Dashboard</span>
        </button>
        <Link
          to="/dashmap"
          className="flex items-center p-3 font-bold space-x-2"
        >
          <FaMapMarkedAlt size={20} />
          <span>Mapa</span>
        </Link>
        <button
          onClick={() => handleSectionChange('enderecos')}
          className="flex items-center p-3 font-bold space-x-2"
        >
          <FaAddressBook size={20} />
          <span>Endereços</span>
        </button>
      </div>

      {/* Seção principal */}
      <div
        className={`flex-1 bg-white transition-transform duration-300 ease-in-out p-4 ${
          isMenuOpen ? 'ml-64' : 'ml-0'
        } md:ml-0`}
      >
        <div
          className={`mx-auto text-center transition-opacity duration-300 ${
            isTransitioning ? 'opacity-0' : 'opacity-100'
          }`}
        >

          {/* Conteúdo dinâmico */}
          {activeSection === 'dashboard' && (
            <div className="flex flex-col items-center justify-center min-h-screen">
            {/* Título */}
            <h2 className="text-3xl font-bold text-[#2d6a4f] mb-6">
              Informações do Sistema
            </h2>
          
            {/* Grid com os cartões */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-[#f4f4f4] p-6 rounded-lg shadow-lg">
                <h3 className="text-lg font-semibold text-[#333]">Total de Coletas</h3>
                <p className="text-2xl font-bold text-[#2d6a4f]">1.450</p>
              </div>
              <div className="bg-[#f4f4f4] p-6 rounded-lg shadow-lg">
                <h3 className="text-lg font-semibold text-[#333]">Total de Bueiros Monitorados</h3>
                <p className="text-2xl font-bold text-[#2d6a4f]">320</p>
              </div>
              <div className="bg-[#f4f4f4] p-6 rounded-lg shadow-lg">
                <h3 className="text-lg font-semibold text-[#333]">Alertas Recentes</h3>
                <p className="text-2xl font-bold text-[#2d6a4f]">12</p>
              </div>
            </div>
          </div>
          )}

          {activeSection === 'enderecos' && (
            <div>
              <h2 className="text-2xl font-semibold text-[#2d6a4f] mb-4">Lista de Endereços</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-300">
                  <thead>
                    <tr className="bg-[#2d6a4f] text-white">
                      <th className="py-2 px-4 border-b">Endereço</th>
                      <th className="py-2 px-4 border-b">Status</th>
                      <th className="py-2 px-4 border-b">Alertas Feitos</th>
                    </tr>
                  </thead>
                  <tbody>
                    {addressData.map((row, index) => (
                      <tr
                        key={index}
                        className={`${
                          index % 2 === 0 ? 'bg-gray-100' : 'bg-white'
                        } hover:bg-gray-200 transition`}
                      >
                        <td className="py-2 px-4 border-b text-left">{row.endereco}</td>
                        <td
                          className={`py-2 px-4 border-b text-center ${getStatusColor(
                            row.status
                          )}`}
                        >
                          {row.status}
                        </td>
                        <td className="py-2 px-4 border-b text-center">{row.alertas}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ControlScreen;
