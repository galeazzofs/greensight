import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaTachometerAlt,
  FaMapMarkedAlt,
  FaAddressBook,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { Line, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";

// Registrando os elementos do Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const ControlScreen = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("dashboard");
  const [isTransitioning, setIsTransitioning] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSectionChange = (section) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveSection(section);
      setIsTransitioning(false);
    }, 300);
  };

  // Dados do gráfico de alertas por mês
  const alertData = {
    labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul"],
    datasets: [
      {
        label: "Alertas por Mês",
        data: [5, 10, 7, 12, 8, 14, 6],
        fill: false,
        borderColor: "#2d6a4f",
        tension: 0.1,
      },
    ],
  };

  // Opções do gráfico de alertas
  const alertOptions = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Alertas Recentes por Mês",
      },
    },
  };

  // Dados do gráfico de proporção de bueiros
  const pieData = {
    labels: ["Obstruídos", "Cheios", "Meio Cheios", "Vazios"],
    datasets: [
      {
        data: [12, 8, 15, 20],
        backgroundColor: ["#e63946", "#f4a261", "#e9c46a", "#2a9d8f"],
      },
    ],
  };

  // Opções do gráfico de proporção
  const pieOptions = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Proporção dos Estados dos Bueiros",
      },
    },
  };

  // Dados do gráfico de bueiros limpos por semana
  const cleanDrainData = {
    labels: ["Semana 1", "Semana 2", "Semana 3", "Semana 4"],
    datasets: [
      {
        label: "Bueiros Limpos",
        data: [15, 20, 18, 25],
        backgroundColor: "#2a9d8f",
        borderColor: "#2a9d8f",
        borderWidth: 2,
      },
    ],
  };

  // Opções do gráfico de bueiros limpos
  const cleanDrainOptions = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Bueiros Limpos por Semana",
      },
    },
  };

  // Dados de endereços
  const addressData = [
    { endereco: "Rua das Flores, 123", status: "Obstruído", alertas: 5 },
    { endereco: "Av. Paulista, 987", status: "Cheio", alertas: 2 },
    { endereco: "Praça Central, 45", status: "Meio Cheio", alertas: 8 },
    { endereco: "Rua Ametista, 876", status: "Vazio", alertas: 1 },
  ];

  // Função para obter a cor com base no status do bueiro
  const getStatusColor = (status) => {
    switch (status) {
      case "Obstruído":
        return "text-red-600"; // Vermelho
      case "Cheio":
        return "text-orange-500"; // Laranja
      case "Meio Cheio":
        return "text-yellow-500"; // Amarelo
      case "Vazio":
        return "text-green-600"; // Verde
      default:
        return "text-gray-600"; // Cor padrão (caso o status não seja reconhecido)
    }
  };

  return (
    <div className="h-screen flex overflow-hidden">
      {/* Botão de menu para dispositivos móveis */}
      <button
        onClick={toggleMenu}
        className={`p-4 fixed top-4 left-4 z-20 md:hidden ${
          isMenuOpen ? "text-white bg-black" : "text-black bg-transparent"
        }`}
      >
        {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      {/* Menu lateral */}
      <div
        className={`bg-black text-white flex flex-col space-y-6 p-8 transform transition-transform duration-300 ease-in-out z-10 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 w-64 h-full fixed md:relative md:h-screen`}
      >
        <h2 className="text-2xl font-bold text-center mb-4">Menu</h2>
        <button
          onClick={() => handleSectionChange("dashboard")}
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
          onClick={() => handleSectionChange("enderecos")}
          className="flex items-center p-3 font-bold space-x-2"
        >
          <FaAddressBook size={20} />
          <span>Endereços</span>
        </button>
      </div>

      {/* Seção principal */}
      <div
        className={`flex-1 bg-white transition-transform duration-300 ease-in-out p-4 overflow-y-auto ${
          isMenuOpen ? "ml-64" : "ml-0"
        } md:ml-0 h-full`}
      >
        <div
          className={`mx-auto text-center transition-opacity duration-300 ${
            isTransitioning ? "opacity-0" : "opacity-100"
          }`}
        >
          {/* Dashboard */}
          {activeSection === "dashboard" && (
            <div className="flex flex-col items-center justify-center min-h-full">
              <h2 className="text-3xl font-bold text-[#2d6a4f] mb-6">
                Dashboard do Sistema
              </h2>

              {/* Indicadores */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                <div className="bg-[#f4f4f4] p-6 rounded-lg shadow-lg">
                  <h3 className="text-lg font-semibold text-[#333]">
                    Média Diária de Alertas
                  </h3>
                  <p className="text-2xl font-bold text-[#2d6a4f]">7</p>
                </div>
                <div className="bg-[#f4f4f4] p-6 rounded-lg shadow-lg">
                  <h3 className="text-lg font-semibold text-[#333]">
                    % Bueiros Obstruídos
                  </h3>
                  <p className="text-2xl font-bold text-[#e63946]">25%</p>
                </div>
                <div className="bg-[#f4f4f4] p-6 rounded-lg shadow-lg">
                  <h3 className="text-lg font-semibold text-[#333]">
                    % Bueiros em Bom Estado
                  </h3>
                  <p className="text-2xl font-bold text-[#2a9d8f]">40%</p>
                </div>
              </div>

              {/* Gráficos */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-6xl">
                {/* Gráfico de alertas */}
                <div>
                  <Line data={alertData} options={alertOptions} />
                </div>

                {/* Gráfico de bueiros limpos */}
                <div>
                  <Line data={cleanDrainData} options={cleanDrainOptions} />
                </div>
              </div>
            </div>
          )}

          {/* Lista de endereços */}
          {activeSection === "enderecos" && (
            <div>
              <h2 className="text-2xl font-semibold text-[#2d6a4f] mb-4">
                Lista de Endereços
              </h2>
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
                          index % 2 === 0 ? "bg-gray-100" : "bg-white"
                        } hover:bg-gray-200 transition`}
                      >
                        <td className="py-2 px-4 border-b text-left">
                          {row.endereco}
                        </td>
                        <td
                          className={`py-2 px-4 border-b text-center ${getStatusColor(
                            row.status
                          )}`}
                        >
                          {row.status}
                        </td>
                        <td className="py-2 px-4 border-b text-center">
                          {row.alertas}
                        </td>
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
