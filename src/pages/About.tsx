import { motion, useScroll, useTransform } from 'motion/react';
import { Quote, ArrowRight, Microscope, Target, Network, Award, ShieldCheck, Milestone, Stethoscope, ChevronRight, Activity, FlaskConical, Beaker, FileCheck, Building2, Users } from 'lucide-react';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

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
    <div className="flex items-center justify-center min-w-[250px] px-12 h-20 transition-all hover:scale-105 cursor-pointer select-none">
      {error ? (
        <span className="font-bold text-xl uppercase tracking-widest text-brand-black text-center whitespace-nowrap bg-clip-text text-transparent bg-gradient-to-r from-brand-pink to-brand-teal">
          {name}
        </span>
      ) : (
        <img 
          src={src} 
          alt={name} 
          onError={() => setError(true)}
          className="max-h-full max-w-[200px] object-contain pointer-events-none drop-shadow-md"
        />
       )}
    </div>
  );
};

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

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <div className="bg-brand-white font-sans min-h-screen" ref={containerRef}>
      {/* 1. HERO SECTION */}
      <section className="relative h-screen flex border-b border-brand-black/5 overflow-hidden bg-brand-black">
        <div className="absolute inset-0 z-0 bg-brand-black">
          <img 
            src="/team-photo.jpg" 
            alt="CEL Team" 
            className="w-full h-full object-cover opacity-30 select-none pointer-events-none"
          />
        </div>
        
        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 flex flex-col justify-center h-full">
          <div className="max-w-4xl pt-20">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1 className="text-4xl md:text-6xl lg:text-[80px] font-bold text-brand-white leading-[1] tracking-tighter mb-6 md:mb-8 text-balance">
                Building systems that <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-pink to-brand-teal italic">save newborn lives</span>.
              </h1>
              <p className="text-lg md:text-2xl font-light text-brand-white/80 leading-relaxed mb-8 md:mb-12 max-w-3xl">
                CEL works with governments, health systems, and frontline providers to transform maternal and newborn care through Kangaroo Mother Care and district-led innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <Link to="/model" className="group inline-flex items-center justify-center gap-3 bg-brand-white text-brand-black px-8 py-5 font-bold uppercase tracking-widest text-sm hover:bg-brand-teal transition-all">
                  Explore Our Model
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a href="#team" className="group inline-flex items-center justify-center gap-3 bg-transparent border border-brand-white/30 text-brand-white px-8 py-5 font-bold uppercase tracking-widest text-sm hover:bg-brand-white hover:text-brand-black transition-all">
                  Meet the Team
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. ORIGIN STORY */}
      <section className="py-20 md:py-28 px-6 relative bg-brand-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
            <motion.div {...fadeInUp} className="lg:col-span-6 relative">
              <div className="aspect-[4/5] rounded-xl overflow-hidden relative group">
                <img 
                  src="/founders.jpg" 
                  alt="Dr Vishwajeet Kumar and Ms Aarti Kumar" 
                  className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-1000 origin-center scale-100 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-black/20 to-transparent pointer-events-none" />
                <div className="absolute bottom-10 left-10 text-white">
                  <p className="font-bold text-xl tracking-tight">Dr. Vishwajeet Kumar & Ms. Aarti Kumar</p>
                  <p className="text-brand-white/60 text-sm uppercase tracking-widest mt-1">Co-founders, CEL</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div {...fadeInUp} className="lg:col-span-6 lg:pl-10">
              <h4 className="text-brand-pink font-bold uppercase tracking-[0.2em] text-xs mb-6 inline-flex items-center gap-3">
                <span className="w-8 h-px bg-brand-pink" />
                How It Began
              </h4>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-8 text-brand-black leading-[1.1]">
                A mission born from a desire to design scalable solutions.
              </h2>
              <div className="space-y-4 text-lg text-brand-black/70 font-light leading-relaxed">
                <p>
                  The seed of the organisation was sown in 2003 when <strong className="font-semibold text-brand-black">Dr. Vishwajeet Kumar</strong> returned from the United States to Uttar Pradesh, India — a region carrying one of the world's highest burdens of newborn deaths — with a mission to design scalable solutions for improving newborn survival.
                </p>
                <p>
                  A physician and epidemiologist by training, former faculty at Johns Hopkins University, and a villager at heart, Dr. Vishwajeet Kumar co-founded CEL in 2011 alongside <strong className="font-semibold text-brand-black">Ms. Aarti Kumar</strong>, an engineer and bioinformaticist who returned from Singapore to contribute to nation-building.
                </p>
                <p>
                  Together, they built CEL as a mission-focused institution dedicated to generating scientific evidence, innovations, and scalable implementation models that improve the survival and thrival of mothers and newborns.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. MISSION & VISION */}
      <section className="py-24 md:py-40 bg-[#FAFAFA] relative overflow-hidden">
        {/* Background Details */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[#FAFAFA] opacity-90 mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")', opacity: 0.03 }}></div>
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-teal/5 rounded-full blur-3xl opacity-50" />
          <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-brand-pink/5 rounded-full blur-3xl opacity-50" />
        </div>

        {/* Mission Section (Text Left, Image Right) */}
        <div className="max-w-[1400px] mx-auto px-6 mb-24 md:mb-32 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div {...fadeInUp} className="order-2 lg:order-1 max-w-xl">
              <h4 className="text-brand-teal font-bold uppercase tracking-[0.2em] text-xs mb-6 flex items-center gap-3">
                <span className="w-8 h-px bg-brand-teal" />
                OUR MISSION
              </h4>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight mb-6 text-brand-black leading-tight text-balance">
                Transforming newborn care through science, systems, and compassion.
              </h2>
              <p className="text-base md:text-lg font-light text-brand-black/70 leading-relaxed">
                We partner with governments, health systems, and communities to scale Kangaroo Mother Care, transforming care for the most vulnerable newborns through evidence, innovation, and district-led action.
              </p>
            </motion.div>
            
            <motion.div {...fadeInUp} className="order-1 lg:order-2 relative h-[250px] md:h-[300px] lg:h-[350px] w-full">
              <div className="absolute inset-0 rounded-lg overflow-hidden group shadow-2xl bg-brand-black">
                <img 
                  src="/preterm-baby.jpg" 
                  alt="Mission in Action" 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-90" 
                  onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1531983412531-1f49a365bb47?q=80&w=2670&auto=format&fit=crop"; }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black/30 via-transparent to-transparent pointer-events-none" />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Vision Section (Image Left, Text Right) */}
        <div className="max-w-[1400px] mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div {...fadeInUp} className="order-1 relative h-[250px] md:h-[300px] lg:h-[350px] w-full">
              <div className="absolute inset-0 rounded-lg overflow-hidden group shadow-2xl bg-brand-black">
                <img 
                  src="/vision.JPG" 
                  alt="Vision for the Future" 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-90" 
                  onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1581056771107-24ca5f033842?q=80&w=2670&auto=format&fit=crop"; }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black/30 via-transparent to-transparent pointer-events-none" />
              </div>
            </motion.div>

            <motion.div {...fadeInUp} className="order-2 max-w-xl lg:pl-10">
              <h4 className="text-brand-pink font-bold uppercase tracking-[0.2em] text-xs mb-6 flex items-center gap-3">
                <span className="w-8 h-px bg-brand-pink" />
                OUR VISION
              </h4>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight mb-6 text-brand-black leading-tight text-balance">
                A future where every newborn receives life-saving care.
              </h2>
              <p className="text-base md:text-lg font-light text-brand-black/70 leading-relaxed">
                To spark a nationwide movement where science and compassion come together to make life-saving newborn care the standard in every district reaching every mother, every newborn, everywhere.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. OUR BELIEF (Quote) */}
      <section className="py-24 md:py-32 px-6 bg-brand-black relative overflow-hidden flex items-center justify-center">
         <div className="absolute inset-0 opacity-40">
           <div className="absolute inset-0 bg-gradient-to-r from-brand-teal/20 via-brand-pink/20 to-brand-black opacity-30 mix-blend-screen" />
           <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_50%)]" />
         </div>
         <div className="relative z-10 max-w-5xl mx-auto text-center">
            <Quote className="mx-auto w-16 h-16 text-brand-white/20 mb-10" />
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-10 leading-tight"
            >
              "We believe every human is a greater possibility."
            </motion.h2>
            <motion.div 
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 1, delay: 0.5 }}
            >
              <p className="text-brand-teal font-bold uppercase tracking-[0.2em] text-lg">Dr. Vishwajeet Kumar</p>
              <p className="text-brand-white/50 text-sm uppercase tracking-widest mt-2">Founder & Chairman, CEL</p>
            </motion.div>
         </div>
      </section>

      {/* 5. OUR JOURNEY (Timeline) */}
      <section className="py-20 md:py-28 px-6 bg-brand-gray border-y border-brand-black/5 overflow-hidden">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
            <div className="max-w-2xl">
              <motion.h4 {...fadeInUp} className="text-brand-pink font-bold uppercase tracking-[0.2em] text-xs mb-6 inline-flex items-center gap-3">
                <span className="w-8 h-px bg-brand-pink" />
                Evolution & Scale
              </motion.h4>
              <motion.h2 {...fadeInUp} className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-brand-black leading-[1]">
                From research to a statewide movement.
              </motion.h2>
            </div>
            <p className="text-xl font-light text-brand-black/60 max-w-md">
              A public health movement gaining momentum over two decades of rigorous evidence generation and systems alignment.
            </p>
          </div>

          <div className="relative">
            {/* Horizontal Line for Desktop */}
            <div className="hidden lg:block absolute top-[28px] left-0 w-full h-[2px] bg-brand-black/10" />
            
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-0 lg:overflow-x-auto pb-12 snap-x px-4 lg:px-0 scrollbar-hide hide-scrollbar">
              {[
                { year: "2003", title: "Shivgarh trial begins" },
                { year: "2004", title: "Early institutional adoption at KGMU" },
                { year: "2007", title: "KMC integrated into ASHA curriculum" },
                { year: "2014", title: "National KMC guidelines released" },
                { year: "2016", title: "Development of KMC Lounge model in UP" },
                { year: "2017", title: "National recognition and Best Practice Award" },
                { year: "2018", title: "Expansion across District Women Hospitals" },
                { year: "2019", title: "First MNCU established in Badaun" },
                { year: "2020", title: "COVID-19 disruptions and resilience" },
                { year: "2021", title: "Scale-up resumes across districts" },
                { year: "2022", title: "Meerut Division Model accelerates implementation" },
                { year: "2023", title: "Rapid statewide expansion across UP" }
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex-shrink-0 w-full lg:w-[320px] relative lg:pr-12 snap-start group"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-[30px] lg:left-0 top-0 w-[14px] h-[14px] bg-brand-white border-2 border-brand-teal rounded-full z-10 group-hover:scale-150 transition-transform duration-300 shadow-[0_0_0_8px_rgba(10,199,199,0.1)]" />
                  
                  {/* Vertical Line for Mobile */}
                  <div className="absolute left-[36px] top-[14px] bottom-[-32px] w-[2px] bg-brand-black/10 lg:hidden" />

                  <div className="pl-16 lg:pl-0 lg:pt-12">
                    <h3 className="text-3xl font-bold font-serif italic text-brand-pink mb-4">{item.year}</h3>
                    <p className="text-xl font-medium text-brand-black leading-snug">{item.title}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. OUR TEAM (Cinematic Slideshow) */}
      <section id="team" className="py-24 md:py-32 px-6 bg-brand-black relative overflow-hidden">
        <div className="absolute inset-0 z-0">
           {/* Subtle background gradient to frame the section */}
           <div className="absolute inset-0 bg-gradient-to-b from-brand-black via-brand-teal/5 to-brand-black pointer-events-none" />
        </div>

        <div className="max-w-[1400px] mx-auto text-center mb-16 md:mb-24 relative z-10">
          <motion.h4 {...fadeInUp} className="text-brand-white/50 font-bold uppercase tracking-[0.2em] text-xs mb-6 inline-flex items-center gap-3">
            <span className="w-8 h-px bg-brand-white/50" />
            Ecosystem of Scale
            <span className="w-8 h-px bg-brand-white/50" />
          </motion.h4>
          <motion.h2 {...fadeInUp} className="text-4xl md:text-6xl lg:text-[80px] font-light tracking-tighter text-brand-white leading-[1.1] mb-8 text-balance">
            The people behind <br /><span className="italic text-brand-white/60 font-serif">the movement.</span>
          </motion.h2>
          <motion.p {...fadeInUp} className="text-lg md:text-2xl text-brand-white/60 font-light max-w-4xl mx-auto leading-relaxed">
            From district implementation teams and nurse mentors to researchers and system leaders, CEL is powered by people committed to transforming newborn care at scale.
          </motion.p>
        </div>

        <div className="relative z-10 w-full overflow-hidden">
          <div className="group relative flex w-full">
            <motion.div 
              initial={{ x: 0 }}
              animate={{ x: "-100%" }}
              transition={{ ease: "linear", duration: 45, repeat: Infinity }}
              className="flex items-center shrink-0 w-max group-hover:[animation-play-state:paused]"
            >
              {[
                {
                  img: "/Agrimaa.jpg",
                  caption: "Team of Agrimaas (from the community)"
                },
                {
                  img: "/Community Visits.jpeg",
                  caption: "Home based follow up visits"
                },
                {
                  img: "/asha meeting.jpeg",
                  caption: "meetings with community health workers"
                },
                {
                  img: "/community engagement.jpg",
                  caption: "Meeting with community people"
                },
                {
                  img: "/meetingwithadmin.jpeg",
                  caption: "Meeting with District Administration"
                }
              ].map((slide, i) => (
                <div key={i} className="relative w-[85vw] md:w-[60vw] lg:w-[45vw] h-[50vh] md:h-[60vh] lg:h-[70vh] mx-4 md:mx-6 shrink-0 overflow-hidden rounded-[32px] md:rounded-[40px] cursor-grab active:cursor-grabbing">
                  <img 
                    src={slide.img} 
                    alt={slide.caption} 
                    className="w-full h-full object-cover transition-transform duration-[10s] group-hover:scale-110 ease-out grayscale hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 flex items-end p-8 md:p-12">
                    <p className="text-xl md:text-3xl text-brand-white font-light tracking-tight">{slide.caption}</p>
                  </div>
                </div>
              ))}
            </motion.div>
            
            {/* Duplicate track for seamless infinite scroll */}
            <motion.div 
              initial={{ x: 0 }}
              animate={{ x: "-100%" }}
              transition={{ ease: "linear", duration: 45, repeat: Infinity }}
              className="flex items-center shrink-0 w-max group-hover:[animation-play-state:paused]"
              aria-hidden="true"
            >
              {[
                {
                  img: "/Agrimaa.jpg",
                  caption: "Team of Agrimaas (from the community)"
                },
                {
                  img: "/Community Visits.jpeg",
                  caption: "Home based follow up visits"
                },
                {
                  img: "/asha meeting.jpeg",
                  caption: "meetings with community health workers"
                },
                {
                  img: "/community engagement.jpg",
                  caption: "Meeting with community people"
                },
                {
                  img: "/meetingwithadmin.jpeg",
                  caption: "Meeting with District Administration"
                }
              ].map((slide, i) => (
                <div key={`dup-${i}`} className="relative w-[85vw] md:w-[60vw] lg:w-[45vw] h-[50vh] md:h-[60vh] lg:h-[70vh] mx-4 md:mx-6 shrink-0 overflow-hidden rounded-[32px] md:rounded-[40px] cursor-grab active:cursor-grabbing">
                  <img 
                    src={slide.img} 
                    alt={slide.caption} 
                    className="w-full h-full object-cover transition-transform duration-[10s] group-hover:scale-110 ease-out grayscale hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 flex items-end p-8 md:p-12">
                    <p className="text-xl md:text-3xl text-brand-white font-light tracking-tight">{slide.caption}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* 8. SENIOR LEADERSHIP / BOARD */}
      <section className="py-20 md:py-28 px-6 bg-brand-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-brand-black">Senior Leadership</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              {
                name: "Dr. Vishwajeet Kumar",
                role: "Founder & Chairman",
                image: "/chief.jpg.jpg",
                desc: "Physician and epidemiologist guiding CEL's scientific vision and systems transformation approach."
              },
              {
                name: "Ms. Aarti Kumar",
                role: "CEO",
                image: "/aarti.jpg.jpg",
                desc: "Engineer and bioinformaticist leading operational excellence and organizational scale."
              },
              {
                name: "Dr. Pramod",
                role: "Director – Scale Up",
                image: "/drpamod.png",
                desc: "Executing the statewide implementation roadmap and ensuring integration with government health systems."
              }
            ].map((leader, i) => (
              <motion.div key={i} variants={fadeInUp} className="group cursor-pointer">
                <div className="aspect-[3/4] overflow-hidden rounded-2xl mb-6 relative">
                  <img 
                    src={leader.image} 
                    alt={leader.name} 
                    className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-brand-black/20 group-hover:bg-transparent transition-colors duration-700" />
                  <div className="absolute top-4 right-4 w-10 h-10 bg-brand-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    <ArrowRight className="w-5 h-5 text-brand-black -rotate-45" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-brand-black mb-1">{leader.name}</h3>
                <p className="text-brand-pink font-bold uppercase tracking-widest text-xs mb-4">{leader.role}</p>
                <p className="text-brand-black/60 font-light leading-relaxed">{leader.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. OUR PARTNERS */}
      <section className="py-20 md:py-28 bg-brand-gray border-t border-brand-black/5 overflow-hidden">
        <div className="max-w-[1400px] mx-auto flex flex-col items-center justify-center mb-16 px-6 text-center">
          <h4 className="text-brand-teal font-bold uppercase tracking-[0.2em] text-xs mb-4 inline-flex items-center gap-3">
             <span className="w-8 h-px bg-brand-teal" />
             Our Partners & Supporters
             <span className="w-8 h-px bg-brand-teal" />
          </h4>
          <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-brand-black to-brand-black/70 uppercase tracking-tight">
            Authentic Collaboration
          </h2>
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

    </div>
  );
}
