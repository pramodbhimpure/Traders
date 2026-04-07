import { Link } from "wouter";
import { motion } from "framer-motion";
import btLogo from "@assets/generated_images/bt_logo_made_of_jaggery_cubes.png";

export function Navbar() {
  return (
    <nav className="w-full py-4 md:py-6 px-4 md:px-8 flex justify-between items-center z-50 relative bg-black/60 backdrop-blur-xl border-b border-white/10 sticky top-0 transition-all duration-300">
      {/* Logo Animation */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="flex-shrink-0"
      >
        <Link href="/">
          <motion.img 
            src={btLogo}
            alt="BT Logo"
            className="h-12 md:h-14 cursor-pointer drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
          />
        </Link>
      </motion.div>

      {/* Brand Name - Split BHIMPURE / TRADERS */}
      <div className="text-center flex-1 mx-4">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center items-baseline gap-2 md:gap-3"
        >
          {/* BHIMPURE */}
          <div className="flex items-center gap-0.5">
            {"BHIMPURE".split("").map((letter, i) => (
              <motion.span
                key={`bhimpure-${i}`}
                initial={{ opacity: 0, y: 20, rotateX: -90 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{
                  delay: i * 0.08,
                  duration: 0.6,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{
                  scale: 1.1,
                  y: -5,
                  transition: { duration: 0.2 }
                }}
                className="font-black text-xl md:text-2xl lg:text-3xl font-[Cinzel] text-white drop-shadow-lg brand-shimmer tracking-tight"
                style={{ 
                  textShadow: "0 0 20px rgba(255,255,255,0.3)"
                }}
              >
                {letter}
              </motion.span>
            ))}
          </div>

          {/* TRADERS - Different Font */}
          <motion.span
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="font-medium text-xs md:text-sm lg:text-base text-white/60 tracking-[0.3em] uppercase"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Traders
          </motion.span>
        </motion.div>
        
        <motion.div 
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent mt-2 mx-auto"
          style={{ maxWidth: "160px" }}
        />
      </div>

      {/* Navigation Links */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="flex gap-4 md:gap-8 flex-shrink-0"
      >
        <Link href="/about">
          <motion.span 
            whileHover={{ scale: 1.05 }}
            className="text-sm md:text-sm font-medium text-white/70 hover:text-white transition-colors cursor-pointer block tracking-wide"
          >
            About
          </motion.span>
        </Link>
        <Link href="/">
          <motion.span 
            whileHover={{ scale: 1.05 }}
            className="text-sm md:text-sm font-medium text-white/70 hover:text-white transition-colors cursor-pointer block tracking-wide"
          >
            Shop
          </motion.span>
        </Link>
      </motion.div>
    </nav>
  );
}
