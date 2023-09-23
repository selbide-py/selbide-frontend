import Chat from "./components/Chat";
import Navbar1 from "./components/Navbar1";
import FileUpload from "./components/FileUpload";
import Summary from "./components/Summary";
// import { Button } from "@chakra-ui/react";
export default function Home() {
  // function handleSummary() {
  //   <Summary />;
  // }

  return (
    <div className='bg-slate-900'>
      <Navbar1 />
      <div className='flex w-screen'>
        <Chat />
        <div className='w-1/2'>
          <FileUpload />
          <Summary />;
        </div>
      </div>
    </div>
  );
}
