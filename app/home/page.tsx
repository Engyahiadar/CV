import { lusitana } from "@/app/ui/fonts";
import Image from 'next/image';
import ScrollDown from "@/app/ui/ScrollDown";
// 1. استيراد أيقونة السهم
import { ChevronDownIcon } from '@heroicons/react/24/outline';

export default function Home() {
  return (
    // 2. إضافة relative و min-h-[90vh] لضمان أن الواجهة تملأ الشاشة تقريباً
    <main className="relative min-h-[calc(100vh-8rem)] flex flex-col-reverse justify-center items-center gap-8 md:flex-row px-6 md:px-12" id='home'>
      
      {/* === قسم النصوص === */}
      <div className="flex flex-col justify-center gap-6 rounded-2xl bg-white px-6 py-10 shadow-lg w-full md:w-2/5 md:px-12 border border-slate-100 z-10">
        <p className={`${lusitana.className} text-xl text-slate-700 md:text-3xl md:leading-normal`}>
          <strong>Hello, I&apos;m Yahia.</strong> I&apos;m a software engineer specialized in{' '}
          <span className="text-slate-900 font-bold">Full Stack</span> development.{' '}
          I work with{' '}
          <a href="https://reactjs.org/learn/" className="text-blue-600 hover:underline decoration-blue-300 underline-offset-4">
            React.js
          </a>
          {', '}
          <a href="https://nextjs.org/learn/" className="text-blue-600 hover:underline decoration-blue-300 underline-offset-4">
            Next.js
          </a>
          {' '}and{' '}
          <a href="https://nodejs.org/en/learn/" className="text-blue-600 hover:underline decoration-blue-300 underline-offset-4">
            Node.js
          </a>.
        </p>
      </div>

      {/* === قسم الصورة === */}
      <div className="flex items-center justify-center p-6 md:w-3/5 md:py-12 z-10">
        <div className="flex justify-center">
          <div className="relative group">
            <div className="absolute inset-0 bg-blue-100 rounded-full scale-110 blur-xl opacity-70 group-hover:scale-125 transition-transform duration-500"></div>
            <div className="relative rounded-full overflow-hidden w-72 h-72 md:w-96 md:h-96 flex items-center justify-center shadow-2xlanimate-pulse-slow">
                {/* Gradient Background تحت كل حاجة */}
                <div className="absolute inset-0 z-[-20] bg-gradient-to-br from-cyan-300 via-purple-400 to-pink-400"></div>

                {/* Glow Rings حول الدائرة (خارجية وقوية) */}
                <div className="absolute inset-0 z-[-10] rounded-full 
                  ring-8 ring-cyan-300/80 
                  ring-offset-8 ring-offset-purple-400/60 
                  animate-glow"></div>
                <div className="absolute inset-0 z-[-10] rounded-full 
                  ring-16 ring-pink-400/60 
                  ring-offset-16 ring-offset-cyan-300/50 
                  animate-glow-delay"></div>
                <div className="absolute inset-0 z-[-10] rounded-full 
                  ring-24 ring-purple-400/40 
                  ring-offset-24 ring-offset-pink-300/40"></div>

                {/* Overlay خفيف جدًا فوق الصورة بس (مش هيغير ألوانها) */}
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/10 via-transparent to-purple-400/5 rounded-full pointer-events-none"></div>

                {/* الصورة الأساسية فوق كل حاجة (زي ما هي بدون أي تعديل) */}
                <Image
                  src="/removebg-preview.png"
                  width={350}
                  height={435}
                  className="relative z-20 hidden md:block object-cover hover:scale-110 transition-transform duration-700 ease-out"
                  alt="Yahia Dareer"
                  priority
                />
                <Image
                  src="/removebg-preview.png"
                  width={280}
                  height={350}
                  className="relative z-20 block md:hidden object-cover"
                  alt="Yahia Dareer"
                  priority
                />
              </div>
          </div>
        </div>
      </div>
      
      <ScrollDown />
    </main>
  );
}