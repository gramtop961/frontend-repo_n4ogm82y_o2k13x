import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { Rocket, Activity, Bug, Shield } from 'lucide-react';

const FlowCard = () => {
  const item = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="relative w-full max-w-xl rounded-2xl border border-blue-100 bg-white/80 p-4 shadow-xl backdrop-blur-md"
    >
      <div className="flex items-center gap-2 mb-3">
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
          <Activity size={18} />
        </span>
        <p className="text-sm font-medium text-blue-700">Live Webhook Flow</p>
      </div>
      <motion.div
        className="grid grid-cols-3 gap-3"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.15 }}
      >
        <motion.div variants={item} className="rounded-xl border border-blue-100 bg-white p-3">
          <div className="flex items-center gap-2 text-blue-600">
            <Rocket size={16} />
            <span className="text-xs font-semibold">App</span>
          </div>
          <p className="mt-2 text-[11px] text-slate-600">Sends event</p>
        </motion.div>
        <motion.div variants={item} className="rounded-xl border border-blue-100 bg-white p-3">
          <div className="flex items-center gap-2 text-green-600">
            <Shield size={16} />
            <span className="text-xs font-semibold">Inspector</span>
          </div>
          <p className="mt-2 text-[11px] text-slate-600">Validates & logs</p>
        </motion.div>
        <motion.div variants={item} className="rounded-xl border border-blue-100 bg-white p-3">
          <div className="flex items-center gap-2 text-rose-600">
            <Bug size={16} />
            <span className="text-xs font-semibold">Debugger</span>
          </div>
          <p className="mt-2 text-[11px] text-slate-600">Spot issues</p>
        </motion.div>
      </motion.div>
      <div className="mt-3 flex items-center justify-between">
        <div className="flex -space-x-2">
          {[0,1,2].map(i => (
            <div key={i} className="h-6 w-6 rounded-full border-2 border-white bg-gradient-to-br from-blue-300 to-blue-500" />
          ))}
        </div>
        <span className="rounded-full bg-blue-50 px-2 py-1 text-[10px] font-medium text-blue-700">Streaming in real-time</span>
      </div>
    </motion.div>
  );
};

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/80 to-white" />
      </div>

      <div className="relative mx-auto flex min-h-[92vh] w-full max-w-7xl flex-col items-center justify-center px-6 py-24 text-center">
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700"
        >
          <span className="h-2 w-2 rounded-full bg-blue-500" />
          Debug webhooks in real time
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="max-w-3xl text-4xl font-extrabold leading-tight text-slate-900 sm:text-6xl"
        >
          See every webhook, inspect every payload, fix issues fast.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-4 max-w-2xl text-base text-slate-600 sm:text-lg"
        >
          Capture, replay, and validate webhooks with instant visibility. Purpose-built tools to ship integrations with confidence.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-8 flex flex-col items-center gap-3 sm:flex-row"
        >
          <a href="#pricing" className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-3 text-white shadow-lg shadow-blue-500/30 transition hover:-translate-y-0.5 hover:bg-blue-700">
            Start free
          </a>
          <a href="#services" className="inline-flex items-center justify-center rounded-xl border border-blue-200 bg-white px-6 py-3 text-blue-700 transition hover:-translate-y-0.5 hover:bg-blue-50">
            Explore features
          </a>
        </motion.div>

        <div className="mt-12 w-full max-w-xl">
          <FlowCard />
        </div>
      </div>
    </section>
  );
};

export default Hero;
