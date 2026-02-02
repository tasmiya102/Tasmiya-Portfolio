import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-indigo-100 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-sm text-navy-500 flex items-center gap-1">
            {currentYear} Tasmiya Sahar Ghouse. Built with 
            <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {[
              { icon: Github, href: 'https://github.com/tasmiya-ghouse', label: 'GitHub' },
              { icon: Linkedin, href: 'https://linkedin.com/in/tasmiya-ghouse', label: 'LinkedIn' },
              { icon: Mail, href: 'mailto:tasmiyasahar2@gmail.com', label: 'Email' },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith('http') ? '_blank' : undefined}
                rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="p-2.5 rounded-xl text-navy-400 hover:text-indigo-600 hover:bg-indigo-50 transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
