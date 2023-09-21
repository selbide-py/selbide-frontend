'use client';
import React from 'react';

const chats = [
  <>
    <div className='w-fit p-2 bg-slate-400 rounded-xl'>
      Hey this is the start of the chat how can I be of help
    </div>
    <div className='ml-auto w-fit p-2 bg-blue-400 rounded-xl'>
      Legal documents upload hopefully no
    </div>
    <div className='w-fit p-2 bg-slate-400 rounded-xl'>
      Hey this is the start of the chat how can I be of help
    </div>
    <div className='ml-auto w-fit p-2 bg-blue-400 rounded-xl'>
      Legal documents upload hopefully no
    </div>
    <div className='w-fit p-2 bg-slate-400 rounded-xl'>
      Hey this is the start of the chat how can I be of help
    </div>
    <div className='ml-auto w-fit p-2 bg-blue-400 rounded-xl'>
      Legal documents upload hopefully no
    </div>
    <div className='w-fit p-2 bg-slate-400 rounded-xl'>
      Hey this is the start of the chat how can I be of help
    </div>
    <div className='ml-auto w-fit p-2 bg-blue-400 rounded-xl'>
      Legal documents upload hopefully no
    </div>
    <div className='w-fit p-2 bg-slate-400 rounded-xl'>
      Hey this is the start of the chat how can I be of help
    </div>
    <div className='ml-auto w-fit p-2 bg-blue-400 rounded-xl'>
      Legal documents upload hopefully no
    </div>
    <div className='w-fit p-2 bg-slate-400 rounded-xl'>
      Hey this is the start of the chat how can I be of help
    </div>
    <div className='ml-auto w-fit p-2 bg-blue-400 rounded-xl'>
      Legal documents upload hopefully no
    </div>
    <div className='w-fit p-2 bg-slate-400 rounded-xl'>
      Hey this is the start of the chat how can I be of help
    </div>
    <div className='ml-auto w-fit p-2 bg-blue-400 rounded-xl'>
      Legal documents upload hopefully no
    </div>
    <div className='w-fit p-2 bg-slate-400 rounded-xl'>
      Hey this is the start of the chat how can I be of help
    </div>
    <div className='ml-auto w-fit p-2 bg-blue-400 rounded-xl'>
      Legal documents upload hopefully no
    </div>
    <div className='w-fit p-2 bg-slate-400 rounded-xl'>
      Hey this is the start of the chat how can I be of help
    </div>
    <div className='ml-auto w-fit p-2 bg-blue-400 rounded-xl'>
      Legal documents upload hopefully no
    </div>
    <div className='w-fit p-2 bg-slate-400 rounded-xl'>
      Hey this is the start of the chat how can I be of help
    </div>
    <div className='ml-auto w-fit p-2 bg-blue-400 rounded-xl'>
      Legal documents upload hopefully no
    </div>
  </>,
];

const Chat = () => {
  return (
    <div className='text-stone-200 w-2/5 h-[calc(100vh-74px)] bg-white p-2 rounded-xl'>
      <div className='flex flex-col h-full'>
        <div className='overflow-auto flex-col gap-y-3 h-full'>
          <div className='bg-blue-500 p-4'>This is the Start of your Chat</div>
          {chats}
        </div>
        <div>
          <input
            type='text'
            placeholder='Your message...'
            className='p-2 rounded-xl w-full'
          />
        </div>
      </div>
    </div>
  );
};

export default Chat;
