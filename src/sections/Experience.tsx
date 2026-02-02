import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

const experiences = [
  {
    title: 'AI Engineer Intern',
    company: 'Fini',
    location: 'Remote',
    period: 'October 2025 - Present',
    description: 'Building production-grade AI health assistants serving real user requests through RESTful APIs.',
    achievements: [
      'Improved response reliability and user engagement by 35% in live application',
      'Reduced API integration and debugging time by 45% through proper documentation',
      'Collaborated with cross-functional teams to meet quality and latency targets'
    ],
    color: 'from-indigo-500 to-violet-500'
  },
  {
    title: 'Machine Learning and AI Intern',
    company: 'Elanah.AI',
    location: 'Remote',
    period: 'March 2025 - June 2025',
    description: 'Trained conversational AI on domain-specific language patterns for veteran support.',
    achievements: [
      'Improved intent detection accuracy by 30% using statistical methods',
      'Developed task-specific evaluation metrics and curated 1,200+ data samples',
      'Reduced labeling time by 20% through optimized data pipelines'
    ],
    color: 'from-violet-500 to-purple-500'
  },
  {
    title: 'Data Science Intern',
    company: 'Fundi',
    location: 'Remote',
    period: 'August 2023 - September 2023',
    description: 'Built ML models for fintech transaction categorization and correction.',
    achievements: [
      'Achieved 92% accuracy with Random Forest Regressor model',
      'Reduced manual review workload by 40 hours weekly',
      'Integrated ML model into Angular-based fintech application'
    ],
    color: 'from-emerald-500 to-teal-500'
  },
  {
    title: 'Software Development Trainee',
    company: 'Virtusa',
    location: 'On-site',
    period: 'April 2022 - January 2023',
    description: 'Intensive training in software engineering fundamentals and full-stack development.',
    achievements: [
      'Improved problem-solving performance by 40% in technical assessments',
      'Built full-stack practice applications using TypeScript and Angular',
      'Participated in Agile sprints and code reviews'
    ],
    color: 'from-amber-500 to-orange-500'
  }
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 sm:py-32 relative overflow-hidden bg-gradient-to-b from-white via-violet-50/30 to-white">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-200 to-transparent" />
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-gradient-to-br from-indigo-200/20 to-violet-200/20 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-emerald-100 text-emerald-700 mb-4">
            Experience
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 mb-4">
            Professional Journey
          </h2>
          <p className="text-base sm:text-lg text-navy-500 max-w-2xl mx-auto">
            A track record of shipping production systems and delivering measurable impact across AI, data science, and full-stack development.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-300 via-violet-300 to-indigo-300" />

          {/* Experience Items */}
          <div className="space-y-10">
            {experiences.map((exp, index) => (
              <motion.div
                key={`${exp.company}-${exp.period}`}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-12 sm:pl-20"
              >
                {/* Timeline Dot */}
                <div className={`absolute left-2 sm:left-6 top-2 w-5 h-5 rounded-full bg-gradient-to-br ${exp.color} border-4 border-white shadow-lg`} />

                {/* Content Card */}
                <div className="p-6 bg-white rounded-2xl shadow-soft border border-indigo-100 hover:shadow-soft-lg hover:border-indigo-200 transition-all duration-300">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                    <div>
                      <h3 className="text-lg font-bold text-navy-900">
                        {exp.title}
                      </h3>
                      <div className="flex items-center gap-2 text-indigo-600 mt-1">
                        <Briefcase size={16} />
                        <span className="text-sm font-medium">{exp.company}</span>
                      </div>
                    </div>
                    <div className="flex flex-col sm:items-end gap-1">
                      <div className="flex items-center gap-2 text-navy-500">
                        <Calendar size={14} />
                        <span className="text-sm">{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2 text-navy-500">
                        <MapPin size={14} />
                        <span className="text-sm">{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-navy-500 mb-4">
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-sm text-navy-600"
                      >
                        <CheckCircle2 className={`w-4 h-4 mt-0.5 flex-shrink-0 text-gradient-to-r ${exp.color}`} style={{ color: 'inherit' }} />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
