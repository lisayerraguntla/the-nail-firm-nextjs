import Link from 'next/link';
import { Sparkles } from 'lucide-react';
import { siteLinks } from './siteLinks';

export default function Nav() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-4 py-4 md:px-8">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-ink/70 px-5 py-3 shadow-2xl backdrop-blur-xl">
        <Link href="#home" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-blush text-ink">
            <Sparkles size={18} />
          </span>
          <span className="font-display text-xl tracking-wide">The Nail Firm</span>
        </Link>

        <div className="hidden items-center gap-7 text-sm text-white/72 md:flex">
          <Link href="#services" className="transition hover:text-blush">Services</Link>
          <Link href="#gallery" className="transition hover:text-blush">Gallery</Link>
          <Link href="#policies" className="transition hover:text-blush">Policies</Link>
          <Link href="#contact" className="transition hover:text-blush">Contact</Link>
        </div>

        <a
          href={siteLinks.booking}
          className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-ink transition hover:bg-blush"
        >
          Book now
        </a>
      </nav>
    </header>
  );
}
