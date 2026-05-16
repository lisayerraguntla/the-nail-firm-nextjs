'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, Gem, ShieldCheck, Smile } from 'lucide-react';

const policySections = [
  {
    eyebrow: 'Nail policies',
    title: 'For nail appointments.',
    tone: 'black',
    icon: Gem,
    summary: 'The essentials for a smooth set, clear timing, and calm appointments.',
    policies: [
      {
        title: 'Deposit',
        text: 'A £5 deposit is required to secure your booking.',
      },
      {
        title: 'Late Arrivals',
        text: 'You are allowed to be 10 minutes late. If I do not have a client after you, the maximum grace period is 15 minutes. If I do have a client after you and you are later than 10 minutes, your appointment may be cancelled.',
      },
      {
        title: 'Nail Repairs',
        text: 'If anything happens to the nail, such as popping off or lifting within one week, please contact me and I will fix it if it is clearly due to my work.',
      },
      {
        title: 'Clean Nails',
        text: 'Please attend with nothing on your nails unless removal has been booked, otherwise a removal fee will be charged.',
      },
      {
        title: 'Cancellations',
        text: 'Contact me 48 hours before cancelling. Same-day cancellations without a valid reason may lead to refused future bookings.',
      },
      {
        title: 'Silent Service',
        text: 'Feel free to ask for a silent service.',
      },
      {
        title: 'Refunds',
        text: 'Deposits are non-refundable unless it is on my end.',
      },
    ],
  },
  {
    eyebrow: 'Teeth whitening policies',
    title: 'For whitening appointments.',
    tone: 'green',
    icon: Smile,
    summary: 'Everything needed before your appointment, from deposit to eligibility.',
    policies: [
      {
        title: 'Deposit',
        text: 'A £20 deposit is required to secure your booking and will be deducted from the payment due on the day.',
      },
      {
        title: 'Late Arrivals',
        text: 'You have a 10 minute grace period if running late.',
      },
      {
        title: 'Refunds',
        text: 'Deposits are non-refundable unless I have cancelled your appointment.',
      },
      {
        title: 'Guests',
        text: 'No plus ones unless you have informed me beforehand and I have agreed.',
      },
      {
        title: 'Payment',
        text: 'Please pay the remaining amount in cash.',
      },
      {
        title: 'Student ID',
        text: 'If you are a university student, please bring proof of your university ID card.',
      },
      {
        title: 'Age Requirement',
        text: 'You must be over 18.',
      },
    ],
  },
];

export default function Policies() {
  const [activeSection, setActiveSection] = useState(0);
  const currentSection = policySections[activeSection];
  const Icon = currentSection.icon;

  const showPreviousSection = () => {
    setActiveSection((current) => (current === 0 ? policySections.length - 1 : current - 1));
  };

  const showNextSection = () => {
    setActiveSection((current) => (current === policySections.length - 1 ? 0 : current + 1));
  };

  return (
    <section id="policies" className="salon-surface-alt px-4 py-24 md:px-8">
      <div className="relative mx-auto max-w-7xl">
        <div className="gold-line mb-14" />
        <div className="mb-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.35em] text-blush">Policies</p>
          </div>
          <div className="flex items-center justify-between gap-4 rounded-3xl border border-champagne/15 bg-white/4 p-4">
            <div className="flex items-center gap-4">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-champagne/25 bg-champagne/10 text-champagne">
                <ShieldCheck size={21} />
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-champagne/70">
                  {activeSection + 1} of {policySections.length}
                </p>
                <p className="text-white/66">Use the arrows to switch between treatments.</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={showPreviousSection}
                className="grid h-11 w-11 place-items-center rounded-full border border-champagne/25 bg-white/4 text-champagne transition hover:border-champagne hover:bg-champagne hover:text-ink"
                aria-label="Show previous policy section"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                type="button"
                onClick={showNextSection}
                className="grid h-11 w-11 place-items-center rounded-full border border-champagne/25 bg-white/4 text-champagne transition hover:border-champagne hover:bg-champagne hover:text-ink"
                aria-label="Show next policy section"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>

        <div
          className={`overflow-hidden rounded-[2rem] border p-5 shadow-2xl shadow-black/25 md:p-8 ${
            currentSection.tone === 'green'
              ? 'border-[#d8c36e]/20 bg-[radial-gradient(circle_at_top,#17351f_0%,#07150d_45%,#050403_100%)]'
              : 'border-white/10 bg-[radial-gradient(circle_at_top,#17110c_0%,#050403_48%,#000_100%)]'
          }`}
        >
          <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
            <div className="flex min-h-[320px] flex-col justify-between rounded-[1.5rem] border border-champagne/15 bg-black/28 p-6">
              <div>
                <div className="mb-6 grid h-14 w-14 place-items-center rounded-full border border-champagne/25 bg-champagne/10 text-champagne">
                  <Icon size={24} />
                </div>
                <p className="mb-3 text-sm uppercase tracking-[0.35em] text-champagne/75">
                  {currentSection.eyebrow}
                </p>
                <h3 className="font-display text-5xl font-semibold leading-none text-champagne md:text-6xl">
                  {currentSection.title}
                </h3>
                <p className="mt-6 max-w-sm leading-7 text-white/68">{currentSection.summary}</p>
              </div>
              <div className="mt-8 flex gap-2">
                {policySections.map((section, index) => (
                  <button
                    key={section.eyebrow}
                    type="button"
                    onClick={() => setActiveSection(index)}
                    className={`h-2.5 rounded-full transition ${
                      activeSection === index ? 'w-8 bg-champagne' : 'w-2.5 bg-white/24 hover:bg-champagne/60'
                    }`}
                    aria-label={`Show ${section.eyebrow}`}
                  />
                ))}
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {currentSection.policies.map((policy) => (
                <article key={policy.title} className="rounded-3xl border border-white/10 bg-black/32 p-5 backdrop-blur">
                  <h4 className="font-display text-2xl font-semibold text-champagne">{policy.title}</h4>
                  <p className="mt-3 leading-7 text-white/70">{policy.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
