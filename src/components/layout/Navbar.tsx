import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/src/lib/utils';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Who We Are', href: '/about' },
  { name: 'Our Model', href: '/model' },
  { name: 'Impact', href: '/impact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        isScrolled ? "bg-brand-white/90 backdrop-blur-md border-b border-brand-black/5 py-3" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center group">
          <img 
            src="https://www.celworld.org/website/images/cel_logo.png" 
            alt="Community Empowerment Lab" 
            className="h-12 w-auto object-contain transition-opacity group-hover:opacity-80"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-brand-pink uppercase tracking-widest",
                location.pathname === link.href ? "text-brand-pink" : "text-brand-black"
              )}
            >
              {link.name}
            </Link>
          ))}
          <div className="flex items-center gap-4">
            <Link 
              to="/donate?type=district" 
              className="px-5 py-2.5 bg-brand-black text-white text-xs font-normal uppercase tracking-widest hover:bg-brand-pink transition-all rounded-sm flex items-center gap-2"
            >
              Fund a District
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-brand-black"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="fixed inset-0 top-[64px] bg-brand-white z-40 md:hidden p-8 flex flex-col gap-8"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-2xl font-normal hover:text-brand-pink"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex flex-col gap-4 pt-8 border-t border-brand-black/10">
              <Link
                to="/donate?type=district"
                className="w-full py-4 bg-brand-black text-white font-normal text-center uppercase tracking-widest"
                onClick={() => setIsOpen(false)}
              >
                Fund a District
              </Link>
              <Link
                to="/start"
                className="w-full py-4 border-2 border-brand-black text-brand-black font-normal text-center uppercase tracking-widest"
                onClick={() => setIsOpen(false)}
              >
                Start in your District
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
