'use client';
import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { BiSend } from 'react-icons/bi';
import ReactLoading from 'react-loading';
import Cookies from 'js-cookie';

const id = Cookies.get('user_id');
console.log('cookie', id);

const Chat = () => {
  const [message, setMessage] = useState('');
  const [chats, setChats] = useState([]);
  const [loading, setLoading] = useState(true);

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
        }
      );
      return res.data;
    } catch (error) {
      console.error('Error adding chat:', error);
    }
  }

  async function handleSend() {
    // console.log(message);
    await addChat(message);
    setMessage('');
    await getChat();
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function handleChange(event: any) {
    setMessage(event.target.value);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const displayChats = chats.map((chat: any) => {
    return (
      <div
        key={chat.id}
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
    <div className='text-white w-4/6 h-[calc(100vh-120px)] bg-slate-900 p-2 rounded-xl m-3'>
      <div className='flex flex-col h-full'>
        <div className='overflow-auto flex-col h-full'>
          <div className='mb-5 p-5 font-mono font-semibold text-center text-3xl'>
            Welcome To Selbide Chat
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

export default Chat;
