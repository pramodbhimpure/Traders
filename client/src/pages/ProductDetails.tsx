import { useParams } from "wouter";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { QuantitySelector } from "@/components/home/QuantitySelector";
import { ArrowLeft, Sprout, Hammer } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";

// Import images
import jaggeryImg from "../assets/huge-jaggery-block.png";
import jaggeryProcess1 from "@assets/stock_images/jaggery_cubes_blocks_728021ad.jpg";
import jaggeryProcess2 from "@assets/stock_images/jaggery_cubes_blocks_b818ebbd.jpg";
import jaggeryPowder from "@assets/image_1766771205785.png";
import peanutImg from "../assets/floating-peanut-group.png";
import peanutTruck from "@assets/generated_images/peanut_truck_gujarat_transport_highway.png";
import jowarImg from "@assets/stock_images/sorghum_grain_jowar__f0ba4840.jpg";

interface QuantityOption {
  id: string;
  label: string;
  weight: string;
  price: number;
  image?: string;
}

interface ProductInfo {
  name: string;
  tagline: string;
  description: string;
  mainImage: string;
  process: Array<{
    title: string;
    text: string;
    image: string;
  }>;
  quantityOptions: QuantityOption[];
}

const productData: Record<string, ProductInfo> = {
  jaggery: {
    name: "Premium Jaggery",
    tagline: "The Golden Sweetness of Health",
    description: "Our signature jaggery is made from locally sourced, organic sugarcane. Processed in traditional iron vessels without any harsh chemicals, it retains all the natural minerals and wholesome goodness. Perfect for tea, sweets, and daily consumption.",
    mainImage: jaggeryImg,
    quantityOptions: [
      { id: "half-kg", label: "½ kg", weight: "Small Block", price: 35 },
      { id: "one-kg", label: "1 kg", weight: "Standard", price: 60 },
      { id: "five-kg", label: "5 kg", weight: "Big Cube", price: 280 },
      { id: "ten-kg", label: "10 kg", weight: "Biggest Cube", price: 550 },
      { id: "powder-1kg", label: "1 kg Powder", weight: "Granulated", price: 70 },
      { id: "powder-5kg", label: "5 kg Powder", weight: "Bulk Powder", price: 320 }
    ],
    process: [
      {
        title: "Harvesting",
        text: "Fresh sugarcane is harvested from our local fields at peak maturity.",
        image: jaggeryProcess1
      },
      {
        title: "Boiling",
        text: "Juice is extracted and boiled in large traditional iron pans (Kadhais) to remove impurities naturally.",
        image: jaggeryProcess2
      },
      {
        title: "Molding",
        text: "The thickened syrup is poured into molds to cool and set into pure, golden blocks.",
        image: jaggeryPowder
      }
    ]
  },
  peanut: {
    name: "Organic Peanuts",
    tagline: "Crunchy, Nutty, Pure from Gujarat",
    description: "Our peanuts are sourced directly from the finest farms in Gujarat. Hand-picked, sun-dried, and processed to preserve their natural crunch and nutritional value. Free from pesticides and additives.",
    mainImage: peanutImg,
    quantityOptions: [
      { id: "peanut-25kg", label: "25 kg", weight: "Sack", price: 3500 },
      { id: "peanut-50kg", label: "50 kg", weight: "Large Sack", price: 6500 },
      { id: "peanut-1ton", label: "1 Ton", weight: "Industrial", price: 130000 },
      { id: "peanut-2ton", label: "2 Ton", weight: "Commercial", price: 250000 },
    ],
    process: [
      {
        title: "Selection",
        text: "We select only the best seeds from Gujarat's premier farming regions for premium quality.",
        image: peanutImg
      },
      {
        title: "Transport",
        text: "Fresh peanuts are transported from farms to our facility in temperature-controlled trucks.",
        image: peanutTruck
      },
      {
        title: "Processing",
        text: "Cleaned, graded, and packaged with utmost care to maintain freshness.",
        image: peanutImg
      }
    ]
  },
  jowar: {
    name: "Fresh Jowar (Sorghum)",
    tagline: "Ancient Grain for Modern Health",
    description: "Jowar (Sorghum) is a gluten-free powerhouse. Our Jowar is sourced from traditional dryland farms, ensuring it's hardy and full of fiber. Great for Bhakri, porridge, and healthy rotis.",
    mainImage: jowarImg,
    quantityOptions: [
      { id: "jowar-25kg", label: "25 kg", weight: "Sack", price: 2000 },
      { id: "jowar-50kg", label: "50 kg", weight: "Large Sack", price: 3800 },
      { id: "jowar-1ton", label: "1 Ton", weight: "Industrial", price: 75000 },
      { id: "jowar-2ton", label: "2 Ton", weight: "Commercial", price: 145000 },
    ],
    process: [
      {
        title: "Natural Farming",
        text: "Grown using rain-fed agriculture techniques, preserving soil health and natural nutrients.",
        image: jowarImg
      },
      {
        title: "Harvesting",
        text: "Harvested at peak maturity to ensure maximum nutritional content and grain quality.",
        image: jowarImg
      },
      {
        title: "Cleaning",
        text: "Triple-cleaned and graded to ensure you get only the best grains without impurities.",
        image: jowarImg
      }
    ]
  }
};

