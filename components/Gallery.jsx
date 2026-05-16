import Image from 'next/image';

const images = [
  { src: '/images/gallery-blue-floral.jpeg', title: 'Gel X extension, French tips and painted flower', layout: 'hero' },
  { src: '/images/gallery-pop-art.jpeg', title: 'BIAB infill, go crazy', layout: 'wide' },
  { src: '/images/gallery-gold-florals.jpeg', title: 'Gel X extension and toes, ready for her labour date', layout: 'portrait' },
  { src: '/images/gallery-studded-french.jpeg', title: 'Gel X extension, birthday set, French tips x gold', layout: 'portrait' },
  { src: '/images/gallery-sculpted-gold.jpeg', title: 'Gel X extension, brown gold nails', layout: 'tall' },
  { src: '/images/gallery-monochrome-chrome.jpeg', title: 'Gel X extension, black white and silver details', layout: 'wide' },
  { src: '/images/gallery-jewel-set.jpeg', title: 'Gel X extension, cat eye x gold', layout: 'wide' },
];

const layoutClasses = {
  hero: 'md:col-span-3 md:row-span-2',
  wide: 'md:col-span-3',
  portrait: 'md:col-span-2',
  tall: 'md:col-span-2 md:row-span-2',
};

const imageHeights = {
  hero: 'h-[560px] md:h-[760px]',
  wide: 'h-[340px] md:h-[390px]',
  portrait: 'h-[430px]',
  tall: 'h-[560px] md:h-[760px]',
  default: 'h-[390px]',
};

export default function Gallery() {
  return (
    <section id="gallery" className="salon-surface-alt px-4 py-24 md:px-8">
      <div className="relative mx-auto max-w-7xl">
        <div className="mb-14 flex flex-col justify-between gap-6 border-b border-white/10 pb-10 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.35em] text-blush">Portfolio</p>
            <h2 className="max-w-4xl font-display text-5xl font-semibold leading-none md:text-7xl">A polished edit of soft glam details.</h2>
          </div>
          <p className="max-w-md leading-7 text-white/62">
            Browse a mix of clean finishes, detailed art, and appointment-ready inspiration for your next set.
          </p>
        </div>

        <div className="grid auto-rows-auto gap-4 md:grid-cols-6 md:gap-5">
          {images.map((image, index) => (
            <figure
              key={image.src}
              className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0e0a0d] shadow-2xl shadow-black/20 ${layoutClasses[image.layout] || ''}`}
            >
              <Image
                src={image.src}
                alt={image.title}
                width={900}
                height={1100}
                sizes={image.layout === 'hero' || image.layout === 'wide' ? '(min-width: 768px) 50vw, 100vw' : '(min-width: 768px) 33vw, 100vw'}
                priority={index < 2}
                className={`w-full object-cover transition duration-700 group-hover:scale-105 ${imageHeights[image.layout] || imageHeights.default}`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/88 via-ink/10 to-transparent opacity-95" />
              <figcaption className="absolute inset-x-4 bottom-4 rounded-xl border border-white/10 bg-ink/72 p-4 backdrop-blur-xl md:inset-x-5 md:bottom-5">
                <p className="mb-2 text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-champagne/80">
                  Look {String(index + 1).padStart(2, '0')}
                </p>
                <h3 className="font-display text-2xl leading-tight text-white md:text-3xl">
                  {image.title}
                </h3>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
