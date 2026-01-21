// import Link from 'next/link';
// import { lusitana } from '@/app/ui/fonts';
// import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
// import { SiTelegram, SiFacebook, SiInstagram } from 'react-icons/si';

// export default function Footer() {
//   return (
//     <footer className="bg-blue-600 text-white py-10 mt-auto">
//       <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
//         {/* القسم الأول: الاسم والوصف القصير */}
//         <div>
//           <h3 className={`${lusitana.className} text-2xl font-bold mb-4`}>
//             Yahia Dareer
//           </h3>
//           <p className="text-blue-100">
//             Full Stack Software Engineer<br />
//             React.js • Next.js • Node.js
//           </p>
//           <p className="text-sm mt-4 text-blue-200">
//             © {new Date().getFullYear()} Yahia Dareer. All rights reserved.
//           </p>
//         </div>

//         {/* القسم الثاني: روابط سريعة */}
//         <div>
//           <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
//           <ul className="space-y-3">
//             <li>
//               <Link href="/" className="hover:underline text-blue-100 hover:text-white transition">
//                 Home
//               </Link>
//             </li>
//             <li>
//               <Link href="#overview" className="hover:underline text-blue-100 hover:text-white transition">
//                 Overview
//               </Link>
//             </li>
//             <li>
//               <Link href="#projects" className="hover:underline text-blue-100 hover:text-white transition">
//                 Projects
//               </Link>
//             </li>
//             <li>
//               <Link href="#contact" className="hover:underline text-blue-100 hover:text-white transition">
//                 Contact
//               </Link>
//             </li>
//           </ul>
//         </div>

//         {/* القسم الثالث: روابط التواصل الاجتماعي */}
//         <div>
//           <h4 className="text-xl font-semibold mb-4">Connect With Me</h4>
//           <div className="flex justify-center md:justify-start gap-6 text-3xl">
//             <a
//               href="mailto:engyahiadareer@gmail.com"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="hover:text-blue-200 transition"
//             >
//               <FaEnvelope />
//             </a>
//             <a
//               href="https://www.linkedin.com/in/yahia-dareer"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="hover:text-blue-200 transition"
//             >
//               <FaLinkedin />
//             </a>
//             <a
//               href="https://github.com/Engyahiadar"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="hover:text-blue-200 transition"
//             >
//               <FaGithub />
//             </a>
//             <a
//               href="https://t.me/engy4h1a"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="hover:text-blue-200 transition"
//             >
//               <SiTelegram />
//             </a>
//             <a
//               href="https://www.facebook.com/eng.y4h1a"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="hover:text-blue-200 transition"
//             >
//               <SiFacebook />
//             </a>
//             <a
//               href="https://www.instagram.com/eng.y4h1a"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="hover:text-blue-200 transition"
//             >
//               <SiInstagram />
//             </a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }

import Link from 'next/link';
import { lusitana } from '@/app/ui/fonts';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiTelegram, SiFacebook, SiInstagram } from 'react-icons/si';

export default function Footer() {
  return (
    // 1. الخلفية بيضاء مع حد علوي ناعم للفصل
    <footer className="bg-white text-slate-600 py-12 mt-auto border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        
        {/* القسم الأول: الاسم */}
        <div>
          {/* لون النص غامق ليكون واضحاً */}
          <h3 className={`${lusitana.className} text-2xl font-bold mb-4 text-slate-800`}>
            Yahia Dareer
          </h3>
          <p className="text-slate-500 leading-relaxed">
            Full Stack Software Engineer<br />
            <span className="text-blue-600 font-medium">React.js • Next.js • Node.js</span>
          </p>
          <p className="text-sm mt-6 text-slate-400">
            © {new Date().getFullYear()} Yahia Dareer. All rights reserved.
          </p>
        </div>

        {/* القسم الثاني: روابط سريعة */}
        <div>
          <h4 className="text-xl font-semibold mb-4 text-slate-800">Quick Links</h4>
          <ul className="space-y-3">
            {[
              { name: 'Home', href: '/' },
              { name: 'Overview', href: '#overview' },
              { name: 'Projects', href: '#projects' },
              { name: 'Contact', href: '#contact' },
            ].map((link) => (
              <li key={link.name}>
                <Link 
                  href={link.href} 
                  className="text-slate-500 hover:text-blue-600 hover:translate-x-1 transition-all inline-block"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* القسم الثالث: روابط التواصل */}
        <div>
          <h4 className="text-xl font-semibold mb-4 text-slate-800">Connect With Me</h4>
          <div className="flex justify-center md:justify-start gap-5 text-2xl">
            {/* أيقونات ملونة عند المرور عليها */}
            <a href="mailto:engyahiadareer@gmail.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-red-500 transition-colors"><FaEnvelope /></a>
            <a href="https://www.linkedin.com/in/yahia-dareer" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-700 transition-colors"><FaLinkedin /></a>
            <a href="https://github.com/Engyahiadar" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-black transition-colors"><FaGithub /></a>
            <a href="https://t.me/engy4h1a" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors"><SiTelegram /></a>
            <a href="https://www.facebook.com/eng.y4h1a" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-600 transition-colors"><SiFacebook /></a>
            <a href="https://www.instagram.com/eng.y4h1a" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-pink-600 transition-colors"><SiInstagram /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}