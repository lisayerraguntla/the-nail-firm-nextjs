'use client';

import { useState } from 'react';
import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Gallery from '@/components/Gallery';
import Reviews from '@/components/Reviews';
import Booking from '@/components/Booking';
import Policies from '@/components/Policies';
import Footer from '@/components/Footer';

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');

  const renderSection = () => {
    switch (activeSection) {
      case 'about':
        return <About />;
      case 'services':
        return <Services />;
      case 'gallery':
        return <Gallery />;
      case 'reviews':
        return <Reviews />;
      case 'booking':
        return <Booking />;
      case 'policies':
        return <Policies />;
      case 'contact':
        return <Footer onNavigate={setActiveSection} />;
      default:
        return <Hero onNavigate={setActiveSection} />;
    }
  };

  return (
    <main>
      <Nav activeSection={activeSection} onNavigate={setActiveSection} />
      {renderSection()}
    </main>
  );
}
