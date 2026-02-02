import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Code, 
  Brain, 
  Server, 
  Layout, 
  Cloud,
  Database
} from 'lucide-react';

const skillCategories = [
  {
    icon: Code,
    title: 'Languages',
    skills: ['Python', 'TypeScript', 'Java', 'C#', 'C++', 'SQL', 'JavaScript', 'HTML/CSS'],
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-50'
  },
  {
    icon: Brain,
    title: 'AI & LLMs',
    skills: ['LLMs', 'NLP', 'LangChain', 'Prompt Engineering', 'Model Evaluation', 'Random Forest', 'Scikit-learn', 'Pandas', 'NumPy'],
    color: 'from-violet-500 to-purple-500',
    bgColor: 'bg-violet-50'
  },
  {
    icon: Server,
    title: 'Backend',
    skills: ['Spring Boot', 'Flask', 'Node.js', 'RESTful APIs', 'SQLAlchemy', 'Firebase', 'MySQL'],
    color: 'from-emerald-500 to-teal-500',
    bgColor: 'bg-emerald-50'
  },
  {
    icon: Layout,
    title: 'Frontend',
    skills: ['Angular', 'React.js', 'HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'Responsive Design'],
    color: 'from-orange-500 to-amber-500',
    bgColor: 'bg-orange-50'
  },
  {
    icon: Cloud,
    title: 'Cloud & DevOps',
    skills: ['Azure', 'GCP', 'AWS', 'Docker', 'Git', 'Swagger UI', 'CI/CD'],
    color: 'from-sky-500 to-blue-500',
    bgColor: 'bg-sky-50'
  },
  {
    icon: Database,
    title: 'Data & Tools',
    skills: ['Data Preprocessing', 'Feature Engineering', 'Big Data', 'Advanced Analytics', 'Microsoft Excel'],
    color: 'from-rose-500 to-pink-500',
    bgColor: 'bg-rose-50'
  }
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 sm:py-32 relative overflow-hidden bg-gradient-to-b from-white via-indigo-50/50 to-white">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-indigo-200/20 to-violet-200/20 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-violet-100 text-violet-700 mb-4">
            Skills
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 mb-4">
            Technologies I Work With
          </h2>
          <p className="text-base sm:text-lg text-navy-500 max-w-2xl mx-auto">
            A comprehensive toolkit built through years of shipping production systems and AI-powered applications.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-6 bg-white rounded-2xl shadow-soft border border-indigo-100 hover:shadow-soft-lg hover:border-indigo-200 hover:-translate-y-1 transition-all duration-300"
            >
              {/* Icon & Title */}
              <div className="flex items-center gap-3 mb-5">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-navy-900 text-lg">{category.title}</h3>
              </div>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`px-3 py-1.5 text-sm font-medium ${category.bgColor} text-navy-700 rounded-lg hover:bg-gradient-to-r hover:${category.color} hover:text-white transition-all duration-300 cursor-default`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
