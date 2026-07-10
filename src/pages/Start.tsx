import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { ArrowRight, ClipboardCheck, Building2, GraduationCap, PlayCircle, Users, Stethoscope, Hammer, HeartPulse, ShieldCheck, AreaChart, BarChart, X, CheckCircle2 } from 'lucide-react';

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

export default function Start() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const phases = [
    {
      title: "Pre Establishment",
      color: "text-brand-teal",
      bg: "bg-brand-teal/10",
      borderColor: "border-brand-teal",
      steps: [
        {
          title: "Introductory Meeting",
          desc: "Concept sharing with District Admin & Key Stakeholders to align on MNCU objectives."
        },
        {
          title: "Stakeholder Engagement",
          desc: "Formation of communication groups and appointment of a dedicated Nodal Person."
        },
        {
          title: "Facility Profiling",
          desc: "In-depth profiling of the facility to assess current infant care capabilities."
        }
      ]
    },
    {
      title: "During Establishment",
      color: "text-brand-pink",
      bg: "bg-brand-pink/10",
      borderColor: "border-brand-pink",
      steps: [
        {
          title: "GAP Analysis & Budget",
          desc: "Space identification, GAP analysis, and formal budget allocation for the MNCU."
        },
        {
          title: "Civil Work & Branding",
          desc: "Facility renovation, branding implementation, and printing of IEC posters."
        },
        {
          title: "Equipment & Monitoring",
          desc: "Procurement of MNCU equipment and setup of dashboards to track progress."
        }
      ]
    },
    {
      title: "MNCU Functionality",
      color: "text-brand-black",
      bg: "bg-brand-black/5",
      borderColor: "border-brand-black",
      steps: [
        {
          title: "Coaching & Launch",
          desc: "Staff coaching sessions and MNCU Application Launch & Orientation prior to Inauguration."
        },
        {
          title: "Performance & Reviews",
          desc: "Tracking via Performance Ladder (L1-L5), Fortnightly Reviews by Nodal, and DHS reviews by DM/CDO."
        },
        {
          title: "Continuous Support",
          desc: "24x7 Virtual Support, facility dashboards, and need-based facility visits to ensure sustainability."
        }
      ]
    }
  ];

  return (
    <div className="bg-brand-white min-h-screen font-sans">
      {/* Header */}
      <section className="pt-32 pb-20 px-6 bg-brand-black text-brand-white relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)]" />
        </div>
        <div className="max-w-[1400px] mx-auto relative z-10 text-center">
          <motion.h4 {...fadeInUp} className="text-brand-teal font-bold uppercase tracking-[0.2em] text-[10px] md:text-xs mb-8 flex items-center justify-center gap-3">
             <span className="w-8 h-px bg-brand-teal"></span>
             Government Roadmap
             <span className="w-8 h-px bg-brand-teal"></span>
          </motion.h4>
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-8 leading-[0.9] text-balance"
          >
            Start Implementation in <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-white to-brand-white/50">Your District</span>.
          </motion.h1>
          <motion.p {...fadeInUp} className="text-xl md:text-2xl font-light text-brand-white/70 max-w-3xl mx-auto leading-relaxed mb-12">
            A comprehensive, step-by-step framework for District Health Administrations to seamlessly adopt and scale the MNCU model.
          </motion.p>
          <motion.div {...fadeInUp} className="flex justify-center">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="group relative px-8 py-4 bg-brand-pink text-brand-white font-bold rounded-full overflow-hidden shadow-xl hover:shadow-brand-pink/20 transition-all duration-300"
            >
              <div className="absolute inset-0 w-full h-full bg-brand-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              <span className="relative z-10 flex items-center justify-center gap-2">
                Get Support & Implement
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </motion.div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="px-6 py-24 md:py-32 relative">
        <div className="max-w-[1200px] mx-auto">
          <div className="space-y-32">
            {phases.map((phase, pIndex) => (
              <motion.div 
                key={pIndex}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="flex flex-col md:flex-row gap-8 lg:gap-16">
                  {/* Phase Title */}
                  <div className="md:w-1/3 shrink-0">
                    <div className="sticky top-32">
                      <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-none mb-4">{phase.title}</h2>
                      <div className={`w-20 h-1 mt-6 ${phase.bg} border-t-2 ${phase.borderColor}`} />
                    </div>
                  </div>
                  
                  {/* Phase Steps */}
                  <div className="md:w-2/3">
                    <div className="space-y-12">
                      {phase.steps.map((step, sIndex) => (
                        <div key={sIndex} className="relative group">
                          {/* Vertical line connecting steps */}
                          {sIndex !== phase.steps.length - 1 && (
                            <div className="absolute left-[15px] top-[40px] bottom-[-48px] w-px bg-brand-black/10 group-hover:bg-brand-black/20 transition-colors" />
                          )}
                          
                          <div className="flex gap-6">
                            <div className="mt-1 relative z-10">
                              <div className={`w-8 h-8 rounded-full border-2 ${phase.borderColor} bg-brand-white flex items-center justify-center font-bold text-xs ${phase.color}`}>
                                {sIndex + 1}
                              </div>
                            </div>
                            <div>
                              <h3 className="text-2xl font-bold mb-3 tracking-tight">{step.title}</h3>
                              <p className="text-brand-black/60 text-lg font-light leading-relaxed max-w-xl">
                                {step.desc}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Partner Section */}
      <section className="px-6 py-24 md:py-32 bg-brand-white border-t border-brand-black/5 relative overflow-hidden">
        {/* Subtle grid background */}
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.1)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_20%,transparent_100%)]" />
        </div>
        
        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <motion.h4 {...fadeInUp} className="text-brand-teal font-bold uppercase tracking-[0.2em] text-xs mb-6 inline-flex items-center gap-3">
              <span className="w-8 h-px bg-brand-teal"></span>
              Why Districts Partner With CEL
              <span className="w-8 h-px bg-brand-teal"></span>
            </motion.h4>
            <motion.h2 {...fadeInUp} className="font-bold tracking-tight mb-8 text-brand-black text-[39px] leading-[45px] text-balance">
              Empowering district leadership to transform newborn care.
            </motion.h2>
            <motion.p {...fadeInUp} className="text-xl md:text-2xl font-light text-brand-black/60 leading-relaxed">
              CEL works alongside district administrations and health systems to establish sustainable, evidence-based newborn care models that improve outcomes, strengthen systems, and enable long-term scale.
            </motion.p>
          </div>

          <motion.div {...staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-24">
            {[
              {
                title: "Strengthened Newborn Survival Outcomes",
                desc: "Improve survival and care outcomes for vulnerable newborns through evidence-based Kangaroo Mother Care implementation.",
                icon: <HeartPulse className="w-8 h-8 text-brand-pink" />
              },
              {
                title: "District-Led System Transformation",
                desc: "Build sustainable public health systems by integrating infrastructure, coaching, quality improvement, and digital support.",
                icon: <AreaChart className="w-8 h-8 text-brand-teal" />
              },
              {
                title: "Alignment with National Health Priorities",
                desc: "Designed in alignment with NHM guidelines and PM-JAY priorities to support government-led implementation at scale.",
                icon: <Building2 className="w-8 h-8 text-brand-black" />
              },
              {
                title: "Continuous Technical Support",
                desc: "Receive ongoing implementation support, bedside mentoring, data monitoring, and quality improvement coaching.",
                icon: <Stethoscope className="w-8 h-8 text-brand-black" />
              },
              {
                title: "Reduced SNCU Burden",
                desc: "Enable better continuum of care and optimize SNCU utilization through mother-newborn integrated care models.",
                icon: <Building2 className="w-8 h-8 text-brand-teal" />
              },
              {
                title: "Recognition & Leadership Visibility",
                desc: "Position your district as a model for innovation and newborn care transformation through scalable implementation.",
                icon: <ShieldCheck className="w-8 h-8 text-brand-pink" />
              }
            ].map((card, i) => (
              <motion.div 
                key={i} 
                variants={fadeInUp} 
                className="group p-10 bg-brand-gray/30 border border-brand-black/5 hover:border-brand-teal/30 hover:bg-brand-white rounded-2xl transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-brand-teal/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                <div className="mb-8 p-4 bg-brand-white rounded-xl inline-block shadow-sm border border-brand-black/5 group-hover:scale-110 transition-transform duration-500">
                  {card.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 tracking-tight leading-snug">{card.title}</h3>
                <p className="text-brand-black/60 text-lg font-light leading-relaxed">
                  {card.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div {...fadeInUp} className="relative py-16 md:py-24 px-6 rounded-3xl overflow-hidden bg-brand-black flex items-center justify-center text-center group">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-black via-[#111] to-brand-teal/20" />
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-teal to-transparent opacity-50" />
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-pink to-transparent opacity-50" />
            
            <div className="relative z-10 max-w-4xl mx-auto">
              <h3 className="text-2xl md:text-3xl lg:text-5xl font-light text-brand-white leading-relaxed tracking-tight text-balance mb-12">
                "We don't implement parallel programs—we <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-teal to-brand-white">strengthen existing district health systems</span> from within."
              </h3>
              
              <div className="flex justify-center">
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="group relative px-8 py-4 bg-brand-teal text-brand-black font-bold rounded-full overflow-hidden shadow-xl hover:shadow-brand-teal/20 transition-all duration-300"
                >
                  <div className="absolute inset-0 w-full h-full bg-brand-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Get Support & Implement
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Support Request Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-brand-black/60 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-lg bg-brand-white rounded-3xl shadow-2xl overflow-hidden"
            >
              <div className="p-8">
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="absolute top-6 right-6 text-brand-black/40 hover:text-brand-black transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
                
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-brand-teal/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="w-10 h-10 text-brand-teal" />
                    </div>
                    <h3 className="text-3xl font-bold mb-4 tracking-tight text-brand-black">Request Received</h3>
                    <p className="text-brand-black/60 text-lg">
                      Thank you for your interest. Our technical support team will reach out to you shortly to discuss the implementation details.
                    </p>
                    <button 
                      onClick={() => {
                        setIsModalOpen(false);
                        setTimeout(() => setIsSubmitted(false), 500);
                      }}
                      className="mt-8 px-8 py-3 bg-brand-black text-brand-white font-bold rounded-full hover:bg-brand-black/80 transition-colors"
                    >
                      Close
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="mb-8">
                      <h3 className="text-3xl font-bold mb-3 tracking-tight text-brand-black">Request Support</h3>
                      <p className="text-brand-black/60">
                        Fill out the details below and our team will get in touch to help implement MNCU in your district.
                      </p>
                    </div>
                    
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div>
                        <label className="block text-sm font-bold text-brand-black mb-2" htmlFor="name">Name / Designation</label>
                        <input required type="text" id="name" className="w-full px-4 py-3 rounded-xl border border-brand-black/20 focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20 outline-none transition-all" placeholder="e.g. Dr. Jane Doe, CMO" />
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-bold text-brand-black mb-2" htmlFor="state">State</label>
                          <input required type="text" id="state" className="w-full px-4 py-3 rounded-xl border border-brand-black/20 focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20 outline-none transition-all" placeholder="State" />
                        </div>
                        <div>
                          <label className="block text-sm font-bold text-brand-black mb-2" htmlFor="district">District</label>
                          <input required type="text" id="district" className="w-full px-4 py-3 rounded-xl border border-brand-black/20 focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20 outline-none transition-all" placeholder="District" />
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-bold text-brand-black mb-2" htmlFor="phone">Phone Number</label>
                        <input required type="tel" id="phone" className="w-full px-4 py-3 rounded-xl border border-brand-black/20 focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20 outline-none transition-all" placeholder="+91 ..." />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-bold text-brand-black mb-2" htmlFor="email">Email Address</label>
                        <input required type="email" id="email" className="w-full px-4 py-3 rounded-xl border border-brand-black/20 focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20 outline-none transition-all" placeholder="your@email.com" />
                      </div>
                      
                      <button 
                        type="submit"
                        className="w-full relative group px-8 py-4 bg-brand-teal text-brand-white font-bold rounded-full overflow-hidden shadow-xl hover:shadow-brand-teal/20 transition-all duration-300 mt-4"
                      >
                        <div className="absolute inset-0 w-full h-full bg-brand-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                        <span className="relative z-10 flex items-center justify-center gap-2">
                          Submit Request
                        </span>
                      </button>
                    </form>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
