import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowDown, ArrowUp, CheckCircle2, ShieldCheck, HeartPulse, Building2, Users, MapPin, BadgeCheck, Stethoscope, ChevronRight, Quote } from 'lucide-react';
import { useState, useRef } from 'react';
import { AnimatedNumber } from '@/src/components/ui/AnimatedNumber';
import { cn } from '@/src/lib/utils';
import { ComposedChart, Area, Bar, Line, XAxis, YAxis, Tooltip as RechartsTooltip, ResponsiveContainer, CartesianGrid, Legend } from 'recharts';

const scaleUpData = [
  { year: '2016', cumulative: 6, new: 6 },
  { year: '2017', cumulative: 68, new: 62 },
  { year: '2018', cumulative: 69, new: 1 },
  { year: '2019', cumulative: 174, new: 105 },
  { year: '2020', cumulative: 174, new: 0 },
  { year: '2021', cumulative: 176, new: 2 },
  { year: '2022', cumulative: 254, new: 78 },
  { year: '2023', cumulative: 290, new: 36 },
  { year: '2024', cumulative: 309, new: 19 },
  { year: '2025', cumulative: 334, new: 25 },
  { year: '2026', cumulative: 358, new: 24 },
];

const fadeInUp: any = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "0px 0px -100px 0px" },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
};

const staggerContainer: any = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true, margin: "0px 0px -100px 0px" },
  transition: { staggerChildren: 0.1 }
};

