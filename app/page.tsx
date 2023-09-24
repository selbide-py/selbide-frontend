import React from 'react';
import { Button } from '@chakra-ui/react';
import Link from 'next/link';
const Document = () => {
  return (
    <div className='bg-slate-900 text-white h-screen w-screen flex items-center justify-center'>
      <div className='h-1/3 scale-125'>
        <div className='text-center'>
          <div className='text-8xl'>
            <span>Sel</span>
            <span className='text-teal-400'>Bide</span>.
          </div>
          <div className='text-2xl'>Your legal help assistant</div>
        </div>
        <div className='mt-7 flex gap-3 justify-evenly'>
          <Link href='/document'>
            <Button
              variant='outline'
              color='white'
              size='lg'
              className='hover:text-teal-600'
            >
              Document
            </Button>
          </Link>
          <Link href='/assistant'>
            <Button
              variant='outline'
              color='white'
              size='lg'
              className='hover:text-teal-600'
            >
              Assistant
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Document;
