import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Linkedin, Github, MapPin, ArrowUpRight, Sparkles } from 'lucide-react';

const contactLinks = [
  {
    icon: Mail,
    label: 'Email',
    value: 'tasmiyasahar2@gmail.com',
    href: 'mailto:tasmiyasahar2@gmail.com',
    description: 'Send me a message',
    color: 'from-rose-500 to-pink-500',
    bgColor: 'bg-rose-50'
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/tasmiya-ghouse',
    href: 'https://linkedin.com/in/tasmiya-ghouse',
    description: 'Connect professionally',
    color: 'from-blue-500 to-indigo-500',
    bgColor: 'bg-blue-50'
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/tasmiya-ghouse',
    href: 'https://github.com/tasmiya-ghouse',
    description: 'View my code',
    color: 'from-violet-500 to-purple-500',
    bgColor: 'bg-violet-50'
  }
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 sm:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-rose-200 to-transparent" />
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-gradient-to-br from-rose-200/20 to-indigo-200/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-gradient-to-br from-indigo-200/20 to-violet-200/20 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-rose-100 text-rose-700 mb-4">
            Contact
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 mb-4">
            Let's Build Something
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600">
              Amazing Together
            </span>
          </h2>
          <p className="text-base sm:text-lg text-navy-500 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, or how AI can transform your product.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid sm:grid-cols-3 gap-6 mb-12">
          {contactLinks.map((link, index) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-6 bg-white rounded-2xl shadow-soft border border-indigo-100 hover:shadow-soft-lg hover:border-indigo-200 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              {/* Hover gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${link.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
              
              <div className="relative">
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${link.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <link.icon className="w-6 h-6 text-white" />
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-navy-400 opacity-0 group-hover:opacity-100 group-hover:text-indigo-600 transition-all duration-300" />
                </div>
                <h3 className="font-semibold text-navy-900 mb-1">{link.label}</h3>
                <p className={`text-sm font-medium bg-clip-text text-transparent bg-gradient-to-r ${link.color} mb-1`}>
                  {link.value}
                </p>
                <p className="text-xs text-navy-500">{link.description}</p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Location & Availability */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white rounded-full shadow-soft border border-indigo-100">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <MapPin size={18} className="text-indigo-500" />
            <span className="text-sm text-navy-600">Based in Birmingham, AL · Open to Remote</span>
            <Sparkles size={16} className="text-amber-500" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
