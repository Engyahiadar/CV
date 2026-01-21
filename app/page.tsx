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
    <main className="flex min-h-screen flex-col p-6 bg-gray-200">
      <Navbar />
      <Home/>
      <Overview/>
      <Projects/>
      <Contact/>
      <Footer/>
    </main>
  );
}
