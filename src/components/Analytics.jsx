import React from 'react'
import NatureImage from '../assets/natureimage.png'

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className='w-[500px] mx-auto my-4' src={NatureImage} alt="/" />
            <div className='flex flex-col justify-center'>
                <p className='text-[#00df9a] font-bold'>DASHBOARDS </p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Lorem ipsum dolor sit.</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Esse, magnam ratione tempore nobis quis recusandae saepe nostrum quae commodi nemo!</p>
                <button className='bg-black w-[200px] rounded-md font-bold my-6 mx-auto md:mx-0 py-3 text-[#00df9a]'>Conheça Mais</button>
            </div>
        </div>

    </div>
  )
}

export default Analytics