import Navbar from './components/Navbar';
import Chat from './components/Chat';
export default function Home() {
  return (
    <div>
      <Navbar />
      <div className='flex justify-center w-screen'>
        <Chat />
      </div>
    </div>
  );
}
