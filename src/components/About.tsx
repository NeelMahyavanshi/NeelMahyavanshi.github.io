import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Brain, Rocket, Award } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const highlights = [
    { icon: Code, text: "Self-taught CS core" },
    { icon: Brain, text: "4+ ML projects deployed" },
    { icon: Rocket, text: "AI automation specialist" },
    { icon: Award, text: "Problem solver" },
  ];

  return (
    <section id="about" className="py-32 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-8 rounded-3xl hover-lift"
          >
            <div className="w-full aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-6">
              <div className="w-48 h-48 rounded-full bg-gradient-to-br from-primary to-secondary opacity-50 animate-float" />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="glass-card p-4 rounded-xl text-center hover:scale-105 transition-transform duration-300"
                >
                  <item.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                  <p className="text-xs text-muted-foreground">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              Self-taught engineer with a passion for <span className="text-primary font-semibold">AI and automation</span>. 
              I create ML systems that make lives easier and solve real-world problems.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              With a Bachelor's degree and a self-taught computer science foundation, I've deployed 
              <span className="text-secondary font-semibold"> 4+ machine learning projects</span> that 
              showcase practical AI applications.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              My approach combines <span className="text-primary font-semibold">technical expertise</span> with 
              <span className="text-secondary font-semibold"> creative problem-solving</span>, turning complex 
              challenges into elegant, scalable solutions.
            </p>

            <div className="glass-card p-6 rounded-2xl mt-8 border-l-4 border-primary">
              <p className="text-foreground font-medium italic">
                "Bridging the gap between cutting-edge AI research and practical, impactful applications."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
