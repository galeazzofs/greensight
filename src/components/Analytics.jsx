import React from 'react'
import NatureImage from '../assets/natureimage.png'

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className='w-[500px] mx-auto my-4' src={NatureImage} alt="/" />
            <div className='flex flex-col justify-center'>
                <p className='text-[#00df9a] font-bold'>O QUE SOMOS?</p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Inovação e Sustentabilidade.</h1>
                <p>Green Sight é uma iniciativa que visa melhorar a gestão de resíduos urbanos e prevenir enchentes por meio de tecnologia avançada. 
                  Focada em eficiência e sustentabilidade, nossa solução integra sistemas de detecção nos caminhões de coleta de lixo, 
                  permitindo um monitoramento em tempo real e intervenções proativas.
                </p>
                <button className='bg-black w-[200px] rounded-md font-bold my-6 mx-auto md:mx-0 py-3 text-[#00df9a]'>Conheça os Serviços</button>
            </div>
        </div>

    </div>
  )
}

export default Analytics