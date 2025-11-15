import { Github, Linkedin, Mail, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const Hero = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/NeelMahyavanshi', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/neel-mahyavanshi/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:neelmahyavanshi9@gmail.com', label: 'Email' },
  ];

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 rounded-full glass-card text-sm font-mono text-primary glow-effect mb-6">
              AI Engineer
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          >
            <span className="text-gradient">Neelkumar</span>
            <br />
            <span className="text-foreground">Mahyavanshi</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto"
          >
            Bridging <span className="text-primary font-semibold">AI</span> and real-world impact.
            <br />
            Enabling human potential, one algorithm at a time.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex items-center justify-center gap-4 flex-wrap"
          >
            {socialLinks.map((social, index) => (
              <Button
                key={index}
                variant="outline"
                size="icon"
                className="rounded-full glass-card hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 glow-effect"
                asChild
              >
                <a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                  <social.icon size={20} />
                </a>
              </Button>
            ))}
            
            <Button
              className="rounded-full px-8 bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-all duration-300 glow-effect"
              asChild
            >
              <a href="/assets/resume.pdf" download>
                <Download size={20} className="mr-2" />
                Resume
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-16"
          >
            <a
              href="#about"
              className="inline-block animate-bounce text-primary"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 5v14M19 12l-7 7-7-7" />
              </svg>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
