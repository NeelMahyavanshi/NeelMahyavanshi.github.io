import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const skillCategories = [
    {
      category: "AI & ML",
      skills: ["TensorFlow", "PyTorch", "Scikit-learn", "Hugging Face", "LangChain", "OpenAI API"],
      color: "primary"
    },
    {
      category: "Programming",
      skills: ["Python", "JavaScript", "TypeScript", "SQL", "Git"],
      color: "secondary"
    },
    {
      category: "Web Development",
      skills: ["React", "Next.js", "Node.js", "FastAPI", "Streamlit"],
      color: "primary"
    },
    {
      category: "Tools & Cloud",
      skills: ["Docker", "AWS", "Google Cloud", "MongoDB", "PostgreSQL"],
      color: "secondary"
    },
  ];

  return (
    <section id="skills" className="py-32 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="glass-card p-8 rounded-3xl hover-lift"
            >
              <h3 className="text-xl font-bold mb-6 text-foreground">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ 
                      duration: 0.3, 
                      delay: categoryIndex * 0.1 + skillIndex * 0.05 
                    }}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-110 cursor-default ${
                      category.color === 'primary' 
                        ? 'bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20' 
                        : 'bg-secondary/10 text-secondary border border-secondary/20 hover:bg-secondary/20'
                    }`}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
