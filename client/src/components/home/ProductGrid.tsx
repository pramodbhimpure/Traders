import { motion } from "framer-motion";
import { useLocation } from "wouter";
import jaggeryGroup from "../../assets/jaggery-group.png";
import peanutGroup from "../../assets/floating-peanut-group.png";
import jowarImg from "@assets/stock_images/sorghum_grain_jowar__f0ba4840.jpg";

const products = [
  {
    id: "jaggery",
    name: "Premium Jaggery",
    description: "Pure, chemical-free organic jaggery made with traditional methods.",
    image: jaggeryGroup,
    color: "from-amber-900/40"
  },
  {
    id: "peanut",
    name: "Organic Peanuts",
    description: "Crunchy, fresh, and hand-picked farm peanuts.",
    image: peanutGroup,
    color: "from-orange-900/40"
  },
  {
    id: "jowar",
    name: "Fresh Jowar",
    description: "High-quality sorghum rich in fiber and nutrients.",
    image: jowarImg,
    color: "from-zinc-800/60"
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const item = {
  hidden: { y: 60, opacity: 0, scale: 0.95 },
  show: { 
    y: 0, 
    opacity: 1, 
    scale: 1,
    transition: { 
      duration: 1.2,
      type: "spring",
      stiffness: 100,
      damping: 20
    } 
  }
};

export function ProductGrid() {
  const [_, setLocation] = useLocation();

  return (
    <section className="py-10 px-4 md:px-8 max-w-7xl mx-auto">
      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16"
      >
        {products.map((product) => (
          <motion.div
            key={product.id}
            variants={item as any}
            onClick={() => setLocation(`/product/${product.id}`)}
            className="group cursor-pointer flex flex-col"
          >
            <motion.div 
              whileHover={{ y: -10 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative overflow-hidden rounded-[2.5rem] aspect-[4/5] mb-8 bg-zinc-900 border border-white/5"
            >
              <div className={`absolute inset-0 bg-gradient-to-t ${product.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10`} />
              
              <motion.img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover opacity-80 mix-blend-lighten"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />
              
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                whileHover={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 flex items-center justify-center z-20"
              >
                <div className="bg-white/10 backdrop-blur-md px-8 py-4 rounded-full border border-white/20 text-white font-medium tracking-widest text-sm uppercase">
                  View Details
                </div>
              </motion.div>
            </motion.div>
            
            <div className="text-center flex-grow flex flex-col justify-end">
              <motion.h3 
                className="font-serif text-3xl md:text-4xl font-bold mb-4 text-white tracking-tight"
              >
                {product.name}
              </motion.h3>
              <p className="text-white/50 text-lg leading-relaxed max-w-xs mx-auto font-light">
                {product.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
