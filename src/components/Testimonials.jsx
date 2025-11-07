import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    quote: 'We fixed a production webhook outage in minutes. The replay tool paid for itself on day one.',
    name: 'Ava Patel',
    role: 'Head of Platform, Shiply',
  },
  {
    quote: 'The live stream and inspector are incredible. We ship integrations twice as fast now.',
    name: 'Liam Chen',
    role: 'Staff Engineer, Nebula',
  },
  {
    quote: 'Finally a webhook tool that feels modern. Brilliant UX and the right features.',
    name: 'Sofia Martinez',
    role: 'Founder, HookWorks',
  },
];

const Testimonials = () => {
  return (
    <section className="relative py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-white" />
      <div className="relative mx-auto w-full max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-slate-900 sm:text-4xl"
          >
            Loved by modern teams
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-3 text-slate-600"
          >
            Real stories from engineers using our toolkit to ship with confidence.
          </motion.p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm"
            >
              <div className="mb-3 flex gap-1 text-amber-500">{Array.from({ length: 5 }).map((_, j) => <Star key={j} size={16} fill="currentColor" />)}</div>
              <p className="text-sm text-slate-700">“{t.quote}”</p>
              <footer className="mt-4 text-sm font-medium text-slate-900">{t.name} <span className="font-normal text-slate-500">— {t.role}</span></footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
