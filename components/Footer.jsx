import { Camera, MapPin } from 'lucide-react';
import { siteLinks } from './siteLinks';

export default function Footer() {
  return (
    <footer id="contact" className="salon-surface px-4 py-16 md:px-8">
      <div className="relative mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 md:p-10">
        <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-end">
          <div>
            <h2 className="font-display text-5xl font-semibold md:text-7xl">Ready for your next set?</h2>
            <p className="mt-4 max-w-xl leading-8 text-white/64">
              DM on Instagram to ask about availability, send your inspo, and secure your appointment.
            </p>
          </div>
          <div className="flex flex-col gap-3 md:items-end">
            <a href={siteLinks.booking} className="w-full rounded-full bg-blush px-7 py-4 text-center font-semibold text-ink transition hover:bg-white md:w-auto">Book now</a>
            <a href={siteLinks.instagram} className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-7 py-4 text-white/75 transition hover:border-blush hover:text-blush"><Camera size={18} /> Instagram</a>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-8 text-sm text-white/50 md:flex-row md:items-center md:justify-between">
          <p>© The Nail Firm. Luxury nail artistry by DH.</p>
          <p className="inline-flex items-center gap-2"><MapPin size={15} /> Norwich, England</p>
        </div>
      </div>
    </footer>
  );
}
