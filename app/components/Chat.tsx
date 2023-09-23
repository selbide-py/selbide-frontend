"use client";
import React from "react";
import { BiSend } from "react-icons/bi";

// const styles = {
//   'w-fit p-3 text-lg bg-[#64CCC5] mb-4 rounded-xl'
// },

const chats = [
  <>
    <div className='w-fit p-3 break-normal max-w-xl shadow-lg shadow-[#64CCC533] text-lg bg-[#64CCC5] mb-4 rounded-xl'>
      Hey this is the start of the chat how can I be of help
    </div>
    <div className='ml-auto text-lg break-normal shadow-lg shadow-[#176B8733] max-w-xl w-fit p-3 bg-[#176B87] mb-4 rounded-xl'>
      Need legal help for my small business
    </div>
    <div className='w-fit break-normal max-w-xl shadow-lg shadow-[#64CCC533] p-3 text-lg bg-[#64CCC5] mb-4 rounded-xl'>
      In nunc velit, dapibus non mauris a, commodo semper lorem. Sed malesuada
      sagittis felis eu lobortis. Vivamus interdum tempus ex, vitae congue ipsum
      convallis sodales. Vestibulum ante ipsum primis in faucibus orci luctus et
      ultrices posuere cubilia curae; Sed vel purus vel orci dictum tempor.
      Etiam fringilla porta elit ac hendrerit. In aliquet, elit a sollicitudin
      tincidunt, est velit molestie tortor, non mattis leo velit in risus.
    </div>
    <div className='ml-auto w-fit text-lg break-normal shadow-lg shadow-[#176B8733] max-w-xl p-3 bg-[#176B87] mb-4 rounded-xl'>
      Praesent pellentesque tristique ultrices. Suspendisse quis urna a metus
      placerat lacinia sed ac lacus. Aenean eleifend tincidunt ante in sagittis.
      Nullam dapibus arcu a enim luctus, in interdum dui molestie.
    </div>
    <div className='w-fit p-3 bg-[#64CCC5] shadow-lg shadow-[#64CCC533] break-normal max-w-xl text-lg mb-4 rounded-xl'>
      Quisque aliquet orci odio, eu efficitur nunc interdum in. Aenean sem arcu,
      feugiat id aliquet rutrum, imperdiet vitae lorem. Duis sed euismod erat.
      Aliquam tristique ullamcorper dictum. In mollis dolor et nibh feugiat
      convallis. Aenean at feugiat augue, vitae ultrices.
    </div>
    <div className='ml-auto w-fit break-normal max-w-xl shadow-lg shadow-[#176B8733] p-3 bg-[#176B87] text-lg mb-4 rounded-xl'>
      Aliquam erat volutpat. In et consequat ligula, in finibus nisl. Donec at
      condimentum velit. Donec ac consectetur dolor, vitae pharetra tortor. Sed
      et venenatis ipsum, ut auctor justo. Nulla nec varius odio. Curabitur
      eleifend eget arcu et ultrices. Cras hendrerit.
    </div>
    <div className='w-fit p-3 bg-[#64CCC5] shadow-lg shadow-[#64CCC533] break-normal max-w-xl text-lg mb-4 rounded-xl'>
      Ut mattis pretium augue in venenatis. Nunc et nunc ut metus fermentum
      tempus. Sed at eros eu felis maximus hendrerit.
    </div>
    <div className='ml-auto w-fit break-normal max-w-xl shadow-lg shadow-[#176B8733] p-3 bg-[#176B87] text-lg mb-4 rounded-xl'>
      Maecenas viverra interdum laoreet. Morbi tellus nisi, pulvinar nec
      egestas.
    </div>
    <div className='w-fit p-3 bg-[#64CCC5] shadow-lg shadow-[#64CCC533] break-normal max-w-xl text-lg mb-4 rounded-xl'>
      Curabitur ut erat ac velit ultrices mattis. Fusce vel elementum nunc.
      Vestibulum mi enim, elementum quis leo eu, bibendum efficitur risus.
      Suspendisse luctus imperdiet purus, vitae dapibus velit malesuada dictum.
      Mauris suscipit viverra massa, at pellentesque augue feugiat eget. Ut
      consectetur nunc vitae massa tempus, eget mollis ex lobortis. Vivamus a
      congue est, ut vulputate velit. Nam pellentesque vestibulum purus nec
      tristique. In accumsan dui vel dui tempus dictum. Nulla sit amet elementum
      lacus. Sed leo mauris, molestie ac urna sed, efficitur sollicitudin massa.
      Donec interdum egestas iaculis.
    </div>
  </>,
];

const Chat = () => {
  return (
    <div className='text-white w-4/5 h-[calc(100vh-120px)] bg-[#001C30] p-2 rounded-xl m-3'>
      <div className='flex flex-col h-full'>
        <div className='overflow-auto flex-col h-full'>
          <div className='mb-5 p-5 font-mono font-semibold text-center text-3xl'>
            Welcome To Selbide Chat
          </div>
          <div className='font-sans'>{chats}</div>
        </div>
        <div className='flex pt-2'>
          <input
            type='text'
            placeholder='Your query...'
            className='p-3 rounded-xl w-full bg-slate-700'
          />
          <button className='text-4xl p-2 text-white'>
            <BiSend />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
