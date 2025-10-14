'use client';
import { motion } from 'framer-motion';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from './ui/collapsible';
import { Button } from './ui/button';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { useState } from 'react';

const FAQ = () => {
  const [openItems, setOpenItems] = useState<boolean[]>(
    new Array(6).fill(false)
  );

  const faqs = [
    {
      q: 'What do you build?',
      a: 'We build web apps, dashboards, and brand sites, the kind your team can actually maintain without needing us forever.',
    },
    {
      q: 'How long will it take?',
      a: 'Most projects show visible progress within two weeks. Typical launches take 4–8 weeks.',
    },
    {
      q: 'How do we start?',
      a: "Book a short call. We'll talk through your goals, constraints, and first milestone, you'll leave with clarity and a realistic plan.",
    },
    {
      q: 'Can you work with our team?',
      a: 'Yes, we often embed directly with internal designers or engineers. Think of us as your short-term product squad.',
    },
    {
      q: 'What makes Asemka different?',
      a: "We don't sell hours; we sell progress. You'll see outcomes, not deliverables. Our clients stay because we ship what matters.",
    },
    {
      q: 'What happens after launch?',
      a: "We stay close. Whether it's performance tracking or UX improvements, we help you keep momentum post-launch.",
    },
  ];

  const toggleItem = (index: number) => {
    setOpenItems((prev) => {
      const newOpenItems = [...prev];
      newOpenItems[index] = !newOpenItems[index];
      return newOpenItems;
    });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="faq" className="py-30 px-6">
      <div className="container mx-auto max-w-[800px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Can’t find the answer you’re looking for?{' '}
            <a href="#contact" className="text-primary">
              Reach out to us
            </a>{' '}
            and we will get in touch with you
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-4"
        >
          {faqs.map((faq, index) => (
            <Collapsible
              key={index}
              open={openItems[index]}
              onOpenChange={() => toggleItem(index)}
              className="bg-card border border-border rounded-2xl overflow-hidden"
            >
              <CollapsibleTrigger asChild>
                <Button
                  variant="ghost"
                  className="w-full justify-between text-left p-6 hover:bg-accent/50 rounded-none"
                >
                  <span className="text-lg font-semibold">{faq.q}</span>
                  <ChevronDown
                    className={`h-5 w-5 transition-transform duration-200 ${
                      openItems[index] ? 'rotate-180' : ''
                    }`}
                  />
                </Button>
              </CollapsibleTrigger>
              <CollapsibleContent className="px-6 pb-6">
                <p className="text-muted-foreground">{faq.a}</p>
              </CollapsibleContent>
            </Collapsible>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
