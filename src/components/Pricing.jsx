import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: 'Free',
    desc: 'For trying things out',
    features: [
      'Up to 1,000 events/month',
      'Live inspector',
      '1 mock endpoint',
      'Basic replay',
    ],
    cta: 'Get started',
    highlighted: false,
  },
  {
    name: 'Pro',
    price: '$29',
    desc: 'For serious builders',
    features: [
      'Up to 100,000 events/month',
      'Replay & payload editor',
      'Advanced filters & search',
      'Signature verification',
      'Team seats (up to 5)'
    ],
    cta: 'Start free trial',
    highlighted: true,
  },
  {
    name: 'Scale',
    price: 'Custom',
    desc: 'Mission-critical volume',
    features: [
      'Unlimited events',
      'SLA & priority support',
      'SAML/SSO & audit logs',
      'VPC & IP allowlists',
    ],
    cta: 'Contact sales',
    highlighted: false,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="relative py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-white to-blue-50/40" />
      <div className="relative mx-auto w-full max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-slate-900 sm:text-4xl"
          >
            Simple, transparent pricing
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-3 text-slate-600"
          >
            Start free, upgrade as you grow. No hidden fees.
          </motion.p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className={`relative rounded-2xl border p-6 shadow-sm transition ${plan.highlighted ? 'border-blue-300 bg-white shadow-blue-200/60' : 'border-blue-100 bg-white'}`}
            >
              {plan.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white">Popular</span>
              )}
              <div className="flex items-baseline justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">{plan.name}</h3>
                  <p className="mt-1 text-sm text-slate-600">{plan.desc}</p>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-slate-900">{plan.price}</div>
                  {plan.price !== 'Free' && <div className="text-xs text-slate-500">per month</div>}
                </div>
              </div>
              <ul className="mt-6 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-slate-600">
                    <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                      <Check size={14} />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#" className={`mt-8 inline-flex w-full items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold transition ${plan.highlighted ? 'bg-blue-600 text-white hover:bg-blue-700' : 'border border-blue-200 text-blue-700 hover:bg-blue-50'}`}>
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
