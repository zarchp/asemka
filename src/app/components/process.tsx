'use client';
import { motion } from 'framer-motion';
import {
  Flag,
  PenTool,
  Terminal,
  Rocket,
  TrendingUp,
  PencilRuler,
  CodeXml,
} from 'lucide-react';

const Process = () => {
  const steps = [
    {
      name: 'Kickoff',
      desc: 'Goals, constraints, and success metrics.',
      icon: Flag,
    },
    {
      name: 'Design',
      desc: 'Flows, wireframes, and visual system.',
      icon: PencilRuler,
    },
    {
      name: 'Build',
      desc: 'Iterate in sprints with live previews.',
      icon: CodeXml,
    },
    {
      name: 'Launch',
      desc: 'Hardening, performance, and monitoring.',
      icon: Rocket,
    },
    {
      name: 'Grow',
      desc: 'Roadmap, experiments, and ongoing support.',
      icon: TrendingUp,
    },
  ];

  return (
    <section id="process" className="py-30 px-6 bg-muted/25">
      <div className="container mx-auto max-w-[1100px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">How We Work</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From first call to long-term growth, every step is connected.
          </p>
        </motion.div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 relative py-8">
            <div className="hidden lg:block absolute top-18 left-0 right-0 h-1 bg-primary -z-10 rounded-full" />
            <div className="lg:hidden absolute left-10 right-0 w-1 bg-primary -z-10 rounded-full h-full" />
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex lg:flex-col items-center lg:text-center flex-row gap-4 text-left"
              >
                <div className="w-20 h-20 rounded-full bg-white border-4 border-primary shadow-lg flex mb-2 items-center justify-center hover:scale-110 transition-transform">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold ">{step.name}</h3>
                  <p className="text-sm text-muted-foreground">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
