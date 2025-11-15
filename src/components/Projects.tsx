import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const projects = [
    {
      title: "ImmigrationGPT",
      description: "AI-powered immigration assistant bot using advanced LLM (RAG, LangChain, OpenAI). Provides personalized Canadian immigration guidance.",
      tags: ["Python", "LangChain", "Streamlit", "OpenAI"],
      github: "https://github.com/NeelMahyavanshi/ImmigrationGPT",
      demo: "https://immigrationgpt.streamlit.app/",
      featured: true
    },
    {
      title: "Car Damage Detection",
      description: "Computer vision system using CNNs and transfer learning to classify car damage into 6 categories.",
      tags: ["TensorFlow", "CNN", "Transfer Learning", "Streamlit"],
      github: "https://github.com/NeelMahyavanshi/CAR_DAMAGE_PREDICTION",
      demo: "https://car-damage-detections.streamlit.app/",
      featured: true
    },
    {
      title: "Health Insurance Predictor",
      description: "Regression and analytics pipeline to predict insurance costs; includes real-time input, EDA, and model selection.",
      tags: ["Scikit-learn", "Pandas", "Regression", "Streamlit"],
      github: "https://github.com/NeelMahyavanshi/ml-project-premium-prediction",
      demo: "https://health-insurance-premium-predictor-neelmahyavanshi.streamlit.app/",
      featured: false
    },
    {
      title: "Credit Risk Assessment",
      description: "ML system for credit default analysis built with XGBoost/SMOTE; full ROC/AUC analytics and real-world ML deployment.",
      tags: ["XGBoost", "SMOTE", "Classification", "Streamlit"],
      github: "https://github.com/NeelMahyavanshi/ml-project-credit-risk-model",
      demo: "https://credit-risk-utilization-ml-neel-mahyavanshi.streamlit.app/",
      featured: false
    },
  ];

  return (
    <section id="projects" className="py-32 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`glass-card p-8 rounded-3xl group relative overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 ${
                project.featured ? 'md:col-span-1' : ''
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="mb-4 relative">
                <a 
                  href={project.demo} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-full h-48 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 mb-6 overflow-hidden relative cursor-pointer"
                >
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-secondary opacity-50 group-hover:scale-150 group-hover:rotate-180 transition-all duration-700" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-primary font-bold text-lg">View Live Demo →</span>
                  </div>
                </a>
                
                <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-gradient transition-all duration-300">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  asChild
                >
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github size={16} className="mr-2" />
                    Code
                  </a>
                </Button>
                <Button
                  size="sm"
                  className="flex-1 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300"
                  asChild
                >
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={16} className="mr-2" />
                    Demo
                  </a>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
