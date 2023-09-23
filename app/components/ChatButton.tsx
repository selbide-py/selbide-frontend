'use client';
import React from "react";
import { BiSend } from "react-icons/bi";
const ChatButton = () => {
  return (
    <>
      <input
        type='text'
        placeholder='Your query...'
        className='p-3 rounded-xl w-full bg-slate-700'
      />
      <button className='text-4xl p-2 text-white'>
        <BiSend />
      </button>
    </>
  );
};

export default ChatButton;
