'use client';
import { motion } from 'framer-motion';
import {
  Target,
  Palette,
  Code,
  Globe,
  Compass,
  TrendingUp,
} from 'lucide-react';
import SpotlightCard from './ui/spotlight-card';

const Services = () => {
  const services = [
    {
      icon: Target,
      title: 'Product Strategy',
      desc: 'Define goals, validate ideas, and plan a roadmap that builds real traction.',
    },
    {
      icon: Palette,
      title: 'Brand & UI Design',
      desc: 'Create interfaces that look right, feel intuitive, and stay consistent from Figma to production.',
    },
    {
      icon: Code,
      title: 'Web Development',
      desc: 'Build fast, scalable applications with clean architecture, modern stacks, and real tests.',
    },
    {
      icon: Globe,
      title: 'CMS & Marketing Sites',
      desc: 'Flexible content, custom blocks, and SEO-ready performance.',
    },
    {
      icon: Compass,
      title: 'Technical Consulting',
      desc: 'Solve performance or migration challenges with expert guidance.',
    },
    {
      icon: TrendingUp,
      title: 'Optimization & Growth',
      desc: 'Improve UX, SEO, and analytics clarity so every release performs better than the last.',
    },
  ];

  return (
    <section id="services" className="py-30 px-6 bg-muted/25">
      <div className="container mx-auto max-w-[1100px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">What We Do</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Every engagement starts with clarity, we adapt to your stage, not
            the other way around.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="transition-all group h-full"
            >
              <SpotlightCard
                className="custom-spotlight-card h-full rounded-2xl hover:shadow-lg "
                spotlightColor="rgba(245, 60, 0, 0.1)"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.desc}</p>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
