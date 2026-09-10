import { Phone, Mail, MapPin, Send, MessageSquare } from "lucide-react";
import { motion } from "motion/react";
import { CONFIG_EMPRESA } from "../config";

export default function Contact() {
  return (
    <section id="contato" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#1D3A78] rounded-[2.5rem] overflow-hidden shadow-2xl relative">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#9BC23B] opacity-10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          
          <div className="grid lg:grid-cols-2">
            <div className="p-10 md:p-16 lg:p-20 text-white">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-8">
                Pronto para <span className="text-[#9BC23B]">potencializar</span> sua gestão de resíduos?
              </h2>
              <p className="text-slate-400 mb-12 text-lg leading-relaxed">
                Entre em contato com nossa equipe comercial para avaliações técnicas, cotações de materiais ou projetos de descomissionamento.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-[#9BC23B] border border-white/10">
                    <Phone size={24} />
                  </div>
                  <div>
                    <div className="text-sm text-slate-500 font-bold uppercase tracking-wider mb-1">Telefone</div>
                    <div className="text-xl font-medium">{CONFIG_EMPRESA.telefone}</div>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-[#9BC23B] border border-white/10">
                    <Mail size={24} />
                  </div>
                  <div>
                    <div className="text-sm text-slate-500 font-bold uppercase tracking-wider mb-1">E-mail</div>
                    <div className="text-xl font-medium">{CONFIG_EMPRESA.emailComercial}</div>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-[#9BC23B] border border-white/10">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <div className="text-sm text-slate-500 font-bold uppercase tracking-wider mb-1">Endereço</div>
                    <div className="text-lg font-medium leading-tight max-w-xs">{CONFIG_EMPRESA.unidadePrincipal}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 p-10 md:p-16 flex flex-col justify-center border-l border-white/5">
              <div className="text-[#1D3A78] mb-8">
                <h3 className="text-2xl font-bold mb-2">Envie uma Mensagem</h3>
                <p className="text-slate-600">Selecione o canal de atendimento preferencial abaixo.</p>
              </div>

              <div className="grid gap-4">
                <a
                  href={`https://wa.me/${CONFIG_EMPRESA.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(CONFIG_EMPRESA.wppMsgs.vender)}`}
                  className="flex items-center justify-between p-6 bg-white rounded-2xl border border-slate-200 hover:border-[#9BC23B] hover:shadow-xl transition-all group"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-[#9BC23B]/10 rounded-lg text-[#9BC23B]">
                      <MessageSquare size={24} />
                    </div>
                    <div>
                      <div className="font-bold text-[#1D3A78]">Vender/Destinar Resíduos</div>
                      <div className="text-xs text-slate-500">Solicite uma avaliação comercial</div>
                    </div>
                  </div>
                  <Send size={18} className="text-slate-300 group-hover:text-[#9BC23B] group-hover:translate-x-1 transition-all" />
                </a>

                <a
                  href={`https://wa.me/${CONFIG_EMPRESA.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(CONFIG_EMPRESA.wppMsgs.comprar)}`}
                  className="flex items-center justify-between p-6 bg-white rounded-2xl border border-slate-200 hover:border-[#9BC23B] hover:shadow-xl transition-all group"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-[#9BC23B]/10 rounded-lg text-[#9BC23B]">
                      <Send size={24} />
                    </div>
                    <div>
                      <div className="font-bold text-[#1D3A78]">Compra de Materiais</div>
                      <div className="text-xs text-slate-500">Consulte nosso estoque e disponibilidade</div>
                    </div>
                  </div>
                  <Send size={18} className="text-slate-300 group-hover:text-[#9BC23B] group-hover:translate-x-1 transition-all" />
                </a>

                <a
                   href={`https://wa.me/${CONFIG_EMPRESA.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(CONFIG_EMPRESA.wppMsgs.descomissionamento)}`}
                  className="flex items-center justify-between p-6 bg-white rounded-2xl border border-slate-200 hover:border-[#9BC23B] hover:shadow-xl transition-all group"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-[#9BC23B]/10 rounded-lg text-[#9BC23B]">
                      <Briefcase size={24} />
                    </div>
                    <div>
                      <div className="font-bold text-[#1D3A78]">Suporte Técnico</div>
                      <div className="text-xs text-slate-500">Descomissionamento e desmonte</div>
                    </div>
                  </div>
                  <Send size={18} className="text-slate-300 group-hover:text-[#9BC23B] group-hover:translate-x-1 transition-all" />
                </a>
              </div>
              
              <div className="mt-8 text-center">
                <div className="inline-flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-widest">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                  Atendimento Comercial Ativo
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Briefcase({ className, size }: { className?: string; size?: number }) {
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
      <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  );
}
