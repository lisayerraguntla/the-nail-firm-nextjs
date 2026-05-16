'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, Heart, MessageCircle, Sparkles } from 'lucide-react';

const reviews = [
  {
    quote: 'I love the nails tysmmmm. I love themmmm xx.',
    tag: 'Instant love',
  },
  {
    quote: 'Girl my nails are still on, you are actually on another level.',
    tag: 'Long wear',
  },
  {
    quote: 'I have never had nails that lasted this long. I have gotten so many compliments on them, you are so talented.',
    tag: '3+ weeks',
  },
  {
    quote: 'Girl this BIAB is amazing. The way my nail beds are growing.',
    tag: 'BIAB growth',
  },
  {
    quote: 'Thank you again girlie, I absolutely love my nailssss.',
    tag: 'Client love',
  },
  {
    quote: 'My nails have grown so much. I do not bite my nails anymore, so they are growinggggg.',
    tag: 'Healthy nails',
  },
  {
    quote: 'Nearly two months retention. BIAB is the best and it shows you use the best products.',
    tag: 'Retention',
  },
  {
    quote: 'Honestly my toes are still on. I wish you were in Norwich to do them.',
    tag: 'Toes',
  },
  {
    quote: 'I am getting so many compliments on my nails. I love them so much and keep admiring them.',
    tag: 'Compliments',
  },
  {
    quote: 'I know I have said this 100 times already, but I am absolutely in love with my nails.',
    tag: 'Obsessed',
  },
  {
    quote: 'My nails look so good I took the wrong turn twice because I kept looking at them.',
    tag: 'Show-stopper',
  },
  {
    quote: 'A random elderly lady complimented my nails on the bus, and then I showed her your Insta page.',
    tag: 'Public approval',
  },
  {
    quote: 'I cannot stop staring at these nails, they are gorgeous. Thank you so much.',
    tag: 'Gorgeous set',
  },
  {
    quote: 'None of the nails are chipped or damaged with the heavy duty stuff I do at work. So impressive.',
    tag: 'Durability',
  },
  {
    quote: 'Thank you for making the time and dropping me home.',
    tag: 'Care',
  },
  {
    quote: 'They made it through two 10 hour shifts outside in the rain with no chipping or breaking.',
    tag: 'Work-proof',
  },
  {
    quote: 'Still going strong after a month. This is like 6 week retention.',
    tag: '6 week retention',
  },
  {
    quote: 'My nails lasted for almost 5 weeks. Gorgeous nails, my love. I will be coming back for more.',
    tag: 'Almost 5 weeks',
  },
];

const reviewsPerPage = 6;
const totalPages = Math.ceil(reviews.length / reviewsPerPage);

export default function Reviews() {
  const [page, setPage] = useState(0);
  const start = page * reviewsPerPage;
  const visibleReviews = reviews.slice(start, start + reviewsPerPage);

  const goToPreviousPage = () => {
    setPage((currentPage) => (currentPage === 0 ? totalPages - 1 : currentPage - 1));
  };

  const goToNextPage = () => {
    setPage((currentPage) => (currentPage === totalPages - 1 ? 0 : currentPage + 1));
  };

  return (
    <section id="reviews" className="salon-surface px-4 py-24 md:px-8">
      <div className="relative mx-auto max-w-7xl">
        <div className="mb-12 grid gap-8 border-b border-white/10 pb-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.35em] text-blush">Client notes</p>
            <h2 className="font-display text-5xl font-semibold leading-none md:text-7xl">
              Proof in the messages.
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-3xl border border-champagne/15 bg-white/4 p-5">
              <Heart className="mb-4 text-champagne" size={22} />
              <p className="font-display text-4xl">18</p>
              <p className="mt-1 text-sm text-white/58">real client reactions</p>
            </div>
            <div className="rounded-3xl border border-champagne/15 bg-white/4 p-5">
              <Sparkles className="mb-4 text-champagne" size={22} />
              <p className="font-display text-4xl">2 months</p>
              <p className="mt-1 text-sm text-white/58">retention mentioned</p>
            </div>
            <div className="rounded-3xl border border-champagne/15 bg-white/4 p-5">
              <MessageCircle className="mb-4 text-champagne" size={22} />
              <p className="font-display text-4xl">No chips</p>
              <p className="mt-1 text-sm text-white/58">through long shifts</p>
            </div>
          </div>
        </div>

        <div className="mb-8 flex items-center justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-champagne/70">
              Page {page + 1} of {totalPages}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={goToPreviousPage}
              className="grid h-11 w-11 place-items-center rounded-full border border-champagne/25 bg-white/4 text-champagne transition hover:border-champagne hover:bg-champagne hover:text-ink"
              aria-label="Show previous reviews"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              type="button"
              onClick={goToNextPage}
              className="grid h-11 w-11 place-items-center rounded-full border border-champagne/25 bg-white/4 text-champagne transition hover:border-champagne hover:bg-champagne hover:text-ink"
              aria-label="Show next reviews"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {visibleReviews.map((review, index) => (
            <article
              key={review.quote}
              className="min-h-[250px] rounded-[1.65rem] border border-white/10 bg-[#070706]/78 p-5 shadow-2xl shadow-black/20 backdrop-blur-xl transition hover:-translate-y-1 hover:border-champagne/35"
            >
              <div className="mb-5 flex items-center justify-between gap-4">
                <span className="rounded-full border border-champagne/20 bg-champagne/10 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-champagne">
                  {review.tag}
                </span>
                <span className="font-display text-2xl text-champagne/55">
                  {String(start + index + 1).padStart(2, '0')}
                </span>
              </div>
              <p className="text-lg leading-8 text-white/78">“{review.quote}”</p>
            </article>
          ))}
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setPage(index)}
              className={`h-2.5 rounded-full transition ${
                page === index ? 'w-8 bg-champagne' : 'w-2.5 bg-white/20 hover:bg-champagne/60'
              }`}
              aria-label={`Show review page ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
