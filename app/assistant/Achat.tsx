'use client';
import React from 'react';
import { useState, useEffect } from 'react';
import useChatScroll from '../components/ChatScroll';
import axios from 'axios';
import { BiSend } from 'react-icons/bi';
import Cookies from 'js-cookie';
import ReactLoading from 'react-loading';

const id = Cookies.get('user_id');
console.log('cookie', id);

const Achat = () => {
  const [message, setMessage] = useState('');
  const [chats, setChats] = useState([]);
  const [loading, setLoading] = useState(true);
  const ref = useChatScroll(chats);

  useEffect(() => {
    getChat();
  }, []);

  async function getChat() {
    try {
      const res = await axios.post(
        'https://web-production-8d29.up.railway.app/getchat',
        {
          id: `${id}`,
        },
        {
          headers: { 'Content-Type': 'application/json' },
        }
      );
      setChats(res.data.chat_messages);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching chat:', error);
      setLoading(false);
    }
  }

  async function addChat(msg: string) {
    try {
      const res = await axios.post(
        'https://web-production-8d29.up.railway.app/add_chat',
        {
          user_id: `${id}`,
          message: msg,
        },
        {
          headers: { 'Content-Type': 'application/json' },
          timeout: 999999,
        }
      );
      return res.data;
    } catch (error) {
      console.error('Error adding chat:', error);
    }
  }

  async function handleSend() {
    await addChat(message);
    await getChat();
    setMessage('');
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function handleChange(event: any) {
    setMessage(event.target.value);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const displayChats = chats.map((chat: any) => {
    return (
      <div
        key={chat._id}
        className={`${
          chat.is_user
            ? 'ml-auto text-lg break-normal shadow-lg shadow-[#176B8733] max-w-xl w-fit p-3 bg-[#176B87] mb-4 rounded-xl'
            : 'w-fit p-3 break-normal max-w-xl shadow-lg shadow-[#64CCC533] text-lg bg-[#64CCC5] mb-4 rounded-xl'
        }`}
      >
        {chat.message}
      </div>
    );
  });

  return (
    <div className='text-white w-4/5 h-[calc(100vh-120px)] bg-slate.900 p-2 rounded-xl m-3'>
      <div className='flex flex-col h-full'>
        <div ref={ref} className='overflow-auto flex-col h-full'>
          <div className='mb-5 p-5 font-mono font-semibold text-center text-3xl'>
            Legal Assistance
          </div>
          {loading ? (
            <div className='justify-center h-3/5 items-center flex'>
              <ReactLoading type='spin' color='white' />
            </div>
          ) : (
            <div className='font-sans'>{displayChats}</div>
          )}
        </div>
        <div className='flex pt-2'>
          <input
            type='text'
            placeholder='Your query...'
            className='p-3 rounded-xl w-full bg-slate-700'
            value={message}
            onChange={handleChange}
          />
          <button className='text-4xl p-2 text-white' onClick={handleSend}>
            <BiSend />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Achat;
