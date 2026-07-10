import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, ArrowDown, ArrowUp, ShieldCheck, Users, Activity, BarChart3, Heart, CheckCircle2, Globe, HeartHandshake, Droplets, Thermometer, ShieldPlus, Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/src/lib/utils';
import { AnimatedNumber } from '@/src/components/ui/AnimatedNumber';

const partners = [
  { name: 'Government of Rajasthan', logo: '/partners/raj-logo.png' },
  { name: 'UP-TSU', logo: '/partners/UP-TSU.png' },
  { name: 'Andhra Pradesh Government', logo: '/partners/1280px-Emblem_of_Andhra_Pradesh.svg.png' },
  { name: 'ICMR CCOE', logo: '/partners/ICMR_C.png' },
  { name: 'National Health Mission', logo: '/partners/NHM_Logo.png' },
  { name: 'Uttar Pradesh Sarkar', logo: '/partners/Govt_of_UP_Logo.png' },
  { name: 'Grand Challenges Canada', logo: '/partners/gcc-logo.png' },
];

const PartnerLogo = ({ name, src }: { name: string, src: string }) => {
  const [error, setError] = useState(false);
  return (
    <div className="flex items-center justify-center min-w-[250px] px-12 h-20 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all cursor-pointer select-none">
      {error ? (
        <span className="font-bold text-xl uppercase tracking-widest text-brand-black text-center whitespace-nowrap">
          {name}
        </span>
      ) : (
        <img 
          src={src} 
          alt={name} 
          onError={() => setError(true)}
          className="max-h-full max-w-[200px] object-contain pointer-events-none"
        />
       )}
    </div>
  );
};

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.1 } },
  viewport: { once: true }
};

