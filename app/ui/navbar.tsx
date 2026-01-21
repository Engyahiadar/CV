'use client'
import { GlobeAltIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Overview', href: '#overview' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex h-20 shrink-0 items-center justify-between px-6 md:px-12 bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-sm">
        
        {/* اللوغو */}
        <Link href="/" className="flex flex-row items-center leading-none text-slate-800 hover:text-black transition-colors">
          <GlobeAltIcon className="h-10 w-10 md:h-12 md:w-12 rotate-[15deg] " />
          <p className={`${lusitana.className} text-[32px] md:text-[44px] ml-3 md:ml-4`}>
            Yahia Dareer
          </p>
        </Link>

        {/* Desktop Navigation - مخفية في الموبايل */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-lg font-medium transition-colors ${
                  isActive
                    ? 'text-blue-600 font-bold underline underline-offset-4'
                    : 'text-slate-500 hover:text-blue-600'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Menu Button - زر القائمة */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-slate-800 p-2 hover:bg-slate-100 rounded-md transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <XMarkIcon className="h-8 w-8 text-blue-600" />
          ) : (
            <Bars3Icon className="h-8 w-8" />
          )}
        </button>
      </header>

      {/* === تعديلات قائمة الموبايل === 
          1. top-20: تبدأ القائمة من أسفل الهيدر مباشرة
          2. border-b: خط سفلي لفصل القائمة عن المحتوى
          3. shadow-xl: ظل قوي لإبراز القائمة
      */}
      {mobileMenuOpen && (
        <div className="fixed top-20 left-0 right-0 z-40 bg-white border-b border-slate-200 shadow-xl md:hidden animate-in slide-in-from-top-5 duration-300">
          <nav className="flex flex-col p-6 space-y-4">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-3 rounded-lg text-lg font-medium transition-colors ${
                    isActive
                      ? 'bg-blue-50 text-blue-600' // تصميم العنصر النشط: خلفية زرقاء فاتحة
                      : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900' // تصميم العنصر العادي
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>
        </div>
      )}

      {/* Spacer لإبعاد المحتوى عن الهيدر الثابت */}
      <div className="h-20" />
    </>
  );
}