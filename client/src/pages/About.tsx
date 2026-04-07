import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Phone, Mail } from "lucide-react";
import ownerImg from "@assets/generated_images/indian_businessman_owner_portrait_white_attire.png";
import marketImg from "@assets/generated_images/apmc_market_solapur_jaggery_traders.png";

export default function About() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      <main className="container mx-auto px-4 py-24">
        {/* Hero Section */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-32"
        >
          <h1 className="font-serif text-6xl md:text-8xl font-bold mb-6 text-center tracking-tight">
            About <br className="md:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-yellow-200 to-primary">BHIMPURE TRADERS</span>
          </h1>
          <p className="text-center text-muted-foreground text-xl md:text-2xl max-w-3xl mx-auto font-light">
            Since 2007, we've been crafting pure, authentic jaggery and organic products with family pride and customer trust.
          </p>
        </motion.section>

        {/* Owner Section */}
        <section className="mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Owner Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center"
            >
              <div className="relative w-full max-w-md rounded-[2.5rem] overflow-hidden shadow-[0_0_50px_rgba(255,255,255,0.05)] border border-white/10">
                <img 
                  src={ownerImg}
                  alt="Prashant Nilkanthappa Bhimpure"
                  className="w-full h-auto object-cover opacity-90 hover:opacity-100 transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              </div>

              {/* Owner Info Card */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="mt-8 w-full max-w-md bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10 text-center"
              >
                <h2 className="font-serif text-3xl font-bold text-white mb-1">
                  Prashant Nilkanthappa
                </h2>
                <p className="text-primary font-medium tracking-widest text-sm uppercase mb-6">
                  Founder & Owner
                </p>
                <p className="text-white/80 font-light mb-6 text-lg">BHIMPURE TRADERS</p>
                
                {/* Contact Details */}
                <div className="space-y-4 border-t border-white/10 pt-6">
                  <div className="flex items-center justify-center gap-3 text-white">
                    <Phone className="w-5 h-5 text-primary" />
                    <a href="tel:+919420356136" className="font-medium hover:text-primary transition-colors text-lg tracking-wide">
                      +91 94203 56136
                    </a>
                  </div>
                  <div className="text-sm text-white/50 font-light tracking-wide">
                    APMC Market Yard, Solapur, Maharashtra
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Shop Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-10"
            >
              <div>
                <motion.h3 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="font-serif text-5xl font-bold mb-8 text-white tracking-tight"
                >
                  Our Legacy.
                </motion.h3>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                  className="space-y-8 text-xl text-white/70 font-light leading-relaxed"
                >
                  <p>
                    <strong className="text-white font-medium">Since 2007</strong>, BHIMPURE TRADERS has been a cornerstone of the APMC Market Yard in Solapur, Maharashtra. What started as a family endeavor has blossomed into a trusted name in authentic, chemical-free organic products.
                  </p>
                  
                  <p>
                    <strong className="text-white font-medium">Built on Trust.</strong> Our customers are not just clients; they are family. With decades of customer relationships, we've earned their unwavering trust through consistency, quality, and genuine care for their wellbeing.
                  </p>
                  
                  <p>
                    <strong className="text-white font-medium">Pure & Real.</strong> In a market full of shortcuts, we refuse to compromise. Every block of jaggery, every handful of peanuts, and every grain of jowar is a testament to our commitment to purity and authenticity.
                  </p>
                </motion.div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-10 border-t border-white/10">
                <motion.div 
                  whileHover={{ y: -5 }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">17+</div>
                  <p className="text-sm text-white/50 tracking-wide uppercase">Years of Excellence</p>
                </motion.div>
                <motion.div 
                  whileHover={{ y: -5 }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">1k+</div>
                  <p className="text-sm text-white/50 tracking-wide uppercase">Happy Customers</p>
                </motion.div>
                <motion.div 
                  whileHover={{ y: -5 }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">100%</div>
                  <p className="text-sm text-white/50 tracking-wide uppercase">Organic & Pure</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Market Image */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20"
        >
          <div className="relative rounded-[3rem] overflow-hidden shadow-2xl h-[500px] md:h-[600px] border border-white/10">
            <img 
              src={marketImg}
              alt="APMC Market Solapur"
              className="w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent flex items-end p-10 md:p-20">
              <div className="text-white max-w-3xl">
                <h3 className="font-serif text-4xl md:text-6xl font-bold mb-6 tracking-tight">Heart of Commerce.</h3>
                <p className="text-xl md:text-2xl text-white/80 font-light leading-relaxed">
                  Located in the heart of APMC Market Yard, Solapur - the gateway to authentic agricultural commerce in Maharashtra.
                </p>
              </div>
            </div>
          </div>
        </motion.section>
      </main>

      <Footer />
    </div>
  );
}
