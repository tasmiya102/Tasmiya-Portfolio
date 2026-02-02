import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Github, Mic, Activity, Heart, Stethoscope, ArrowUpRight, Zap, Target, TrendingUp } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const projects = [
  {
    icon: Mic,
    title: 'AI Voice Assistant',
    problem: 'Creating a real-time voice interface for AI interactions with low-latency streaming and natural conversation flow.',
    solution: 'Built an async event-driven voice assistant using ElevenLabs ConvAI WebSockets with VAD turn-taking and PCM16 audio processing.',
    impact: 'Demonstrated proficiency in AI integration, real-time streaming, and scalable architecture design.',
    tech: ['Python', 'WebSockets', 'LLMs', 'Asyncio', 'ElevenLabs API'],
    github: 'https://github.com/tasmiya-ghouse/ai-voice-assistant',
    featured: true,
    color: 'from-violet-500 to-purple-600',
    bgGradient: 'from-violet-50 to-purple-50'
  },
  {
    icon: Activity,
    title: 'Renal Cell Carcinoma Prediction',
    problem: 'Early detection of kidney cancer requires accurate risk assessment tools for healthcare providers.',
    solution: 'Developed a full-stack ML application using RandomForestClassifier with a React.js frontend and Flask REST APIs.',
    impact: 'Reduced appointment scheduling time by 40% and supported early diagnosis with accurate predictions.',
    tech: ['Python', 'React.js', 'Flask', 'Scikit-learn', 'MySQL', 'SQLAlchemy'],
    github: 'https://github.com/tasmiya-ghouse/renal-cancer-prediction',
    featured: true,
    color: 'from-rose-500 to-pink-600',
    bgGradient: 'from-rose-50 to-pink-50'
  },
  {
    icon: Heart,
    title: 'Life Support Web Platform',
    problem: 'Connecting hospitals, blood banks, and donors efficiently to save lives during emergencies.',
    solution: 'Engineered a scalable Spring Boot platform integrating multiple databases with a user-friendly interface.',
    impact: 'Increased user engagement by 40% and facilitated seamless access to medical resources across a 50-mile radius.',
    tech: ['Java', 'Spring Boot', 'HTML', 'CSS', 'JavaScript', 'MySQL'],
    github: 'https://github.com/tasmiya-ghouse/life-support-platform',
    featured: false,
    color: 'from-emerald-500 to-teal-600',
    bgGradient: 'from-emerald-50 to-teal-50'
  },
  {
    icon: Stethoscope,
    title: 'MediServ Web App',
    problem: 'Patients struggle to find doctors and book appointments efficiently in the healthcare system.',
    solution: 'Developed a healthcare web application with custom medical search, appointment booking, and secure authentication.',
    impact: 'Reduced patient search time by 25% and improved patient-doctor communication efficiency by 30%.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Firebase', 'Authentication'],
    github: 'https://github.com/tasmiya-ghouse/mediserv-app',
    featured: false,
    color: 'from-blue-500 to-cyan-600',
    bgGradient: 'from-blue-50 to-cyan-50'
  }
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 sm:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-violet-200 to-transparent" />
      <div className="absolute top-40 left-0 w-96 h-96 bg-gradient-to-br from-violet-200/30 to-indigo-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-40 right-0 w-96 h-96 bg-gradient-to-br from-indigo-200/30 to-violet-200/30 rounded-full blur-3xl" />

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
            Projects
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 mb-4">
            Featured Work
          </h2>
          <p className="text-base sm:text-lg text-navy-500 max-w-2xl mx-auto">
            A selection of projects that demonstrate my expertise in AI, full-stack development, and building production-ready systems.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative flex flex-col bg-white rounded-3xl shadow-soft border border-indigo-100 hover:shadow-soft-lg hover:border-indigo-200 hover:-translate-y-1 transition-all duration-300 overflow-hidden ${
                project.featured ? 'lg:col-span-2' : ''
              }`}
            >
              {/* Top gradient bar */}
              <div className={`h-1.5 w-full bg-gradient-to-r ${project.color}`} />
              
              <div className="p-6 sm:p-8">
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 right-4">
                    <Badge className={`bg-gradient-to-r ${project.color} text-white border-0`}>
                      Featured
                    </Badge>
                  </div>
                )}

                {/* Header */}
                <div className="flex items-start gap-4 mb-6">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${project.color} flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <project.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-navy-900 mb-2 group-hover:text-indigo-700 transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className={`text-xs px-3 py-1 bg-gradient-to-r ${project.bgGradient} text-navy-700 rounded-full font-medium`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4 flex-grow">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center flex-shrink-0">
                      <Target className="w-4 h-4 text-amber-600" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-navy-700 mb-1">Problem</h4>
                      <p className="text-sm text-navy-500">{project.problem}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <Zap className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-navy-700 mb-1">Solution</h4>
                      <p className="text-sm text-navy-500">{project.solution}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="w-4 h-4 text-emerald-600" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-emerald-700 mb-1">Impact</h4>
                      <p className="text-sm text-navy-600 font-medium">{project.impact}</p>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3 mt-6 pt-6 border-t border-indigo-100">
                  <Button
                    variant="outline"
                    size="sm"
                    className="gap-2 border-2 border-indigo-200 hover:border-indigo-300 hover:bg-indigo-50 text-indigo-700"
                    asChild
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={16} />
                      View Code
                      <ArrowUpRight size={14} className="opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
