import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Brain, Rocket, Users, GraduationCap, Award } from 'lucide-react';

const highlights = [
  {
    icon: Brain,
    title: 'AI & LLM Expertise',
    description: 'Built production-grade AI assistants using Python, Azure, and LLMs. Improved user engagement by 35% and reduced debugging time by 45%.',
    color: 'from-violet-500 to-purple-600'
  },
  {
    icon: Code2,
    title: 'Full-Stack Development',
    description: 'Proficient in Python, TypeScript, Java, C#, Angular, React, Spring Boot, and Flask. Delivered end-to-end solutions from concept to deployment.',
    color: 'from-indigo-500 to-blue-600'
  },
  {
    icon: Rocket,
    title: 'Production Systems',
    description: 'Shipped features to production with measurable impact. Reduced manual workload by 40 hours weekly and achieved 92% ML model accuracy.',
    color: 'from-amber-500 to-orange-600'
  },
  {
    icon: Users,
    title: 'Cross-Functional Collaboration',
    description: 'Worked closely with product managers, designers, and engineers in Agile environments to translate requirements into scalable solutions.',
    color: 'from-emerald-500 to-teal-600'
  }
];

const stats = [
  { value: '2+', label: 'Years Experience', icon: Award },
  { value: '3.8', label: 'GPA', icon: GraduationCap },
  { value: '35%', label: 'Max Impact', icon: Rocket },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 sm:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-200 to-transparent" />
      <div className="absolute top-20 right-0 w-72 h-72 bg-gradient-to-br from-indigo-200/30 to-violet-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-gradient-to-br from-violet-200/30 to-indigo-200/30 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-700 mb-4">
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 mb-4">
            Engineer with a passion for building
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600">
              intelligent systems
            </span>
          </h2>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
              className="flex items-center gap-3 px-6 py-4 bg-white rounded-2xl shadow-soft border border-indigo-100"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center">
                <stat.icon className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold text-navy-900">{stat.value}</p>
                <p className="text-sm text-navy-500">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column - Story */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-6"
          >
            <div className="p-6 sm:p-8 bg-white rounded-2xl shadow-soft border border-indigo-100">
              <p className="text-base sm:text-lg text-navy-600 leading-relaxed mb-6">
                I'm a Software Engineer with a <span className="text-indigo-700 font-semibold">Master's in Computer Science</span> from the University of Alabama at Birmingham (GPA: 3.8). My journey spans from training at Virtusa to building AI-powered health assistants at Fini.
              </p>
              <p className="text-base sm:text-lg text-navy-600 leading-relaxed mb-6">
                What drives me is the intersection of <span className="text-violet-700 font-semibold">AI and practical problem-solving</span>. At Elanah.AI, I improved veteran intent detection accuracy by 30%. At Fundi, I built an ML model that achieved 92% accuracy and saved 40 hours of manual work weekly.
              </p>
              <p className="text-base sm:text-lg text-navy-600 leading-relaxed">
                I'm currently seeking opportunities where I can leverage my skills in <span className="text-indigo-700 font-semibold">AI</span>, <span className="text-violet-700 font-semibold">full-stack development</span>, and <span className="text-indigo-700 font-semibold">system design</span> to build products that serve millions.
              </p>
            </div>
          </motion.div>

          {/* Right Column - Highlights Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="group p-6 bg-white rounded-2xl shadow-soft border border-indigo-100 hover:shadow-soft-lg hover:border-indigo-200 transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-navy-900 mb-2">{item.title}</h3>
                <p className="text-sm text-navy-500 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
