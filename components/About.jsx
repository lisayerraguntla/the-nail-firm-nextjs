import { BookOpen, Music, Sparkles, UserRound } from 'lucide-react';

const highlights = [
  {
    icon: BookOpen,
    title: 'Law student energy',
    text: 'The Nail Firm name comes from Dania studying law. A little clever, a little dramatic, very on brand.',
  },
  {
    icon: Sparkles,
    title: 'Uni hobby turned love',
    text: 'Nails started as something to do at university and quickly became a creative service she genuinely enjoys.',
  },
  {
    icon: UserRound,
    title: 'Affordable by choice',
    text: 'Prices are kept accessible because everyone deserves to feel pretty without breaking the bank.',
  },
  {
    icon: Music,
    title: 'Your appointment, your vibe',
    text: 'Chat, laugh, share the tea, request a silent service, or swap the playlist to your favourites.',
  },
];

export default function About() {
  return (
    <section id="about" className="salon-surface px-4 py-24 md:px-8">
      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-stretch">
          <div className="relative overflow-hidden rounded-[2rem] border border-champagne/15 bg-[#070706]/78 p-7 shadow-2xl shadow-black/25 md:p-10">
            <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full border border-champagne/20" />
            <div className="absolute -bottom-32 left-10 h-72 w-72 rounded-full bg-champagne/8 blur-3xl" />
            <div className="relative">
              <p className="mb-3 text-sm uppercase tracking-[0.35em] text-blush">Get to know me</p>
              <h2 className="font-display text-5xl font-semibold leading-none text-champagne md:text-7xl">
                Hi, I&apos;m Dania.
              </h2>
              <div className="mt-8 space-y-5 text-lg leading-8 text-white/72">
                <p>
                  I&apos;m a law student, formerly a pharmacy student until stress had other plans. That is why the page is called The Nail Firm. Cool, right? We are rolling with it.
                </p>
                <p>
                  I started doing nails at uni just to kill time, and it quickly turned into a hobby I love. The more nails I do, the more I feel like I am thriving, so technically your booking is part of the glow-up.
                </p>
                <p>
                  My price list is affordable because I genuinely believe everyone deserves to feel pretty and happy. I am not planning on raising my prices anytime soon because I love offering a service that feels special without breaking the bank.
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {highlights.map((item) => {
              const Icon = item.icon;

              return (
                <article key={item.title} className="rounded-3xl border border-white/10 bg-white/4 p-6">
                  <div className="mb-5 grid h-12 w-12 place-items-center rounded-full border border-champagne/20 bg-champagne/10 text-champagne">
                    <Icon size={22} />
                  </div>
                  <h3 className="font-display text-3xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 leading-7 text-white/64">{item.text}</p>
                </article>
              );
            })}

            <div className="rounded-3xl border border-champagne/20 bg-champagne/10 p-6 sm:col-span-2">
              <p className="font-display text-3xl font-semibold text-champagne">Appointment mood</p>
              <p className="mt-3 leading-7 text-white/72">
                Bring the dark humour, the tea, the life updates, or total silence. If the music is not your vibe, just say the word and your favourites can take over.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
