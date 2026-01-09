// import AcmeLogo from '@/app/ui/acme-logo';
// import { ArrowRightIcon } from '@heroicons/react/24/outline';
// import Link from 'next/link';
// import styles from '@/app/ui/home.module.css';
// import {lusitana} from "@/app/ui/fonts"
// import Image from 'next/image';

// export default function Home() {
//   return (
//     <main className="my-10 flex grow flex-col gap-4 md:flex-row" id='home'>
//         <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
//           <p className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}>
//             <strong>Hello I'm Yahia.</strong>  I'm softwere engineer{' '} full stack , Front-end {' '}
//             <a href="https://reactjs.org/learn/" className="text-blue-500">
//              React.js 
//             </a>
//             {' '}and {' '}
//             <a href="https://nextjs.org/learn/" className="text-blue-500">
//               Next.js
//             </a>
//             {' '} and Back-end {' '}
//             <a href="https://nextjs.org/learn/" className="text-blue-500">
//               Node.js
//             </a> 
//           </p>
//           {/* <Link
//             href="/overview"
//             className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
//           >
//             <span>Next</span> <ArrowRightIcon className="w-5 md:w-6" />
//           </Link> */}
//         </div>
//         <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12  rounded-full">
//           {/* Add Hero Images Here */}

//           <div className="flex justify-center">
//             <div className="relative">
//               <div className="absolute inset-0 bg-blue-500 rounded-full opacity-80 scale-110"></div>
//               <div className="relative bg-blue-500 rounded-full overflow-hidden w-96 h-96 flex items-center justify-center shadow-2xl">
//                 <Image
//                   src="/removebg-preview.png"
//                   width={350}
//                   height={435}
//                   className="hidden md:block"
//                   alt=""
//                 />
//                 <Image
//                   src="/removebg-preview.png"
//                   width={300}
//                   height={373}
//                   className='block md:hidden'
//                   alt=""
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </main>
//   )}

import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import styles from '@/app/ui/home.module.css';
import { lusitana } from "@/app/ui/fonts";
import Image from 'next/image';

export default function Home() {
  return (
    <main className="my-10 flex grow flex-col-reverse gap-4 md:flex-row" id='home'>
      {/* النصوص (ستكون في الأسفل على الموبايل، وفي اليسار على الشاشات الكبيرة) */}
      <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
        <p className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}>
          <strong>Hello I'm Yahia.</strong> I'm software engineer{' '} full stack , Front-end {' '}
          <a href="https://reactjs.org/learn/" className="text-blue-500">
            React.js 
          </a>
          {' '}and {' '}
          <a href="https://nextjs.org/learn/" className="text-blue-500">
            Next.js
          </a>
          {' '} and Back-end {' '}
          <a href="https://nodejs.org/en/learn/" className="text-blue-500">
            Node.js
          </a> 
        </p>
        {/* <Link
          href="/overview"
          className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
        >
          <span>Next</span> <ArrowRightIcon className="w-5 md:w-6" />
        </Link> */}
      </div>

      {/* الصورة (ستكون في الأعلى على الموبايل، وفي اليمين على الشاشات الكبيرة) */}
      <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-blue-500 rounded-full opacity-80 scale-110"></div>
            <div className="relative bg-blue-500 rounded-full overflow-hidden w-96 h-96 flex items-center justify-center shadow-2xl">
              <Image
                src="/removebg-preview.png"
                width={350}
                height={435}
                className="hidden md:block object-cover"
                alt="Yahia Dareer"
              />
              <Image
                src="/removebg-preview.png"
                width={300}
                height={373}
                className="block md:hidden object-cover"
                alt="Yahia Dareer"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}