import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  MapPin, 
  ArrowRight, 
  HeartPulse, 
  ShieldCheck, 
  AreaChart,
  Users,
  Activity,
  Award,
  Zap,
  Globe2,
  ChevronRight,
  Stethoscope,
  TrendingUp,
  ServerCog,
  X
} from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8 }
};

const staggerContainer = {
  initial: {},
  whileInView: {
    transition: { staggerChildren: 0.1 }
  },
  viewport: { once: true, margin: "-100px" }
};

export default function Fund() {
  const [investment, setInvestment] = useState<number>(50000);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const impactMetrics = useMemo(() => {
    const newbornsSaved = Math.floor(investment / 2);
    const mothersReached = newbornsSaved;
    const facilitiesEnabled = Math.floor(investment / 10000);
    const districtsTransformed = Math.floor(investment / 100000);
    const providersTrained = Math.floor(investment / 500);
    const kmcSessions = newbornsSaved * 15;

    return { newbornsSaved, mothersReached, facilitiesEnabled, districtsTransformed, providersTrained, kmcSessions };
  }, [investment]);

  return (
    <div className="bg-brand-white text-brand-black selection:bg-brand-pink/30 selection:text-brand-black min-h-screen font-sans">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen flex items-center pt-24 pb-20 px-6 overflow-hidden bg-brand-black text-brand-white">
        <div className="absolute inset-0 z-0">
          <img 
            src="/before-1.jpg.png" 
            alt="District transformation" 
            className="w-full h-full object-cover opacity-40 mix-blend-luminosity scale-105 transform origin-top blur-[2px]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-black/20 to-transparent" />
        </div>

        <div className="max-w-[1400px] w-full mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-3 mb-8"
            >
              <span className="w-8 h-px bg-brand-pink" />
              <span className="text-brand-pink text-xs font-bold uppercase tracking-[0.2em]">District Transformation Model</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-[0.95] mb-8 text-balance"
            >
               Transforming Newborn Survival Across an Entire <span className="font-serif italic text-brand-teal font-normal text-stroke-sm">District.</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-white/70 max-w-2xl font-light leading-relaxed mb-12"
            >
              Build sustainable public health systems that keep mothers and babies together through infrastructure, coaching, digital support, and district-led leadership.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-6"
            >
              <Link to="/donate?type=district" className="inline-flex items-center justify-center px-8 py-5 bg-brand-pink text-white font-bold uppercase tracking-widest text-xs hover:bg-brand-pink/90 transition-all hover:pr-6 group">
                Fund a District <ArrowRight size={16} className="ml-2 group-hover:translate-x-2 transition-transform" />
              </Link>
              <button onClick={() => setIsContactModalOpen(true)} className="inline-flex items-center justify-center px-8 py-5 bg-transparent border border-white/20 text-white font-bold uppercase tracking-widest text-xs hover:bg-white/10 transition-all">
                Start Government Partnership
              </button>
            </motion.div>
          </div>
          
          <div className="lg:col-span-5 relative mt-16 lg:mt-0">
             <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="space-y-6 lg:ml-12"
             >
                {[
                  { label: "Newborns Reached", value: "500,000+" },
                  { label: "Facilities Transformed", value: "400+" },
                  { label: "Districts Reached", value: "86" },
                  { label: "Providers Coached", value: "2000+" }
                ].map((stat, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 backdrop-blur-md p-6 rounded-sm flex items-center justify-between hover:bg-white/10 transition-colors">
                    <span className="text-white/60 font-light uppercase tracking-[0.1em] text-xs max-w-[120px]">{stat.label}</span>
                    <span className="text-white font-serif italic text-4xl">{stat.value}</span>
                  </div>
                ))}
             </motion.div>
          </div>
        </div>
      </section>

      {/* 3. WHAT ONE DISTRICT INVESTMENT ENABLES */}
      <section className="py-24 md:py-32 px-6 bg-[#fafafa]">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-8">
            <motion.div {...fadeInUp} className="max-w-2xl">
              <h4 className="text-brand-black/40 font-bold uppercase tracking-[0.2em] text-xs mb-6 flex items-center gap-3">
                <span className="w-8 h-px bg-brand-black/20" />
                The Impact Model
              </h4>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-brand-black">What One District Partnership <span className="font-serif italic font-normal text-brand-pink">Can Enable.</span></h2>
            </motion.div>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[
              { icon: Building2, stat: "5–10", label: "Facilities Strengthened" },
              { icon: HeartPulse, stat: "20,000+", label: "Mothers & Newborns Reached Annually" },
              { icon: Users, stat: "50+", label: "Nurses & Providers Trained" },
              { icon: MapPin, stat: "100%", label: "District-wide KMC Implementation" },
              { icon: ShieldCheck, stat: "Gov-Owned", label: "Sustainability Systems" },
              { icon: AreaChart, stat: "Real-Time", label: "Quality Improvement Mechanisms" }
            ].map((item, i) => (
              <motion.div 
                key={i} 
                variants={fadeInUp}
                className="bg-white p-12 border border-brand-black/5 hover:border-brand-teal/30 hover:shadow-[0_10px_40px_-10px_rgba(10,199,199,0.1)] transition-all duration-500 rounded-sm group flex flex-col items-start"
              >
                <div className="w-16 h-16 rounded-full bg-[#fafafa] flex items-center justify-center mb-10 group-hover:bg-brand-teal/10 transition-colors">
                  <item.icon className="text-brand-black/60 group-hover:text-brand-teal transition-colors" size={28} strokeWidth={1.5} />
                </div>
                <div className="text-4xl lg:text-5xl font-serif italic text-brand-black mb-4 font-light">{item.stat}</div>
                <p className="text-sm font-bold uppercase tracking-[0.1em] text-brand-black/50">{item.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 5. INVESTMENT PATHWAYS */}
      <section id="investment-pathways" className="py-24 md:py-40 px-6 bg-[#030303] text-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-8">
            <motion.div {...fadeInUp} className="max-w-2xl">
              <h4 className="text-white/40 font-bold uppercase tracking-[0.2em] text-xs mb-6 flex items-center gap-3">
                <span className="w-8 h-px bg-white/20" />
                Institutional Strategies
              </h4>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">Partnership <span className="font-serif italic text-brand-pink font-normal text-stroke-sm">Pathways.</span></h2>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
             {/* Card 1 */}
             <motion.div {...fadeInUp} className="p-12 border border-white/10 bg-[#0a0a0a] hover:border-brand-pink/50 transition-colors group flex flex-col h-full">
                <Zap className="text-brand-pink mb-10 opacity-70 group-hover:opacity-100 transition-opacity" size={48} strokeWidth={1.5} />
                <h3 className="text-3xl font-bold mb-4">Catalyst Partner</h3>
                <p className="text-white/50 text-base font-light mb-12 max-w-md leading-relaxed">Support early-stage district activation and readiness.</p>
                
                <div className="space-y-4 mb-16 flex-grow">
                   {['Assessments', 'Planning', 'Leadership engagement'].map((item, i) => (
                      <div key={i} className="flex items-center gap-4">
                        <CheckIcon className="text-brand-pink" />
                        <span className="text-white/80 font-light text-lg">{item}</span>
                      </div>
                   ))}
                </div>
                
                <button onClick={() => setIsContactModalOpen(true)} className="inline-flex items-center gap-3 text-brand-pink text-xs font-bold uppercase tracking-[0.2em] hover:gap-5 transition-all mt-auto group/btn">
                  Discuss Partnership <ArrowRight size={16} className="transition-transform" />
                </button>
             </motion.div>

             {/* Card 2 */}
             <motion.div {...fadeInUp} transition={{ delay: 0.1 }} className="p-12 border border-white/10 bg-[#0a0a0a] hover:border-white/50 transition-colors group flex flex-col h-full">
                <Building2 className="text-white mb-10 opacity-70 group-hover:opacity-100 transition-opacity" size={48} strokeWidth={1.5} />
                <h3 className="text-3xl font-bold mb-4">Facility Network Partner</h3>
                <p className="text-white/50 text-base font-light mb-12 max-w-md leading-relaxed">Support multiple public facilities within one geography.</p>
                
                <div className="space-y-4 mb-16 flex-grow">
                   {['Coaching', 'Mentorship', 'Infrastructure optimization'].map((item, i) => (
                      <div key={i} className="flex items-center gap-4">
                        <CheckIcon className="text-white/50" />
                        <span className="text-white/80 font-light text-lg">{item}</span>
                      </div>
                   ))}
                </div>
                
                <button onClick={() => setIsContactModalOpen(true)} className="inline-flex items-center gap-3 text-white/80 text-xs font-bold uppercase tracking-[0.2em] hover:gap-5 transition-all mt-auto group/btn hover:text-white">
                  Discuss Partnership <ArrowRight size={16} className="transition-transform" />
                </button>
             </motion.div>

             {/* Card 3 - Highlighted */}
             <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="p-12 border border-brand-teal/40 bg-[#051111] lg:col-span-2 hover:border-brand-teal transition-colors group flex flex-col relative overflow-hidden h-full min-h-[400px]">
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-teal/5 blur-[100px] rounded-full pointer-events-none transition-all group-hover:bg-brand-teal/10" />
                
                <div className="absolute top-12 right-12 z-10 hidden md:block">
                   <div className="flex items-center gap-2 bg-brand-teal/10 text-brand-teal px-4 py-2 text-[10px] font-bold uppercase tracking-widest border border-brand-teal/20 rounded-full">
                       Highest Leverage
                   </div>
                </div>

                <div className="relative z-10 flex flex-col md:flex-row gap-12 h-full">
                  <div className="md:w-1/2 flex flex-col h-full">
                    <MapPin className="text-brand-teal mb-10 opacity-90 group-hover:scale-110 transition-transform origin-left" size={64} strokeWidth={1} />
                    <h3 className="text-3xl lg:text-4xl font-bold mb-6 tracking-tight">District Transformation Partner</h3>
                    <p className="text-white/60 text-lg font-light mb-12 leading-relaxed">End-to-end district-wide KMC scale-up supporting entire health ecosystems.</p>
                    
                    <button onClick={() => setIsContactModalOpen(true)} className="inline-flex items-center justify-center p-6 bg-brand-teal text-brand-black w-fit font-bold uppercase tracking-widest text-xs hover:bg-white hover:text-brand-black transition-all mt-auto self-start group/btn">
                      Discuss District Partnership <ArrowRight size={16} className="ml-3 group-hover/btn:translate-x-2 transition-transform" />
                    </button>
                  </div>
                  
                  <div className="md:w-1/2 flex items-center h-full">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 w-full mt-auto mb-auto md:pl-12 md:border-l border-brand-teal/20">
                       {['MNCUs Optimization', 'Quality Systems', 'Live Dashboards', 'Nurse Coaching', 'Digital Support Integration', 'Government Advocacy'].map((item, i) => (
                          <div key={i} className="flex items-start gap-4">
                            <CheckIcon className="text-brand-teal mt-1 shrink-0" />
                            <span className="text-white/90 font-light text-base leading-relaxed">{item}</span>
                          </div>
                       ))}
                    </div>
                  </div>
                </div>
             </motion.div>

             {/* Card 4 */}
             <motion.div {...fadeInUp} transition={{ delay: 0.3 }} className="p-12 border border-white/10 bg-[#0a0a0a] hover:border-white/50 transition-colors group flex flex-col h-full lg:col-span-2">
                <div className="flex flex-col md:flex-row gap-12 h-full justify-between items-center relative z-10">
                   <div className="md:w-1/2">
                      <Globe2 className="text-white mb-10 opacity-70 group-hover:opacity-100 transition-opacity" size={48} strokeWidth={1.5} />
                      <h3 className="text-3xl font-bold mb-4">State Scale-Up Partner</h3>
                      <p className="text-white/50 text-base font-light mb-8 max-w-md leading-relaxed">Support multi-district implementation and systems integration.</p>
                      <button onClick={() => setIsContactModalOpen(true)} className="inline-flex items-center gap-3 text-white/80 text-xs font-bold uppercase tracking-[0.2em] hover:gap-5 transition-all mt-auto group/btn hover:text-white">
                        Discuss Partnership <ArrowRight size={16} className="transition-transform" />
                      </button>
                   </div>
                   <div className="md:w-1/2 w-full">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {['Policy Integration', 'Scale-up Architecture', 'Replication Systems', 'State-level Dashboards'].map((item, i) => (
                           <div key={i} className="flex items-center gap-4 bg-white/5 p-4 border border-white/10">
                             <CheckIcon className="text-white/50" />
                             <span className="text-white/80 font-light text-sm">{item}</span>
                           </div>
                        ))}
                      </div>
                   </div>
                </div>
             </motion.div>
          </div>
        </div>
      </section>

      {/* 6. CROWDFUND IMPACT */}
      <section className="py-20 md:py-32 bg-[#020202] text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(245,68,148,0.2)_0%,transparent_60%)] rounded-full pointer-events-none" />
        </div>
        <div className="max-w-[1400px] mx-auto px-6 relative z-10">
          <motion.div {...fadeInUp} className="mb-16 md:mb-24 text-center max-w-3xl mx-auto">
            <h4 className="text-brand-pink font-bold uppercase tracking-[0.2em] text-[10px] mb-6 inline-flex flex-col items-center gap-3">
              <span className="w-px h-8 bg-brand-pink" />
              Crowdfund Impact
            </h4>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8">
              Every Contribution Creates <span className="font-serif italic text-brand-teal font-normal text-stroke-sm">Survival.</span>
            </h2>
            <p className="text-lg text-white/60 font-light leading-relaxed">
              From supporting one newborn to transforming an entire district, every investment strengthens systems that keep mothers and babies together.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
            {/* LEFT SIDE: Contribution Pathways */}
            <div className="space-y-6">
              {[
                { amount: 2, title: "Support One Newborn", desc: "Enable life-saving Kangaroo Mother Care support for one vulnerable newborn in a public facility.", impact: "~ $2 impact contribution", bullets: ["Skin-to-skin care support", "Breastfeeding counseling", "Mother coaching", "Essential newborn monitoring"], cta: "Support a Baby", color: "text-brand-pink", icon: HeartPulse, border: "border-brand-pink/30 hover:border-brand-pink border", type: "baby" },
                { amount: 25, title: "Support a Mother's Journey", desc: "Help mothers stay with their babies inside government facilities through KMC support systems and counseling.", impact: "~ $25 contribution", bullets: [], cta: "Support Mothers", color: "text-white", icon: Users, border: "border-white/10 hover:border-white/30 border", type: "mothers" },
                { amount: 10000, title: "Strengthen One Facility", desc: "Enable training, mentoring, dashboards, and quality systems inside one public health facility.", impact: "~ $10,000 implementation support", bullets: [], cta: "Support a Facility", color: "text-white/80", icon: Building2, border: "border-white/10 hover:border-white/30 border", type: "facility" },
                { amount: 100000, premium: true, title: "Transform an Entire District", desc: "Scale MNCUs, workforce coaching, quality systems, digital support, and district-led implementation across public health facilities.", impact: "Highest Systems Leverage", bullets: [], cta: "Fund a District", color: "text-brand-teal", icon: MapPin, border: "border-brand-teal/40 bg-[#051111] hover:border-brand-teal shadow-[0_0_30px_rgba(10,199,199,0.1)] border", type: "district" }
              ].map((card, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  onMouseEnter={() => setInvestment(card.amount === 2 ? 50 : card.amount)}
                  className={`p-8 md:p-10 transition-all duration-500 group cursor-pointer ${card.border} ${!card.premium && 'bg-white/5 hover:bg-white/10'}`}
                >
                  <div className="flex gap-6 items-start">
                    <div className={`p-4 rounded-full bg-white/5 ${card.color}`}>
                      <card.icon size={24} strokeWidth={1.5} />
                    </div>
                    <div className="flex-1">
                      <h3 className={`text-2xl font-bold mb-2 ${card.premium ? 'text-brand-teal' : 'text-white'}`}>{card.title}</h3>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-4">{card.impact}</p>
                      <p className="text-white/60 font-light text-sm leading-relaxed mb-6">{card.desc}</p>
                      
                      {card.bullets.length > 0 && (
                        <div className="space-y-2 mb-8">
                          {card.bullets.map((b, bi) => (
                            <div key={bi} className="flex items-center gap-3 text-xs text-white/70">
                              <span className="w-1 h-1 rounded-full bg-brand-pink" />
                              {b}
                            </div>
                          ))}
                        </div>
                      )}

                      <Link to={`/donate?type=${card.type}`} className={`inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest transition-all group/btn ${card.premium ? 'text-brand-teal hover:text-white' : 'text-white/80 hover:text-white'}`}>
                        {card.cta} <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* RIGHT SIDE: Live Impact Calculator */}
            <div className="lg:sticky lg:top-24 h-fit">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-brand-white text-brand-black p-8 md:p-12 relative overflow-hidden h-[750px] flex flex-col justify-between border border-brand-black/5"
              >
                 <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-pink/5 blur-[80px] rounded-full pointer-events-none" />
                 
                 <div className="relative z-10 w-full mb-10">
                    <h3 className="text-3xl font-bold mb-2 tracking-tight">See Your Impact in Real Time</h3>
                    <p className="text-brand-black/60 text-sm font-light mb-10 max-w-sm text-balance">Move the slider to visualize how your contribution translates into system-wide newborn survival impact.</p>
                 
                    <div className="mb-10 w-full overflow-hidden">
                      <div className="flex items-baseline gap-2 mb-6">
                        <span className="text-5xl md:text-6xl font-serif italic tracking-tighter text-brand-black max-w-full truncate">${investment.toLocaleString()}</span>
                      </div>
                      <input 
                          type="range" 
                          min="10" 
                          max="200000" 
                          step="1"
                          value={investment}
                          onChange={(e) => setInvestment(Number(e.target.value))}
                          className="w-full h-1 bg-brand-black/10 appearance-none cursor-pointer accent-brand-pink focus:outline-none"
                      />
                    </div>

                    <div className="flex flex-wrap gap-2 mb-10">
                      {[10, 100, 1000, 10000, 50000, 100000, 200000].map(val => (
                        <button 
                          key={val} 
                          onClick={() => setInvestment(val)}
                          className={`px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest border transition-all ${investment === val ? 'bg-brand-black text-white border-brand-black' : 'border-brand-black/10 text-brand-black/60 hover:border-brand-black/30'}`}
                        >
                          ${val >= 1000 ? (val >= 1000000 ? (val/1000000) + 'M' : (val/1000) + 'K') : val.toLocaleString()}
                        </button>
                      ))}
                    </div>
                 </div>

                 <div className="grid grid-cols-2 gap-px bg-brand-black/5 border border-brand-black/5 overflow-hidden relative z-10">
                    {[
                      { val: impactMetrics.newbornsSaved, label: "Newborns Supported", color: "text-brand-pink" },
                      { val: impactMetrics.mothersReached, label: "Mothers Reached", color: "text-brand-black/50" },
                      { val: impactMetrics.facilitiesEnabled, label: "Facilities Strengthened", color: "text-brand-black/50" },
                      { val: impactMetrics.districtsTransformed, label: "Districts Impacted", color: "text-brand-teal" }
                    ].map((metric, idx) => (
                      <div key={idx} className="bg-[#fafafa] p-6 lg:p-8 flex flex-col justify-center gap-2">
                         <div className="flex items-baseline">
                            <AnimatePresence mode="popLayout">
                              <motion.div key={metric.val} initial={{y: 10, opacity: 0}} animate={{y: 0, opacity: 1}} className={`text-3xl md:text-4xl lg:text-5xl font-serif italic ${metric.label.includes('Districts') ? 'text-brand-teal' : 'text-brand-black'} truncate`}>
                                {metric.val.toLocaleString()}
                              </motion.div>
                            </AnimatePresence>
                         </div>
                         <div className={`text-[10px] uppercase font-bold tracking-[0.2em] ${metric.color} leading-snug`}>{metric.label}</div>
                      </div>
                    ))}
                 </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 6.5 SOCIAL PROOF */}
      <section className="py-24 bg-brand-white border-y border-brand-black/5 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 text-center">
          <motion.h2 {...fadeInUp} className="text-3xl md:text-4xl font-bold tracking-tight text-brand-black mb-16">
            Thousands of Newborns. <span className="font-serif italic font-normal text-brand-pink text-stroke-sm">One Collective Movement.</span>
          </motion.h2>
          
          <div className="flex flex-wrap justify-center gap-12 md:gap-24">
            {[
              { label: "Supporters Worldwide", value: "2,400+" },
              { label: "Districts Reached", value: "86" },
              { label: "Newborns Reached", value: "500,000+" },
              { label: "Funding Deployed", value: "$4.2M" }
            ].map((stat, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-serif italic text-brand-black mb-4 font-light">{stat.value}</div>
                <div className="text-[10px] uppercase font-bold tracking-[0.2em] text-brand-black/40">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeInUp} className="mt-20 flex items-center justify-center gap-4 text-[10px] md:text-xs font-bold uppercase tracking-widest text-brand-black/40">
            <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 2 }} className="w-2 h-2 rounded-full bg-brand-teal" />
            Recent supporters joined from: New York, London, Mumbai, Bengaluru, San Francisco
          </motion.div>
        </div>
      </section>

      {/* 6.6 TRANSPARENCY + TRUST */}
      <section className="py-24 md:py-32 bg-[#fafafa]">
        <div className="max-w-[700px] mx-auto px-6">
          <motion.div {...fadeInUp} className="text-center mb-16">
             <h4 className="text-brand-black/40 font-bold uppercase tracking-[0.2em] text-[10px] mb-6">Transparency</h4>
             <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Where Your Contribution Goes</h2>
          </motion.div>
          
          <div className="flex flex-col gap-8 mb-16">
            {[
              { label: "Facility Infrastructure & Kangaroo Mother Care Units", pct: 60, color: "bg-brand-teal" },
              { label: "Training & Nurse Coaching", pct: 20, color: "bg-brand-pink" },
              { label: "Facility Digital Support & Post Discharge Tracking", pct: 15, color: "bg-brand-black" },
              { label: "Quality Systems & District Monitoring", pct: 5, color: "bg-brand-black/60" }
            ].map((item, i) => (
              <div key={i} className="space-y-3">
                <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-brand-black/60">
                  <span>{item.label}</span>
                  <span className="text-brand-black">{item.pct}%</span>
                </div>
                <div className="w-full h-1.5 bg-brand-black/5 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.pct}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 + (i * 0.1) }}
                    className={`h-full ${item.color}`} 
                  />
                </div>
              </div>
            ))}
          </div>

          <motion.div {...fadeInUp} className="border-l-2 border-brand-black/10 pl-6 border-brand-black">
             <p className="text-brand-black/60 font-serif italic text-xl md:text-2xl leading-relaxed">
               "Built with governments for long-term sustainability. Zero percent to proxy interventions or temporary relief models."
             </p>
          </motion.div>
        </div>
      </section>

      {/* 7. WHY GOVERNMENTS PARTNER WITH CEL */}
      <section className="py-20 md:py-28 px-6 bg-brand-white border-t border-brand-black/5">
         <div className="max-w-[1400px] mx-auto">
            <motion.div {...fadeInUp} className="text-center mb-20 md:mb-28">
               <h4 className="text-brand-black/40 font-bold uppercase tracking-[0.2em] text-xs mb-6">Alignment</h4>
               <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
                 Built for Government Systems. <br className="hidden lg:block"/>
                 <span className="font-serif italic text-brand-black/50 font-normal">Designed for Scale.</span>
               </h2>
            </motion.div>

            <motion.div 
               variants={staggerContainer}
               initial="initial"
               whileInView="whileInView"
               viewport={{ once: true }}
               className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-px bg-brand-black/10 border border-brand-black/10 overflow-hidden"
            >
               {[
                 { icon: ShieldCheck, title: "District-led implementation" },
                 { icon: Activity, title: "Integrated with NHM systems" },
                 { icon: Building2, title: "PM-JAY alignment" },
                 { icon: Award, title: "Evidence-backed approach" },
                 { icon: TrendingUp, title: "Low-cost scalable model" },
                 { icon: Users, title: "Workforce capacity building" },
                 { icon: ServerCog, title: "Real-time monitoring" },
                 { icon: Globe2, title: "Long-term sustainability" }
               ].map((item, i) => (
                  <motion.div key={i} variants={fadeInUp} className="bg-white p-10 flex flex-col items-center justify-center text-center aspect-square group hover:bg-[#fafafa] transition-colors">
                    <item.icon className="text-brand-black/40 mb-6 group-hover:text-brand-black transition-colors" size={40} strokeWidth={1} />
                    <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-brand-black/80">{item.title}</h3>
                  </motion.div>
               ))}
            </motion.div>
         </div>
      </section>

      {/* 8. DISTRICT CHAMPIONS */}
      <section className="py-24 md:py-32 px-6 bg-brand-black text-brand-white overflow-hidden relative">
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(10,199,199,0.05)_0%,transparent_50%)]" />
         <div className="max-w-[1400px] mx-auto relative z-10">
            <motion.div {...fadeInUp} className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-end gap-8">
               <div className="max-w-2xl">
                 <h4 className="text-brand-teal font-bold uppercase tracking-[0.2em] text-xs mb-6 flex items-center gap-3">
                   <span className="w-8 h-px bg-brand-teal" />
                   Leadership
                 </h4>
                 <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">Champions Driving <br className="hidden md:block"/><span className="font-serif italic text-white/60 font-normal">System Change.</span></h2>
               </div>
            </motion.div>

            {/* Premium Wall of Fame Carousel / Grid */}
            <div className="flex overflow-x-auto gap-8 pb-16 snap-x snap-mandatory scrollbar-hide">
               {[
                 { name: "Shri. Manish Bansal, IAS", designation: "District Magistrate", region: "Saharanpur, UP", quote: "Implementing KMC systematically across our facilities is fundamentally changing how we care for our most vulnerable citizens.", image: "/champions/Shri. Manish Bansal, IAS.jpg" },
                 { name: "Ms. Nisha Anant, IAS", designation: "District Magistrate", region: "Amethi, UP", quote: "Partnering with CEL has given us the technical blueprint and coaching needed to empower our nursing staff and save lives.", image: "/champions/Ms. Nisha Anant, IAS.jpg" },
                 { name: "Shri. Gaurang Rathi, IAS", designation: "District Magistrate", region: "Unnao, UP", quote: "This is not just a healthcare intervention; it is a systems transformation that creates lasting infrastructure.", image: "/champions/Shri. Gaurang Rathi, IAS.jpg" },
                 { name: "Mr. Himanshu Nagpal, IAS", designation: "Chief Development Officer", region: "Varanasi, UP", quote: "The data-driven approach and focus on quality improvement over short-term fixes makes this model essential.", image: "/champions/Mr. Himanshu Nagpal, IAS.jpg.png" }
               ].map((p, i) => (
                  <motion.div 
                     key={i}
                     whileHover={{ y: -10 }}
                     className="min-w-[340px] md:min-w-[420px] snap-center bg-white/5 border border-white/10 p-10 group relative transition-all"
                  >
                     <div className="w-24 h-24 rounded-full overflow-hidden mb-8 border border-white/20">
                        <img 
                          src={p.image} 
                          alt={p.name} 
                          className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700" 
                          onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"; }}
                        />
                     </div>
                     <h3 className="text-xl font-bold mb-2 tracking-tight">{p.name}</h3>
                     <p className="text-xs uppercase tracking-widest text-brand-teal mb-8">{p.designation} <span className="opacity-40">|</span> <span className="text-white/60">{p.region}</span></p>
                     <p className="font-serif italic text-white/80 leading-relaxed text-lg">"{p.quote}"</p>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* 9. FINAL CTA SECTION */}
      <section className="relative py-32 md:py-48 px-6 flex items-center justify-center text-center overflow-hidden">
         <div className="absolute inset-0 bg-brand-black z-0 overflow-hidden">
             {/* Simulated cinematic bg */}
             <motion.img 
               initial={{ scale: 1.1 }}
               animate={{ scale: 1 }}
               transition={{ duration: 20, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
               src="/kmc-mother.jpg" 
               alt="Background mothers" 
               className="w-full h-full object-cover opacity-30 mix-blend-luminosity filter blur-[1px]"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/50 to-transparent" />
         </div>

         <div className="relative z-10 max-w-4xl mx-auto space-y-12">
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-tight text-balance">
              A Small Contribution Can <br/><span className="font-serif italic text-brand-pink font-normal text-stroke-sm">Change a Lifetime.</span>
            </h2>
            <p className="text-lg md:text-xl text-white/70 font-light max-w-2xl mx-auto leading-relaxed">
               Help build systems where every vulnerable newborn receives the care they deserve. Join the movement today.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
               <a href="https://www.celworld.org/invest-in-us" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-10 py-5 md:px-12 md:py-6 bg-brand-pink text-white font-bold uppercase tracking-widest text-xs hover:bg-brand-pink/90 transition-all group shadow-[0_0_40px_rgba(245,68,148,0.2)]">
                  Contribute Now <ArrowRight size={16} className="ml-3 group-hover:translate-x-2 transition-transform" />
               </a>
               <button onClick={() => setIsContactModalOpen(true)} className="inline-flex items-center justify-center px-10 py-5 md:px-12 md:py-6 bg-transparent border border-white/20 text-white font-bold uppercase tracking-widest text-xs hover:bg-white/10 transition-all">
                  Partner With Us
               </button>
            </div>
         </div>
      </section>

      <AnimatePresence>
        {isContactModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsContactModalOpen(false)}
              className="fixed inset-0 bg-brand-black/80 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative bg-white w-full max-w-xl mx-auto rounded-xl shadow-2xl overflow-hidden my-8"
            >
              <button onClick={() => setIsContactModalOpen(false)} className="absolute top-6 right-6 text-brand-black/40 hover:text-brand-black transition-colors z-10">
                <X size={24} />
              </button>
              <div className="p-10 md:p-12">
                <h3 className="text-2xl font-bold mb-2">Partner with Us</h3>
                <p className="text-brand-black/60 mb-8 font-light leading-relaxed">Leave your details and our partnership team will reach out to discuss how we can scale impact together.</p>
                
                <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); setIsContactModalOpen(false); }}>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-brand-black/40">Full Name</label>
                    <input required type="text" className="w-full px-4 py-3 bg-[#fafafa] border border-brand-black/10 rounded-sm focus:outline-none focus:border-brand-teal transition-colors outline-none" placeholder="Jane Doe" />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-brand-black/40">Email</label>
                      <input required type="email" className="w-full px-4 py-3 bg-[#fafafa] border border-brand-black/10 rounded-sm focus:outline-none focus:border-brand-teal transition-colors outline-none" placeholder="jane@organization.org" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-brand-black/40">Mobile Number</label>
                      <input required type="tel" className="w-full px-4 py-3 bg-[#fafafa] border border-brand-black/10 rounded-sm focus:outline-none focus:border-brand-teal transition-colors outline-none" placeholder="+1 (555) 000-0000" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-brand-black/40">Partnership Interest</label>
                    <select required className="w-full px-4 py-3 bg-[#fafafa] border border-brand-black/10 rounded-sm focus:outline-none focus:border-brand-teal transition-colors text-brand-black/80 appearance-none outline-none">
                      <option value="" disabled selected>Select an option</option>
                      <option value="catalyst">Catalyst Partner</option>
                      <option value="facility">Facility Network Partner</option>
                      <option value="district">District Transformation Partner</option>
                      <option value="state">State Scale-Up Partner</option>
                      <option value="other">Other / General Inquiry</option>
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-brand-black/40">Message (Optional)</label>
                    <textarea rows={4} className="w-full px-4 py-3 bg-[#fafafa] border border-brand-black/10 rounded-sm focus:outline-none focus:border-brand-teal transition-colors resize-none outline-none" placeholder="How can we partner?"></textarea>
                  </div>
                  
                  <button type="submit" className="w-full py-4 bg-brand-black text-white font-bold uppercase tracking-widest text-xs hover:bg-brand-pink transition-colors">
                     Submit Inquiry
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M20 6 9 17l-5-5"/>
    </svg>
  );
}
