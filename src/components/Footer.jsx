import React from 'react';
import { motion } from 'framer-motion';
import { Github, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative border-t border-blue-100 bg-gradient-to-b from-white to-blue-50/40">
      <div className="mx-auto w-full max-w-7xl px-6 py-10">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 to-blue-700" />
            <span className="text-sm font-semibold text-slate-900">HookVision</span>
          </motion.div>
          <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="text-center text-xs text-slate-500">
            © {new Date().getFullYear()} HookVision. All rights reserved.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.15 }} className="flex items-center gap-3 text-slate-500">
            <a href="#" aria-label="Twitter" className="rounded-lg p-2 transition hover:bg-blue-100">
              <Twitter size={18} />
            </a>
            <a href="#" aria-label="GitHub" className="rounded-lg p-2 transition hover:bg-blue-100">
              <Github size={18} />
            </a>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
