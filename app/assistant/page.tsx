import React from 'react'
import Navbar1 from '../components/Navbar1';
import Achat from './Achat';
const Assistant = () => {
  return (
    <div className='bg-slate-900'>
      <Navbar1 />
      <div className='flex w-screen justify-center'>
        <Achat />
      </div>
    </div>
  );
}

export default Assistant