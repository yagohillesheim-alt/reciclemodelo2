import { Recycle, Factory, Truck, Search, ShieldCheck, Briefcase } from "lucide-react";
import { motion } from "motion/react";
import { CONFIG_EMPRESA } from "../config";

const services = [
  {
    id: "gestao-residuos",
    title: "Gestão de Resíduos",
    description: "Gerenciamento completo: desde o diagnóstico e planejamento até a coleta, tratamento e destinação final de resíduos industriais.",
    icon: <Recycle className="text-white" size={32} />,
    wppMsg: CONFIG_EMPRESA.wppMsgs.vender,
  },
  {
    id: "compra-sucatas",
    title: "Compra de Sucatas",
    description: "Aquisição de metais ferrosos (aço, ferro) e não ferrosos (alumínio, cobre, latão) com avaliação técnica e valorização real.",
    icon: <ShieldCheck className="text-white" size={32} />,
    wppMsg: CONFIG_EMPRESA.wppMsgs.vender,
  },
  {
    id: "descomissionamento",
    title: "Descomissionamento",
    description: "Especialistas em desmonte industrial e descaracterização de equipamentos, garantindo limpeza técnica de áreas desativadas.",
    icon: <Factory className="text-white" size={32} />,
    wppMsg: CONFIG_EMPRESA.wppMsgs.descomissionamento,
  },
  {
    id: "logistica",
    title: "Logística Nordeste",
    description: "Frota própria e coleta programada com unidades estratégicas em Petrolina-PE, Simões Filho-BA e Jaboatão dos Guararapes-PE.",
    icon: <Truck className="text-white" size={32} />,
    wppMsg: CONFIG_EMPRESA.wppMsgs.comprar,
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-[#9BC23B] uppercase tracking-widest mb-3">O que fazemos</h2>
          <p className="text-3xl md:text-4xl font-extrabold text-[#1D3A78] mb-4">Soluções Corporativas Integradas</p>
          <div className="w-20 h-1.5 bg-[#9BC23B] mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-2xl hover:border-transparent transition-all duration-300"
            >
              <div className="w-16 h-16 bg-[#1D3A78] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#9BC23B] transition-colors shadow-lg">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-[#1D3A78] mb-4 group-hover:text-[#9BC23B] transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-600 mb-6 leading-relaxed text-sm">
                {service.description}
              </p>
              <a
                href={`https://wa.me/${CONFIG_EMPRESA.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(service.wppMsg)}`}
                className="inline-flex items-center text-[#9BC23B] font-bold text-sm hover:gap-2 transition-all"
              >
                Saiba mais
                <ArrowRight className="ml-1" size={16} />
              </a>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 p-8 md:p-12 bg-[#1D3A78] rounded-3xl relative overflow-hidden">
          <div className="absolute right-0 top-0 w-1/3 h-full opacity-10 pointer-events-none">
             <Search size={300} className="text-white transform translate-x-1/2 -translate-y-1/4" />
          </div>
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Trabalhamos com Metais e Polímeros</h3>
              <p className="text-slate-300">
                Especialistas em Aço, Ferro, Alumínio, Cobre, Latão e Resíduos de Energia Renovável (Eólica e Solar).
              </p>
            </div>
            <a
              href={`https://wa.me/${CONFIG_EMPRESA.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(CONFIG_EMPRESA.wppMsgs.comprar)}`}
              className="whitespace-nowrap px-8 py-4 bg-white text-[#1D3A78] font-bold rounded-lg hover:bg-slate-100 transition-colors shadow-lg"
            >
              Solicitar Catálogo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}


function ArrowRight({ className, size }: { className?: string; size?: number }) {
  return (
    <svg 
      className={className} 
      width={size || 24} 
      height={size || 24} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M5 12h14m-7-7 7 7-7 7" />
    </svg>
  );
}
