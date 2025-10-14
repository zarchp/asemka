import Header from './components/header';
import Hero from './components/hero';
import Services from './components/services';
import Work from './components/work';
import Process from './components/process';
import Testimonials from './components/testimonials';
import FAQ from './components/faq';
import CTABand from './components/cta-band';
import Contact from './components/contact';
import Footer from './components/footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <Work />
        <Process />
        <Testimonials />
        <FAQ />
        <CTABand />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
