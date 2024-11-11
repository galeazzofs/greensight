import React from 'react';
import Imagem1 from '../assets/logo.png'

const Hero = () => {
  return (
    <div className='text-white flex items-center justify-center h-screen'>
      <div className='flex flex-col md:flex-row items-center justify-between w-full max-w-[1240px] mx-auto p-4'>
        <div className='w-full md:w-1/2 p-4'>
          <img
            src= {Imagem1}
            alt='/'
            className='w-[75%] h-auto object-cover rounded-md'
          />
        </div>
        <div className='w-full md:w-1/2 text-center md:text-left p-4'>
          <p className='text-[#00df9a] font-bold mb-2'>MONITORAMENTO INTELIGENTE DE BUEIROS</p>
          <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-4 py-2'>Eficiência e Inovação.</h1>
          <p className='md:text-2xl text-xl font-bold text-gray-400 mb-4'>
            A solução inovadora para os problemas de enchente nas cidades
          </p>
          <button className='bg-[#00df9a] w-[200px] rounded-md font-bold py-3 text-black'>
            Conheça Mais
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
