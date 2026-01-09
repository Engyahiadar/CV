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
    <header className="flex h-20 shrink-0 items-center justify-between rounded-lg bg-blue-500 px-6 md:px-12 relative">
      {/* اللوغو على اليسار (دائمًا مرئي) */}
      <Link href="/" className="flex flex-row items-center leading-none text-white z-20">
        <GlobeAltIcon className="h-10 w-10 md:h-12 md:w-12 rotate-[15deg]" />
        <p className={`${lusitana.className} text-[32px] md:text-[44px] ml-3 md:ml-4`}>
          Yahia Dareer
        </p>
      </Link>

      {/* Desktop Navigation (مرئية على md وأكبر) */}
      <nav className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.name}
              href={link.href}
              className={`text-lg font-medium transition-colors ${
                isActive
                  ? 'text-white underline underline-offset-4'
                  : 'text-blue-100 hover:text-white hover:underline'
              }`}
            >
              {link.name}
            </Link>
          );
        })}
      </nav>

      {/* Mobile Menu Button (مرئي فقط على الشاشات الصغيرة) */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="md:hidden z-20 text-white"
        aria-label="Toggle menu"
      >
        {mobileMenuOpen ? (
          <XMarkIcon className="h-8 w-8" />
        ) : (
          <Bars3Icon className="h-8 w-8" />
        )}
      </button>

      {/* Mobile Menu Overlay (يظهر عند الفتح) */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-blue-500 bg-opacity-95 z-10 flex flex-col items-center justify-center md:hidden">
          <nav className="flex flex-col items-center gap-10 text-2xl">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)} // إغلاق القائمة عند الضغط
                  className={`font-medium transition-colors ${
                    isActive
                      ? 'text-white underline underline-offset-8'
                      : 'text-blue-100 hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}