import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ProductGrid } from "@/components/home/ProductGrid";
import { motion, useScroll, useTransform } from "framer-motion";
import jaggeryHero from "@assets/image_1766771205785.png";
import floatingJaggery from "../assets/floating-jaggery.png";
import floatingPeanut from "../assets/floating-peanut.png";
import floatingJowar from "../assets/floating-jowar.png";
import hugeJaggeryBlock from "../assets/huge-jaggery-block.png";
import jaggeryPowderSplash from "../assets/jaggery-powder-splash.png";
import { useRef } from "react";

// Floating animation variants for the background items
const floatingVariants = {
  initial: { y: 0, rotate: 0 },
  animate: (custom: { yOffset: number, duration: number, rotateOffset: number }) => ({
    y: [0, custom.yOffset, 0],
    rotate: [0, custom.rotateOffset, 0],
    transition: {
      duration: custom.duration,
      repeat: Infinity,
      ease: "linear" as const
    }
  })
};

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -400]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -300]);
  
  // Minimal parallax just for floating elements
  
  return (
    <div className="min-h-screen bg-black text-foreground overflow-x-hidden" ref={containerRef}>
      <Navbar />
      
      <main>
        {/* Advanced Apple-style Hero Section with Parallax and Floating Elements */}
        <section className="relative h-[110vh] flex flex-col justify-start pt-24 md:pt-32 overflow-hidden">
          {/* Subtle gradient background for depth */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/20 via-black to-black -z-20" />
          
          {/* Dynamic background splash */}
          <motion.div 
            className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[120%] max-w-[1500px] opacity-40 mix-blend-screen pointer-events-none -z-10"
          >
            <img src={jaggeryPowderSplash} alt="" className="w-full h-auto" />
          </motion.div>

          {/* Floating Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            <motion.img 
              src={floatingJaggery} 
              alt=""
              className="absolute top-[15%] left-[10%] w-24 md:w-32 opacity-80 drop-shadow-[0_0_15px_rgba(255,193,7,0.3)] mix-blend-lighten"
              custom={{ yOffset: -40, duration: 6, rotateOffset: 25 }}
              variants={floatingVariants}
              initial="initial"
              animate="animate"
              style={{ y: y1 }}
            />
            <motion.img 
              src={floatingPeanut} 
              alt=""
              className="absolute top-[25%] right-[15%] w-20 md:w-28 opacity-70 blur-[1px] mix-blend-lighten"
              custom={{ yOffset: 50, duration: 8, rotateOffset: -30 }}
              variants={floatingVariants}
              initial="initial"
              animate="animate"
              style={{ y: y2 }}
            />
            <motion.img 
              src={floatingJowar} 
              alt=""
              className="absolute bottom-[40%] left-[20%] w-32 md:w-48 opacity-50 blur-[3px] mix-blend-lighten"
              custom={{ yOffset: -60, duration: 10, rotateOffset: 15 }}
              variants={floatingVariants}
              initial="initial"
              animate="animate"
              style={{ y: y3 }}
            />
            <motion.img 
              src={floatingJaggery} 
              alt=""
              className="absolute top-[45%] right-[5%] w-40 md:w-56 opacity-40 blur-[4px] mix-blend-lighten"
              custom={{ yOffset: 35, duration: 7, rotateOffset: 45 }}
              variants={floatingVariants}
              initial="initial"
              animate="animate"
              style={{ y: y1 }}
            />
          </div>

          <div className="container mx-auto px-4 relative z-30 flex flex-col items-center text-center pt-6 md:pt-10">
            
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-6 w-full flex flex-col items-center relative z-50"
            >
              <h1 className="font-serif text-[4rem] md:text-[8rem] lg:text-[11rem] font-bold leading-[0.85] tracking-tighter text-white drop-shadow-2xl flex flex-col items-center">
                <span>The Pure</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-yellow-200 to-primary drop-shadow-[0_0_40px_rgba(255,193,7,0.4)] relative z-30">
                  Gold.
                </span>
              </h1>
              
              <p className="text-lg md:text-2xl text-white/90 max-w-2xl font-light tracking-wide leading-relaxed mt-6 drop-shadow-md">
                Uncompromising quality. Chemical-free authentic jaggery crafted for the modern health-conscious.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6 md:pt-10">
                <motion.button 
                  whileHover={{ scale: 1.05, boxShadow: "0 0 50px rgba(255,193,7,0.5)" }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-primary text-black py-4 md:py-5 px-10 md:px-14 rounded-full font-bold text-lg md:text-xl transition-all shadow-[0_0_30px_rgba(255,193,7,0.3)]"
                >
                  Buy Now
                </motion.button>
              </div>
            </motion.div>

            {/* Giant Hero Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 100 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-[50vh] md:top-[60vh] w-full max-w-[1400px] z-10 pointer-events-none"
            >
              <img 
                src={hugeJaggeryBlock} 
                alt="Massive Jaggery Block" 
                className="w-full h-auto object-contain drop-shadow-[0_-30px_80px_rgba(255,193,7,0.2)] opacity-90 mix-blend-lighten"
              />
            </motion.div>
          </div>
        </section>

        {/* Cinematic Transition Section */}
        <section className="relative min-h-screen bg-[#050505] flex items-center py-20 md:py-32 z-40">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center max-w-7xl mx-auto"
            >
              <div className="space-y-6 md:space-y-8 order-2 lg:order-1 relative z-20">
                <h2 className="font-serif text-4xl md:text-7xl font-bold leading-tight text-white drop-shadow-lg">
                  Crafted <br/>
                  <span className="text-white/40">by Tradition.</span>
                </h2>
                <p className="text-lg md:text-2xl text-white/80 font-light leading-relaxed drop-shadow-md">
                  Every block of our jaggery is born from a legacy of purity. We take the finest local sugarcane and process it in traditional iron vessels—zero chemicals, zero compromises.
                </p>
                <div className="pt-4 md:pt-8">
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-white border-b-2 border-primary pb-2 text-lg md:text-xl font-medium flex items-center gap-3 group"
                  >
                    Explore our process
                    <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
                  </motion.button>
                </div>
              </div>
              
              <div className="relative rounded-3xl md:rounded-[3rem] overflow-hidden aspect-square md:aspect-[4/3] shadow-[0_0_60px_rgba(255,193,7,0.15)] border border-white/10 order-1 lg:order-2 bg-[#111] z-10">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent z-10 mix-blend-overlay pointer-events-none" />
                <img 
                  src={jaggeryHero} 
                  alt="Jaggery Process" 
                  className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105 opacity-100"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Product Grid Section */}
        <div id="products" className="bg-[#0a0a0a] relative z-40 py-20 md:py-32 border-t border-white/5 shadow-[0_-30px_60px_rgba(0,0,0,0.8)]">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="container mx-auto px-4 mb-16 md:mb-24 text-center"
          >
            <h3 className="font-serif text-5xl md:text-8xl font-bold tracking-tight text-white drop-shadow-lg">Our Offerings.</h3>
            <p className="text-white/50 mt-4 md:mt-6 text-xl md:text-2xl font-light tracking-wide max-w-2xl mx-auto">
              The purest ingredients sourced directly from farms, packed with care for your health.
            </p>
          </motion.div>
          <ProductGrid />
        </div>
      </main>

      <Footer />
    </div>
  );
}
