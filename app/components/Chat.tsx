'use client';
import React from 'react';
import { BiSend } from 'react-icons/bi';
const chats = [
  <>
    <div className='w-fit p-2 bg-slate-400 mb-3 rounded-xl'>
      Hey this is the start of the chat how can I be of help
    </div>
    <div className='ml-auto w-fit p-2 bg-blue-400 mb-3 rounded-xl'>
      Legal documents upload hopefully no
    </div>
    <div className='w-fit p-2 bg-slate-400 mb-3 rounded-xl'>
      Hey this is the start of the chat how can I be of help
    </div>
    <div className='ml-auto w-fit p-2 bg-blue-400 mb-3 rounded-xl'>
      Legal documents upload hopefully no
    </div>
    <div className='w-fit p-2 bg-slate-400 mb-3 rounded-xl'>
      Hey this is the start of the chat how can I be of help
    </div>
    <div className='ml-auto w-fit p-2 bg-blue-400 mb-3 rounded-xl'>
      Legal documents upload hopefully no
    </div>
    <div className='w-fit p-2 bg-slate-400 mb-3 rounded-xl'>
      Hey this is the start of the chat how can I be of help
    </div>
    <div className='ml-auto w-fit p-2 bg-blue-400 mb-3 rounded-xl'>
      Legal documents upload hopefully no
    </div>
    <div className='w-fit p-2 bg-slate-400 mb-3 rounded-xl'>
      Hey this is the start of the chat how can I be of help
    </div>
    <div className='ml-auto w-fit p-2 bg-blue-400 mb-3 rounded-xl'>
      Legal documents upload hopefully no
    </div>
    <div className='w-fit p-2 bg-slate-400 mb-3 rounded-xl'>
      Hey this is the start of the chat how can I be of help
    </div>
    <div className='ml-auto w-fit p-2 bg-blue-400 mb-3 rounded-xl'>
      Legal documents upload hopefully no
    </div>
    <div className='w-fit p-2 bg-slate-400 mb-3 rounded-xl'>
      Hey this is the start of the chat how can I be of help
    </div>
    <div className='ml-auto w-fit p-2 bg-blue-400 mb-3 rounded-xl'>
      Legal documents upload hopefully no
    </div>
    <div className='w-fit p-2 bg-slate-400 mb-3 rounded-xl'>
      Hey this is the start of the chat how can I be of help
    </div>
    <div className='ml-auto w-fit p-2 bg-blue-400 mb-3 rounded-xl'>
      Legal documents upload hopefully no
    </div>
    <div className='w-fit p-2 bg-slate-400 mb-3 rounded-xl'>
      Hey this is the start of the chat how can I be of help
    </div>
    <div className='ml-auto w-fit p-2 bg-blue-400 mb-3 rounded-xl'>
      Legal documents upload hopefully no
    </div>
  </>,
];

const Chat = () => {
  return (
    <div className='text-stone-200 w-1/2 h-[calc(100vh-74px)] bg-white p-2 rounded-xl'>
      <div className='flex flex-col h-full'>
        <div className='overflow-auto flex-col gap-y-3 h-full'>
          <div className='bg-blue-500 mb-5 p-4'>
            This is the Start of your Chat
          </div>
          {chats}
        </div>
        <div className='flex'>
          <input
            type='text'
            placeholder='Your message...'
            className='p-5 rounded-xl w-full'
          />
          <button className='text-4xl p-2 text-slate-500'><BiSend /></button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
