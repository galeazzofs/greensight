import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps';
import lixeiraIcon from '../assets/icons8-lixeira.svg';

const DashMap = () => {
  const [googleMapsLoaded, setGoogleMapsLoaded] = useState(false);
  const [estadoSelecionado, setEstadoSelecionado] = useState('');
  const [cidadeSelecionada, setCidadeSelecionada] = useState('');

  // Definir as cidades para cada estado
  const cidades: { [key: string]: string[] } = {
    'São Paulo': ['São Paulo', 'Campinas', 'Ribeirão Preto'],
    'Rio de Janeiro': ['Rio de Janeiro', 'Niterói', 'Petrópolis'],
    'Minas Gerais': ['Belo Horizonte', 'Uberlândia', 'Juiz de Fora'],
  };

  // Função para verificar se a API do Google Maps está carregada
  useEffect(() => {
    const checkGoogleMaps = () => {
      if (window.google && window.google.maps) {
        setGoogleMapsLoaded(true); // API carregada
      }
    };

    // Adiciona o script da API do Google Maps dinamicamente, caso não esteja carregado
    if (!window.google) {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDiGkyPiZAgn1XtGCfHVZ2UI4XzaW9uzx4`;
      script.onload = checkGoogleMaps;
      script.onerror = () => console.error('Erro ao carregar a API do Google Maps');
      document.head.appendChild(script);
    } else {
      checkGoogleMaps(); // Se o Google Maps já estiver carregado, verifica
    }
  }, []);

  // Exibe uma mensagem até que o Google Maps seja carregado
  if (!googleMapsLoaded) {
    return <div>Carregando mapa...</div>;
  }

  // Função de handle para mudança de estado
  const handleEstadoChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const estado = event.target.value;
    setEstadoSelecionado(estado);
    setCidadeSelecionada(''); // Limpa a cidade selecionada ao trocar de estado
  };

  // Função de handle para mudança de cidade
  const handleCidadeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCidadeSelecionada(event.target.value);
  };

  return (
    <APIProvider apiKey="AIzaSyDiGkyPiZAgn1XtGCfHVZ2UI4XzaW9uzx4">
      <div className="flex h-screen w-full">
        {/* Coluna Lateral - 1/3 da largura */}
        <div className="w-1/3 bg-gray-100 p-8 shadow-md">
          <h3 className="text-center text-xl font-bold mb-6">Escolha o Endereço</h3>
          
          {/* Estado */}
          <div className="mb-6">
            <label className="block font-semibold">Estado:</label>
            <select
              value={estadoSelecionado}
              onChange={handleEstadoChange}
              className="w-full p-3 border border-gray-300 rounded-lg text-lg cursor-pointer"
            >
              <option value="">Selecione o Estado</option>
              <option value="São Paulo">São Paulo</option>
              <option value="Rio de Janeiro">Rio de Janeiro</option>
              <option value="Minas Gerais">Minas Gerais</option>
            </select>
          </div>

          {/* Cidade */}
          {estadoSelecionado && (
            <div>
              <label className="block font-semibold">Cidade:</label>
              <select
                value={cidadeSelecionada}
                onChange={handleCidadeChange}
                className="w-full p-3 border border-gray-300 rounded-lg text-lg cursor-pointer"
              >
                <option value="">Selecione a Cidade</option>
                {cidades[estadoSelecionado].map((cidade) => (
                  <option key={cidade} value={cidade}>{cidade}</option>
                ))}
              </select>
            </div>
          )}
        </div>

        {/* Mapa - 2/3 da largura */}
        <div className="w-2/3 relative h-screen">
          <Map
            defaultZoom={17}
            defaultCenter={{ lat: -23.645490791082082, lng: -46.57397544179515 }}
            style={{ width: '100%', height: '100%' }}
          >
            <Marker
              position={{ lat: -23.647700, lng: -46.573967 }}
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

export function renderToDom(container: HTMLElement) {
  const root = createRoot(container);

  container.style.width = '100%';
  container.style.height = '100vh';

  root.render(
    <React.StrictMode>
      <DashMap />
    </React.StrictMode>
  );
}
