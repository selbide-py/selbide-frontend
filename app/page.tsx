// import Navbar from "./components/Navbar";
import Chat from "./components/Chat";
import Navbar1 from "./components/Navbar1";
import FileUpload from "./components/FileUpload";
export default function Home() {
  return (
    <div className='bg-slate-900'>
      {/* <Navbar /> */}
      <Navbar1 />
      <div className='flex w-screen'>
        <Chat />
        <FileUpload />
      </div>
    </div>
  );
}
