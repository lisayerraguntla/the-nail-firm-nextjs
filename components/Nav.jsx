'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

const navItems = [
  ['About', 'about'],
  ['Services', 'services'],
  ['Gallery', 'gallery'],
  ['Reviews', 'reviews'],
  ['Booking', 'booking'],
  ['Policies', 'policies'],
  ['Contact', 'contact'],
];

export default function Nav({ activeSection, onNavigate }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavigate = (section) => {
    onNavigate(section);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-4 py-4 md:px-8">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-ink/70 px-5 py-3 shadow-2xl backdrop-blur-xl">
        <button type="button" onClick={() => handleNavigate('home')} className="flex min-w-0 items-center gap-2" aria-label="Go to home">
          <span className="relative h-9 w-9 overflow-hidden rounded-full border border-champagne/40 bg-ink shadow-glow">
            <Image
              src="/images/the-nail-firm-logo.png"
              alt="The Nail Firm logo"
              fill
              sizes="36px"
              className="object-cover"
            />
          </span>
          <span className="hidden truncate font-display text-xl tracking-wide sm:inline">The Nail Firm</span>
        </button>

        <div className="hidden items-center gap-7 text-sm text-white/72 md:flex">
          {navItems
            .filter(([label]) => label !== 'Booking')
            .map(([label, section]) => (
              <button
                key={section}
                type="button"
                onClick={() => handleNavigate(section)}
                className={`transition hover:text-blush ${activeSection === section ? 'text-champagne' : ''}`}
              >
                {label}
              </button>
            ))}
        </div>

        <div className="flex shrink-0 items-center gap-2">
          <button
            type="button"
            onClick={() => handleNavigate('booking')}
            className="whitespace-nowrap rounded-full border border-champagne/40 bg-champagne px-4 py-2.5 text-sm font-semibold text-ink shadow-glow transition hover:bg-blush sm:px-5"
          >
            Book now
          </button>
          <button
            type="button"
            onClick={() => setIsMenuOpen((current) => !current)}
            className="grid h-10 w-10 place-items-center rounded-full border border-champagne/25 bg-white/4 text-champagne transition hover:border-champagne hover:bg-champagne hover:text-ink md:hidden"
            aria-label={isMenuOpen ? 'Close mobile menu' : 'Open mobile menu'}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="mx-auto mt-3 max-w-7xl rounded-3xl border border-white/10 bg-ink/92 p-3 shadow-2xl backdrop-blur-xl md:hidden">
          <div className="grid gap-2">
            {navItems.map(([label, section]) => (
              <button
                key={section}
                type="button"
                onClick={() => handleNavigate(section)}
                className={`rounded-2xl border px-4 py-3 text-left font-display text-2xl transition hover:border-champagne/35 hover:text-champagne ${
                  activeSection === section
                    ? 'border-champagne/35 bg-champagne/10 text-champagne'
                    : 'border-white/8 bg-white/4 text-white'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
