import Chat from './components/Chat';
import Navbar1 from './components/Navbar1';
import FileUpload from './components/FileUpload';
import Summary from './components/Summary';
import LoginModal from './components/login/LoginModal';
// import { Suspense } from 'react';
// import Loading from './loading';

export default function Home() {
  return (
    <div className='bg-slate-900'>
      <LoginModal />
      <Navbar1 />
      <div className='flex w-screen'>
        <Chat />
        <div className='w-2/6 m-3'>
          <FileUpload />
          <div className='w-full flex justify-center'>
            <Summary />;
          </div>
        </div>
      </div>
    </div>
  );
}
