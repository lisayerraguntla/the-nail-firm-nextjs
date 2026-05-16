import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Gallery from '@/components/Gallery';
import Reviews from '@/components/Reviews';
import Booking from '@/components/Booking';
import Policies from '@/components/Policies';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Services />
      <Gallery />
      <Reviews />
      <Booking />
      <Policies />
      <Footer />
    </main>
  );
}
