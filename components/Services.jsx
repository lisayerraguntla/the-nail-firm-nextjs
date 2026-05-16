'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, Eye, Footprints, Gem, Leaf, Scissors, ShieldCheck, Smile, Sparkles } from 'lucide-react';

const services = [
  {
    icon: Gem,
    title: 'Gel X Extensions',
    price: 'from £25',
    text: 'Length, structure, and glossy detail for full sets with a clean luxury finish.',
    items: [
      ['Solid gel colour', '£25'],
      ['French tips', '£30'],
      ['Freestyle of my choice', '£30'],
      ['Design of your choice', '£30-£55'],
      ['Removal & new set', '£35-£60'],
    ],
  },
  {
    icon: ShieldCheck,
    title: 'BIAB',
    price: 'from £25',
    text: 'Natural nail strength with a polished finish, ideal for growth, infills, and softer sets.',
    items: [
      ['Solid colour BIAB', '£25'],
      ['Design', '£30-£40'],
      ['Infill including design', '£25-£40'],
      ['2-3 week infill saving', '£5 off selected sets'],
    ],
  },
  {
    icon: Footprints,
    title: 'Toes',
    price: 'from £15',
    text: 'Fresh, neat toe services for natural toes or Gel X, with simple design add-ons.',
    items: [
      ['Natural toes solid colour', '£15'],
      ['Natural toes French tip', '£20'],
      ['Gel X toes solid colour', '£20'],
      ['Gel X toes French tip', '£25'],
      ['Other design add-on', '+£5'],
    ],
  },
  {
    icon: Eye,
    title: 'Lash Extensions',
    price: 'from £30',
    text: 'Soft everyday classics through to fuller volume sets, with infill options to keep them fresh.',
    items: [
      ['Classic full set', '£30'],
      ['Hybrid full set', '£35'],
      ['Angel set', '£40'],
      ['Volume full set', '£45'],
      ['Infills', '£25-£40'],
    ],
  },
  {
    icon: Sparkles,
    title: 'UV Lash Extensions',
    price: 'from £25',
    text: 'A lash extension option with a glossy, lasting finish and the same soft-to-full styling choices.',
    items: [
      ['Classic full set', '£25'],
      ['Hybrid full set', '£30'],
      ['Volume full set', '£45'],
      ['Infills', '£20-£40'],
    ],
  },
  {
    icon: ShieldCheck,
    title: 'Korean Lash Lift',
    price: 'from £35',
    text: 'Lifted natural lashes for a clean, wide-awake look without extensions.',
    items: [
      ['Korean lash lift', '£35'],
      ['Korean lash lift & tint', '£40'],
    ],
  },
  {
    icon: Smile,
    title: 'Teeth Whitening',
    price: 'from £55',
    text: 'Cosmetic brightening appointments designed to lift the appearance of stained teeth.',
    items: [
      ['30 minutes', '£55'],
      ['45 minutes', '£65'],
      ['60 minutes', '£85'],
      ['90 minutes', '£95'],
    ],
  },
  {
    icon: Leaf,
    title: 'Chemical Peel',
    price: 'from £40',
    text: 'Skin-smoothing treatments for face or back, planned around the area being treated.',
    items: [
      ['Face', '£40'],
      ['Back', '£45'],
    ],
  },
  {
    icon: Scissors,
    title: 'Wax',
    price: 'from £5',
    text: 'Quick add-on waxing services for small areas and everyday maintenance.',
    items: [
      ['Arms', '£15'],
      ['Legs', '£30'],
      ['Armpits', '£15'],
      ['Chin', '£5'],
      ['Upper lip', '£5'],
    ],
  },
];

function ServiceCard({ service }) {
  const Icon = service.icon;

  return (
    <article className="glass rounded-[2rem] p-7 transition hover:-translate-y-1 hover:border-blush/40">
      <div className="mb-8 grid h-13 w-13 place-items-center rounded-2xl bg-champagne text-ink shadow-glow">
        <Icon size={24} />
      </div>
      <div className="flex items-start justify-between gap-4">
        <h3 className="font-display text-3xl font-semibold">{service.title}</h3>
        <span className="rounded-full bg-champagne/10 px-3 py-1 text-sm text-champagne">{service.price}</span>
      </div>
      <p className="mt-4 leading-7 text-white/62">{service.text}</p>
      <div className="mt-7 space-y-3 border-t border-white/10 pt-5">
        {service.items.map(([label, price]) => (
          <div key={label} className="flex items-start justify-between gap-4 text-sm">
            <span className="leading-6 text-white/74">{label}</span>
            <span className="shrink-0 rounded-full bg-ink/60 px-3 py-1 font-semibold text-champagne">
              {price}
            </span>
          </div>
        ))}
      </div>
    </article>
  );
}

export default function Services() {
  const [activeService, setActiveService] = useState(0);
  const currentService = services[activeService];

  const showPreviousService = () => {
    setActiveService((current) => (current === 0 ? services.length - 1 : current - 1));
  };

  const showNextService = () => {
    setActiveService((current) => (current === services.length - 1 ? 0 : current + 1));
  };

  return (
    <section id="services" className="salon-surface px-4 py-24 md:px-8">
      <div className="relative mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="mb-3 text-sm uppercase tracking-[0.35em] text-blush">Services</p>
          <h2 className="font-display text-5xl font-semibold md:text-7xl">Beauty services, grouped clearly.</h2>
          <p className="mt-5 text-lg leading-8 text-white/64">
            Choose your treatment, then confirm the finish, timing, and any add-ons before your appointment.
          </p>
        </div>

        <div className="mt-10 md:hidden">
          <div className="mb-5 flex items-center justify-between gap-4">
            <p className="text-sm uppercase tracking-[0.28em] text-champagne/70">
              Service {activeService + 1} of {services.length}
            </p>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={showPreviousService}
                className="grid h-11 w-11 place-items-center rounded-full border border-champagne/25 bg-white/4 text-champagne transition hover:border-champagne hover:bg-champagne hover:text-ink"
                aria-label="Show previous service"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                type="button"
                onClick={showNextService}
                className="grid h-11 w-11 place-items-center rounded-full border border-champagne/25 bg-white/4 text-champagne transition hover:border-champagne hover:bg-champagne hover:text-ink"
                aria-label="Show next service"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
          <ServiceCard service={currentService} />
          <div className="mt-6 flex justify-center gap-2">
            {services.map((service, index) => (
              <button
                key={service.title}
                type="button"
                onClick={() => setActiveService(index)}
                className={`h-2.5 rounded-full transition ${
                  activeService === index ? 'w-8 bg-champagne' : 'w-2.5 bg-white/20 hover:bg-champagne/60'
                }`}
                aria-label={`Show ${service.title}`}
              />
            ))}
          </div>
        </div>

        <div className="mt-12 hidden gap-5 md:grid md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>

        <div className="mt-6 rounded-3xl border border-white/10 bg-white/4 px-6 py-5 text-sm leading-7 text-white/62">
          Nail design pricing depends on detail level: simple, middle, complex, or over-the-top. DM before booking so timing and final price can be confirmed.
        </div>
      </div>
    </section>
  );
}
