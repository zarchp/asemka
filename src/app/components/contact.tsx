'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import {
  MessageCircle,
  Mail,
  MapPin,
  ArrowRight,
  MessageCircleMore,
  Phone,
} from 'lucide-react';
import { useToast } from '../hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: 'Message sent!',
        description: "We'll get back to you within one business day.",
      });
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="py-30 px-6">
      <div className="container mx-auto max-w-[1100px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get in touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We'd love to hear about your idea, your product, or your next
            challenge.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-base mb-2 block">
                  Name *
                </Label>
                <Input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="h-12 text-base border border-border"
                  placeholder="Your name"
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-base mb-2 block">
                  Email *
                </Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="h-12 text-base border border-border"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <Label htmlFor="message" className="text-base mb-2 block">
                  Message *
                </Label>
                <Textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="text-base resize-none border border-border"
                  placeholder="I'm looking to build..."
                />
              </div>

              <Button
                type="submit"
                size="lg"
                variant="hero"
                disabled={isSubmitting}
                className="w-full sm:w-auto group"
              >
                {isSubmitting ? 'Sending...' : "Let's Talk"}
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>

              <p className="text-sm text-muted-foreground">
                We'll get back to you within one business day.
              </p>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-xl font-semibold mb-6">Prefer to chat?</h3>
              <div className="space-y-4">
                <a
                  href="https://wa.me/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 border border-border rounded-xl hover:border-primary/50 hover:bg-accent/50 transition-all group"
                >
                  <div className="rounded-full bg-primary-100 size-12 flex items-center justify-center">
                    <MessageCircleMore className="size-6 text-primary flex-shrink-0" />
                  </div>
                  <div>
                    <p className="font-medium group-hover:text-primary transition-colors">
                      WhatsApp
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Chat with us directly
                    </p>
                  </div>
                </a>

                <a
                  href="mailto:hello@asemka.com"
                  className="flex items-center gap-3 p-4 border border-border rounded-xl hover:border-primary/50 hover:bg-accent/50 transition-all group"
                >
                  <div className="rounded-full bg-primary-100 size-12 flex items-center justify-center">
                    <Mail className="size-6 text-primary flex-shrink-0" />
                  </div>
                  <div>
                    <p className="font-medium group-hover:text-primary transition-colors">
                      Email
                    </p>
                    <p className="text-sm text-muted-foreground">
                      hello@asemka.com
                    </p>
                  </div>
                </a>

                <a
                  href="mailto:hello@asemka.com"
                  className="flex items-center gap-3 p-4 border border-border rounded-xl hover:border-primary/50 hover:bg-accent/50 transition-all group"
                >
                  <div className="rounded-full bg-primary-100 size-12 flex items-center justify-center">
                    <Phone className="size-6 text-primary flex-shrink-0" />
                  </div>
                  <div>
                    <p className="font-medium group-hover:text-primary transition-colors">
                      Phone
                    </p>
                    <p className="text-sm text-muted-foreground">
                      +62 812-3456-7890
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
