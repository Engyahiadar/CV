import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { SiReact, SiRedux, SiMui, SiAxios, SiDatefns } from 'react-icons/si';
import { FaEye, FaCode, FaShieldAlt, FaTachometerAlt, FaLayerGroup , FaExternalLinkAlt , FaGithub } from 'react-icons/fa';

export default function Projects() {
  return (
    <main className="my-10 flex grow flex-col gap-4 md:flex-row" id='projects'>
        <div className="space-y-8 bg-gray-50 px-6 py-10 rounded-lg">
          {/* Project Title */}
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 text-center">
            Project Evaluation Platform
          </h2>

          {/* Project Description */}
          <div className="text-lg text-gray-700 leading-relaxed space-y-6  mx-auto">
            <p>
              Full-stack web application that allows reviewers to view project details and submit structured evaluations across 5 fixed categories (UI/UX Design, Code Quality, Performance, Security, Clean Architecture) with XP points and comments.
            </p>

            {/* Key Features */}
            <div className="pt-6  bg-gray-50 px-6 py-10 rounded-lg">
              <h3 className="text-2xl font-medium text-gray-800 mb-5 flex items-center justify-center gap-3">
                <FaLayerGroup className="text-blue-600 text-3xl" />
                Key Features
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center md:text-left">
                <li className="flex items-start justify-center md:justify-start gap-3">
                  <span className="text-blue-600 mt-1">•</span>
                  Real-time notifications for submissions and reviews
                </li>
                <li className="flex items-start justify-center md:justify-start gap-3">
                  <span className="text-blue-600 mt-1">•</span>
                  Token-based authentication (JWT)
                </li>
                <li className="flex items-start justify-center md:justify-start gap-3">
                  <span className="text-blue-600 mt-1">•</span>
                  Responsive Dark Mode UI
                </li>
                <li className="flex items-start justify-center md:justify-start gap-3">
                  <span className="text-blue-600 mt-1">•</span>
                  Secure POST/GET requests with Axios
                </li>
                <li className="flex items-start justify-center md:justify-start gap-3">
                  <span className="text-blue-600 mt-1">•</span>
                  Robust state management with Redux Toolkit
                </li>
                <li className="flex items-start justify-center md:justify-start gap-3">
                  <span className="text-blue-600 mt-1">•</span>
                  Resolved complex data-mapping issues
                </li>
              </ul>
            </div>
            {/* Tech Stack */}
            <div className="pt-8">
              <h3 className="text-2xl font-medium text-gray-800 mb-8 text-center">
                Tech Stack
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
                {/* React */}
                <div className="flex flex-col items-center group">
                  <div className="bg-white rounded-xl shadow-lg p-6 transition-transform duration-300 group-hover:scale-110 group-hover:shadow-2xl">
                    <SiReact className="text-6xl text-cyan-500" />
                  </div>
                  <p className="mt-4 text-gray-700 font-medium">React.js</p>
                </div>

                {/* Redux Toolkit */}
                <div className="flex flex-col items-center group">
                  <div className="bg-white rounded-xl shadow-lg p-6 transition-transform duration-300 group-hover:scale-110 group-hover:shadow-2xl">
                    <SiRedux className="text-6xl text-purple-600" />
                  </div>
                  <p className="mt-4 text-gray-700 font-medium">Redux Toolkit</p>
                </div>

                {/* Material-UI */}
                <div className="flex flex-col items-center group">
                  <div className="bg-white rounded-xl shadow-lg p-6 transition-transform duration-300 group-hover:scale-110 group-hover:shadow-2xl">
                    <SiMui className="text-6xl text-blue-600" />
                  </div>
                  <p className="mt-4 text-gray-700 font-medium">Material-UI</p>
                </div>

                {/* Axios */}
                <div className="flex flex-col items-center group">
                  <div className="bg-white rounded-xl shadow-lg p-6 transition-transform duration-300 group-hover:scale-110 group-hover:shadow-2xl">
                    <SiAxios className="text-6xl text-purple-500" />
                  </div>
                  <p className="mt-4 text-gray-700 font-medium">Axios</p>
                </div>

                {/* date-fns */}
                <div className="flex flex-col items-center group">
                  <div className="bg-white rounded-xl shadow-lg p-6 transition-transform duration-300 group-hover:scale-110 group-hover:shadow-2xl">
                    <SiDatefns className="text-6xl text-orange-600" />
                  </div>
                  <p className="mt-4 text-gray-700 font-medium">date-fns</p>
                </div>
              </div>
            </div>

            {/* Project Links */}
            <div className="pt-10 flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="#" // استبدل برابط GitHub
                className="flex items-center justify-center gap-3 bg-gray-900 text-white px-8 py-4 rounded-lg font-medium hover:bg-gray-800 transition text-lg"
              >
                <FaGithub className="text-xl" />
                View Code on GitHub
              </Link>
              <Link
                href="#" // استبدل برابط Live Demo
                className="flex items-center justify-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-blue-700 transition text-lg"
              >
                <FaExternalLinkAlt className="text-xl" />
                Live Demo
              </Link>
            </div>
          </div>
        </div>
    </main>
  );
}