const policies = [
  {
    title: 'Deposit',
    text: 'A £5 deposit is required to secure your booking. Deposits are non-refundable unless the cancellation is on my end.',
  },
  {
    title: 'Late Arrivals',
    text: 'Please arrive on time. You have a 10 minute grace period, or up to 15 minutes only if there is no client booked after you. Later arrivals may be cancelled.',
  },
  {
    title: 'Nail Repairs',
    text: 'If a nail pops off or lifts within one week, contact me and I will fix it if it is clearly due to my work.',
  },
  {
    title: 'Clean Nails',
    text: 'Please attend with nothing on your nails unless removal has been booked. A removal fee will be charged if needed.',
  },
  {
    title: 'Cancellations',
    text: 'Please contact me at least 48 hours before cancelling. Same-day cancellations without a valid reason may be refused future bookings.',
  },
  {
    title: 'Silent Service',
    text: 'Feel free to ask for a silent service. Your appointment can be calm, quiet, and still fully cared for.',
  },
];

export default function Policies() {
  return (
    <section id="policies" className="salon-surface-alt px-4 py-24 md:px-8">
      <div className="relative mx-auto max-w-7xl">
        <div className="gold-line mb-14" />
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.35em] text-blush">Policies</p>
            <h2 className="font-display text-5xl font-semibold md:text-6xl">Clear rules, calm appointments.</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {policies.map((policy) => (
              <div key={policy.title} className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5">
                <h3 className="font-display text-2xl font-semibold text-blush">{policy.title}</h3>
                <p className="mt-3 leading-7 text-white/68">{policy.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
