import React, {useState} from 'react';
import { db } from './firebase';


const Newsletter = () => {

  const [input, setInput] = useState("");
  const inputHandler = (e) => {
    setInput(e.target.value)
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if(input){
        console.log(input);
        db.collection("emails").add({
            email: input,
        }) 
    }
  } 

  return (
    <div className='w-full py-16 text-white px-4'>
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
            <div className='lg:col-span-2 my-4'>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Gostaria de receber notícias e atualizações?</h1>
                <p>Se inscreva na Newsletter para ficar sempre atualizado</p>
            </div>
            <div onSubmit={submitHandler} className='my-4'>
                <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                    <input className='p-3 flex w-full rounded-md text-black' type="email" placeholder='Digite seu E-mail' onChange={inputHandler}/>
                    <button className='bg-[#00df9a] w-[200px] rounded-md font-bold ml-4 my-6 mx-auto py-3 text-black' type='submit'>
                        Inscrever-se</button>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Newsletter