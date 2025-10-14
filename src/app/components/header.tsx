'use client';

import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from './ui/sheet';
import { Menu, ArrowRight } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const { scrollY } = useScroll();
  const headerScale = useTransform(scrollY, [0, 100], [1, 0.98]);
  const headerOpacity = useTransform(scrollY, [0, 100], [1, 0.96]);

  const menuItems = [
    { id: 'services', label: 'Services' },
    { id: 'work', label: 'Projects' },
    { id: 'process', label: 'Process' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleSectionSpy = () => {
      const sections = menuItems
        .map((item) => ({
          id: item.id,
          element: document.getElementById(item.id),
        }))
        .filter((section) => section.element !== null);

      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.element) {
          const { offsetTop, offsetHeight } = section.element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    handleSectionSpy();
    window.addEventListener('scroll', handleSectionSpy);
    return () => window.removeEventListener('scroll', handleSectionSpy);
  }, [menuItems]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header
      style={{ scale: headerScale, opacity: headerOpacity }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'pt-2' : 'pt-4'
      }`}
    >
      <div className="container mx-auto max-w-[1100px] px-6">
        <nav
          className={`flex items-center justify-between h-16 px-6 rounded-2xl backdrop-blur-lg border transition-all duration-300 ${
            isScrolled
              ? 'bg-white/90 shadow-lg border-border/50'
              : 'bg-white/90 shadow-md border-border/30'
          }`}
        >
          <button
            onClick={() => scrollToSection('hero')}
            className="text-2xl font-bold text-primary hover:scale-105 transition-transform cursor-pointer"
          >
            <img src="images/logo.png" alt="logo" className="h-8" />
          </button>

          <ul className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`text-base font-medium transition-all relative cursor-pointer ${
                    activeSection === item.id
                      ? 'text-primary font-semibold'
                      : 'text-foreground/70 hover:text-foreground'
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
                      initial={false}
                      transition={{
                        type: 'spring',
                        stiffness: 500,
                        damping: 30,
                      }}
                    />
                  )}
                </button>
              </li>
            ))}
          </ul>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:block"
          >
            <Button
              variant="hero"
              onClick={() => scrollToSection('contact')}
              className="group relative overflow-hidden hidden md:flex items-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <span className="relative z-10">Book a Call</span>
              <ArrowRight className="w-4 h-4 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
            </Button>
          </motion.div>

          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetTitle>Navigation</SheetTitle>
              <div className="flex flex-col gap-6 mt-8">
                <ul className="flex flex-col gap-4">
                  {menuItems.map((item) => (
                    <li key={item.id}>
                      <button
                        onClick={() => scrollToSection(item.id)}
                        className={`text-lg font-medium transition-all w-full text-left relative ${
                          activeSection === item.id
                            ? 'text-primary font-semibold bg-primary/10 -mx-4 px-4 py-2 rounded-lg'
                            : 'text-foreground/80 hover:text-foreground'
                        }`}
                      >
                        {item.label}
                        {activeSection === item.id && (
                          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-primary rounded-r-full" />
                        )}
                      </button>
                    </li>
                  ))}
                </ul>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full"
                >
                  <Button
                    size="lg"
                    variant="hero"
                    onClick={() => scrollToSection('contact')}
                    className="w-full group relative overflow-hidden flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <span className="relative z-10">Book a Call</span>
                    <ArrowRight className="w-4 h-4 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
                  </Button>
                </motion.div>
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </motion.header>
  );
}
