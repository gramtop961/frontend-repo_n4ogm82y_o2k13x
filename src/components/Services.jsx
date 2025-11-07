import React from 'react';
import { motion } from 'framer-motion';
import { Shield, RefreshCcw, Clock, Search, Webhook, Server } from 'lucide-react';

const features = [
  {
    icon: <Webhook className="h-5 w-5" />, 
    title: 'Live Event Stream',
    desc: 'Watch every incoming webhook with structured payloads and headers in real time.'
  },
  {
    icon: <Search className="h-5 w-5" />, 
    title: 'Powerful Inspector',
    desc: 'Filter, search, and diff payloads. Decode signatures and validate delivery.'
  },
  {
    icon: <RefreshCcw className="h-5 w-5" />, 
    title: 'Replay & Retry',
    desc: 'Re-send failed deliveries with one click. Tweak payloads and test flows safely.'
  },
  {
    icon: <Shield className="h-5 w-5" />, 
    title: 'Security & Signatures',
    desc: 'Verify HMAC signatures, TLS, and IP allowlists. Redaction controls included.'
  },
  {
    icon: <Server className="h-5 w-5" />, 
    title: 'Mock Endpoints',
    desc: 'Spin up test endpoints instantly to simulate providers and edge cases.'
  },
  {
    icon: <Clock className="h-5 w-5" />, 
    title: 'Latency Metrics',
    desc: 'Track response times, error rates, and provider health over time.'
  },
];

const Services = () => {
  return (
    <section id="services" className="relative py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/40 to-white" />
      <div className="relative mx-auto w-full max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-slate-900 sm:text-4xl"
          >
            Everything you need to ship reliable webhooks
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-3 text-slate-600"
          >
            Purpose-built tooling for debugging, testing, and monitoring webhook integrations.
          </motion.p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group rounded-2xl border border-blue-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                {f.icon}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{f.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{f.desc}</p>
              <div className="mt-4 h-1 w-0 rounded-full bg-blue-500 transition-all duration-300 group-hover:w-16" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
