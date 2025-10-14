'use client';

import { Linkedin, Github, Instagram } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const links = [
    { label: 'Services', id: 'services' },
    { label: 'Projects', id: 'work' },
    { label: 'Process', id: 'process' },
    { label: 'Testimonials', id: 'testimonials' },
    { label: 'FAQ', id: 'faq' },
    { label: 'Contact', id: 'contact' },
  ];

  const socials = [
    {
      icon: Linkedin,
      href: 'https://linkedin.com/company/asemka',
      label: 'LinkedIn',
    },
    { icon: Github, href: 'https://github.com/asemka', label: 'GitHub' },
    {
      icon: Instagram,
      href: 'https://instagram.com/asemka',
      label: 'Instagram',
    },
  ];

  return (
    <footer className="border-t border-border bg-white">
      <div className="container mx-auto max-w-[1100px] px-6 py-12">
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="space-y-4 text-center flex flex-col items-center gap-2">
            <img src="images/logo.png" alt="logo" className="h-8" />
            <p className="text-sm text-muted-foreground leading-relaxed">
              A creative and engineering partner helping teams design, build,
              and ship better digital products.
            </p>
          </div>

          <div className="flex gap-4">
            {links.map((link) => (
              <div key={link.id}>
                <button
                  onClick={() => scrollToSection(link.id)}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                >
                  {link.label}
                </button>
              </div>
            ))}
          </div>

          <div className="text-sm text-muted-foreground">
            © 2025 Asemka. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
