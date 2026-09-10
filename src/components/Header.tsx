import { Menu, X, Phone, Mail, MapPin } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CONFIG_EMPRESA } from "../config";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Início", href: "#home" },
    { name: "Serviços", href: "#servicos" },
    { name: "Sobre", href: "#sobre" },
    { name: "Contato", href: "#contato" },
  ];

  return (
    <header className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-bold text-[#1D3A78]">
              RECICLE<span className="text-[#9BC23B]">&</span>CIA
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-slate-600 hover:text-[#9BC23B] font-medium transition-colors"
              >
                {item.name}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <a
              href={`https://wa.me/${CONFIG_EMPRESA.whatsapp.replace(/\D/g, '')}`}
              className="bg-[#E7743B] text-white px-5 py-2.5 rounded-md font-bold hover:bg-[#1D3A78] transition-all transform hover:scale-105 shadow-md flex items-center gap-2"
            >
              Falar com Consultor
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-[#1B5E20] focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate-200 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-4 text-base font-medium text-slate-700 hover:text-[#9BC23B] hover:bg-slate-50 rounded-md transition-colors"
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 px-3">
                <a
                  href={`https://wa.me/${CONFIG_EMPRESA.whatsapp.replace(/\D/g, '')}`}
                  className="w-full bg-[#E7743B] text-white text-center block px-4 py-3 rounded-md font-bold shadow-md"
                >
                  Falar com Consultor
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
