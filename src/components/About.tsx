import { motion } from "motion/react";
import { ShieldCheck, TrendingUp, Globe, CheckCircle2 } from "lucide-react";
import { CONFIG_EMPRESA } from "../config";

export default function About() {
  const differentials = [
    "Segurança jurídica e ambiental com emissão de CDF (Certificado de Destinação Final).",
    "Avaliação comercial transparente baseada em índices de mercado.",
    "Unidades operacionais em Petrolina-PE, Simões Filho-BA e Jaboatão-PE.",
    "Logística ágil para indústrias em toda a região Nordeste.",
    "Especialização em resíduos de energia eólica e solar.",
    "Processos certificados de descaracterização de equipamentos."
  ];

  return (
    <section id="sobre" className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-bold text-[#9BC23B] uppercase tracking-widest mb-3">Sobre a Recicle & Cia</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-[#1D3A78] mb-6 leading-tight">
              Liderança em <br /><span className="text-[#9BC23B]">Economia Circular no Nordeste.</span>
            </h3>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Com sede em Petrolina - PE e unidades estratégicas na Bahia e Pernambuco, a {CONFIG_EMPRESA.nome} atua como parceira estratégica de grandes indústrias. Somos especialistas em transformar passivos ambientais em ativos econômicos, garantindo conformidade total com a PNRS (Política Nacional de Resíduos Sólidos).
            </p>

            
            <div className="space-y-4 mb-10">
              {differentials.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0 text-[#9BC23B]">
                    <CheckCircle2 size={20} />
                  </div>
                  <span className="text-slate-700 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-6 p-6 bg-white rounded-2xl shadow-lg border border-slate-100">
               <div className="flex -space-x-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-slate-200 overflow-hidden">
                       <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="Partner" />
                    </div>
                  ))}
               </div>
               <div>
                  <div className="text-[#1D3A78] font-bold text-lg">Parceiro Estratégico</div>
                  <div className="text-slate-500 text-sm">Empresas que confiam em nossa logística</div>
               </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <div className="bg-[#9BC23B] p-8 rounded-3xl text-white shadow-xl">
                  <ShieldCheck size={40} className="mb-4 opacity-80" />
                  <div className="text-3xl font-bold mb-1">Compliance</div>
                  <div className="text-white/70 text-sm">Conformidade total com normas ambientais.</div>
                </div>
                <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100">
                  <TrendingUp size={40} className="mb-4 text-[#9BC23B]" />
                  <div className="text-3xl font-bold text-[#1D3A78] mb-1">Valor</div>
                  <div className="text-slate-500 text-sm">Valorização máxima do seu resíduo.</div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-[#1D3A78] p-8 rounded-3xl text-white shadow-xl">
                  <Globe size={40} className="mb-4 text-[#9BC23B]" />
                  <div className="text-3xl font-bold mb-1">Local</div>
                  <div className="text-white/70 text-sm">Forte atuação no Vale do São Francisco.</div>
                </div>
                <div className="relative rounded-3xl overflow-hidden h-64 shadow-xl border border-slate-100 bg-slate-200">
                   <img 
                    src="https://images.unsplash.com/photo-1591193512858-12bb5a0ff7b2?q=80&w=2071&auto=format&fit=crop" 
                    alt="Recycling Plant" 
                    className="w-full h-full object-cover opacity-90"
                   />
                </div>
              </div>
            </div>
            
            {/* Decorative element */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-radial from-[#9BC23B]/5 to-transparent"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
