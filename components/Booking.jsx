import { CalendarDays, CreditCard, MessageCircle } from 'lucide-react';
import { siteLinks } from './siteLinks';

const steps = [
  ['Choose your service', 'Pick from nails, lashes, whitening, waxing, peels, or toes, then choose any add-ons.'],
  ['Send the details', 'DM your inspo, service choice, preferred timing, and anything I should know before your appointment.'],
  ['Confirm your slot', 'Secure your appointment with the right deposit for your treatment and arrive ready for your glow-up.'],
];

export default function Booking() {
  return (
    <section className="salon-surface px-4 py-24 md:px-8">
      <div className="relative mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="glass rounded-[2.2rem] p-8 md:p-10">
          <p className="mb-3 text-sm uppercase tracking-[0.35em] text-blush">Booking flow</p>
          <h2 className="font-display text-5xl font-semibold md:text-6xl">Your appointment, made simple.</h2>
          <p className="mt-5 leading-8 text-white/64">
            Choose your treatment, send any inspo or notes, and confirm the details before your visit. Every appointment is planned with enough time for a clean, polished finish.
          </p>
          <a href={siteLinks.booking} className="mt-8 inline-flex rounded-full bg-champagne px-7 py-4 font-semibold text-ink shadow-glow transition hover:bg-blush">
            Book an appointment
          </a>
        </div>

        <div className="grid gap-4">
          {steps.map(([title, text], index) => (
            <div key={title} className="rounded-[1.7rem] border border-white/10 bg-white/4 p-6">
              <div className="mb-4 flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-champagne text-ink font-semibold">{index + 1}</span>
                <h3 className="font-display text-3xl">{title}</h3>
              </div>
              <p className="leading-7 text-white/62">{text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative mx-auto mt-10 grid max-w-7xl gap-4 md:grid-cols-3">
        <div className="rounded-3xl border border-white/10 p-5 text-white/70"><CalendarDays className="mb-3 text-blush" /> Appointment-only beauty services</div>
        <div className="rounded-3xl border border-white/10 p-5 text-white/70"><CreditCard className="mb-3 text-blush" /> Deposit depends on treatment</div>
        <div className="rounded-3xl border border-white/10 p-5 text-white/70"><MessageCircle className="mb-3 text-blush" /> Book and confirm through Instagram</div>
      </div>
    </section>
  );
}