export default function Impact() {
  const { scrollYProgress } = useScroll();
  const yBg = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  return (
    <div className="bg-brand-white min-h-screen font-sans overflow-hidden">
      {/* 1. HERO IMPACT OVERVIEW */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-20 px-6 overflow-hidden bg-brand-black text-brand-white border-b border-brand-black/10">
        {/* Subtle Map / Grid Background */}
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)]" />
        </div>
        <motion.div style={{ y: yBg }} className="absolute inset-0 z-0 bg-gradient-to-b from-brand-black via-brand-black to-brand-black/90 pointer-events-none mix-blend-multiply" />

        <div className="max-w-[1400px] mx-auto relative z-10 w-full flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-20"
          >
            <h4 className="text-brand-teal font-bold uppercase tracking-[0.2em] text-[10px] md:text-xs mb-8 flex items-center justify-center gap-3">
              <span className="w-8 h-px bg-brand-teal"></span>
              National Scale Initiative
              <span className="w-8 h-px bg-brand-teal"></span>
            </h4>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-8 leading-[0.9] text-balance">
              The Impact <br />in <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-white to-brand-white/50">Numbers</span>.
            </h1>
            <p className="text-xl md:text-2xl font-light text-brand-white/70 max-w-2xl mx-auto leading-relaxed">
              Data and evidence prove that KMC works at scale.
            </p>
          </motion.div>

          {/* Animated Metrics */}
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            animate="whileInView"
            className="w-full grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12"
          >
            {[
              { label: 'MNCUs Established', value: 350, suffix: '+', color: 'text-brand-teal', icon: <Building2 className="w-5 h-5" /> },
              { label: 'Districts Touched', value: 86, suffix: '', color: 'text-brand-white', icon: <MapPin className="w-5 h-5" /> },
              { label: 'Babies Reached', value: 500, suffix: 'K+', color: 'text-brand-white', icon: <HeartPulse className="w-5 h-5" /> },
              { label: 'District Leaders', value: 100, suffix: '+', color: 'text-brand-pink', icon: <Users className="w-5 h-5" /> }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                variants={fadeInUp}
                className="flex flex-col items-center text-center group"
              >
                <div className="mb-4 text-brand-white/20 group-hover:text-brand-white/40 transition-colors">
                  {stat.icon}
                </div>
                <div className={cn("text-5xl md:text-7xl font-bold tracking-tighter mb-2", stat.color)}>
                  <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-medium text-brand-white/50">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-16 flex flex-wrap justify-center gap-6 text-sm text-brand-white/40 font-mono"
          >
            <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-brand-teal" /> 6 States Covered</span>
            <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-brand-teal" /> 1000+ Healthcare Workers Trained</span>
          </motion.div>
        </div>
      </section>

      {/* 2. BEFORE vs AFTER TRANSFORMATION */}
      <section className="py-24 md:py-32 px-6 bg-[#f8f9fa] border-b border-brand-black/5 overflow-hidden">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-20 text-center max-w-3xl mx-auto">
            <motion.h4 {...fadeInUp} className="text-brand-pink font-bold uppercase tracking-[0.2em] text-xs mb-4">Infrastructure Evolution</motion.h4>
            <motion.h2 {...fadeInUp} className="text-4xl md:text-6xl font-bold tracking-tight mb-6">This is public system transformation.</motion.h2>
            <motion.p {...fadeInUp} className="text-lg md:text-xl text-brand-black/60 font-light leading-relaxed">
              From overcrowded, highly medicalized SNCUs to mother-centered care spaces where parents are the primary caregivers alongside nurses.
            </motion.p>
          </div>

          <div className="space-y-16 lg:space-y-32">
            {/* Transformation 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1 }}
              className="grid lg:grid-cols-12 gap-8 items-center"
            >
               <div className="lg:col-span-12 flex flex-col md:flex-row gap-6 relative">
                 <div className="flex-1 relative group rounded-xl overflow-hidden shadow-sm bg-brand-gray/50 border border-brand-black/5 aspect-[4/3] md:aspect-auto md:h-[500px]">
                   <img src="/before.png" alt="Before MNCU" className="absolute w-full h-full object-cover grayscale mix-blend-multiply opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" />
                   <div className="absolute top-4 left-4 bg-brand-black text-white text-[10px] uppercase tracking-widest px-3 py-1.5 rounded-sm font-bold backdrop-blur-md bg-black/40">Before: Overcrowded Post Natal Ward</div>
                   <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                     <p className="text-white text-sm md:text-base font-light text-balance leading-relaxed">Mothers are separated from babies, shifted to PNC while baby in SNCU alone.</p>
                   </div>
                 </div>
                 
                 <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-brand-white rounded-full items-center justify-center shadow-xl z-10 text-brand-teal border border-brand-black/5">
                   <ChevronRight className="w-6 h-6" />
                 </div>

                 <div className="flex-1 relative group rounded-xl overflow-hidden shadow-xl bg-brand-gray/50 border border-brand-black/5 aspect-[4/3] md:aspect-auto md:h-[500px]">
                   <img src="/after.png" alt="After MNCU" className="absolute w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                   <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.1)] pointer-events-none" />
                   <div className="absolute top-4 left-4 bg-brand-teal text-white text-[10px] uppercase tracking-widest px-3 py-1.5 rounded-sm font-bold shadow-lg">After: operational MNCU</div>
                   <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                     <div className="flex items-center gap-2 mb-2">
                       <MapPin className="text-brand-pink w-4 h-4" />
                       <span className="text-white font-bold text-sm tracking-wide uppercase">District Hospital, UP</span>
                     </div>
                     <p className="text-white text-sm md:text-base font-light text-balance leading-relaxed">Mothers provided dignified beds alongside their babies, providing 24/7 skin-to-skin care with medical support.</p>
                   </div>
                 </div>
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. THE SCIENCE OF IMPACT */}
      <section className="py-24 md:py-32 px-6 bg-brand-white relative">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center">
            <div className="lg:col-span-5 relative z-10">
              <motion.h4 {...fadeInUp} className="text-brand-pink font-bold uppercase tracking-[0.2em] text-xs mb-4 flex items-center gap-2">
                <Stethoscope className="w-4 h-4" /> Evidence & Science
              </motion.h4>
              <motion.h2 {...fadeInUp} className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight leading-[0.95] mb-8 text-balance">
                The Science of Survival.
              </motion.h2>
              <motion.p {...fadeInUp} className="text-lg md:text-xl text-brand-black/70 font-light leading-relaxed mb-10">
                Kangaroo Mother Care isn't just a practice—it's a scientifically proven physiological intervention that fundamentally alters newborn survival trajectories.
              </motion.p>

              <motion.div {...staggerContainer} className="flex flex-col gap-4 text-sm md:text-base font-medium">
                {[
                  "WHO Recommended",
                  "Evidence-Based",
                  "Low-Cost High-Impact",
                  "Scalable Across Public Health Systems"
                ].map((badge, i) => (
                  <motion.div key={i} variants={fadeInUp} className="flex items-center gap-3">
                    <BadgeCheck className="text-brand-teal w-6 h-6 shrink-0" />
                    <span className="text-brand-black/80">{badge}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            <div className="lg:col-span-7">
              <motion.div 
                {...staggerContainer}
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
              >
                {/* Hero Metric */}
                <motion.div variants={fadeInUp} className="md:col-span-2 bg-brand-black text-brand-white p-8 md:p-12 rounded-xl relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-teal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div>
                      <div className="text-sm font-bold uppercase tracking-widest text-brand-teal mb-4">Primary Outcome</div>
                      <div className="text-7xl md:text-[120px] font-bold leading-none tracking-tighter mb-2 text-white">
                        <AnimatedNumber value={40} suffix="%" />
                      </div>
                      <h3 className="text-3xl md:text-4xl font-light tracking-tight">Higher Survival</h3>
                    </div>
                    <p className="text-brand-white/50 max-w-xs text-sm leading-relaxed font-light pb-2">
                      When KMC is initiated within hours of birth for low birth weight infants.
                    </p>
                  </div>
                </motion.div>

                {/* Sub Metrics */}
                {[
                  { value: 72, label: 'Reduction in Hypothermia', trend: 'down', color: 'bg-brand-gray text-brand-black' },
                  { value: 50, label: 'Reduced Severe Infection', trend: 'down', color: 'bg-brand-gray text-brand-black' },
                  { value: 20, label: 'Exclusive Breastfeeding', trend: 'up', color: 'bg-brand-gray text-brand-black' },
                  { value: 40, label: 'Repeat Hospitalisation', trend: 'down', color: 'bg-brand-gray text-brand-black' }
                ].map((stat, i) => (
                  <motion.div key={i} variants={fadeInUp} className={cn("p-8 rounded-xl border border-brand-black/5 group hover:border-brand-black/10 transition-colors", stat.color)}>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="text-5xl font-bold tracking-tighter flex items-center gap-1">
                        <AnimatedNumber value={stat.value} suffix="%" />
                      </div>
                      <div className={cn("flex items-center justify-center w-8 h-8 rounded-full bg-brand-black/5", stat.trend === 'up' ? "text-brand-teal" : "text-brand-pink")}>
                        {stat.trend === 'up' ? <ArrowUp className="w-5 h-5" /> : <ArrowDown className="w-5 h-5" />}
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-brand-black/10">
                      <h3 className="font-medium text-brand-black/80">{stat.label}</h3>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SCALE-UP JOURNEY */}
      <section className="py-24 md:py-32 px-6 bg-brand-black text-brand-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-20 text-center">
             <motion.h4 {...fadeInUp} className="text-brand-teal font-bold uppercase tracking-[0.2em] text-xs mb-4">A MOVEMENT IN MOTION</motion.h4>
             <motion.h2 {...fadeInUp} className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-6">Transforming how India cares for its smallest newborns.</motion.h2>
             <motion.p {...fadeInUp} className="text-lg md:text-xl text-brand-white/60 font-light leading-relaxed max-w-2xl mx-auto">
               Across districts, hospitals, and health systems, Kangaroo Mother Care is becoming the new standard for newborn survival.
             </motion.p>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
             <motion.div {...fadeInUp} className="lg:col-span-7 bg-[#111] p-6 lg:p-10 rounded-2xl border border-brand-white/10">
                <div className="flex justify-between items-end mb-8">
                  <div>
                    <h3 className="text-2xl font-bold mb-1">MNCUs Established</h3>
                    <p className="text-brand-white/50 text-sm font-mono tracking-widest uppercase">Cumulative Data (2016-2026)</p>
                  </div>
                  <div className="text-right">
                    <div className="text-4xl font-bold text-brand-teal">358</div>
                    <p className="text-brand-white/50 text-sm uppercase tracking-widest font-bold">Total Units</p>
                  </div>
                </div>
                
                <div className="h-[400px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <ComposedChart data={scaleUpData} margin={{ top: 20, right: 30, left: -20, bottom: 20 }}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ffffff10" />
                      <XAxis dataKey="year" axisLine={false} tickLine={false} tick={{fill: '#ffffff60', fontSize: 12}} dy={10} />
                      <YAxis yAxisId="left" orientation="left" stroke="#ffffff60" axisLine={false} tickLine={false} tick={{fontSize: 12}} />
                      <YAxis yAxisId="right" orientation="right" stroke="#0AC7C7" axisLine={false} tickLine={false} tick={{fontSize: 12}} />
                      <RechartsTooltip 
                        contentStyle={{ backgroundColor: '#000', border: '1px solid #333', borderRadius: '8px', color: '#fff' }}
                        itemStyle={{ color: '#fff' }}
                        labelStyle={{ color: '#ffffff60', marginBottom: '8px' }}
                      />
                      <Legend wrapperStyle={{ paddingTop: '20px' }} />
                      <Bar yAxisId="left" dataKey="new" name="Per Year Scale Up" fill="#D32E5E" radius={[4, 4, 0, 0]} barSize={20} />
                      <Line yAxisId="right" type="monotone" dataKey="cumulative" name="Cumulative MNCUs" stroke="#0AC7C7" strokeWidth={3} dot={{ r: 4, fill: '#0AC7C7' }} activeDot={{ r: 8 }} />
                    </ComposedChart>
                  </ResponsiveContainer>
                </div>
             </motion.div>

             <div className="lg:col-span-5 space-y-8">
               <motion.div {...fadeInUp} className="relative pl-8 border-l border-brand-white/10 pb-8">
                  <div className="absolute top-0 left-[-5px] w-2 h-2 rounded-full bg-brand-white/20"></div>
                  <div className="text-sm font-bold text-brand-teal mb-1 uppercase tracking-widest">2014 - 2018</div>
                  <h4 className="text-xl font-bold mb-2">From Policy to Practice</h4>
                  <p className="text-brand-white/60 font-light text-sm leading-relaxed">Following the release of national KMC guidelines, Uttar Pradesh pioneered district-level implementation through KMC Lounges across public health facilities, transforming newborn care infrastructure within government systems.</p>
               </motion.div>
               
               <motion.div {...fadeInUp} className="relative pl-8 border-l border-brand-white/10 pb-8">
                  <div className="absolute top-0 left-[-5px] w-2 h-2 rounded-full bg-brand-white/20"></div>
                  <div className="text-sm font-bold text-brand-teal mb-1 uppercase tracking-widest">2019 - 2021</div>
                  <h4 className="text-xl font-bold mb-2">The MNCU Innovation</h4>
                  <p className="text-brand-white/60 font-light text-sm leading-relaxed">The model evolved into Mother-Newborn Care Units (MNCUs), integrating maternal stay with continuous newborn care. Despite COVID-19 disruptions, implementation resilience strengthened the pathway for future scale-up.</p>
               </motion.div>
               
               <motion.div {...fadeInUp} className="relative pl-8 border-l border-brand-teal pb-8">
                  <div className="absolute top-0 left-[-5px] w-2 h-2 rounded-full bg-brand-teal shadow-[0_0_10px_#0AC7C7]"></div>
                  <div className="text-sm font-bold text-brand-teal mb-1 uppercase tracking-widest">2022 - 2024</div>
                  <h4 className="text-xl font-bold mb-2">The Scale-Up Breakthrough</h4>
                  <p className="text-brand-white/60 font-light text-sm leading-relaxed">District-led expansion accelerated rapidly across Uttar Pradesh through the Meerut Division Model and government partnerships, resulting in hundreds of operational KMC and MNCU facilities.</p>
               </motion.div>

               <motion.div {...fadeInUp} className="relative pl-8 border-l border-brand-pink/50">
                  <div className="absolute top-0 left-[-5px] w-2 h-2 rounded-full bg-brand-pink shadow-[0_0_10px_#F54494] animate-pulse"></div>
                  <div className="text-sm font-bold text-brand-pink mb-1 uppercase tracking-widest">2025 - Beyond</div>
                  <h4 className="text-xl font-bold mb-2">Toward System-Wide Transformation</h4>
                  <p className="text-brand-white/60 font-light text-sm leading-relaxed">The movement is now transitioning from facility-level implementation to fully integrated district health system transformation — embedding KMC into routine maternal and newborn care across India.</p>
               </motion.div>
             </div>
          </div>
        </div>
      </section>

      {/* 5. HUMAN IMPACT STORIES */}
      <section className="py-24 md:py-32 px-6 bg-brand-gray overflow-hidden">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-20">
             <motion.h4 {...fadeInUp} className="text-brand-pink font-bold uppercase tracking-[0.2em] text-xs mb-4">Human Impact</motion.h4>
             <motion.h2 {...fadeInUp} className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">Beyond the numbers.</motion.h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {[
              {
                quote: "KMC is the best gesture to show love for my newborn nephew. I feel extremely happy to know that any healthy male family member can provide love, warmth and care through KMC.",
                name: "Kamlesh",
                role: "Uncle, CHC Maharajganj",
                image: "/kamlesh.png"
              },
              {
                quote: "I will not allow anyone else to hold the baby! I want to keep the baby close to my chest and provide warmth. I usually don't like visiting hospitals, but this beautiful KMC lounge makes me want to stay longer.",
                name: "Naani",
                role: "Great Grandmother, DWH Raebareli",
                image: "/naani.png"
              },
              {
                quote: "When they placed him on my chest and I felt his small heart beating against my own, I understood everything we promise to mothers. I felt love, responsibility, bonding and empowerment.",
                name: "Marisa Wilson",
                role: "Stanford University Student",
                image: "/marisa.png"
              },
              {
                quote: "Thank you KMC team for making me part of this best experience ever. I am an SNCU staff nurse, but I will still come to learn more. A deep attachment has been established with this baby.",
                name: "Rajnikant",
                role: "SNCU Staff Nurse, DWH Varanasi",
                image: "/rajnikant.png"
              },
              {
                quote: "The time spent with my child was the most golden moment of my life. I must have done some good deeds to get this beautiful opportunity to fulfill my duty as a father.",
                name: "Shri Dharmendra",
                role: "KMC Father",
                image: "/dharmendra.png"
              },
              {
                quote: "I did not have any hope seeing my small baby. I keep thinking that without KMC and the nurses' support, my baby would not have survived at all.",
                name: "Savetri Devi",
                role: "KMC Mother",
                image: "/savetri.png"
              }
            ].map((testimonial, i) => (
              <motion.div 
                key={i}
                {...fadeInUp}
                transition={{ delay: i * 0.1 }}
                className={cn(
                  "p-8 md:p-10 rounded-2xl shadow-sm relative group flex flex-col",
                  i % 2 === 0 ? "bg-brand-white border border-brand-black/5" : "bg-brand-black text-white shadow-xl"
                )}
              >
                <Quote className={cn(
                  "w-12 h-12 absolute top-6 left-6 rotate-180 -z-0",
                  i % 2 === 0 ? "text-brand-gray/50" : "text-white/5"
                )} />
                <div className="relative z-10 flex flex-col h-full">
                  <p className={cn(
                    "text-base md:text-lg font-serif italic leading-relaxed mb-8 pt-4 flex-grow",
                    i % 2 === 0 ? "text-brand-black" : "text-white"
                  )}>
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center gap-4 mt-auto">
                    <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 border border-brand-black/10 bg-brand-gray/20">
                       <img 
                          src={testimonial.image} 
                          alt={testimonial.name} 
                          className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                            const parent = e.currentTarget.parentElement;
                            if(parent) {
                              parent.innerHTML = `<div class="w-full h-full flex items-center justify-center text-brand-pink font-bold text-sm uppercase">${testimonial.name.slice(0,2)}</div>`;
                            }
                          }}
                        />
                    </div>
                    <div>
                      <div className={cn("font-bold tracking-wide text-sm", i % 2 === 0 ? "text-brand-black" : "text-white")}>{testimonial.name}</div>
                      <div className={cn("text-xs uppercase tracking-widest font-medium mt-1", i % 2 === 0 ? "text-brand-black/60" : "text-brand-teal")}>{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}


