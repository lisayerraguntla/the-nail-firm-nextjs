'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  { src: '/images/gallery-blue-floral.jpeg', alt: 'Blue floral French nail set' },
  { src: '/images/gallery-gold-florals.jpeg', alt: 'Pink floral and gold nail set' },
  { src: '/images/gallery-pop-art.jpeg', alt: 'Bright graphic nail art set' },
  { src: '/images/gallery-monochrome-chrome.jpeg', alt: 'Black white and silver nail set' },
  { src: '/images/gallery-sculpted-gold.jpeg', alt: 'Brown and gold sculpted nail set' },
  { src: '/images/gallery-studded-french.jpeg', alt: 'French tip nail set with gold details' },
  { src: '/images/gallery-jewel-set.jpeg', alt: 'Cat eye jewel nail set' },
  { src: '/images/gallery-blue-chrome.png', alt: 'Blue chrome nail set' },
  { src: '/images/gallery-whitening-pink-1.png', alt: 'Teeth whitening result with pink guard' },
  { src: '/images/gallery-whitening-blue.png', alt: 'Teeth whitening result with blue guard' },
  { src: '/images/gallery-whitening-pink-2.png', alt: 'Teeth whitening result with pink guard' },
  { src: '/images/gallery-whitening-green.png', alt: 'Teeth whitening result with green guard' },
];

const imagesPerPage = 4;
const totalPages = Math.ceil(images.length / imagesPerPage);

export default function Gallery() {
  const [page, setPage] = useState(0);
  const start = page * imagesPerPage;
  const visibleImages = images.slice(start, start + imagesPerPage);

  const goToPreviousPage = () => {
    setPage((currentPage) => (currentPage === 0 ? totalPages - 1 : currentPage - 1));
  };

  const goToNextPage = () => {
    setPage((currentPage) => (currentPage === totalPages - 1 ? 0 : currentPage + 1));
  };

  return (
    <section id="gallery" className="salon-surface-alt px-4 py-24 md:px-8">
      <div className="relative mx-auto max-w-6xl">
        <div className="mb-10 flex flex-col justify-between gap-6 border-b border-white/10 pb-8 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.35em] text-blush">Portfolio</p>
            <h2 className="max-w-3xl font-display text-5xl font-semibold leading-none md:text-7xl">
              Recent work.
            </h2>
          </div>
          <div className="flex items-center justify-between gap-5 md:justify-end">
            <p className="text-sm uppercase tracking-[0.28em] text-champagne/70">
              Set {page + 1} of {totalPages}
            </p>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={goToPreviousPage}
                className="grid h-11 w-11 place-items-center rounded-full border border-champagne/25 bg-white/4 text-champagne transition hover:border-champagne hover:bg-champagne hover:text-ink"
                aria-label="Show previous gallery section"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                type="button"
                onClick={goToNextPage}
                className="grid h-11 w-11 place-items-center rounded-full border border-champagne/25 bg-white/4 text-champagne transition hover:border-champagne hover:bg-champagne hover:text-ink"
                aria-label="Show next gallery section"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {visibleImages.map((image, index) => (
            <div
              key={image.src}
              className="group relative aspect-square overflow-hidden rounded-2xl border border-white/10 bg-[#070706] shadow-2xl shadow-black/20 sm:aspect-4/5"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                priority={page === 0 && index < 2}
                className="object-cover transition duration-700 group-hover:scale-105"
              />
            </div>
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
              aria-label={`Show gallery section ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