export default function ProductDetails() {
  const { id } = useParams();
  const product = productData[id as keyof typeof productData];
  const [cart, setCart] = useState<Map<string, number>>(new Map());

  if (!product) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center text-center p-4">
        <div>
          <h2 className="text-2xl font-bold mb-4 font-serif">Product Not Found</h2>
          <Link href="/">
            <span className="text-primary hover:text-white transition-colors cursor-pointer border-b border-primary pb-1">Return Home</span>
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = (optionId: string, quantity: number) => {
    const newCart = new Map(cart);
    newCart.set(optionId, (newCart.get(optionId) || 0) + quantity);
    setCart(newCart);
    alert(`Added to cart!`);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      <main className="container mx-auto px-4 pb-32">
        {/* Breadcrumb / Back */}
        <div className="py-8">
          <Link href="/">
            <span className="inline-flex items-center gap-3 text-white/50 hover:text-white transition-colors group cursor-pointer tracking-wide text-sm font-medium uppercase">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-2 transition-transform duration-300" />
              Back to Offerings
            </span>
          </Link>
        </div>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative rounded-[3rem] overflow-hidden shadow-[0_0_80px_rgba(255,255,255,0.03)] aspect-square lg:aspect-[4/5] bg-zinc-900 border border-white/5"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent z-10 mix-blend-overlay" />
            <img 
              src={product.mainImage} 
              alt={product.name} 
              className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-1000"
            />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-10 lg:pl-8"
          >
            <div>
              <h4 className="text-primary font-semibold tracking-[0.2em] uppercase mb-4 text-sm">{product.tagline}</h4>
              <h1 className="font-serif text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70">
                {product.name}
              </h1>
              <p className="text-xl text-white/60 leading-relaxed font-light">
                {product.description}
              </p>
            </div>

            {/* Quantity Selector Component */}
            <div className="pt-6 border-t border-white/10">
              <QuantitySelector 
                options={product.quantityOptions}
                onAddToCart={handleAddToCart}
              />
            </div>
          </motion.div>
        </div>

        {/* Making Process Section */}
        <section className="py-16">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-20"
          >
            <h2 className="font-serif text-5xl md:text-6xl font-bold mb-6 tracking-tight">The Process.</h2>
            <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {product.process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="group"
              >
                <div className="relative rounded-[2rem] overflow-hidden aspect-[4/5] mb-8 bg-zinc-900 border border-white/5 shadow-2xl">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  <img 
                    src={step.image} 
                    alt={step.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute top-6 left-6 bg-black/60 backdrop-blur-md px-5 py-2 rounded-full text-xs font-bold tracking-widest text-white border border-white/10 z-20">
                    STEP 0{index + 1}
                  </div>
                </div>
                <div className="text-center px-4">
                  <h3 className="font-serif text-3xl font-bold mb-4 text-white">{step.title}</h3>
                  <p className="text-white/50 leading-relaxed font-light text-lg">
                    {step.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
