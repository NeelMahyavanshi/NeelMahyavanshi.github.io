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
      title: "AI Document Analyzer",
      description: "ML-powered document analysis system using NLP for automated information extraction and categorization.",
      tags: ["Python", "TensorFlow", "NLP", "Streamlit"],
      github: "https://github.com/NeelMahyavanshi",
      demo: "#",
      featured: true
    },
    {
      title: "Intelligent Chatbot",
      description: "Context-aware conversational AI with memory and multi-turn dialogue capabilities using LangChain.",
      tags: ["LangChain", "OpenAI", "FastAPI", "React"],
      github: "https://github.com/NeelMahyavanshi",
      demo: "#",
      featured: true
    },
    {
      title: "Predictive Analytics Dashboard",
      description: "Real-time data visualization and ML predictions for business intelligence and forecasting.",
      tags: ["Python", "Scikit-learn", "Plotly", "SQL"],
      github: "https://github.com/NeelMahyavanshi",
      demo: "#",
      featured: false
    },
    {
      title: "Computer Vision System",
      description: "Object detection and tracking system for real-world applications with high accuracy.",
      tags: ["PyTorch", "OpenCV", "YOLO", "Docker"],
      github: "https://github.com/NeelMahyavanshi",
      demo: "#",
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
              className={`glass-card p-8 rounded-3xl hover-lift group ${
                project.featured ? 'md:col-span-1' : ''
              }`}
            >
              <div className="mb-4">
                <div className="w-full h-48 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 mb-6 flex items-center justify-center overflow-hidden">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-secondary opacity-50 group-hover:scale-150 transition-transform duration-500" />
                </div>
                
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
