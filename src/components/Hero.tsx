import { ArrowRight, ShieldCheck, Truck, BarChart3 } from "lucide-react";
import { motion } from "motion/react";
import { CONFIG_EMPRESA } from "../config";

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#1D3A78]">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#9BC23B 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#9BC23B]/20 border border-[#9BC23B]/30 text-[#9BC23B] text-sm font-bold mb-6 tracking-wide uppercase">
              Soluções em Economia Circular
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              Transformando Resíduos Industriais em <span className="text-[#9BC23B]">Valor Econômico</span> e Sustentável.
            </h1>
            <p className="text-lg text-slate-300 mb-10 max-w-xl leading-relaxed">
              Gestão estratégica de recicláveis, compra e venda de sucatas e descomissionamento industrial com total segurança jurídica e eficiência logística.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#servicos"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#E7743B] text-white font-bold rounded-md hover:bg-[#142956] transition-all shadow-xl group"
              >
                Nossos Serviços
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </a>
              <a
                href="#contato"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white/30 text-white font-bold rounded-md hover:bg-white/10 transition-all"
              >
                Solicitar Orçamento
              </a>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-6 border-t border-white/10 pt-8">
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white">100%</span>
                <span className="text-sm text-slate-400">Segurança Jurídica</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white">B2B</span>
                <span className="text-sm text-slate-400">Foco Industrial</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white">Agilidade</span>
                <span className="text-sm text-slate-400">Logística Própria</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-slate-800">
              <img 
                src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=2070&auto=format&fit=crop" 
                alt="Industrial Recycling Process" 
                className="w-full h-auto opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#142956] via-transparent to-transparent opacity-60"></div>
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-2xl border border-slate-100 max-w-xs animate-bounce-slow">
              <div className="flex items-center gap-4 mb-3">
                <div className="p-2 bg-[#9BC23B]/10 rounded-lg text-[#9BC23B]">
                  <BarChart3 size={24} />
                </div>
                <div className="font-bold text-slate-800">Valorização de Ativos</div>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Maximizamos o retorno financeiro através da classificação técnica de sucatas e resíduos metálicos.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