export default function Home() {
  const kmcImages = [
    "/kmc-mother.jpg",
    "/kmc-mother2.jpg.jpg",
    "/kmc-mother3.jpg.jpg.JPG",
    "/kmc-mother4.jpg.JPG"
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % kmcImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="pt-20">
      {/* 1. HERO SECTION */}
      <section className="relative w-full flex items-center px-6 py-12 md:py-16 lg:py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
           <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/hero-bg.jpg')" }} />
           <div className="absolute inset-0 bg-gradient-to-r from-brand-black/90 via-brand-black/50 to-transparent" />
        </div>

        <div className="max-w-[1400px] mx-auto z-10 w-full">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl lg:max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-pink/10 border border-brand-pink/20 rounded-full mb-6">
              <span className="w-2 h-2 bg-brand-pink rounded-full animate-pulse" />
              <span className="text-brand-pink text-[10px] font-normal uppercase tracking-widest">National Scale Initiative</span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.9] tracking-tighter mb-8">
              Scaling <span className="text-brand-teal italic">Science</span>, 
              Saving <span className="text-brand-pink uppercase">Lives</span>.
            </h1>
            <p className="text-brand-gray/70 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed font-light">
              We scale Kangaroo Mother Care (KMC) across India to eliminate preventable newborn deaths. Proven, scalable, and government-integrated.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/donate?type=district" 
                className="px-8 py-4 bg-brand-pink text-white font-normal uppercase tracking-widest hover:scale-105 transition-transform flex items-center gap-3 rounded-sm group"
              >
                Fund a District
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/model" 
                className="px-8 py-4 border-2 border-brand-white text-white font-normal uppercase tracking-widest hover:bg-brand-white hover:text-brand-black transition-all rounded-sm"
              >
                Our Model
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 1. IMMERSIVE HERO PROBLEM STATEMENT */}
      <section className="relative w-full min-h-screen flex items-center bg-[#fcfcfc] overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#f8f9fa] to-white pointer-events-none" />
        <div className="max-w-[1400px] mx-auto w-full px-6 relative z-10 py-20 flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
          
          {/* LEFT SIDE */}
          <div className="w-full lg:w-1/2 flex flex-col gap-10">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-brand-black leading-[0.95] mb-8">
                India's Newborn Survival Crisis.
              </h2>
              <h3 className="text-xl md:text-2xl lg:text-3xl font-medium tracking-tight text-brand-black/80 mb-4 leading-tight">
                Over 600,000 newborns die every year.<br />
                <span className="text-brand-pink italic">More than half could be saved.</span>
              </h3>
              <p className="text-lg md:text-xl text-brand-black/50 font-light mb-12">
                The science exists. The scale does not.
              </p>
              
              <Link to="/start" className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-brand-teal hover:text-brand-black transition-colors group">
                See the Opportunity
                <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </motion.div>
          </div>

          {/* RIGHT SIDE */}
          <div className="w-full lg:w-1/2 relative min-h-[600px] flex items-center justify-center">
            {/* Circle background image */}
            <div className="absolute inset-0 md:inset-10 rounded-full overflow-hidden shadow-[0_0_80px_rgba(0,0,0,0.08)] pointer-events-none">
              <img 
                src="/preterm-baby.jpg" 
                alt="Mother's Care" 
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* Floating Stat Cards */}
            <div className="relative z-10 w-full max-w-lg flex flex-col gap-8 md:gap-12">
              {[
                { stat: "1 in 4", label: "Global newborn deaths occur in India", align: "self-start -ml-8 md:-ml-16", delay: 0.2 },
                { stat: "600K+", label: "Newborn deaths every year", align: "self-end -mr-8 md:-mr-16", delay: 0.4 },
                { stat: ">50%", label: "Preventable with proven interventions", align: "self-start -ml-8 md:-ml-16", delay: 0.6 }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1, delay: item.delay, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ scale: 1.05 }}
                  className={cn(
                    "bg-white/40 backdrop-blur-xl px-6 py-5 rounded-[20px] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] border border-white/40 max-w-[240px] transition-transform duration-500",
                    item.align
                  )}
                >
                  <div className="text-3xl font-bold tracking-tighter text-brand-black mb-1">{item.stat}</div>
                  <div className="text-[10px] uppercase font-bold tracking-widest text-brand-black/60 leading-relaxed">{item.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. VISUALIZE THE SYSTEM GAP */}
      <section className="py-24 px-6 bg-white relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto text-center mb-20 relative z-10">
          <motion.h4 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-brand-pink font-bold uppercase tracking-[0.2em] text-xs mb-6">
            The Implementation Challenge
          </motion.h4>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-4xl md:text-6xl font-bold tracking-tighter mb-6 text-brand-black">
            Where the System Breaks
          </motion.h2>
        </div>

        <div className="max-w-[1400px] mx-auto relative z-10">
           {/* Animated Connector Line (Desktop) */}
           <div className="hidden md:block absolute top-24 left-[15%] right-[15%] h-px bg-gradient-to-r from-transparent via-brand-black/10 to-transparent z-0">
             <motion.div 
               initial={{ x: "-100%" }}
               whileInView={{ x: "200%" }}
               transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
               className="w-1/3 h-full bg-gradient-to-r from-transparent via-brand-pink/50 to-transparent"
             />
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
             {[
               { icon: Building2, title: "No Dedicated Spaces", text: "Mothers and babies are either separated or lack privacy", delay: 0.2 },
               { icon: HeartHandshake, title: "No Bedside Coaching", text: "Families often receive little support to continue KMC.", delay: 0.4 },
               { icon: BarChart3, title: "No Quality Tracking", text: "Health systems struggle to monitor implementation at scale.", delay: 0.6 }
             ].map((card, i) => (
               <motion.div
                 key={i}
                 initial={{ opacity: 0, y: 40 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true, margin: "-100px" }}
                 transition={{ duration: 0.8, delay: card.delay }}
                 className="bg-brand-black/5 hover:bg-white rounded-3xl p-10 md:p-12 text-center transition-all duration-500 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.05)] border border-transparent hover:border-brand-black/5 group"
               >
                 <div className="w-20 h-20 mx-auto rounded-full bg-white group-hover:bg-brand-black/5 flex items-center justify-center mb-8 shadow-sm transition-colors duration-500 relative">
                   <div className="absolute inset-0 rounded-full border border-brand-black/10 scale-100 group-hover:scale-110 opacity-0 group-hover:opacity-100 transition-all duration-500" />
                   <card.icon strokeWidth={1.5} className="w-8 h-8 text-brand-black/60 group-hover:text-brand-pink transition-colors" />
                 </div>
                 <h3 className="text-2xl font-bold tracking-tight text-brand-black mb-4">{card.title}</h3>
                 <p className="text-brand-black/50 font-light leading-relaxed">{card.text}</p>
               </motion.div>
             ))}
           </div>
        </div>
      </section>

      {/* 3. THE SOLUTION (KMC) - CINEMATIC REDESIGN */}
      <section className="relative w-full min-h-[90vh] flex items-center bg-[#0a0a0a] overflow-hidden">
        {/* Background Images right side */}
        <div className="absolute inset-0 w-full h-full lg:w-[70%] lg:left-auto lg:right-0 z-0 bg-[#000]">
          <AnimatePresence mode="popLayout">
            <motion.img 
              key={currentImageIndex}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              src={kmcImages[currentImageIndex]} 
              alt="Mother doing skin-to-skin care" 
              className="absolute inset-0 w-full h-full object-cover object-[center_20%] opacity-40 lg:opacity-75"
            />
          </AnimatePresence>
          {/* Gradients to blend image cleanly */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/80 lg:via-[#0a0a0a]/30 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-[#0a0a0a]/30 lg:hidden" />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#0a0a0a] hidden lg:block w-[30%]" />
        </div>

        <div className="max-w-[1400px] mx-auto w-full px-6 relative z-10 flex flex-col justify-center h-full py-24">
          <div className="max-w-2xl lg:max-w-xl xl:max-w-2xl relative">
            <motion.h4 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-brand-teal font-medium uppercase tracking-[0.3em] text-[10px] md:text-xs mb-6 flex items-center gap-4"
            >
              <span className="w-12 h-px bg-brand-teal"></span>
              But this is solvable
            </motion.h4>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-bold tracking-tighter mb-4 leading-[1.1] text-white"
            >
              Kangaroo Mother Care.
            </motion.h2>

            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-brand-pink italic font-serif text-2xl sm:text-3xl md:text-4xl lg:text-[44px] leading-tight font-medium"
              style={{ marginBottom: '15px' }}
            >
               A mother’s touch can change survival.
            </motion.h3>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="text-white/80 text-lg md:text-xl font-light leading-relaxed max-w-lg mb-4"
            >
              <p style={{ marginLeft: '0px', paddingRight: '4px', paddingLeft: '0px', marginRight: '0px', marginBottom: '-9px', paddingBottom: '0px', width: '533px' }}>
                Continuous skin-to-skin care that improves newborn survival, breastfeeding, bonding, and recovery.
              </p>
            </motion.div>

            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
               className="text-white/50 text-sm md:text-base font-medium tracking-wide"
            >
               <p>Low-cost. Evidence-based.<br />Built for scale.</p>
            </motion.div>
          </div>

          {/* Floating Impact Chips */}
          <div className="lg:absolute lg:right-6 xl:right-16 lg:bottom-12 w-full lg:w-auto mt-12 lg:mt-0 relative flex flex-col sm:flex-row lg:flex-row gap-4 sm:gap-6 lg:gap-5 pointer-events-none z-30 items-start sm:items-center lg:items-center justify-start sm:justify-end flex-wrap">
              
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.6 }}
              >
                <motion.div 
                  animate={{ y: [-5, 5, -5] }}
                  transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                  className="backdrop-blur-md bg-white/10 border border-white/20 p-4 rounded-2xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] origin-bottom-right"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-brand-teal/20 border border-brand-teal/30 flex items-center justify-center">
                      <CheckCircle2 className="text-brand-teal w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-white font-bold text-sm tracking-wide">WHO Recommended</p>
                      <p className="text-white/60 text-xs font-light">Global standard of care</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.8 }}
              >
                <motion.div 
                  animate={{ y: [8, -8, 8] }}
                  transition={{ repeat: Infinity, duration: 8, ease: "easeInOut", delay: 1 }}
                  className="backdrop-blur-md bg-[#0a0a0a]/50 border border-brand-pink/30 p-4 lg:p-5 rounded-2xl shadow-[0_30px_60px_-15px_rgba(245,68,148,0.15)] lg:-translate-y-4"
                >
                  <div className="flex items-center gap-4">
                    <div className="text-brand-pink text-3xl lg:text-4xl font-bold tracking-tighter leading-none">40<span className="text-2xl font-normal">%</span></div>
                    <div>
                      <p className="text-white font-bold text-sm tracking-wide mb-0.5 flex items-center gap-1">Higher Survival <ArrowUp size={14} className="text-brand-pink"/></p>
                      <p className="text-white/60 text-xs font-light">Compared to incubator care</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 1 }}
              >
                <motion.div 
                  animate={{ y: [-6, 6, -6] }}
                  transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 0.5 }}
                  className="backdrop-blur-md bg-white/10 border border-brand-teal/30 p-4 lg:p-5 rounded-2xl shadow-[0_30px_60px_-15px_rgba(10,199,199,0.15)]"
                >
                  <div className="flex items-center gap-4">
                    <div className="text-brand-teal text-3xl lg:text-4xl font-bold tracking-tighter leading-none">72<span className="text-2xl font-normal">%</span></div>
                    <div>
                      <p className="text-white font-bold text-sm tracking-wide mb-0.5 flex items-center gap-1">Less Hypothermia <ArrowDown size={14} className="text-brand-teal" /></p>
                      <p className="text-white/60 text-xs font-light">Maintains infant body temp</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

          </div>
        </div>
      </section>

      {/* 4. SYSTEMS CHANGE VISUAL */}
      <section className="py-24 px-6 bg-[#fcfcfc]">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-20">
            <h4 className="text-brand-teal font-bold uppercase tracking-[0.2em] text-xs mb-6">Transformation</h4>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-brand-black">How Change Happens</h2>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-4 w-full relative">
            
            {/* Background Line (Desktop only) */}
            <div className="hidden lg:block absolute top-[60px] left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-transparent via-brand-black/10 to-transparent z-0" />

            {[
              { icon: Users, label: "Fragmented Newborn Care", type: "start", color: "text-brand-black/40" },
              { icon: ShieldPlus, label: "District-Led Implementation", type: "step", color: "text-brand-black" },
              { icon: Building2, label: "Mother-Newborn Care Units (MNCUs)", type: "step", color: "text-brand-black" },
              { icon: HeartHandshake, label: "Coaching + Training", type: "step", color: "text-brand-black" },
              { icon: BarChart3, label: "Continuous Quality Improvement", type: "step", color: "text-brand-black" },
              { icon: Heart, label: "Better Survival & Bonding", type: "end", color: "text-brand-pink" }
            ].map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative z-10 flex flex-col items-center max-w-[180px] text-center group"
              >
                {/* Arrow connector on mobile */}
                {i > 0 && <ArrowDown className="lg:hidden w-5 h-5 text-brand-black/20 my-4" />}

                <div className={cn(
                  "w-[120px] h-[120px] rounded-full flex items-center justify-center mb-6 border-[3px] transition-all duration-500 shadow-sm bg-white relative",
                  step.type === 'end' ? 'border-brand-pink shadow-[0_0_30px_rgba(245,68,148,0.2)]' : 
                  step.type === 'start' ? 'border-brand-black/10 border-dashed' : 
                  'border-white group-hover:border-brand-black/10 group-hover:bg-[#f8f9fa]'
                )}>
                  <step.icon className={cn("w-8 h-8 transition-transform duration-500 group-hover:scale-110", step.color)} strokeWidth={1.5} />
                  
                  {/* Subtle active state for middle steps */}
                  {step.type === 'step' && (
                    <motion.div 
                      animate={{ scale: [1, 1.2, 1], opacity: [0, 0.2, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                      className="absolute inset-0 rounded-full bg-brand-teal"
                    />
                  )}
                </div>
                <div className={cn(
                  "text-sm font-bold uppercase tracking-widest leading-relaxed",
                  step.type === 'end' ? 'text-brand-pink' : 
                  step.type === 'start' ? 'text-brand-black/40' : 
                  'text-brand-black/80'
                )}>
                  {step.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* 4. OUR MODEL (The Transformational Engine) */}
      <section className="bg-brand-black text-white py-10 md:py-14 px-6">
        <div className="max-w-[1400px] mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            <div className="lg:col-span-4">
              <h4 className="text-brand-teal font-bold uppercase tracking-[0.2em] text-xs mb-3">Our Model</h4>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 leading-tight uppercase">Scale through System Transformation.</h2>
              <div className="text-brand-white/80 mb-8 leading-relaxed space-y-4 font-light text-sm lg:text-base">
                <p>We don't just build rooms, we enable districts to systematically transform how newborn care is delivered, sustained, and scaled.</p>
                <p>Our model integrates infrastructure, capacity building, real-time data, and continuous support to ensure that Kangaroo Mother Care becomes a standard of care, not just an intervention.</p>
              </div>
              <Link 
                to="/model" 
                className="inline-flex items-center gap-2 text-brand-pink font-normal uppercase tracking-widest text-xs group"
              >
                Explore the technical model
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="lg:col-span-8 flex flex-col">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 flex-1">
                {[
                  { title: 'Space Transformation', desc: 'Creating dedicated MNCUs where mothers and newborns stay together in sacred, private, safe and comfortable environment maintaining zero separation.' },
                  { title: 'Training & Coaching', desc: 'Building confident frontline providers through hands-on coaching and mentoring to ensure consistent, high-quality care across facilities.' },
                  { title: 'Digital Support', desc: 'Providing 24x7 virtual support and digital monitoring through the KMC App - connecting facilities into a responsive, data-driven system.' },
                  { title: 'Quality Improvement Cycles', desc: 'Driving continuous improvement through real time data, performance tracking, and structured quality cycles - ensuring standards are maintained at scale.' }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="flex flex-col gap-2"
                  >
                    <div className="text-brand-teal font-normal italic text-3xl leading-none">0{i+1}</div>
                    <h3 className="text-lg font-bold uppercase tracking-tight text-white/90">{item.title}</h3>
                    <p className="text-brand-white/60 text-sm leading-relaxed">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                viewport={{ once: true }}
                className="mt-8 pt-6 border-t border-white/10"
              >
                <p className="text-brand-teal italic font-serif text-xl leading-relaxed">
                  Together, these components create a scalable, district-led system that transforms newborn care - saving lives sustainably, not just temporarily.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. IMPACT SECTION */}
      <section className="py-10 md:py-14 px-6 bg-brand-white">
        <div className="max-w-[1400px] mx-auto text-center mb-10">
          <motion.h4 {...fadeInUp} className="text-brand-pink font-bold uppercase tracking-[0.2em] text-xs mb-4">The Result</motion.h4>
          <motion.h2 {...fadeInUp} className="text-5xl md:text-6xl font-bold tracking-tighter mb-4">Real numbers. Real scale.</motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { node: <AnimatedNumber value={86} suffix="+" />, label: 'Districts Touched', color: 'text-brand-teal' },
            { node: <AnimatedNumber value={500} suffix="K+" />, label: 'Newborns Reached', color: 'text-brand-black' },
            { node: <AnimatedNumber value={2000} suffix="+" />, label: 'Providers Coached', color: 'text-brand-pink' },
            { node: <AnimatedNumber value={350} suffix="+" />, label: 'Public Health Facilities Transformed', color: 'text-brand-teal' }
          ].map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 lg:p-8 border border-brand-black/5 rounded-sm"
            >
              <div className={cn("text-5xl md:text-6xl font-bold mb-3", stat.color)}>{stat.node}</div>
              <div className="text-xs uppercase font-bold tracking-widest opacity-40">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 6. OUR PARTNERS (Infinite Marquee) */}
      <section className="py-10 md:py-14 bg-brand-gray overflow-hidden">
        <div className="max-w-[1400px] mx-auto flex flex-col items-center mb-8 px-6">
          <h4 className="text-brand-pink font-bold uppercase tracking-[0.2em] text-xs mb-4">Our Partners</h4>
          <h2 className="text-4xl md:text-5xl font-bold text-center uppercase tracking-tight">Authentic Collaboration</h2>
        </div>
        
        <div className="relative w-full flex overflow-hidden group">
          {/* Marquee Track 1 */}
          <motion.div 
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ ease: "linear", duration: 40, repeat: Infinity }}
            className="flex items-center shrink-0 w-max"
          >
            {partners.map((partner, i) => (
              <PartnerLogo key={partner.name + i} name={partner.name} src={partner.logo} />
            ))}
          </motion.div>
          {/* Marquee Track 2 */}
          <motion.div 
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ ease: "linear", duration: 40, repeat: Infinity }}
            className="flex items-center shrink-0 w-max"
          >
            {partners.map((partner, i) => (
              <PartnerLogo key={partner.name + '-dup' + i} name={partner.name} src={partner.logo} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* 7. VOICES OF SYSTEM (Interactive Carousel) */}
      <section className="py-10 md:py-14 px-6 bg-brand-white overflow-hidden">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between items-start gap-4 mb-8">
            <div>
              <h4 className="text-brand-pink font-bold uppercase tracking-[0.2em] text-xs mb-3">Testimonials</h4>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-none uppercase">Voices of System.</h2>
            </div>
            <p className="text-brand-black/60 text-sm md:text-base leading-relaxed max-w-md">
              Real stories of change and impact from districts, facilities and families.
            </p>
          </div>

          <div className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {[
              {
                quote: "When I saw the MNCU in Bulandshahr, I asked why only district hospitals?! This amazing facility should be there for mothers in every facility in Meerut. Thank you CEL for helping translate my vision into reality.",
                name: "Shri Surendra Singh (IAS)",
                role: "Commissioner, Meerut division (UP)",
                image: "/champions/testimonial-1.jpg.jpg"
              },
              {
                quote: "Such a beautiful and clean room for people like us, that too free of cost, it's hard to believe!!! I've never experienced such deep love and care before and I don't feel like leaving.",
                name: "Dhandevi",
                role: "KMC Mother",
                image: "/champions/testimonial-2.jpg.png"
              },
              {
                quote: "When I saw the presentation of MNCU saturation in Meerut district, I was really inspired to do the same in Prayagraj district as well with our own funds.",
                name: "Shri Sipu Giri (IAS)",
                role: "CDO, Prayagraj, UP",
                image: "/champions/testimonial-3.jpg.png"
              },
              {
                quote: "I thought I knew everything, but the coaching session made me realise that there was a lot that I didn't. The meditation process that takes us through the journey of the baby in the womb was so emotional and helped me realise the newborn's challenges at birth.",
                name: "Dr. Raj Singh",
                role: "Paediatrician",
                image: "/champions/testimonial-4.jpg.png"
              },
              {
                quote: "I learnt so much about KMC and the challenges that mothers face while providing KMC when I was encouraged to give KMC myself. This experience helps me provide better support to mothers.",
                name: "Ranjana Devi",
                role: "Staff Nurse, CHC, Suriyawana",
                image: "/champions/testimonial-5.jpg.png"
              },
              {
                quote: "I did not have any hope seeing my small baby. I keep thinking that without KMC and the nurses' support, my baby would not have survived at all.",
                name: "Savetri Devi",
                role: "KMC Mother",
                image: "/champions/testimonial-6.jpg.png"
              }
            ].map((testimonial, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.05 }}
                className="min-w-[85vw] sm:min-w-[320px] max-w-[380px] shrink-0 snap-center bg-brand-gray p-6 sm:p-8 border border-brand-black/5 hover:border-brand-teal transition-all flex flex-col justify-between relative group"
              >
                <div className="text-brand-pink text-5xl font-serif leading-none absolute top-4 left-4 opacity-20 group-hover:opacity-40 transition-opacity">"</div>
                <p className="text-base md:text-lg text-brand-black/80 font-light leading-relaxed relative z-10 italic mb-6">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-4 mt-auto pt-5 border-t border-brand-black/10">
                  <div className="w-16 h-16 rounded-full overflow-hidden bg-brand-pink/10 shrink-0 border-2 border-transparent group-hover:border-brand-pink transition-colors">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        const parent = e.currentTarget.parentElement;
                        if(parent) {
                          parent.innerHTML = `<div class="w-full h-full flex items-center justify-center text-brand-pink font-bold text-xl uppercase">${testimonial.name.slice(0,2)}</div>`;
                        }
                      }}
                    />
                  </div>
                  <div>
                    <div className="font-bold uppercase tracking-wide text-sm">{testimonial.name}</div>
                    <div className="text-brand-teal text-xs tracking-wider uppercase mt-1">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="flex items-center justify-center gap-2 mt-8 opacity-50">
            <ArrowRight className="w-4 h-4 md:hidden" />
            <span className="text-xs uppercase tracking-widest md:hidden">Swipe to read more</span>
            <span className="text-xs uppercase tracking-widest hidden md:inline-flex items-center gap-2">
              <ArrowRight className="w-4 h-4" /> Scroll left and right to read more stories
            </span>
          </div>
        </div>
      </section>

      {/* 8. CHAMPIONS OF SYSTEM TRANSFORMATION */}
      <section className="py-10 md:py-14 px-6 bg-brand-black text-brand-white overflow-hidden relative">
        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="text-center mb-10">
            <h4 className="text-brand-teal font-bold uppercase tracking-[0.2em] text-xs mb-4">Wall of Fame</h4>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-none uppercase mb-6">Champions of System Transformation</h2>
            <p className="max-w-4xl mx-auto text-brand-white/60 text-lg leading-relaxed font-light">
              Across districts, committed IAS officers are leading the transformation of newborn care, turning proven solutions into scalable systems.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
            {[
              {
                name: "Ms. Nisha Anant, IAS",
                role: "Former District Magistrate, Amethi, UP",
                impact: "Among the early adopters of Kangaroo Mother Care, she has consistently championed the model.",
                image: "/champions/Ms. Nisha Anant, IAS.jpg"
              },
              {
                name: "Shri Surendra Singh, IAS",
                role: "Former Commissioner, Meerut Division",
                impact: "Led the 'Meerut Model,' scaling MNCUs across 5 districts and 55+ facilities. Demonstrated how strong administrative leadership can transform newborn care at scale.",
                image: "/champions/Shri. Surendra Singh, IAS.jpg"
              },
              {
                name: "Shri Abhinav Gopal, IAS",
                role: "CDO, Ghaziabad, UP",
                impact: "Spearheaded the first district-level implementation of the iKMC model.",
                image: "/champions/Shri. Abhinav Gopal, IAS.jpg"
              },
              {
                name: "Shri Gaurang Rathi, IAS",
                role: "Former DM, Bhadohi & Unnao, UP",
                impact: "Successfully scaled MNCUs across multiple districts—ensuring wider access to quality newborn care through strong district leadership.",
                image: "/champions/Shri. Gaurang Rathi, IAS.jpg"
              },
              {
                name: "Shri Manish Bansal, IAS",
                role: "Former DM, Sambhal & Saharanpur, UP",
                impact: "Expanded the MNCU model across districts driving system level adoption and strengthening newborn care services.",
                image: "/champions/Shri. Manish Bansal, IAS.jpg"
              },
              {
                name: "Mr. Himanshu Nagpal, IAS",
                role: "Former CDO, Varanasi, UP",
                impact: "Strengthened maternal and newborn care systems in Varanasi through focused district leadership.",
                image: "/champions/Mr. Himanshu Nagpal, IAS.jpg.png"
              }
            ].map((champ, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ y: -5 }}
                className="group bg-brand-gray/5 border border-brand-white/10 rounded-sm overflow-hidden text-center hover:border-brand-teal transition-colors flex flex-col"
              >
                <div className="aspect-[4/3] w-full overflow-hidden relative bg-brand-white/5">
                   {/* 
                     Images provided in chat cannot be embedded directly into code. 
                     Please upload your 5 photos to the 'public/champions/' folder via the File Explorer!
                    */}
                   <img 
                     src={champ.image} 
                     alt={champ.name} 
                     className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 object-top" 
                     onError={(e) => {
                       // Fallback if image is not yet uploaded
                       (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(champ.name)}&background=141818&color=ffffff&size=400`;
                     }}
                   />
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <h3 className="text-base font-bold uppercase tracking-widest mb-1 max-w-[200px] mx-auto leading-tight">{champ.name}</h3>
                  <div className="text-brand-teal text-[10px] font-normal uppercase tracking-widest mb-3 inline-block">{champ.role}</div>
                  <p className="text-brand-white/60 text-xs leading-relaxed pb-3 border-b border-brand-white/10 italic flex-1 flex items-center justify-center">
                    "{champ.impact}"
                  </p>
                  <div className="mt-4 flex justify-center">
                    <span className="text-[10px] text-brand-white/30 uppercase tracking-[0.2em] font-normal">Champion</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-16 text-center"
          >
            <Link 
              to="/start" 
              className="inline-flex items-center gap-3 px-8 py-4 bg-brand-teal text-brand-black font-semibold uppercase tracking-widest text-sm hover:bg-brand-pink hover:text-white transition-all group rounded-sm"
            >
              Start the journey in your district
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 9. CALL TO ACTION */}
      <section className="bg-brand-teal py-10 md:py-14 px-6 text-brand-black overflow-hidden relative">
        {/* Animated accent circle */}
        <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-brand-pink/20 blur-[100px] rounded-full" />
        
        <div className="max-w-[1400px] mx-auto text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 leading-[0.9]">
            Save a <span className="text-white text-stroke">District</span>. Start today.
          </h2>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto mb-10 opacity-80 leading-relaxed font-light">
            Whether you are a funder looking for high-impact interventions or a government official ready to lead a scale-up, we are ready to partner.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link 
              to="/fund" 
              className="px-10 py-5 bg-brand-black text-white font-light uppercase tracking-[0.2em] hover:bg-brand-pink transition-colors text-sm"
            >
              Identify a District to Fund
            </Link>
            <Link 
              to="/start" 
              className="px-10 py-5 border-2 border-brand-black font-light uppercase tracking-[0.2em] hover:bg-brand-black hover:text-white transition-all text-sm"
            >
              Start Implementation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
