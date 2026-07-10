import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Heart,
  Baby,
  Building2,
  MapPin,
  CheckCircle2,
  ShieldCheck,
  Lock,
  ArrowRight,
  TrendingDown,
  Globe2,
  Users
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  viewport: { once: true, margin: "-100px" }
};

const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.1 } },
  viewport: { once: true, margin: "-100px" }
};

type SupportType = 'baby' | 'mothers' | 'facility' | 'district';

const SUPPORT_TYPES = [
  { id: 'baby', label: 'Support a Baby', icon: Baby },
  { id: 'mothers', label: 'Support Mothers', icon: Heart },
  { id: 'facility', label: 'Support a Facility', icon: Building2 },
  { id: 'district', label: 'Fund a District', icon: MapPin },
] as const;

export default function Donate() {
  const location = useLocation();
  const [supportType, setSupportType] = useState<SupportType>('baby');
  const [amount, setAmount] = useState<number | 'custom' | 'discuss'>(25);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const type = params.get('type') as SupportType;
    if (type && ['baby', 'mothers', 'facility', 'district'].includes(type)) {
      setSupportType(type);
    }
  }, [location]);

  useEffect(() => {
    if (supportType === 'baby') setAmount(25);
    else if (supportType === 'mothers') setAmount(100);
    else if (supportType === 'facility') setAmount(10000);
    else if (supportType === 'district') setAmount(100000);
  }, [supportType]);

  const amountsOptions = {
    baby: [2, 10, 25, 50, 'custom'],
    mothers: [25, 50, 100, 250, 'custom'],
    facility: [5000, 10000, 25000, 'custom'],
    district: [50000, 100000, 250000, 'discuss'],
  };

  const currentOptions = amountsOptions[supportType];

  const actualAmount = useMemo(() => {
    if (amount === 'discuss') return 0;
    if (amount === 'custom') return parseInt(customAmount) || 0;
    return amount;
  }, [amount, customAmount]);

  const impactText = useMemo(() => {
    if (amount === 'discuss') return "We will reach out to discuss a custom partnership scale-up.";
    
    if (actualAmount <= 10) return "Supports one vulnerable newborn through Kangaroo Mother Care.";
    if (actualAmount <= 50) return `Supports a mother-baby care journey and essential mentoring.`;
    if (actualAmount < 1000) return `Enables comprehensive support for ${Math.max(1, Math.floor(actualAmount / 25))} mother-newborn pairs.`;
    if (actualAmount < 10000) return `Provides training, equipment, and digital tracking for hundreds of babies.`;
    if (actualAmount < 50000) return `Strengthens one public health facility through training and mentoring.`;
    return `Can help scale district-wide newborn care systems and save thousands of lives.`;
  }, [actualAmount, amount]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (success) {
    return (
      <div className="min-h-screen bg-brand-black text-white flex flex-col items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,199,199,0.15)_0%,transparent_70%)]" />
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          {Array.from({ length: 40 }).map((_, i) => (
             <motion.div
               key={i}
               initial={{ y: "110vh", x: `${Math.random() * 100}vw`, opacity: 0, scale: Math.random() * 2 }}
               animate={{ y: "-10vh", opacity: [0, 1, 0], scale: 1 }}
               transition={{ duration: Math.random() * 2 + 2, ease: "easeOut", delay: Math.random() * 0.5 }}
               className="absolute w-2 h-2 rounded-full bg-brand-teal"
             />
          ))}
          {Array.from({ length: 40 }).map((_, i) => (
             <motion.div
               key={i + 40}
               initial={{ y: "110vh", x: `${Math.random() * 100}vw`, opacity: 0, scale: Math.random() * 2 }}
               animate={{ y: "-10vh", opacity: [0, 1, 0], scale: 1 }}
               transition={{ duration: Math.random() * 2 + 2, ease: "easeOut", delay: Math.random() * 0.5 }}
               className="absolute w-2 h-2 rounded-full bg-brand-pink"
             />
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 max-w-2xl text-center px-6"
        >
          <div className="w-24 h-24 rounded-full bg-brand-teal/20 flex items-center justify-center mx-auto mb-10 border border-brand-teal/30 shadow-[0_0_50px_rgba(10,199,199,0.2)]">
            <Heart className="text-brand-teal w-12 h-12" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-8">You Just Helped <span className="font-serif italic text-brand-teal/90 font-normal">Save Lives.</span></h1>
          <p className="text-lg md:text-xl text-white/60 mb-12 font-light leading-relaxed text-balance">
            Thank you for supporting mothers and vulnerable newborns through Kangaroo Mother Care. Your contribution of <span className="text-white font-medium">${actualAmount.toLocaleString()}</span> directly strengthens public newborn health systems.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button onClick={() => setSuccess(false)} className="px-8 py-4 bg-brand-teal text-brand-black uppercase tracking-widest text-xs font-bold hover:bg-white transition-colors w-full sm:w-auto">
              Support Another Baby
            </button>
            <Link to="/impact" className="px-8 py-4 bg-transparent border border-white/20 text-white uppercase tracking-widest text-xs font-bold hover:bg-white/10 transition-colors w-full sm:w-auto">
              See Your Impact
            </Link>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#030303] text-white flex flex-col md:flex-row overflow-hidden relative">
      
      {/* LEFT SIDE - IMPACT VIZ & STORYTELLING */}
      <div className="relative w-full md:w-1/2 min-h-[50vh] md:min-h-screen p-8 md:p-16 flex flex-col justify-between border-b md:border-b-0 md:border-r border-white/10 z-10">
        
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a]/90 via-[#0a0a0a]/60 to-[#0a0a0a]/30 z-10" />
          <div className="absolute inset-0 bg-brand-black opacity-80 z-10 mix-blend-multiply" />
          {/* Subtle slow pulsing background glow */}
          <motion.div 
            animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.05, 1] }} 
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 -left-1/4 w-[150%] h-[150%] bg-gradient-to-tr from-brand-teal/10 via-transparent to-brand-pink/5 rounded-full blur-[120px] pointer-events-none z-0" 
          />
          <img 
            src="https://images.unsplash.com/photo-1541315589087-0b19b6264ee1?q=80&w=2672&auto=format&fit=crop" 
            alt="Kangaroo Mother Care" 
            className="w-full h-full object-cover object-center mix-blend-overlay opacity-60"
          />
        </div>

        <div className="relative z-20 pt-16 md:pt-12">
          <motion.div initial={{opacity: 0, y: 10}} animate={{opacity: 1, y: 0}} transition={{delay: 0.2}}>
            <h4 className="text-brand-teal font-bold uppercase tracking-[0.2em] text-[10px] mb-8 inline-flex items-center gap-3">
              <span className="w-8 h-px bg-brand-teal/50" />
              Your Contribution Creates Survival
            </h4>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-8 text-white">
              Support Life-Saving <br/>
              <span className="font-serif italic text-brand-pink/90 font-normal">Kangaroo Mother Care</span>
            </h1>
            <p className="text-lg text-white/70 max-w-md font-light leading-relaxed">
              Your support helps vulnerable newborns survive and thrive through evidence-based newborn care inside public health systems.
            </p>
          </motion.div>
        </div>

        <div className="relative z-20 mt-16 lg:mt-32">
           <motion.div 
             variants={staggerContainer} initial="initial" animate="whileInView" 
             className="grid grid-cols-2 gap-4 pb-8"
           >
              {[
                { icon: TrendingDown, label: "40% Higher Survival", desc: "Scientific evidence" },
                { icon: ShieldCheck, label: "WHO Recommended", desc: "Global standards" },
                { icon: Baby, label: "$2 Can Support", desc: "One newborn's care" },
                { icon: Building2, label: "Government Integrated", desc: "Scalable model" }
              ].map((card, i) => (
                <motion.div key={i} variants={fadeInUp} className="bg-black/40 backdrop-blur-md border border-white/10 p-5 rounded-2xl flex flex-col justify-between hover:bg-white/5 transition-colors group">
                   <card.icon className="text-white/50 mb-4 group-hover:text-brand-teal transition-colors" size={24} strokeWidth={1.5} />
                   <div>
                     <h3 className="font-bold text-sm tracking-tight text-white mb-1">{card.label}</h3>
                     <p className="text-[10px] uppercase tracking-widest text-brand-pink/80 font-bold">{card.desc}</p>
                   </div>
                </motion.div>
              ))}
           </motion.div>

           <div className="text-xs text-white/40 font-light border-t border-white/10 pt-6 mt-4 pb-4 md:pb-0">
              <p>Every contribution directly supports newborn care systems, mothers, mentoring, and public facility strengthening.</p>
           </div>
        </div>

      </div>

      {/* RIGHT SIDE - DONATION FORM */}
      <div className="relative w-full md:w-1/2 flex items-center justify-center p-6 md:p-12 lg:p-20 z-20">
         
         <motion.div 
           initial={{ opacity: 0, x: 20 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.8, delay: 0.3 }}
           className="w-full max-w-[600px] relative"
         >
            {/* Glassmorphism Donation Card */}
            <div className="relative bg-white/5 backdrop-blur-2xl border border-white/20 p-8 md:p-12 rounded-[28px] shadow-[0_0_100px_rgba(255,255,255,0.05)] overflow-hidden">
               {/* Soft animated glow on border */}
               <div className="absolute -inset-[1px] bg-gradient-to-tr from-brand-teal/30 via-transparent to-brand-pink/30 rounded-[28px] -z-10 blur-[1px]" />
               
               {/* Form Content */}
               
               {/* Step 1: Support Type */}
               <div className="mb-10">
                  <div className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-4">Step 1 — Contribution Type</div>
                  <div className="grid grid-cols-2 gap-2">
                     {SUPPORT_TYPES.map(type => (
                        <button
                          key={type.id}
                          onClick={() => setSupportType(type.id as SupportType)}
                          className={`flex items-center justify-center gap-2 px-4 py-4 rounded-xl text-xs font-bold uppercase tracking-widest transition-all
                            ${supportType === type.id ? 'bg-white text-brand-black shadow-[0_0_20px_rgba(255,255,255,0.2)]' : 'bg-black/30 border border-white/10 text-white/70 hover:bg-white/10'}`}
                        >
                           <type.icon size={16} className={supportType === type.id ? 'text-brand-pink' : 'text-white/50'} />
                           {type.label}
                        </button>
                     ))}
                  </div>
               </div>

               {/* Step 2: Amount Selection */}
               <div className="mb-10">
                  <div className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-4">Step 2 — Select Amount</div>
                  
                  <div className="flex flex-wrap gap-3 mb-6">
                     <AnimatePresence mode="popLayout">
                       {currentOptions.map((opt) => (
                          <motion.button
                            key={opt}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            onClick={() => {
                               setAmount(opt as number | 'custom' | 'discuss');
                               if (opt !== 'custom') setCustomAmount('');
                            }}
                            className={`flex-1 min-w-[30%] px-2 py-4 rounded-xl text-sm font-bold tracking-tight transition-all border
                              ${amount === opt ? 'bg-brand-pink/10 border-brand-pink text-white shadow-[0_0_15px_rgba(245,68,148,0.2)]' : 'bg-black/30 border-white/10 text-white/70 hover:bg-white/5'}
                            `}
                          >
                             {opt === 'custom' ? 'Custom Amount' : opt === 'discuss' ? 'Discuss Partnership' : `$${opt.toLocaleString()}`}
                          </motion.button>
                       ))}
                     </AnimatePresence>
                  </div>

                  <AnimatePresence>
                    {amount === 'custom' && (
                       <motion.div initial={{opacity: 0, height: 0}} animate={{opacity: 1, height: 'auto'}} exit={{opacity: 0, height: 0}}>
                          <div className="relative mb-6">
                            <span className="absolute left-6 top-1/2 -translate-y-1/2 text-2xl font-light text-white/50">$</span>
                            <input 
                              type="number"
                              value={customAmount}
                              onChange={(e) => setCustomAmount(e.target.value)}
                              placeholder="Enter amount" 
                              className="w-full bg-black/40 border border-white/10 rounded-xl px-12 py-5 text-2xl font-serif italic text-white focus:outline-none focus:border-brand-teal transition-colors"
                            />
                          </div>
                       </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Impact Calculator */}
                  <motion.div 
                    key={supportType}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-5 rounded-xl border border-white/5 bg-gradient-to-r from-white/5 to-transparent flex items-start gap-4"
                  >
                     <div className="w-8 h-8 rounded-full bg-brand-teal/20 flex items-center justify-center flex-shrink-0 mt-1">
                        <TrendingDown size={14} className="text-brand-teal" />
                     </div>
                     <div>
                        <div className="text-[10px] font-bold uppercase tracking-widest text-brand-teal mb-1">Estimated Impact</div>
                        <AnimatePresence mode="popLayout">
                          <motion.p key={actualAmount} initial={{opacity: 0, x: -10}} animate={{opacity: 1, x: 0}} className="text-sm text-white/90 font-light leading-relaxed">
                            {impactText}
                          </motion.p>
                        </AnimatePresence>
                     </div>
                  </motion.div>
               </div>

               <form onSubmit={handleSubmit} className="space-y-10">
                 {/* Step 3: Donor Details */}
                 <div>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-6 border-t border-white/10 pt-8">Step 3 — Donor Details</div>
                    <div className="space-y-4">
                       <input required type="text" placeholder="Full Name" className="w-full bg-black/30 border border-white/10 rounded-xl px-5 py-4 text-sm text-white focus:outline-none focus:border-brand-pink/50 transition-colors placeholder:text-white/30" />
                       <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <input required type="email" placeholder="Email Address" className="w-full bg-black/30 border border-white/10 rounded-xl px-5 py-4 text-sm text-white focus:outline-none focus:border-brand-pink/50 transition-colors placeholder:text-white/30" />
                          <input required type="tel" placeholder="Phone Number" className="w-full bg-black/30 border border-white/10 rounded-xl px-5 py-4 text-sm text-white focus:outline-none focus:border-brand-pink/50 transition-colors placeholder:text-white/30" />
                       </div>
                       <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <select required className="w-full bg-black/30 border border-white/10 rounded-xl px-5 py-4 text-sm text-white focus:outline-none focus:border-brand-pink/50 transition-colors appearance-none outline-none">
                             <option value="" disabled selected className="text-black">Select Country</option>
                             <option className="text-black">United States</option>
                             <option className="text-black">India</option>
                             <option className="text-black">United Kingdom</option>
                             <option className="text-black">Canada</option>
                             <option className="text-black">Other</option>
                          </select>
                          <input type="text" placeholder="Organization (Optional)" className="w-full bg-black/30 border border-white/10 rounded-xl px-5 py-4 text-sm text-white focus:outline-none focus:border-brand-pink/50 transition-colors placeholder:text-white/30" />
                       </div>

                       <div className="flex flex-col gap-3 mt-6 pt-4">
                          <label className="flex items-center gap-3 cursor-pointer group">
                            <input type="checkbox" className="w-5 h-5 rounded border-white/20 bg-black/30 checked:bg-brand-teal accent-brand-teal" />
                            <span className="text-xs text-white/60 group-hover:text-white/90 transition-colors font-light">I would like updates on KMC impact and implementation.</span>
                          </label>
                          <label className="flex items-center gap-3 cursor-pointer group">
                            <input type="checkbox" className="w-5 h-5 rounded border-white/20 bg-black/30 checked:bg-brand-pink accent-brand-pink" defaultChecked={amount !== 'discuss' && actualAmount < 5000} />
                            <span className="text-xs text-white/60 group-hover:text-white/90 transition-colors font-light">Make this a monthly recurring contribution.</span>
                          </label>
                       </div>
                    </div>
                 </div>

                 {/* Step 4: Payment Section */}
                 <div className="pt-8 border-t border-white/10">
                    <button type="submit" className="w-full py-5 rounded-xl bg-white text-brand-black text-sm font-bold uppercase tracking-widest hover:bg-brand-teal hover:text-brand-black transition-all shadow-[0_0_30px_rgba(255,255,255,0.1)] flex items-center justify-center gap-3 group relative overflow-hidden">
                       <span className="relative z-10 flex items-center gap-3">
                         {amount === 'discuss' ? 'Submit Inquiry' : (
                           <>
                             <Lock size={16} /> 
                             {supportType === 'baby' ? 'Support a Baby' : 
                              supportType === 'mothers' ? 'Support Mothers' : 
                              supportType === 'facility' ? 'Fund This Facility' : 
                              'Complete Secure Payment'}
                           </>
                         )}
                       </span>
                       <div className="absolute inset-0 bg-brand-teal opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </button>
                    
                    <div className="mt-6 flex flex-col items-center justify-center gap-2">
                       <div className="text-[10px] text-white/50 font-bold uppercase tracking-widest flex items-center gap-2">
                         <ShieldCheck size={12} className="text-brand-teal" /> 80G Tax Benefit Available
                       </div>
                       <p className="text-xs text-white/30 font-light text-center">Your contribution directly supports public newborn care systems. Secure processing via Stripe / Razorpay.</p>
                    </div>
                 </div>
               </form>
            </div>
         </motion.div>

         {/* Bottom Trust Section (Slim) */}
         <div className="absolute bottom-4 md:bottom-8 left-0 right-0 px-6 w-full max-w-[1400px] mx-auto z-0 hidden md:flex items-center justify-between text-[9px] uppercase tracking-widest text-white/20 font-bold">
            <div className="flex items-center gap-2"><CheckCircle2 size={12} /> WHO Recommended</div>
            <div className="flex items-center gap-2"><Globe2 size={12} /> Government Partnerships</div>
            <div className="flex items-center gap-2"><Users size={12} /> 500,000+ Babies Reached</div>
            <div className="flex items-center gap-2"><Building2 size={12} /> 400+ Facilities</div>
            <div className="hidden lg:flex items-center gap-2"><CheckCircle2 size={12} /> ICMR Collaborating Centre</div>
         </div>
      </div>
      
    </div>
  );
}
