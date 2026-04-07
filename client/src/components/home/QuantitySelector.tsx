import { motion } from "framer-motion";
import { ShoppingCart, Plus, Minus } from "lucide-react";
import { useState } from "react";

interface QuantityOption {
  id: string;
  label: string;
  weight: string;
  price: number;
  image?: string;
}

interface QuantitySelectorProps {
  options: QuantityOption[];
  onAddToCart: (optionId: string, quantity: number) => void;
}

export function QuantitySelector({ options, onAddToCart }: QuantitySelectorProps) {
  const [selectedId, setSelectedId] = useState(options[0]?.id);
  const [quantity, setQuantity] = useState(1);

  const selected = options.find(opt => opt.id === selectedId);

  const handleAddToCart = () => {
    if (selected) {
      onAddToCart(selected.id, quantity);
      setQuantity(1);
    }
  };

  return (
    <div className="space-y-8 bg-white/5 backdrop-blur-xl p-8 rounded-[2rem] border border-white/10 shadow-[0_0_40px_rgba(255,255,255,0.02)]">
      {/* Options Grid */}
      <div>
        <h3 className="font-serif text-2xl font-bold mb-6 text-white tracking-tight">Select Quantity.</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {options.map((option) => (
            <motion.button
              key={option.id}
              onClick={() => setSelectedId(option.id)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`p-5 rounded-2xl border transition-all duration-300 font-medium text-center ${
                selectedId === option.id
                  ? "border-primary bg-primary/10 text-primary shadow-[0_0_20px_rgba(255,193,7,0.1)]"
                  : "border-white/10 bg-black/40 text-white/70 hover:border-white/30 hover:text-white"
              }`}
            >
              <div className="text-base md:text-lg mb-1">{option.label}</div>
              <div className="text-xs tracking-widest uppercase opacity-70">{option.weight}</div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Quantity Controls */}
      {selected && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6 pt-6 border-t border-white/10"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="flex items-center gap-4 bg-black/40 border border-white/10 rounded-2xl p-2 w-fit">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="p-3 hover:bg-white/10 rounded-xl transition-colors text-white"
              >
                <Minus className="w-5 h-5" />
              </button>
              <span className="font-serif font-bold text-2xl min-w-12 text-center text-white">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="p-3 hover:bg-white/10 rounded-xl transition-colors text-white"
              >
                <Plus className="w-5 h-5" />
              </button>
            </div>
            
            <div className="text-right">
              <p className="text-sm text-white/50 tracking-widest uppercase mb-1">Total</p>
              <p className="font-serif font-bold text-4xl text-primary drop-shadow-[0_0_15px_rgba(255,193,7,0.2)]">
                ₹{(selected.price * quantity).toLocaleString('en-IN')}
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleAddToCart}
              className="flex-1 bg-primary text-primary-foreground py-4 px-6 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-primary/90 transition-colors shadow-[0_0_30px_rgba(255,193,7,0.2)] text-lg"
            >
              <ShoppingCart className="w-6 h-6" />
              Add to Cart
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex-1 border border-white/20 text-white py-4 px-6 rounded-2xl font-medium hover:bg-white/5 transition-colors text-lg tracking-wide"
            >
              Bulk Order
            </motion.button>
          </div>
        </motion.div>
      )}
    </div>
  );
}
