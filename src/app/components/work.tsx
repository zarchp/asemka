'use client';
import { motion } from 'framer-motion';
import SpotlightCard from './ui/spotlight-card';
import {
  ArrowRight,
  TrendingUp,
  Users,
  Zap,
  ShoppingCart,
  Heart,
  BarChart3,
} from 'lucide-react';

const projectRetail = '/project-1.jpg';
const projectHealthcare = '/project-2.jpg';
const projectAnalytics = '/project-3.jpg';

const Work = () => {
  const projects = [
    {
      thumb: projectRetail,
      client: 'FashionForward',
      title: 'E-Commerce Platform',
      category: 'Retail',
      icon: ShoppingCart,
      color: 'from-pink-500/10 to-rose-500/10',
      impact: [
        '↑ Conversion rate by 35% with optimized checkout flow',
        'Personalized product recommendations engine',
        'Real-time inventory sync across 5 warehouses',
      ],
    },
    {
      thumb: projectHealthcare,
      client: 'MediCare Plus',
      title: 'Patient Management System',
      category: 'Healthcare',
      icon: Heart,
      color: 'from-green-500/10 to-emerald-500/10',
      impact: [
        '↓ Patient wait time by 40% with digital check-in',
        'Secure telemedicine integration for remote consultations',
        'Automated appointment reminders reduced no-shows by 25%',
      ],
    },
    {
      thumb: projectAnalytics,
      client: 'DataViz Corp',
      title: 'Business Intelligence',
      category: 'Analytics',
      icon: BarChart3,
      color: 'from-indigo-500/10 to-blue-500/10',
      impact: [
        'Real-time data visualization across 12 departments',
        'Custom reporting suite reduced analysis time by 60%',
        'Predictive analytics improved forecasting accuracy by 45%',
      ],
    },
  ];

  return (
    <section id="work" className="py-30 px-6">
      <div className="container mx-auto max-w-[1100px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A glimpse at how we blend design, engineering, and measurable
            outcomes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              // whileHover={{ y: -5 }}
              className="group cursor-pointer"
            >
              <SpotlightCard
                className="h-full px-4 py-4"
                spotlightColor="rgba(245, 60, 0, 0.1)"
              >
                <div className="relative overflow-hidden rounded-2xl mb-6 aspect-video">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-50 z-10`}
                  ></div>
                  <img
                    src={project.thumb}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-100 z-20" />
                  <div className="absolute top-4 left-4 z-30">
                    <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-3 py-1.5 border border-white/20">
                      <project.icon className="w-4 h-4 text-white" />
                      <span className="text-xs text-white font-medium">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  <div className="absolute bottom-4 right-4 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/10 backdrop-blur-md rounded-full p-2 border border-white/20">
                      <ArrowRight className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-primary font-semibold mb-1">
                      {project.client}
                    </p>
                    <h3 className="text-xl font-bold">{project.title}</h3>
                  </div>
                  <div className="border-t border-border pt-4">
                    <ul className="space-y-3">
                      {project.impact.map((item, i) => (
                        <li
                          key={i}
                          className="text-sm text-muted-foreground flex items-start gap-3"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0"></div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
