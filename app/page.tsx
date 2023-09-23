import Navbar from './components/Navbar';
import Chat from './components/Chat';
import FileUpload from './components/FileUpload';
export default function Home() {
  return (
    <div className='bg-#333333'>
      <Navbar />
      <div className='flex w-screen'>
        <Chat />
        <FileUpload />
      </div>
    </div>
  );
}
