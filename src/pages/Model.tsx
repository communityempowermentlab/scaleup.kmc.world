import { motion } from 'motion/react';
import { ArrowRight, Building2, Stethoscope, Smartphone, RefreshCw, Search } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { Link } from 'react-router-dom';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function Model() {
  return (
    <div className="pt-20">
      {/* 1. HERO SECTION */}
      <section className="bg-[#060606] py-20 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-pink/10 border border-brand-pink/20 rounded-full mb-8">
              <span className="w-2 h-2 bg-brand-pink rounded-full animate-pulse" />
              <span className="text-brand-pink text-[10px] font-bold uppercase tracking-widest">Our Approach</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#ffffff] leading-tight tracking-tighter mb-8 text-balance uppercase">
              A District Led Model for Scaling <span className="text-brand-teal italic font-serif lowercase">Newborn Survival</span>.
            </h1>
            
            <p className="text-[#a29f9f] text-[21px] md:text-[21px] max-w-3xl mx-auto mb-16 leading-relaxed font-light">
              Scaling KMC requires more than infrastructure modifications. It requires a system that integrates space, people, data, and continuous support.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full max-w-7xl relative"
          >
            <div className="relative rounded-sm overflow-hidden bg-transparent">
              {/* Note: User attached photo for VISUAL Model, we expect it in public/ */}
              <img 
                src="/model-hero.jpg.png" 
                alt="District Led Model" 
                className="w-full h-auto object-contain" 
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const placeholder = e.currentTarget.nextElementSibling as HTMLElement;
                  if (placeholder) placeholder.style.display = 'flex';
                }}
              />
              <div className="hidden absolute inset-0 bg-brand-black/5 flex-col items-center justify-center p-8 text-center border-2 border-dashed border-brand-black/20 m-4 rounded-sm">
                <Search className="w-12 h-12 text-brand-teal mb-4 opacity-50" />
                <p className="font-mono text-sm text-brand-black/50">Upload attached photo to the public folder as "model-hero.jpg"</p>
              </div>
            </div>
            
            {/* Caption */}
            <p className="mt-8 text-[#cc64a5] italic text-lg lg:text-xl max-w-3xl mx-auto text-center font-serif leading-relaxed">
              "Each component reinforces the other, creating a self sustaining system that improves care continuously."
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. THE COMPONENTS */}
      <section className="bg-brand-black py-24 px-6 text-brand-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 text-center">
            <h4 className="text-brand-teal font-bold uppercase tracking-[0.2em] text-xs mb-4">Core Pillars</h4>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight uppercase">KMC Model Components</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            {[
              { 
                title: 'Space Transformation', 
                desc: 'Creating dedicated MNCUs where mothers and newborns stay together in a sacred, private, safe and comfortable environment maintaining zero separation.',
                outcome: 'Improves KMC adoption and reduces newborn-mother separation',
                icon: <Building2 className="w-8 h-8" />,
                img: '/component-space.jpg.png'
              },
              { 
                title: 'Coaching & Training', 
                desc: 'Building confident frontline providers through hands-on coaching and mentoring to ensure consistent, high-quality care across facilities.',
                outcome: 'Improves quality and consistency of care',
                icon: <Stethoscope className="w-8 h-8" />,
                img: '/component-training.jpg'
              },
              { 
                title: 'Digital Support', 
                desc: 'Providing 24x7 virtual support and digital monitoring through the KMC App - connecting facilities into a responsive, data-driven system.',
                outcome: 'Enables real-time decision-making and accountability',
                icon: <Smartphone className="w-8 h-8" />,
                img: '/component-digital.jpg.png'
              },
              { 
                title: 'Quality Improvement Cycles', 
                desc: 'Driving continuous improvement through real time data, performance tracking, and structured quality cycles - ensuring standards are maintained at scale.',
                outcome: 'Ensures standards are maintained at scale',
                icon: <RefreshCw className="w-8 h-8" />,
                img: '/component-qic.jpg.png'
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group flex flex-col h-full bg-brand-white/5 border border-brand-white/10 p-6 rounded-sm hover:border-brand-teal transition-colors"
              >
                {/* Visual Image container */}
                <div className="relative h-48 md:h-56 w-full bg-brand-black/50 rounded-sm overflow-hidden mb-6 border border-brand-white/5 shrink-0">
                  <img 
                    src={item.img} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100 mix-blend-luminosity hover:mix-blend-normal"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      const placeholder = e.currentTarget.nextElementSibling as HTMLElement;
                      if(placeholder) placeholder.style.display = 'flex';
                    }}
                  />
                  <div className="hidden absolute inset-0 items-center justify-center flex-col p-4 text-center border border-dashed border-brand-white/20 m-2 rounded-sm bg-brand-black/40">
                    <div className="text-brand-white/30 mb-2">{item.icon}</div>
                    <p className="font-mono text-[10px] text-brand-white/50 uppercase tracking-widest">{item.title} photo</p>
                  </div>
                </div>

                <div className="flex flex-col flex-1">
                  <div className="text-brand-teal font-normal italic text-4xl leading-none mb-4 opacity-50">0{i+1}</div>
                  <h3 className="text-2xl font-bold uppercase tracking-tight text-white/90 mb-4">{item.title}</h3>
                  <p className="text-brand-white/60 text-base leading-relaxed mb-8 flex-1 font-light">{item.desc}</p>
                  
                  {/* Outcome line */}
                  <div className="mt-auto pt-6 border-t border-brand-white/10">
                    <p className="text-brand-pink flex items-start gap-3 font-medium text-lg leading-snug">
                      <ArrowRight className="w-5 h-5 shrink-0 mt-0.5" />
                      <span>{item.outcome}</span>
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. HOW IT SCALES */}
      <section className="bg-brand-gray py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24 max-w-3xl mx-auto">
            <motion.h4 {...fadeInUp} className="text-brand-pink font-bold uppercase tracking-[0.2em] text-xs mb-4">Scalability</motion.h4>
            <motion.h2 {...fadeInUp} className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-brand-black mb-8 leading-none uppercase">
              Designed for scale across districts.
            </motion.h2>
            <motion.p {...fadeInUp} className="text-xl text-brand-black/70 leading-relaxed font-light">
              The model follows a repeatable district-led approach from assessment to implementation and continuous monitoring, making it adaptable across geographies.
            </motion.p>
          </div>

          {/* 5-Step Flow */}
          <div className="relative mt-20">
            {/* Connecting Line - Desktop Only */}
            <div className="hidden lg:block absolute top-[45px] left-[10%] right-[10%] h-[2px] bg-brand-black/10 z-0">
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                viewport={{ once: true }}
                className="absolute top-0 left-0 h-full bg-brand-teal"
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-6 relative z-10">
              {[
                { step: '01', title: 'District Onboarding', desc: 'Aligning leadership and establishing ownership.' },
                { step: '02', title: 'Facility Readiness', desc: 'Assessing and preparing the infrastructure and teams.' },
                { step: '03', title: 'MNCU Setup', desc: 'Creating the specialized space for KMC intervention.' },
                { step: '04', title: 'Training', desc: 'Building capacity of healthcare staff and frontline workers.' },
                { step: '05', title: 'Monitoring', desc: 'Continuous data tracking to sustain quality.' }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.15 }}
                  viewport={{ once: true }}
                  className="relative flex flex-col items-center text-center group"
                >
                  {/* Step Node */}
                  <div className="w-[90px] h-[90px] rounded-full bg-brand-white border-[4px] border-brand-gray flex items-center justify-center mb-6 shadow-xl text-brand-black group-hover:border-brand-teal group-hover:text-brand-teal transition-colors relative z-10">
                    <span className="font-bold text-2xl font-serif italic">{item.step}</span>
                  </div>
                  
                  {/* Vertical connecting line for mobile */}
                  {i !== 4 && (
                    <div className="absolute top-[90px] w-[2px] h-[calc(100%+48px)] bg-brand-black/10 lg:hidden -z-10" />
                  )}
                  
                  <h3 className="text-lg font-bold uppercase tracking-tight text-brand-black mb-3">{item.title}</h3>
                  <p className="text-sm text-brand-black/60 leading-relaxed font-light">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-brand-teal py-24 px-6 text-center text-brand-black overflow-hidden relative">
        <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-brand-pink/20 blur-[100px] rounded-full" />
        <div className="max-w-2xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight mb-8">Ready to transform your district?</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
             <Link 
              to="/start" 
              className="inline-flex items-center justify-center gap-3 px-8 py-5 bg-brand-black text-white font-semibold uppercase tracking-widest text-sm hover:bg-brand-pink transition-colors rounded-sm"
            >
              Start the Journey
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
