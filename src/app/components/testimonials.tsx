'use client';
import {
  motion,
  useAnimation,
  useMotionValue,
  useTransform,
} from 'framer-motion';
import { Quote } from 'lucide-react';
import { useState, useEffect } from 'react';
import SpotlightCard from './ui/spotlight-card';

const Testimonials = () => {
  const [isPaused, setIsPaused] = useState(false);
  const controls = useAnimation();
  const x = useMotionValue(0);

  const testimonials = [
    {
      quote:
        'Working with Asemka transformed our digital presence completely. Their attention to detail and innovative approach exceeded our expectations.',
      author: 'Sarah Johnson',
      company: 'TechFlow Solutions',
      initials: 'SJ',
      bgColor: 'bg-blue-500',
    },
    {
      quote:
        "The team delivered our e-commerce platform ahead of schedule with features we didn't even know we needed. Absolutely phenomenal work!",
      author: 'Michael Chen',
      company: 'Urban Threads',
      initials: 'MC',
      bgColor: 'bg-purple-500',
    },
    {
      quote:
        'Their ability to understand our complex requirements and translate them into elegant solutions is unmatched. Highly recommended!',
      author: 'Emily Rodriguez',
      company: 'HealthBridge Medical',
      initials: 'ER',
      bgColor: 'bg-green-500',
    },
    {
      quote:
        "Asemka's development process is seamless. They kept us informed at every step and delivered a product that our users love.",
      author: 'David Kim',
      company: 'FinTech Innovations',
      initials: 'DK',
      bgColor: 'bg-orange-500',
    },
    {
      quote:
        'The mobile app they built for us has increased user engagement by 300%. Their expertise in UX/UI design is evident in every interaction.',
      author: 'Lisa Thompson',
      company: 'EcoLiving',
      initials: 'LT',
      bgColor: 'bg-teal-500',
    },
  ];

  const duplicatedTestimonials = [...testimonials, ...testimonials];
  const cardWidth = 350;
  const gap = 32;
  const totalWidth = testimonials.length * (cardWidth + gap);

  useEffect(() => {
    if (!isPaused) {
      controls.start({
        x: -totalWidth,
        transition: {
          duration: 60,
          ease: 'linear',
          repeat: Infinity,
          repeatType: 'loop',
        },
      });
    } else {
      controls.stop();
    }
  }, [isPaused, controls, totalWidth]);

  return (
    <section id="testimonials" className="py-30 px-6 overflow-hidden">
      <div className="container mx-auto max-w-[1100px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What Clients Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Trusted by founders and teams across industries.
          </p>
        </motion.div>

        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <motion.div className="flex gap-8" style={{ x }} animate={controls}>
            {duplicatedTestimonials.map((testimonial, index) => (
              <SpotlightCard
                key={index}
                className="min-w-[350px] h-80 p-8 flex flex-col"
                spotlightColor="rgba(245, 60, 0, 0.1)"
              >
                <Quote className="w-10 h-10 text-primary/20 mb-4" />
                <p className="text-lg mb-6 leading-relaxed flex-grow">
                  {testimonial.quote}
                </p>
                <div className="flex items-center gap-4 mt-auto">
                  <div
                    className={`w-12 h-12 rounded-full ${testimonial.bgColor} flex items-center justify-center text-white font-semibold`}
                  >
                    {testimonial.initials}
                  </div>
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </SpotlightCard>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
