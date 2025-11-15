import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Github, Linkedin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "neelmahyavanshi9@gmail.com",
      href: "mailto:neelmahyavanshi9@gmail.com",
      color: "primary"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "@NeelMahyavanshi",
      href: "https://github.com/NeelMahyavanshi",
      color: "secondary"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Neel Mahyavanshi",
      href: "https://www.linkedin.com/in/neel-mahyavanshi/",
      color: "primary"
    },
  ];

  return (
    <section id="contact" className="py-32 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6" />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Let's collaborate on your next AI project or discuss opportunities
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {contactMethods.map((method, index) => (
              <motion.a
                key={index}
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`glass-card p-6 rounded-3xl hover-lift text-center group cursor-pointer ${
                  method.color === 'primary' ? 'hover:border-primary/50' : 'hover:border-secondary/50'
                }`}
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
                  method.color === 'primary' 
                    ? 'bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground' 
                    : 'bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-secondary-foreground'
                } transition-all duration-300`}>
                  <method.icon size={28} />
                </div>
                <h3 className="font-bold mb-2 text-foreground">{method.label}</h3>
                <p className="text-sm text-muted-foreground">{method.value}</p>
              </motion.a>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass-card p-10 rounded-3xl text-center"
          >
            <div className="max-w-lg mx-auto">
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                Ready to start a project?
              </h3>
              <p className="text-muted-foreground mb-8">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
              <Button
                size="lg"
                className="rounded-full px-8 bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-all duration-300 glow-effect"
                asChild
              >
                <a href="mailto:neelmahyavanshi9@gmail.com">
                  <Send size={20} className="mr-2" />
                  Send a Message
                </a>
              </Button>
            </div>
          </motion.div>
        </div>

        <motion.footer
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 text-center text-muted-foreground"
        >
          <p className="text-sm">
            © 2025 Neelkumar Mahyavanshi. Built with React & Three.js
          </p>
        </motion.footer>
      </div>
    </section>
  );
};

export default Contact;
