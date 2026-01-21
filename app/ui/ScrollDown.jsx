"use client";

import { motion } from "framer-motion";

export default function ScrollIndicator() {
  return (
    <motion.a
      href="#overview"
      aria-label="Scroll to overview section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 1 }}
      className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400 dark:text-slate-500 cursor-pointer hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
    >
      <span className="text-[10px] uppercase tracking-[0.3em]">
        Scroll
      </span>

      <div className="relative h-10 w-[2px] bg-slate-300 dark:bg-slate-600 rounded-full overflow-hidden">
        <motion.span
          animate={{ y: [-20, 40] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-0 left-0 h-4 w-full bg-slate-500 dark:bg-slate-300 rounded-full"
        />
      </div>
    </motion.a>
  );
}
