import AcmeLogo from '@/app/ui/acme-logo';
import Navbar from '@/app/ui/navbar';
import Footer from '@/app/ui/footer';
import {lusitana} from "@/app/ui/fonts"
import Home from './home/page';
import Overview from './overview/page';
import Projects from './projects/page';
import Contact from './contact/page';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      {/* <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4">
        <AcmeLogo />
      </div> */}
      {/* <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4"> */}
        {/* <AcmeLogo /> */}
        <Navbar />  {/* استورد المكون في أعلى الملف: import Navbar from '@/app/ui/navbar'; */}
      {/* </div> */}
      <Home/>
      <Overview/>
      <Projects/>
      <Contact/>
      <Footer/>
    </main>
  );
}
