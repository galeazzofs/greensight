import React from 'react';
import { createRoot } from 'react-dom/client';
import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps';
import lixeiraIcon from '../assets/icons8-lixeira.svg';

const DashMap = () => (
  <APIProvider apiKey="AIzaSyDiGkyPiZAgn1XtGCfHVZ2UI4XzaW9uzx4">
    <div
      style={{
        display: 'flex', // Usando Flexbox para organizar os elementos lado a lado
        height: '100vh', // Garantir que a altura seja 100% da tela
        width: '100%', // Garantir que a largura seja 100% da tela
      }}
    >
      {/* Coluna Lateral - 1/3 da largura */}
      <div
        style={{
          width: '25%', // 1/3 da tela
          backgroundColor: '#f4f4f4', // Cor de fundo da coluna (opcional)
          padding: '10px', // Espaçamento interno (opcional)
        }}
      >
      </div>

      {/* Mapa - 2/3 da largura */}
      <div
        style={{
          width: '75%', // 2/3 da tela
          position: 'relative', // Necessário para o posicionamento do mapa
        }}
      >
        <Map
          defaultZoom={17}
          defaultCenter={{ lat: -23.645490791082082, lng: -46.57397544179515 }}
          style={{
            width: '100%', // Ocupa 100% da largura do contêiner
            height: '100%', // Ocupa 100% da altura do contêiner
          }}
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

export default DashMap;

export function renderToDom(container: HTMLElement) {
  const root = createRoot(container);

  container.style.width = '100%'; // Garantir que o contêiner tenha largura 100%
  container.style.height = '100vh'; // Garantir que o contêiner tenha altura 100%

  root.render(
    <React.StrictMode>
      <DashMap />
    </React.StrictMode>
  );
}
