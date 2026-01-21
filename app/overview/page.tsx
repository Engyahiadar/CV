'use client';

import { SiReact, SiNextdotjs, SiNodedotjs, SiJavascript, SiTypescript, SiTailwindcss, SiGit } from 'react-icons/si';
import { motion, Variants } from 'framer-motion';

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.12,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
};

export default function Overview() {
  return (
    <main className="my-10 flex grow flex-col gap-4 md:flex-row" id="overview">
      {/* Left: Text Overview */}
      <div className="space-y-8 bg-gray-50 px-6 py-10 rounded-lg">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-10 text-center">
          Overview
        </h2>
        <div className="text-lg text-gray-700 leading-relaxed space-y-6">
          <p>
            A software engineer with a passion for innovative technology solutions and a deep-rooted background in creativity and technology, I bridge the gap between design and functionality, transforming concepts into visually appealing and interactive digital solutions.
          </p>
          <p>
            I am eager to learn and apply my theoretical knowledge in practical, real-world work environments. I seek to leverage my communication skills to effectively serve your company through an internship opportunity.
          </p>
          <p>
            I am committed to gaining experience and succeeding in a collaborative work environment.
          </p>
        </div>

        {/* Tech Stack Highlight */}
        <div className="pt-6 bg-gray-50 px-6 py-10 rounded-lg">
          <h3 className="text-2xl font-medium text-gray-800 mb-4">Core Technologies</h3>

          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* React */}
            <motion.div variants={itemVariants} className="flex flex-col items-center group">
              <div className="bg-white rounded-xl shadow-lg p-6 transition-transform duration-300 group-hover:scale-110 group-hover:shadow-2xl">
                <SiReact className="text-6xl text-cyan-500" />
              </div>
              <p className="mt-4 text-gray-700 font-medium">React.js</p>
            </motion.div>

            {/* Next.js */}
            <motion.div variants={itemVariants} className="flex flex-col items-center group">
              <div className="bg-white rounded-xl shadow-lg p-6 transition-transform duration-300 group-hover:scale-110 group-hover:shadow-2xl">
                <SiNextdotjs className="text-6xl text-black" />
              </div>
              <p className="mt-4 text-gray-700 font-medium">Next.js</p>
            </motion.div>

            {/* Node.js */}
            <motion.div variants={itemVariants} className="flex flex-col items-center group">
              <div className="bg-white rounded-xl shadow-lg p-6 transition-transform duration-300 group-hover:scale-110 group-hover:shadow-2xl">
                <SiNodedotjs className="text-6xl text-green-600" />
              </div>
              <p className="mt-4 text-gray-700 font-medium">Node.js</p>
            </motion.div>

            {/* JavaScript */}
            <motion.div variants={itemVariants} className="flex flex-col items-center group">
              <div className="bg-white rounded-xl shadow-lg p-6 transition-transform duration-300 group-hover:scale-110 group-hover:shadow-2xl">
                <SiJavascript className="text-6xl text-yellow-400 bg-black rounded-lg" />
              </div>
              <p className="mt-4 text-gray-700 font-medium">JavaScript</p>
            </motion.div>

            {/* TypeScript */}
            <motion.div variants={itemVariants} className="flex flex-col items-center group">
              <div className="bg-white rounded-xl shadow-lg p-6 transition-transform duration-300 group-hover:scale-110 group-hover:shadow-2xl">
                <SiTypescript className="text-6xl text-blue-600" />
              </div>
              <p className="mt-4 text-gray-700 font-medium">TypeScript</p>
            </motion.div>

            {/* Tailwind CSS */}
            <motion.div variants={itemVariants} className="flex flex-col items-center group">
              <div className="bg-white rounded-xl shadow-lg p-6 transition-transform duration-300 group-hover:scale-110 group-hover:shadow-2xl">
                <SiTailwindcss className="text-6xl text-cyan-500" />
              </div>
              <p className="mt-4 text-gray-700 font-medium">Tailwind CSS</p>
            </motion.div>

            {/* Git */}
            <motion.div variants={itemVariants} className="flex flex-col items-center group">
              <div className="bg-white rounded-xl shadow-lg p-6 transition-transform duration-300 group-hover:scale-110 group-hover:shadow-2xl">
                <SiGit className="text-6xl text-orange-600" />
              </div>
              <p className="mt-4 text-gray-700 font-medium">Git</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}