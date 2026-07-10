import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, Twitter, Linkedin, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-black text-brand-white pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center mb-6 group">
              <img 
                src="https://www.celworld.org/website/images/cel_logo_white.png" 
                alt="Community Empowerment Lab" 
                className="h-14 w-auto object-contain transition-opacity group-hover:opacity-80 drop-shadow-md"
              />
            </Link>
            <p className="text-brand-white/60 text-sm leading-relaxed mb-6">
              A national initiative focused on scaling Kangaroo Mother Care and MNCUs across India to save newborn lives at scale.
            </p>
            <div className="flex gap-4">
              <a href="https://x.com/Community_Lab" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full border border-brand-white/20 flex items-center justify-center hover:bg-brand-pink hover:border-brand-pink transition-all">
                <Twitter size={14} />
              </a>
              <a href="https://in.linkedin.com/company/community-empowerment-lab" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full border border-brand-white/20 flex items-center justify-center hover:bg-brand-pink hover:border-brand-pink transition-all">
                <Linkedin size={14} />
              </a>
              <a href="https://www.instagram.com/communityempowermentlab_cel/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full border border-brand-white/20 flex items-center justify-center hover:bg-brand-pink hover:border-brand-pink transition-all">
                <Instagram size={14} />
              </a>
              <a href="https://www.facebook.com/CommunityEmpowermentLab/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full border border-brand-white/20 flex items-center justify-center hover:bg-brand-pink hover:border-brand-pink transition-all">
                <Facebook size={14} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-normal uppercase tracking-widest mb-6">Navigate</h4>
            <ul className="space-y-4">
              <li><Link to="/model" className="text-sm text-brand-white/60 hover:text-brand-teal transition-colors">Our Model</Link></li>
              <li><Link to="/impact" className="text-sm text-brand-white/60 hover:text-brand-teal transition-colors">Impact & Data</Link></li>
              <li><Link to="/about" className="text-sm text-brand-white/60 hover:text-brand-teal transition-colors">About Us</Link></li>
              <li><Link to="/donate?type=district" className="text-sm text-brand-white/60 hover:text-brand-teal transition-colors">Fund a District</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-normal uppercase tracking-widest mb-6">Action</h4>
            <ul className="space-y-4">
              <li><Link to="/start" className="text-sm text-brand-white/60 hover:text-brand-teal transition-colors">Start in your District</Link></li>
              <li><Link to="/partner" className="text-sm text-brand-white/60 hover:text-brand-teal transition-colors">Partner with us</Link></li>
              <li><Link to="/training" className="text-sm text-brand-white/60 hover:text-brand-teal transition-colors">Training Resources</Link></li>
              <li><a href="https://www.celworld.org/work-with-us" target="_blank" rel="noopener noreferrer" className="text-sm text-brand-white/60 hover:text-brand-teal transition-colors">Careers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-normal uppercase tracking-widest mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-sm text-brand-white/60">
                <Mail size={16} className="text-brand-pink" />
                info@celworld.org
              </li>
              <li className="flex items-center gap-3 text-sm text-brand-white/60">
                 <MapPin size={16} className="text-brand-pink mt-1" />
                 <a href="https://www.celworld.org" target="_blank" rel="noopener noreferrer" className="hover:text-brand-pink transition-colors">www.celworld.org</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-brand-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-brand-white/40 uppercase tracking-widest">
          <p>© 2026 Community Empowerment Lab. All rights reserved.</p>
          <div className="flex gap-8">
            <Link to="#" className="hover:text-brand-white transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-brand-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
