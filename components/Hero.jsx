'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';
import { siteLinks } from './siteLinks';

export default function Hero() {
  return (
    <section id="home" className="luxury-gradient relative min-h-screen overflow-hidden px-4 pb-20 pt-32 md:px-8 md:pt-40">
      <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '64px 64px' }} />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blush/30 bg-white/5 px-4 py-2 text-sm text-blush">
            <Star size={15} fill="currentColor" /> Beauty appointments in Norwich
          </div>

          <h1 className="font-display text-6xl font-semibold leading-[0.9] tracking-tight text-balance md:text-8xl">
            Luxury beauty at student prices.
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/72 md:text-xl">
            A beauty space for detailed nail sets, BIAB, lashes, teeth whitening, waxing, and skin treatments, all kept polished, personal, and affordable.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a href={siteLinks.booking} className="group inline-flex items-center justify-center gap-2 rounded-full bg-champagne px-7 py-4 font-semibold text-ink shadow-glow transition hover:bg-blush">
              Book your appointment <ArrowRight className="transition group-hover:translate-x-1" size={18} />
            </a>
            <a href="#gallery" className="inline-flex items-center justify-center rounded-full border border-champagne/25 px-7 py-4 font-semibold text-white transition hover:border-champagne hover:text-champagne">
              View gallery
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-3 text-sm text-white/64">
            <span className="rounded-full border border-white/10 px-4 py-2">Nails</span>
            <span className="rounded-full border border-white/10 px-4 py-2">BIAB</span>
            <span className="rounded-full border border-white/10 px-4 py-2">Lashes</span>
            <span className="rounded-full border border-white/10 px-4 py-2">Teeth whitening</span>
            <span className="rounded-full border border-white/10 px-4 py-2">Waxing</span>
            <span className="rounded-full border border-white/10 px-4 py-2">Chemical peels</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="relative"
        >
          <div className="absolute -inset-8 rounded-[3rem] bg-champagne/10 blur-3xl" />
          <div className="glass relative grid min-h-130 place-items-center overflow-hidden rounded-[2.2rem] p-6 md:min-h-152.5">
            <Image
              src="/images/the-nail-firm-logo.png"
              alt="The Nail Firm logo"
              width={1100}
              height={1100}
              priority
              className="h-auto w-full max-w-135 rounded-full object-contain shadow-glow"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
