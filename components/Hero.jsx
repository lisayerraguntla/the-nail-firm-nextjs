'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Star } from 'lucide-react';
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
            <Star size={15} fill="currentColor" /> Luxury nail artistry in Norwich
          </div>

          <h1 className="font-display text-6xl font-semibold leading-[0.9] tracking-tight text-balance md:text-8xl">
            Nails that look like a whole mood.
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/72 md:text-xl">
            A modern nail experience built around clean detail, soft luxury, creative sets, and appointment-only energy.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a href={siteLinks.booking} className="group inline-flex items-center justify-center gap-2 rounded-full bg-blush px-7 py-4 font-semibold text-ink transition hover:bg-white">
              Book your set <ArrowRight className="transition group-hover:translate-x-1" size={18} />
            </a>
            <a href="#gallery" className="inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-4 font-semibold text-white transition hover:border-blush hover:text-blush">
              View gallery
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-3 text-sm text-white/64">
            <span className="rounded-full border border-white/10 px-4 py-2">Gel extensions</span>
            <span className="rounded-full border border-white/10 px-4 py-2">BIAB</span>
            <span className="rounded-full border border-white/10 px-4 py-2">French tips</span>
            <span className="rounded-full border border-white/10 px-4 py-2">Freestyle art</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="relative"
        >
          <div className="absolute -inset-8 rounded-[3rem] bg-blush/10 blur-3xl" />
          <div className="glass relative overflow-hidden rounded-[2.2rem] p-3">
            <Image src="/images/salon-hero.jpeg" alt="Nail salon interior" width={900} height={1100} priority className="h-[570px] w-full rounded-[1.7rem] object-cover" />
            <div className="absolute bottom-7 left-7 right-7 rounded-[1.5rem] bg-ink/72 p-5 backdrop-blur-xl">
              <div className="flex items-center gap-2 text-blush">
                <MapPin size={17} /> Norwich, England
              </div>
              <p className="mt-2 font-display text-3xl">Soft glam. Sharp detail. Premium finish.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
