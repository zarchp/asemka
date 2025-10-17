'use client';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { MessageCircle, ArrowRight, PhoneCall } from 'lucide-react';

const CTABand = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="w-full bg-gradient-to-r from-primary to-primary-400 py-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden rounded-3xl p-12 md:p-16 text-center"
      >
        <div className="relative z-10 flex flex-col gap-8 items-center mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Let's Build Something{' '}
            <span className="italic font-serif">Great</span> Together
          </h2>
          <p className="text-xl text-white/90 mb-2 text-balance">
            Whether you need a custom web app, a creative campaign, or IT
            strategy, we're here to help you achieve your goals.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              variant="invertedPrimary"
              onClick={() => scrollToSection('contact')}
              className="group rounded-full py-6 px-8 text-md font-bold text-primary"
            >
              <PhoneCall className="mr-2" />
              Schedule a Call
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="ghost"
              className="text-white hover:bg-white/10 hover:text-white text-md border border-white/30 rounded-full px-8 py-6"
              asChild
            >
              <a
                href="https://wa.me/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="mr-2" />
                Message Us on WhatsApp
              </a>
            </Button>
          </div>

          {/* <div className="flex justify-around w-full mt-8 text-white">
            <div>
              <div className="text-4xl font-bold">24h</div>
              <div className="text-sm">Response Time</div>
            </div>
            <div>
              <div className="text-4xl font-bold">50+</div>
              <div className="text-sm">Project Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold">10+</div>
              <div className="text-sm">Years of Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold">100%</div>
              <div className="text-sm">Client Satisfaction</div>
            </div>
          </div> */}
        </div>
      </motion.div>
    </section>
  );
};

export default CTABand;
