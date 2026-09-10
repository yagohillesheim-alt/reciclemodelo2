import { Instagram, Linkedin, Facebook, ArrowUp } from "lucide-react";
import { CONFIG_EMPRESA } from "../config";
import Logo from "./Logo";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1D3A78] text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <div className="mb-6 flex justify-start">
              <Logo className="h-20 w-auto" variant="white" />
            </div>
            <p className="text-slate-400 mb-8 max-w-xs leading-relaxed">
              Líder em gestão de resíduos industriais e economia circular no Vale do São Francisco. Transformando o futuro através da reciclagem inteligente.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/reciclecia/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#9BC23B] transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#9BC23B] transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#9BC23B] transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 border-l-4 border-[#9BC23B] pl-4">Serviços</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#servicos" className="hover:text-white transition-colors">Compra de Sucatas</a></li>
              <li><a href="#servicos" className="hover:text-white transition-colors">Venda de Materiais</a></li>
              <li><a href="#servicos" className="hover:text-white transition-colors">Descomissionamento</a></li>
              <li><a href="#servicos" className="hover:text-white transition-colors">Destinação Ambiental</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 border-l-4 border-[#9BC23B] pl-4">Empresa</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#sobre" className="hover:text-white transition-colors">Sobre Nós</a></li>
              <li><a href="#home" className="hover:text-white transition-colors">Carreiras</a></li>
              <li><a href="#contato" className="hover:text-white transition-colors">Contato</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Política de Privacidade</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 border-l-4 border-[#9BC23B] pl-4">Localização</h4>
            <div className="text-slate-400 leading-relaxed">
              {CONFIG_EMPRESA.unidadePrincipal}<br />
              Petrolina - PE<br /><br />
              <div className="text-white font-bold">{CONFIG_EMPRESA.telefone}</div>
              <div className="text-xs text-slate-500 mt-2 uppercase tracking-tighter">Atendimento: Seg a Sex - 08h às 18h</div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-slate-500 text-sm">
            © {new Date().getFullYear()} {CONFIG_EMPRESA.nome}. Todos os direitos reservados.
          </div>
          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
          >
            <span className="text-xs font-bold uppercase tracking-widest">Voltar ao topo</span>
            <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#9BC23B] transition-colors">
              <ArrowUp size={16} />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}
