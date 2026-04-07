import { motion } from "framer-motion";
import { Phone, Mail, CreditCard, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 mt-20 text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-6">
            <h3 className="font-serif text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">Bhimpure Traders</h3>
            <p className="text-white/60 font-light leading-relaxed">
              Bringing you the finest organic jaggery, peanuts, and jowar straight from our farms. Traditional quality you can trust.
            </p>
          </div>
          
          <div className="space-y-6">
            <h4 className="font-sans font-medium text-lg tracking-wide text-white/90">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-4 text-white/60 hover:text-white transition-colors">
                <Phone className="w-5 h-5 text-primary" />
                <a href="tel:+919970465425" className="font-light tracking-wider">+91 99704 65425</a>
              </li>
              <li className="flex items-center gap-4 text-white/60 hover:text-white transition-colors">
                <Mail className="w-5 h-5 text-primary" />
                <a href="mailto:prashantbhimpure73@gmail.com" className="font-light tracking-wide">prashantbhimpure73@gmail.com</a>
              </li>
              <li className="flex items-center gap-4 text-white/60">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="font-light tracking-wide">Maharashtra, India</span>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-sans font-medium text-lg tracking-wide text-white/90">Quick Pay</h4>
            <div className="p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10">
              <div className="flex items-center gap-3 text-white/80 font-medium mb-4">
                <CreditCard className="w-5 h-5 text-primary" />
                <span>PhonePe Accepted</span>
              </div>
              <p className="text-xl font-mono text-primary font-bold tracking-widest">
                +91 99704 65424
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="font-sans font-medium text-lg tracking-wide text-white/90">Hours</h4>
            <p className="text-white/60 font-light leading-relaxed">
              Monday - Saturday<br />
              <span className="text-white tracking-wide">9:00 AM - 7:00 PM</span>
            </p>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/40 font-light tracking-wide">
          <div>&copy; {new Date().getFullYear()} Bhimpure Traders. All rights reserved.</div>
          <div className="flex gap-6">
            <span className="hover:text-white transition-colors cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white transition-colors cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
