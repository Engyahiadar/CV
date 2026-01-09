// app/contact/page.tsx
import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiTelegram, SiFacebook, SiInstagram } from 'react-icons/si';

export default function Contact() {
  return (
    <main className="my-10 flex grow flex-col gap-4 md:flex-row" id='contact'>
        <div className="space-y-12 bg-gray-50 px-6 py-10 rounded-lg">
          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 text-center">
            Contact Me
          </h2>

          {/* Intro Text */}
          <div className="text-lg text-gray-700 leading-relaxed space-y-6  mx-auto text-center">
            <p>
              I'm currently seeking internship opportunities where I can contribute, learn, and grow. 
              If you have an opportunity that matches my skills and experience, or if you'd like to discuss anything, feel free to reach out!
            </p>
          </div>

          {/* Contact Info Cards with Icons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10  mx-auto">
            {/* Email */}
            <div className="text-center group">
              <div className="bg-white rounded-xl shadow-lg p-8 transition-transform duration-300 group-hover:shadow-2xl">
                <FaEnvelope className="text-6xl text-blue-600 mx-auto mb-4" />
              </div>
              <p className="mt-4 text-gray-700 font-medium">Email</p>
              <a
                href="mailto:engyahiadareer@gmail.com"
                className="text-blue-600 hover:underline break-all"
              >
                engyahiadareer@gmail.com
              </a>
            </div>

            {/* LinkedIn */}
            <div className="text-center group">
              <div className="bg-white rounded-xl shadow-lg p-8 transition-transform duration-300 group-hover:shadow-2xl">
                <FaLinkedin className="text-6xl text-blue-700 mx-auto mb-4" />
              </div>
              <p className="mt-4 text-gray-700 font-medium">LinkedIn</p>
              <a
                href="https://www.linkedin.com/in/yahia-dareer"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                linkedin.com/in/yahia-dareer
              </a>
            </div>

            {/* GitHub */}
            <div className="text-center group">
              <div className="bg-white rounded-xl shadow-lg p-8 transition-transform duration-300 group-hover:shadow-2xl">
                <FaGithub className="text-6xl text-gray-900 mx-auto mb-4" />
              </div>
              <p className="mt-4 text-gray-700 font-medium">GitHub</p>
              <a
                href="https://github.com/Engyahiadar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                github.com/Engyahiadar
              </a>
            </div>
            {/* Telegram */}
            <div className="text-center group">
              <div className="bg-white rounded-xl shadow-lg p-8 transition-transform duration-300 group-hover:shadow-2xl">
                <SiTelegram className="text-6xl text-sky-500 mx-auto mb-4" />
              </div>
              <p className="mt-4 text-gray-700 font-medium">Telegram</p>
              <a
                href="https://t.me/engy4h1a"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                t.me/yahia-dareer
              </a>
            </div>

            {/* Facebook */}
            <div className="text-center group">
              <div className="bg-white rounded-xl shadow-lg p-8 transition-transform duration-300 group-hover:shadow-2xl">
                <SiFacebook className="text-6xl text-blue-800 mx-auto mb-4" />
              </div>
              <p className="mt-4 text-gray-700 font-medium">Facebook</p>
              <a
                href="https://www.facebook.com/eng.y4h1a"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                facebook.com/yahia-dareer
              </a>
            </div>

            {/* Instagram */}
            <div className="text-center group">
              <div className="bg-white rounded-xl shadow-lg p-8 transition-transform duration-300 group-hover:shadow-2xl">
                <SiInstagram className="text-6xl text-pink-600 mx-auto mb-4" />
              </div>
              <p className="mt-4 text-gray-700 font-medium">Instagram</p>
              <a
                href="https://www.instagram.com/eng.y4h1a"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                instagram.com/yahia-dareer
              </a>
            </div>
          </div>

          {/* Optional Simple Contact Form (using Formspree - free & easy) */}
          <div className="mt-16 max-w-2xl mx-auto">
            <h3 className="text-2xl font-medium text-gray-800 mb-8 text-center">
              Send a Message
            </h3>
            <form
              action="https://formspree.io/f/meeoreqb" // ← سجّل في https://formspree.io واستبدل بالـ ID الخاص بك
              method="POST"
              className="space-y-6"
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full px-5 py-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 transition"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full px-5 py-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 transition"
              />
              <textarea
                name="message"
                rows={6}
                placeholder="Your Message"
                required
                className="w-full px-5 py-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 transition resize-none"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-4 rounded-lg font-medium hover:bg-blue-700 transition duration-300 shadow-lg"
              >
                Send Message →
              </button>
            </form>
            <p className="text-sm text-gray-500 mt-6 text-center">
              (The form uses Formspree – free for up to 50 submissions/month. Sign up at formspree.io to get your form ID.)
            </p>
          </div>
        </div>
    </main>
  );
}