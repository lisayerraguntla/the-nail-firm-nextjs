import { Footprints, Gem, ShieldCheck } from 'lucide-react';

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
];

export default function Services() {
  return (
    <section id="services" className="salon-surface px-4 py-24 md:px-8">
      <div className="relative mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="mb-3 text-sm uppercase tracking-[0.35em] text-blush">Services</p>
          <h2 className="font-display text-5xl font-semibold md:text-7xl">A clean price menu for polished sets.</h2>
          <p className="mt-5 text-lg leading-8 text-white/64">
            Choose your base, then add the finish: solid colour, French, custom design, or a freestyle set planned around your inspo.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article key={service.title} className="glass rounded-[2rem] p-7 transition hover:-translate-y-1 hover:border-blush/40">
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
          })}
        </div>

        <div className="mt-6 rounded-3xl border border-white/10 bg-white/4 px-6 py-5 text-sm leading-7 text-white/62">
          Design pricing depends on detail level: simple, middle, complex, or over-the-top. DM before booking so timing and final price can be confirmed.
        </div>
      </div>
    </section>
  );
}
