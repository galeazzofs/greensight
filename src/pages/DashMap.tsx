import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps';
import lixeiraIcon from '../assets/icons8-lixeira.svg';

const DashMap = () => {
  const [googleMapsLoaded, setGoogleMapsLoaded] = useState(false);
  const [estadoSelecionado, setEstadoSelecionado] = useState('');
  const [cidadeSelecionada, setCidadeSelecionada] = useState('');
  const [theme, setTheme] = useState('light');

  const cidades: { [key: string]: string[] } = {
    'São Paulo': ['São Paulo', 'Campinas', 'Ribeirão Preto', 'São Caetano do Sul' , 'Santos'],
    'Rio de Janeiro': ['Rio de Janeiro', 'Niterói', 'Petrópolis', 'Campos dos Goytacazes'],
    'Minas Gerais': ['Belo Horizonte', 'Uberlândia', 'Juiz de Fora', 'Contagem'],
  };

  useEffect(() => {
    const checkGoogleMaps = () => {
      if (window.google && window.google.maps) {
        setGoogleMapsLoaded(true);
      }
    };

    if (!window.google) {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDiGkyPiZAgn1XtGCfHVZ2UI4XzaW9uzx4`;
      script.onload = checkGoogleMaps;
      script.onerror = () => console.error('Erro ao carregar a API do Google Maps');
      document.head.appendChild(script);
    } else {
      checkGoogleMaps();
    }
  }, []);

  const handleEstadoChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const estado = event.target.value;
    setEstadoSelecionado(estado);
    setCidadeSelecionada('');
  };

  const handleCidadeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCidadeSelecionada(event.target.value);
  };

  const toggleTheme = () => setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));

  if (!googleMapsLoaded) {
    return <div>Carregando mapa...</div>;
  }

  return (
    <APIProvider apiKey="AIzaSyDiGkyPiZAgn1XtGCfHVZ2UI4XzaW9uzx4">
      <div
        className={`flex flex-col lg:flex-row h-screen w-full bg-gradient-to-r ${
          theme === 'light' ? 'from-indigo-100 to-indigo-300' : 'from-gray-800 to-gray-900'
        }`}
      >
        {/* Coluna Lateral */}
        <div className="w-full lg:w-1/3 bg-white dark:bg-gray-800 p-8 rounded-lg shadow-xl">
          <h3 className="text-center text-2xl font-semibold text-gray-800 dark:text-white mb-6">
            Escolha o Endereço
          </h3>
          
          {/* Estado */}
          <div className="mb-6">
            <label className="block text-lg font-medium text-gray-700 dark:text-gray-200 mb-2">Estado:</label>
            <select
              value={estadoSelecionado}
              onChange={handleEstadoChange}
              className="w-full p-3 border border-gray-300 rounded-xl text-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="">Selecione o Estado</option>
              {Object.keys(cidades).map((estado) => (
                <option key={estado} value={estado}>
                  {estado}
                </option>
              ))}
            </select>
          </div>

          {/* Cidade */}
          {estadoSelecionado && (
            <div className="mb-6">
              <label className="block text-lg font-medium text-gray-700 dark:text-gray-200 mb-2">Cidade:</label>
              <select
                value={cidadeSelecionada}
                onChange={handleCidadeChange}
                className="w-full p-3 border border-gray-300 rounded-xl text-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="">Selecione a Cidade</option>
                {cidades[estadoSelecionado].map((cidade) => (
                  <option key={cidade} value={cidade}>
                    {cidade}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* Indicadores */}
          {cidadeSelecionada && (
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-red-500 text-white rounded-lg shadow">
                <h4 className="text-lg font-semibold">Obstruídos</h4>
                <p className="text-2xl font-bold">12</p>
              </div>
              <div className="p-4 bg-yellow-500 text-white rounded-lg shadow">
                <h4 className="text-lg font-semibold">Cheios</h4>
                <p className="text-2xl font-bold">8</p>
              </div>
              <div className="p-4 bg-orange-500 text-white rounded-lg shadow">
                <h4 className="text-lg font-semibold">Meio Cheios</h4>
                <p className="text-2xl font-bold">15</p>
              </div>
              <div className="p-4 bg-green-500 text-white rounded-lg shadow">
                <h4 className="text-lg font-semibold">Vazios</h4>
                <p className="text-2xl font-bold">20</p>
              </div>
            </div>
          )}
        </div>

        {/* Mapa */}
        <div className="w-full lg:w-2/3 h-[50vh] lg:h-full relative">
          <Map
            defaultZoom={17}
            defaultCenter={{ lat: -23.645490791082082, lng: -46.57397544179515 }}
            style={{ width: '100%', height: '100%' }}
          >
            <Marker
              position={{ lat: -23.6477, lng: -46.573967 }}
              icon={{
                url: lixeiraIcon,
                scaledSize: new window.google.maps.Size(25, 25),
              }}
            />
            <Marker
              position={{ lat: -23.647533, lng: -46.573031 }}
              icon={{
                url: lixeiraIcon,
                scaledSize: new window.google.maps.Size(25, 25),
              }}
            />
          </Map>
        </div>
      </div>
    </APIProvider>
  );
};

export default DashMap;
